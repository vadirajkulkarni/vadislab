import Link from 'next/link'

export interface PostCardProps {
  title: string
  slug: string
  description?: string
  date?: string
}

export default function PostCard({ title, slug, description, date }: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block terminal-border p-4 hover:bg-[#0f0e00] transition-colors glow-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="dim text-xs">&gt; {slug}.mdx</span>
          <h2 className="text-lg font-semibold mt-1">{title}</h2>
          {description && (
            <p className="dim text-sm mt-1">{description}</p>
          )}
        </div>
        {date && (
          <time className="dim text-xs whitespace-nowrap mt-1">{date}</time>
        )}
      </div>
    </Link>
  )
}
