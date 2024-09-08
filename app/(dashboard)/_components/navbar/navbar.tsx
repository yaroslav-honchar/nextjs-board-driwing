"use client"

import React from "react"
import { OrganizationSwitcher } from "@/components/organization-switcher/organization-switcher"
import { SearchInput } from "./components/search-input"
import { UserButton } from "@clerk/nextjs"

export const Navbar: React.FC = () => {
  return (
    <div className={"flex items-center gap-x-4 p-3 lg:p-5"}>
      <div className={"hidden lg:flex lg:flex-1"}>
        <SearchInput />
      </div>
      <div className={"lg:hidden flex-1 flex items-center justify-start"}>
        <OrganizationSwitcher rootBoxClassnames={"max-w-40 m-0"} />
      </div>
      <UserButton />
    </div>
  )
}
