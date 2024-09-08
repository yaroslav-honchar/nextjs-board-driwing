import React from "react"
import { OrganizationCreate } from "./sidebar/components/organization-create"
import Image from "next/image"

export const NoOrganizationScreen: React.FC = () => {
  return (
    <div className={"size-full flex flex-col items-center justify-center gap-4"}>
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
    </div>
  )
}
