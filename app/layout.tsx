import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'vadislab',
  description: 'Platform engineering blog by Vadiraj Kulkarni',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
