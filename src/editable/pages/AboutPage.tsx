import { BookOpen, CheckCircle2, MessageSquareText, PenLine } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const proof = [
    { label: 'Editorial focus', value: 'Articles first' },
    { label: 'Reader flow', value: 'Search, read, discuss' },
    { label: 'Layout width', value: 'Comfortable measure' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-12 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <article className="rounded-2xl border border-[var(--editable-border)] bg-white p-7 shadow-[0_24px_70px_rgba(16,20,38,0.08)] sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">About {globalContent.site.name}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
              <div className="mt-8 grid gap-4 text-sm leading-8 text-[var(--slot4-muted-text)]">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {proof.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-black/[0.06] bg-[var(--slot4-gray)] p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">{item.label}</p>
                    <p className="mt-2 text-sm font-black">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="grid gap-4">
              {pagesContent.about.values.map((value, index) => {
                const icons = [BookOpen, PenLine, CheckCircle2]
                const Icon = icons[index] || BookOpen
                return (
                  <div key={value.title} className="rounded-2xl border border-[var(--editable-border)] bg-white p-6 shadow-sm">
                    <Icon className="h-7 w-7 text-[var(--slot4-accent)]" />
                    <h2 className="mt-5 text-2xl font-black leading-tight tracking-normal">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
                  </div>
                )
              })}
              <div className="rounded-2xl bg-[var(--slot4-dark-bg)] p-6 text-white">
                <MessageSquareText className="h-7 w-7 text-white/75" />
                <h2 className="mt-5 text-2xl font-black leading-tight tracking-normal">Made for article conversations</h2>
                <p className="mt-3 text-sm leading-7 text-white/72">Comments, contact, search, and account access all support the same goal: helping readers find and respond to stronger articles.</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
