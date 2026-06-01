import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/create',
    title: 'Create with the editorial workflow',
    description: 'Start a new article, story, or pitch with guidance for the publication experience.',
  })
}

export default function CreatePage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-dark-bg)] text-white">
        <section className="mx-auto min-h-[calc(100vh-9rem)] max-w-[var(--editable-container)] px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_90px_rgba(0,0,0,0.18)]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Create</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">Launch a new story or pitch.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
              This page helps direct authors and contributors to the right workflow for submitting ideas, starting a new article, or contacting the editorial desk.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/15"
              >
                Contact the editorial desk
              </Link>
              <Link
                href="/articles"
                className="rounded-2xl bg-[var(--slot4-accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[var(--slot4-accent-hover)]"
              >
                Browse article examples
              </Link>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
