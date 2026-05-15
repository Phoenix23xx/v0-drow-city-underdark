export function SpiderIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <circle cx="12" cy="10" r="3" />
      <ellipse cx="12" cy="15" rx="4" ry="3" />
      <path d="M9 10 Q6 8 3 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M15 10 Q18 8 21 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 12 Q5 12 2 11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 12 Q19 12 22 11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M8 14 Q5 16 2 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 14 Q19 16 22 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 16 Q7 19 5 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M15 16 Q17 19 19 22" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}
