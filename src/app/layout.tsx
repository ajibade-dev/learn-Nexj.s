import Just from "./just"
import { Metadata } from "next"
export const metadata : Metadata = {
  title: {
    default: "Next.js Tutorial - Paul",
    template: "%s | Code boy"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Just />
        <header
        style={{
          backgroundColor: "lightblue", padding: "1rem",
        }}>
          <p>This is the fuckin header</p>
        </header>
        {children}
        <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
        }}
        >
          <p> This is the goddamn footer.</p>
        </footer>
        </body>
    </html>
  )
}
