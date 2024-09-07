"use client"

import React from "react"
import { Hint } from "@/components/hint/hint"
import { cn } from "@/lib/utils"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import Image from "next/image"
import type { IOrganizationListItemProps } from "./organizations-list-item.props"

export const OrganizationListItem: React.FC<IOrganizationListItemProps> = ({ id, name, imageUrl }) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const onClick = async () => {
    if (!setActive) {
      return
    }

    await setActive({ organization: id })
  }

  return (
    <div className={"aspect-square relative"}>
      <Hint
        label={name}
        align={"center"}
        side={"right"}
        sideOffset={18}
      >
        <Image
          src={imageUrl}
          alt={name}
          width={40}
          height={40}
          onClick={onClick}
          className={cn("rounded-md cursor-pointer opacity-65 hover:opacity-100 transition", isActive && "opacity-100")}
        />
      </Hint>
    </div>
  )
}
