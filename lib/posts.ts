import fs from 'fs'
import path from 'path'

const contentDir = path.join(process.cwd(), 'content')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs.readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getRawPost(slug: string): string {
  return fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf8')
}
