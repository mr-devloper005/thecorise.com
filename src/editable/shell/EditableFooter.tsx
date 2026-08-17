import Link from 'next/link'
import { ArrowUpRight, Mail, Search } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const siteName = globalContent.site.name

  return (
    <footer className="border-t border-black/[0.06] bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={siteName} className="h-16 w-16 object-contain" />
            <span>
              <span className="block text-lg font-black tracking-normal">{siteName}</span>
              <span className="block text-[10px] font-black uppercase tracking-[0.14em] opacity-50">{globalContent.footer.tagline}</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer.description}</p>
          <form action="/search" className="mt-6 flex max-w-md rounded-full border border-black/[0.06] bg-white p-2">
            <Search className="ml-2 mt-2 h-4 w-4 opacity-50" />
            <input name="q" placeholder="Search the article archive" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none" />
            <button className="rounded-full bg-[var(--slot4-accent-fill)] px-4 py-2 text-sm font-black text-white">Search</button>
          </form>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Explore</h3>
          <div className="mt-4 grid gap-2">
            {globalContent.footer.columns[0].links.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Publication</h3>
          <div className="mt-4 grid gap-2">
            {globalContent.footer.columns[1].links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-bold opacity-75 hover:opacity-100">{link.label}</Link>
            ))}
            <Link href="/contact" className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-4 py-2 text-sm font-black text-white">
              <Mail className="h-4 w-4" /> Editorial desk
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/[0.06] px-4 py-5 text-center text-xs font-bold opacity-55">
        © {year} {siteName}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
