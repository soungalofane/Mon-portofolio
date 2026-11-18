import type { ReactNode } from 'react'

type Props = { number: string; children: ReactNode }
export default function SectionLabel({ number, children }: Props) {
  return <div className="section-label"><span>{number}</span><span className="section-label__line" /><span>{children}</span></div>
}
