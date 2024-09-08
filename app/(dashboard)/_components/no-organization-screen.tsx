import React from "react"
import { CenteredScreenMessage } from "@/components/ui/centered-screen-message"
import { OrganizationCreate } from "./sidebar/components/organization-create"
import Image from "next/image"

export const NoOrganizationScreen: React.FC = () => {
  return (
    <CenteredScreenMessage>
      <Image
        className={"object-contain object-center mb-4"}
        src={"/elements.svg"}
        alt={"No boards"}
        width={200}
        height={200}
        priority={false}
      />
      <h2 className={"text-2xl font-semibold"}>Welcome to Board</h2>
      <p className={"text-center text-muted-foreground"}>Create organization to get started</p>
      <OrganizationCreate triggerText={"Create organization"} />
    </CenteredScreenMessage>
  )
}
