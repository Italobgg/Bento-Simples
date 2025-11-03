import { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
}

export const BentoGrid = ({ children }: BentoGridProps) => {
  return (
    <div
      className="
        grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 
        gap-4 auto-rows-[200px]
      "
    >
      {children}
    </div>
  )
}