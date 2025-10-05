import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kita Wasserfee - Kindergarten in Berlin",
  description:
    "Liebevolle Kinderbetreuung in Berlin. Kita Wasserfee bietet eine warme und fördernde Umgebung für Ihr Kind.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
