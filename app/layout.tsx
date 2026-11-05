export const metadata: Metadata = {
  title: 'ROSVENA | Yaşam Alanını Kolaylaştır',
  description: 'ROSVENA, eviniz için pratik, estetik ve kullanışlı çözümler sunar.',
  icons: {
    icon: '/rosvena-logo-512.png',
    apple: '/rosvena-logo-512.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
