"use client"

import React from "react"
import { RenameModal } from "@/components/modals/rename-modal/rename-modal"
import { useMounted } from "@/hooks/use-mounted"

export const ModalsProvider: React.FC = () => {
  const isMounted = useMounted()
  if (!isMounted) {
    return null
  }

  return (
    <>
      <RenameModal />
    </>
  )
}
