import { ReactNode } from "react"

interface PageHeaderProps{
  children: ReactNode;
  className?: string;
}

export function PageHeader({children, className}: PageHeaderProps){
  return (
    <h1 className={`mb-3 text-2xl text-blue-500 ${className ?? ""}`}>
      {children}
    </h1>
  )
}