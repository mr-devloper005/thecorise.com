import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

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

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {}
  const query = resolvedSearchParams.q ?? ''
  const heading = query ? `Search results for “${query}”` : 'Search the article archive'
  const message = query
    ? 'This preview page shows the query you entered. Search results are handled by the site platform.'
    : 'Enter a term above to search across articles, listings, and profiles.'

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto min-h-[calc(100vh-9rem)] max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[var(--editable-border)] bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">Search</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">{heading}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--slot4-muted-text)]">{message}</p>

            <form action="/search" method="get" className="mt-8 flex flex-col gap-4 sm:flex-row">
              <label htmlFor="q" className="sr-only">Search query</label>
              <input
                id="q"
                name="q"
                defaultValue={query}
                placeholder="Search articles, topics, and authors"
                className="min-w-0 flex-1 rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-dark-bg)] px-4 py-3 text-sm font-semibold text-white outline-none placeholder:text-white/60 focus:border-[var(--slot4-accent)] focus:ring-2 focus:ring-[var(--slot4-accent)]/20"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[var(--slot4-accent)] px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[var(--slot4-accent-hover)]"
              >
                Search
              </button>
            </form>

            <div className="mt-10 rounded-3xl border border-[var(--editable-border)] bg-[var(--slot4-muted-bg)] p-8">
              <p className="text-sm text-[var(--slot4-muted-text)]">Search is available across the site. Use the field above or any search entry in the header to explore content by keyword.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
