import Link from 'next/link'
import { ArrowRight, BookOpen, MessageCircle, PenLine, Search, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function ArticleTile({ post, href, index, compact = false }: { post: SitePost; href: string; index: number; compact?: boolean }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_18px_50px_rgba(16,20,38,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,20,38,0.12)]">
      <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${compact ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)] shadow-sm">
          Article {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className={compact ? 'p-5' : 'p-6'}>
        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} line-clamp-3 font-black leading-tight tracking-normal text-[var(--slot4-page-text)]`}>{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--slot4-soft-muted-text)]">{getEditableExcerpt(post, compact ? 115 : 150)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[var(--slot4-page-text)]">
          Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function FeatureCard({ title, body, icon: Icon, tone }: { title: string; body: string; icon: typeof BookOpen; tone: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-7 text-white shadow-[0_20px_60px_rgba(16,20,38,0.14)] ${tone}`}>
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/14" />
      <Icon className="h-9 w-9" />
      <h3 className="mt-8 text-2xl font-black leading-tight tracking-normal">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/82">{body}</p>
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroPost = posts[0]
  const sidePosts = posts.slice(1, 4)
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Read the latest ${taskLabel(primaryTask).toLowerCase()}`

  return (
    <section className={`${pal.creamBg} relative overflow-hidden border-b border-black/[0.05]`}>
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className={`${dc.type.eyebrow} ${pal.accentText}`}>{pagesContent.home.hero.badge}</p>
          <h1 className={`${dc.type.heroTitle} mt-5 max-w-xl`}>{heroTitle}</h1>
          <p className={`mt-5 max-w-xl text-base leading-8 ${pal.mutedText}`}>{pagesContent.home.hero.description}</p>
          <form action="/search" className="mt-8 flex max-w-xl rounded-full border border-black/[0.08] bg-white p-2 shadow-sm">
            <Search className="ml-2 mt-2.5 h-4 w-4 opacity-50" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none" />
            <button className="rounded-full bg-[var(--slot4-accent-fill)] px-5 py-3 text-sm font-black text-white">Search</button>
          </form>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.accent}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className={dc.button.secondary}>{pagesContent.home.hero.secondaryCta.label}</Link>
          </div>
          <div className="mt-10 flex gap-8 border-l border-black/20 pl-5">
            <div><p className="text-3xl font-black">24+</p><p className="text-sm font-semibold opacity-65">fresh reads</p></div>
            <div><p className="text-3xl font-black">8</p><p className="text-sm font-semibold opacity-65">editorial lanes</p></div>
          </div>
        </div>

        <div className="grid gap-5">
          {heroPost ? (
            <Link href={postHref(primaryTask, heroPost, primaryRoute)} className="group relative min-h-[390px] overflow-hidden rounded-2xl bg-black text-white shadow-[0_26px_80px_rgba(16,20,38,0.20)]">
              <img src={getEditablePostImage(heroPost)} alt={heroPost.title} className="absolute inset-0 h-full w-full object-cover opacity-78 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.78))]" />
              <div className="relative z-10 flex min-h-[390px] flex-col justify-end p-7 sm:p-9">
                <span className="w-fit rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] backdrop-blur">Featured on {globalContent.site.name}</span>
                <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-normal">{heroPost.title}</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">{getEditableExcerpt(heroPost, 170)}</p>
              </div>
            </Link>
          ) : null}
          <div className="grid gap-4 md:grid-cols-3">
            {sidePosts.map((post, index) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="rounded-2xl border border-black/[0.07] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">Top read</p>
                <h3 className="mt-2 line-clamp-3 text-sm font-black leading-snug">{post.title}</h3>
                <p className="mt-3 text-xs font-bold opacity-50">0{index + 1}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 9)
  if (!railPosts.length) return null
  return (
    <section className={`${pal.warmBg}`}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Latest desk</p>
            <h2 className={`${dc.type.sectionTitle} mt-3`}>Ready-to-read articles</h2>
          </div>
          <Link href={primaryRoute} className="inline-flex items-center gap-2 text-sm font-black text-[var(--slot4-accent)]">View archive <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {railPosts.slice(0, 3).map((post, index) => <ArticleTile key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {railPosts.slice(3, 9).map((post, index) => <ArticleTile key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 3} compact />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(9, 15).length ? posts.slice(9, 15) : posts.slice(0, 6)
  if (!featured.length) return null
  return (
    <section className={`${pal.lavenderBg} border-y border-black/[0.05]`}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Core article features</p>
            <h2 className={`${dc.type.sectionTitle} mt-3`}>Built for an online publication, not a stretched feed.</h2>
            <p className={`mt-4 text-sm leading-8 ${pal.mutedText}`}>The reference direction is clean, centered, and modular. This site now uses that rhythm for article discovery, with comfortable widths and stronger editorial hierarchy.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <FeatureCard icon={BookOpen} title="Readable archive" body="Articles sit in balanced cards with useful excerpts and clear opening paths." tone="bg-[#c8242a]" />
            <FeatureCard icon={PenLine} title="Contributor ready" body="Pitch, contact, and auth pages now speak directly to writers and readers." tone="bg-[#e6531d]" />
            <FeatureCard icon={MessageCircle} title="Reader loops" body="Search and comments are framed as part of the article experience." tone="bg-[#4c3df1]" />
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, index) => <ArticleTile key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} compact />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(6)
  const lead = sectionPosts[0] || posts[0]
  const picks = sectionPosts.slice(1, 7)
  return (
    <section className={pal.grayBg}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className={`${dc.type.eyebrow} ${pal.accentText}`}>Topic collections</p>
            <h2 className={dc.type.sectionTitle}>Find the next article by idea, not by clutter.</h2>
            <p className={`mt-4 max-w-xl text-sm leading-8 ${pal.mutedText}`}>Search the archive, scan topic-led cards, and keep moving through related reads with a layout that stays centered on every screen size.</p>
            <form action="/search" className="mt-8 flex max-w-md rounded-full border border-black/[0.08] bg-white p-2 shadow-sm">
              <input name="q" placeholder="Search articles" className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold outline-none" />
              <button className="inline-flex items-center gap-2 rounded-full bg-[var(--slot4-dark-bg)] px-5 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
            </form>
          </div>
          {lead ? (
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group relative min-h-[360px] overflow-hidden rounded-2xl bg-black text-white shadow-[0_24px_80px_rgba(16,20,38,0.18)]">
              <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.76))]" />
              <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-8">
                <Sparkles className="h-8 w-8 text-white/80" />
                <h3 className="mt-5 text-3xl font-black leading-tight tracking-normal">{lead.title}</h3>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/75">{getEditableExcerpt(lead, 155)}</p>
              </div>
            </Link>
          ) : null}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="rounded-2xl border border-black/[0.07] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">Collection {String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 line-clamp-2 text-xl font-black leading-tight">{post.title}</h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 opacity-65">{getEditableExcerpt(post, 105)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className={`${pal.panelBg} scroll-mt-24`}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[var(--slot4-dark-bg)] p-8 text-center text-white shadow-[0_24px_80px_rgba(16,20,38,0.22)] sm:p-12">
          <p className="mx-auto w-fit rounded-full border border-white/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/75">Article publication</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight tracking-normal sm:text-4xl">Create a stronger reading habit around every article you publish.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/72">Browse the archive, send the editorial desk a note, or sign in locally to test the reader account flow.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/articles" className="rounded-full bg-[var(--slot4-accent-fill)] px-6 py-3 text-sm font-black text-white">Browse articles</Link>
            <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white">Pitch a story</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
