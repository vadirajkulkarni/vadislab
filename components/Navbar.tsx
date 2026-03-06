import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-[#3a2800] px-6 py-3 flex items-center justify-between text-sm">
      <Link href="/" className="dim glow-hover">
        vadiraj@vadislab:~$
      </Link>
      <div className="flex gap-6">
        <Link href="/" className="glow-hover">[home]</Link>
        <Link href="/blog" className="glow-hover">[blog]</Link>
      </div>
    </nav>
  )
}
