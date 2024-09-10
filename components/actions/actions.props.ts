import type { PropsWithChildren } from "react"
import type { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"

export interface IActionsProps extends PropsWithChildren {
  id: string
  title: string
  side?: DropdownMenuContentProps["side"]
  sideOffset?: DropdownMenuContentProps["sideOffset"]
}
