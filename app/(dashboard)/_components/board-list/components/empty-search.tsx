import React from "react"
import { CenteredScreenMessage } from "@/components/ui/centered-screen-message"
import Image from "next/image"

export const EmptySearch: React.FC<{ searchText: string }> = ({ searchText }) => {
  return (
    <CenteredScreenMessage>
      <Image
        className={"object-contain object-center mb-4"}
        src={"/search.svg"}
        alt={"No boards"}
        width={200}
        height={200}
        priority={true}
      />
      <h2 className={"text-2xl font-semibold"}>No searching results</h2>
      <p className={"text-center text-muted-foreground"}>
        Try search something else, we couldn't find any boards with <strong>{searchText}</strong>
      </p>
    </CenteredScreenMessage>
  )
}
