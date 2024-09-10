import type { PropsWithChildren } from "react"

export interface IConfirmModalProps extends PropsWithChildren {
  onConfirm: () => void
  disabled?: boolean
  header: string
  description?: string
}
