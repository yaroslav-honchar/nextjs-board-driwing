import type { PropsWithChildren } from "react"
import type { Id } from "@/convex/_generated/dataModel"
import type { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"

export interface IActionsProps extends PropsWithChildren {
  id: Id<"boards">
  title: string
  side?: DropdownMenuContentProps["side"]
  sideOffset?: DropdownMenuContentProps["sideOffset"]
}
