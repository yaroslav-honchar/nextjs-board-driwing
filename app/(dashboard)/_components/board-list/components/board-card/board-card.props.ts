import type { Id } from "@/convex/_generated/dataModel"

export interface IBoardCardProps {
  id: Id<"boards">
  createdAt: number
  title: string
  orgId: string
  authorId: string
  authorName: string
  imageUrl: string
  isFavorite: boolean
}
