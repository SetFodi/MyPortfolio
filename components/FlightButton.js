
'use client'
import Link from 'next/link'
import { FaPaperPlane } from 'react-icons/fa'

export default function FlightButton({ href, text, icon: Icon, className = "", type = "button", onClick = () => { }, disabled = false }) {
  // Default base classes if no specific bg/border/text classes are provided in className
  const baseClasses = className.includes('bg-') ? className : `bg-white text-black ${className}`

  const content = (
    <>
      {/* Text State */}
      <div className="relative z-10 flex items-center justify-center h-full gap-2 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
        <span>{text}</span>
      </div>

      {/* Hover Flight State */}
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        <Icon className="text-2xl animate-float-fly" />
      </div>
    </>
  )

  const commonClasses = `group relative w-40 h-14 rounded-full font-medium text-base overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer ${baseClasses} flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed`

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={commonClasses}>
      {content}
    </button>
  )
}

