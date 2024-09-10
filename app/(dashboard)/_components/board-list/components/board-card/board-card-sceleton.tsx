import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const BoardCardSkeleton = () => (
  <div className={"aspect-[100/127] rounded-lg overflow-hidden"}>
    <Skeleton className={"size-full"} />
  </div>
)
