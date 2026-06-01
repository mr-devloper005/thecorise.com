import type { Metadata } from 'next'
import Link from 'next/link'
import { Bookmark, MessageSquareText, PenLine } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: 'Create a local reader account for this article site.' })
}

export default function SignupPage() {
  const cards = [
    { icon: Bookmark, title: 'Follow the archive', body: 'Create a local profile for testing repeat visits and article-first navigation.' },
    { icon: MessageSquareText, title: 'Join the conversation', body: 'Preview how reader identity feels across comments and account controls.' },
    { icon: PenLine, title: 'Pitch and publish', body: 'Use the publication pages to send article ideas and editorial notes.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-dark-bg)] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.86fr_1fr] lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/55">Create reader account</p>
            <h1 className="mt-4 text-3xl font-black tracking-normal">Sign up</h1>
            <p className="mt-3 text-sm leading-7 text-white/68">This  account is for previewing the UI. Once created, your name replaces the login and signup buttons in the navbar.</p>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-white/65">Already have an account? <Link href="/login" className="font-black text-white underline-offset-4 hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-white/55">Article membership</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">Make the publication feel like a place readers come back to.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">The sign up page now speaks to the article experience: reading, commenting, pitching ideas, and returning with a recognizable reader identity.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {cards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <card.icon className="h-5 w-5 text-white/70" />
                  <h3 className="mt-4 text-base font-black">{card.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/62">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}