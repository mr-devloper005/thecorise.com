import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { fetchSiteFeed, type SitePost } from '@/lib/site-connector'
import { getPostTaskKey } from '@/lib/task-data'
import { buildPostUrl } from '@/lib/task-data'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { getEditablePostImage, getEditableExcerpt, getEditableCategory, toPlainText } from '@/editable/cards/PostCards'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/search',
    title: 'Search articles',
    description: 'Search the article archive for stories, topics, and reader conversations.',
  })
}

type SearchPageProps = {
  searchParams?: Promise<{ q?: string }>
}

function searchableText(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const parts = [
    post.title,
    post.summary,
    post.authorName,
    ...(post.tags || []),
    typeof content.description === 'string' ? content.description : '',
    typeof content.category === 'string' ? content.category : '',
  ]
  return toPlainText(parts.filter(Boolean).join(' ')).toLowerCase()
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {}
  const query = (resolvedSearchParams.q ?? '').trim()

  const feed = await fetchSiteFeed(200, { timeoutMs: 5000 })
  const allPosts = (feed?.posts || []).filter((post) => getPostTaskKey(post) === 'article')

  let results: SitePost[]
  if (query) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
    results = allPosts.filter((post) => terms.every((term) => searchableText(post).includes(term)))
  } else {
    results = allPosts.slice(0, 24)
  }

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto min-h-[calc(100vh-9rem)] max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/[0.06] bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">Search</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
              {query ? `Results for "${query}"` : 'Search the archive'}
            </h1>
            {query && (
              <p className="mt-3 text-sm font-semibold text-[var(--slot4-muted-text)]">
                {results.length} {results.length === 1 ? 'result' : 'results'} found
              </p>
            )}

            <form action="/search" method="get" className="mt-8 flex flex-col gap-4 sm:flex-row">
              <label htmlFor="q" className="sr-only">Search query</label>
              <div className="relative min-w-0 flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <input
                  id="q"
                  name="q"
                  defaultValue={query}
                  placeholder="Search articles, topics, and authors"
                  className="w-full rounded-2xl border border-black/[0.06] bg-[var(--slot4-dark-bg)] py-3 pl-11 pr-4 text-sm font-semibold text-white outline-none placeholder:text-white/60 focus:border-[var(--slot4-accent)] focus:ring-2 focus:ring-[var(--slot4-accent)]/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:opacity-90"
              >
                Search
              </button>
            </form>
          </div>

          {results.length > 0 && (
            <>
              {!query && (
                <div className="mt-8 mb-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-muted-text)]">Recent articles</p>
                </div>
              )}
              <div className={query ? 'mt-8 grid gap-4' : 'grid gap-4'}>
                {results.map((post) => (
                  <SearchResultCard key={post.id} post={post} href={buildPostUrl('article', post.slug)} />
                ))}
              </div>
            </>
          )}

          {query && results.length === 0 && (
            <div className="mt-8 rounded-3xl border border-black/[0.06] bg-white p-10 text-center">
              <p className="text-lg font-black">No results found</p>
              <p className="mt-2 text-sm text-[var(--slot4-muted-text)]">
                Try different keywords or browse the archive directly.
              </p>
              <Link
                href="/article"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black text-white transition hover:opacity-90"
              >
                Browse articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </section>
      </main>
    </EditableSiteShell>
  )
}

function SearchResultCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link
      href={href}
      className="group grid min-w-0 gap-5 overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-[220px_minmax(0,1fr)]"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[var(--slot4-gray)]">
        <div className="aspect-[16/12] sm:aspect-auto sm:min-h-[190px]">
          <img
            src={getEditablePostImage(post)}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="min-w-0 p-2 sm:py-4 sm:pr-5">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">
          {getEditableCategory(post)}
        </p>
        <h2 className="mt-3 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.05em] sm:text-3xl">
          {post.title}
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">
          {getEditableExcerpt(post, 180)}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-black">
          Read article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
