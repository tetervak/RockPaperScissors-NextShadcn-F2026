import Link from "next/link"
import { ComponentProps } from "react"
import { VariantProps } from "class-variance-authority"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LinkButtonProps
  extends ComponentProps<typeof Link>, VariantProps<typeof buttonVariants> {}

export function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        buttonVariants({ variant, size }),
        "inline-flex items-center gap-2 whitespace-nowrap",
        className
      )}
      {...props}
    />
  )
}
