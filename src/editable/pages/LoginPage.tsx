import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, MessageCircle, Search } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { globalContent } from '@/editable/content/global.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: 'Sign in to the local reader account for this article site.' })
}

export default function LoginPage() {
  const benefits = [
    { icon: BookOpen, title: 'Return to reading', body: 'Keep the site feeling personal while testing article browsing and comment flows.' },
    { icon: MessageCircle, title: 'Reader identity', body: 'Use a local session so the navbar can show your name and logout action.' },
    { icon: Search, title: 'Explore faster', body: 'Move back into the archive, search page, and featured article sections quickly.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-[var(--editable-container)] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-accent)]">Reader access</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">Welcome back to {globalContent.site.name}.</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--slot4-muted-text)]">Sign in with your account to preview the article site as a returning reader. Your name will appear in the navbar with a logout button after login.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <item.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                  <h2 className="mt-4 text-base font-black">{item.title}</h2>
                  <p className="mt-2 text-xs leading-6 text-[var(--slot4-muted-text)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--editable-border)] bg-white p-6 shadow-[0_24px_70px_rgba(16,20,38,0.10)] sm:p-8">
            <h2 className="text-3xl font-black tracking-normal">Login</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">Use the account you created.</p>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-[var(--slot4-muted-text)]">New here? <Link href="/signup" className="font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">Create a reader account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
