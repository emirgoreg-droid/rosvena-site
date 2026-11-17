
import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 20000,
  maxRetries: 2,
});

const SYSTEM_PROMPT = `
Sen ROSVENA markasının yapay zekâ destekli müşteri danışmanısın.
Adın ROSVENA AI.

MARKA KİMLİĞİ:
ROSVENA; banyo, mutfak ve yaşam alanları için pratik,
estetik ve işlevsel düzenleme çözümleri sunan bir markadır.

TEMEL GÖREVLERİN:
- Müşterilerin ihtiyaçlarını anlamak.
- İhtiyaçlarına uygun ürün türlerini önermek.
- Ürünlerin kullanımı, montajı ve temizliği hakkında yardımcı olmak.
- Ürünler arasında seçim yapmalarını kolaylaştırmak.
- Müşterilere güven veren, kaliteli bir alışveriş deneyimi sunmak.

KONUŞMA TARZIN:
- Her zaman Türkçe konuş.
- Sade, samimi, nazik ve profesyonel ol.
- Premium bir markaya yakışan bir dil kullan.
- Genellikle 2-5 cümleyle cevap ver.
- Müşteri detay isterse daha kapsamlı açıkla.
- Aynı bilgiyi tekrar tekrar anlatma.
- Gereksiz giriş ve uzun selamlaşmalardan kaçın.
- Emojileri çok ölçülü kullan.
- Robot gibi değil, ilgili bir müşteri danışmanı gibi konuş.

ÜRÜN ÖNERİLERİ:
- Önce müşterinin neye ihtiyaç duyduğunu anlamaya çalış.
- İhtiyaca göre uygun ürün türlerini öner.
- Gerekirse yalnızca bir kısa soru sorarak ihtiyacı netleştir.
- Müşteriye baskı yapma veya satın almaya zorlama.
- Ürün hakkında kesin bilgi yoksa kesin konuşma.

GÜVENİLİRLİK KURALLARI:
- Bilmediğin ürün özelliklerini uydurma.
- Fiyat, stok, ürün ölçüsü ve teknik özellikleri tahmin etme.
- Kesinleşmemiş kampanya ve indirimleri varmış gibi anlatma.
- Sipariş, kargo ve teslimat süreleri hakkında doğrulanmamış bilgi verme.
- İade ve değişim koşullarını kendin belirleme.
- Bir bilgiden emin değilsen bunu açıkça belirt.
- Gerekli durumlarda müşteriyi rosvena.home Instagram hesabına yönlendir.

ÖNEMLİ:
Henüz sana gerçek zamanlı ürün kataloğu, stok sistemi veya sipariş
takibi bağlantısı verilmedi. Bu nedenle bunlara erişimin varmış gibi
davranma.

Müşteri ürün bağlantısı veya görseli hakkında soru sorarsa,
yalnızca gerçekten verilen bilgileri değerlendirebilirsin.
Görmediğin ürünün özelliklerini tahmin etme.

Müşteri şikâyet veya sorun bildirirse önce nazikçe dinle,
ardından çözüm için yardımcı olmaya çalış.

Amacın müşteriyi doğru yönlendirmek, güven oluşturmak
ve ROSVENA deneyimini en iyi şekilde temsil etmektir.
`;

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "ROSVENA AI şu anda yapılandırılmamış." },
        { status: 503 }
      );
    }

    let body: { messages?: unknown };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Gönderilen istek okunamadı." },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Lütfen bir mesaj yazın." },
        { status: 400 }
      );
    }

    const conversation = body.messages
      .filter(
        (message): message is {
          role: "user" | "assistant";
          content: string;
        } =>
          message !== null &&
          typeof message === "object" &&
          ["user", "assistant"].includes(
            (message as { role?: string }).role ?? ""
          ) &&
          typeof (message as { content?: unknown }).content === "string" &&
          (message as { content: string }).content.trim().length > 0
      )
      .slice(-10)
      .map((message) => ({
        role: message.role,
        content: message.content.slice(0, 1500),
      }));

    if (
      conversation.length === 0 ||
      conversation[conversation.length - 1].role !== "user"
    ) {
      return NextResponse.json(
        { error: "Lütfen geçerli bir mesaj gönderin." },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      instructions: SYSTEM_PROMPT,
      input: conversation,
      max_output_tokens: 400,
    });

    const reply = response.output_text?.trim();

    if (!reply) {
      console.error("ROSVENA AI: Boş yanıt alındı.");

      return NextResponse.json(
        {
          error:
            "Mesajınızı aldım ancak şu anda yanıt oluşturamadım. Lütfen tekrar deneyin.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("ROSVENA AI error:", error);

    if (error instanceof OpenAI.APIConnectionTimeoutError) {
      return NextResponse.json(
        {
          error:
            "Yanıt hazırlamak biraz uzun sürdü. Lütfen tekrar deneyin.",
        },
        { status: 504 }
      );
    }

    if (error instanceof OpenAI.APIConnectionError) {
      return NextResponse.json(
        {
          error:
            "Bağlantıda geçici bir sorun oluştu. Lütfen tekrar deneyin.",
        },
        { status: 503 }
      );
    }

    if (error instanceof OpenAI.APIError) {
      console.error("OpenAI API status:", error.status);

      return NextResponse.json(
        {
          error:
            "Yapay zekâ hizmetine şu anda ulaşılamıyor. Biraz sonra tekrar deneyin.",
        },
        { status: error.status === 429 ? 429 : 502 }
      );
    }

    return NextResponse.json(
      {
        error: "Beklenmeyen bir sorun oluştu. Lütfen tekrar deneyin.",
      },
      { status: 500 }
    );
  }
}
