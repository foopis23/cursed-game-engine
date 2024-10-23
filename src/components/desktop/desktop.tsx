'use client';


export interface DesktopProps {
  children?: React.ReactNode
}

export default function Desktop(props: DesktopProps) {
  const { children } = props

  return (
    <div className="w-full h-full bg-[#3B77BC]">
      {children}
    </div>
  )
}