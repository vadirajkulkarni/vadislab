import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Vadiraj Kulkarni',
  description: 'Platform Engineer — GCP, Kubernetes, Infrastructure Automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-100 text-gray-900 font-sans min-h-screen">
        <Sidebar />
        <div className="lg:pl-[220px]">
          {children}
        </div>
      </body>
    </html>
  )
}
