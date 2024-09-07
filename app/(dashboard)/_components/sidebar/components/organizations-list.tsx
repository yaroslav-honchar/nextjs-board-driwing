"use client"

import React from "react"
import { OrganizationListItem } from "@/app/(dashboard)/_components/sidebar/components/organizations-list-item"
import { useOrganizationList } from "@clerk/nextjs"

export const OrganizationsList: React.FC = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  if (!userMemberships.data?.length) {
    return null
  }

  return (
    <ul className={"flex flex-col gap-y-4"}>
      {userMemberships.data?.map(({ organization: { id, name, imageUrl } }) => (
        <li key={id}>
          <OrganizationListItem
            id={id}
            name={name}
            imageUrl={imageUrl}
          />
        </li>
      ))}
    </ul>
  )
}
