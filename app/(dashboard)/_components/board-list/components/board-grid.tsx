import type { PropsWithChildren } from "react"
import React from "react"

export const BoardGrid: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols—4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 py-8">
      {children}
    </div>
  )
}
