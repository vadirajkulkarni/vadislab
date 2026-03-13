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
      className="group flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors duration-150"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-150 mb-0.5">
          {title}
        </p>
        {description && (
          <p className="text-xs text-gray-400 truncate">{description}</p>
        )}
      </div>
      {date && (
        <time className="text-xs text-gray-400 whitespace-nowrap mt-0.5 shrink-0">{date}</time>
      )}
    </Link>
  )
}
