import type { PropsWithChildren } from "react"
import React from "react"
import { cn } from "@/lib/utils"

export const CenteredScreenMessage: React.FC<PropsWithChildren<{ className?: string }>> = ({ className, children }) => {
  return <div className={cn("size-full flex flex-col items-center justify-center gap-4", className)}>{children}</div>
}
