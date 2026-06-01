'use client'

import { FileText, Mail, MessageSquareText, PenLine } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: PenLine, title: 'Pitch an article', body: 'Send a draft idea, column concept, reported feature, or practical guide that fits the publication.' },
    { icon: FileText, title: 'Request a correction', body: 'Share context, source notes, or details that help keep published articles accurate and useful.' },
    { icon: MessageSquareText, title: 'Reader feedback', body: 'Tell the editorial desk what topics deserve deeper coverage or clearer explanation.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-2xl border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-6 w-6 text-[var(--slot4-accent)]" />
                  <h2 className="mt-4 text-xl font-black tracking-normal">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--editable-border)] bg-white p-5 shadow-[0_24px_70px_rgba(16,20,38,0.08)] sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--slot4-accent-fill)] text-white"><Mail className="h-5 w-5" /></span>
              <div>
                <h2 className="text-2xl font-black tracking-normal">{pagesContent.contact.formTitle}</h2>
                <p className="mt-1 text-sm text-[var(--slot4-muted-text)]">Article ideas, corrections, partnerships, and reader notes.</p>
              </div>
            </div>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
