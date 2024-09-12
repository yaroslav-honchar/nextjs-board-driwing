import type { PropsWithChildren } from "react"
import type { Id } from "@/convex/_generated/dataModel"

export interface IRoomProps extends PropsWithChildren {
  roomId: Id<"boards">
}
