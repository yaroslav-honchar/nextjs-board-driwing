import type { PropsWithChildren } from "react"

export interface IHintProps extends PropsWithChildren {
  label: string
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  sideOffset?: number
  alignOffset?: number
  toRender?: boolean
}
