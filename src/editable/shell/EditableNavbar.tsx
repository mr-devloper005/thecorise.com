'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, LogOut, Menu, Search, UserCircle2, UserPlus, X } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { getVisualPreset, visualSystem } from '@/editable/theme/visual-system'

export function EditableNavbar() {
  const preset = getVisualPreset(visualSystem.recommendedPreset as any)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const siteName = globalContent.site.name
  const navVars = { '--editable-nav-bg': '#ffffff', '--editable-nav-text': '#0d1020', '--editable-nav-active': '#c8242a', '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': '#c8242a', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#f7f8fb', '--editable-border': `${preset.colors.muted}30` } as CSSProperties
  const navItems = useMemo(
    () => globalContent.nav.primaryLinks,
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 text-[var(--editable-nav-text)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[68px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[var(--editable-border)] bg-white shadow-sm transition-transform group-hover:-rotate-2">
            <img src="/favicon.png?v=20260413" alt={siteName} className="h-8 w-8 object-contain" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[180px] truncate text-lg font-black tracking-normal">{siteName}</span>
            <span className="block max-w-[180px] truncate text-[10px] font-bold uppercase tracking-[0.14em] opacity-55">{globalContent.nav?.tagline || globalContent.site.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center xl:flex">
          <label className="relative flex w-full max-w-sm items-center rounded-full border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-2.5">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-black/5'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <div className="hidden items-center gap-2 sm:flex">
              <span className="inline-flex max-w-[180px] items-center gap-2 truncate rounded-full border border-[var(--editable-border)] px-3 py-2 text-sm font-black"><UserCircle2 className="h-4 w-4" /> {session.name}</span>
              <button type="button" onClick={logout} className="inline-flex items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm"><LogOut className="h-4 w-4" /> Logout</button>
            </div>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl bg-[var(--editable-cta-bg)] px-4 py-3 text-left text-sm font-black text-white">Logout {session.name}</button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">Login</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="rounded-2xl bg-[var(--editable-cta-bg)] px-4 py-3 text-sm font-black text-white">Sign up</Link>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
