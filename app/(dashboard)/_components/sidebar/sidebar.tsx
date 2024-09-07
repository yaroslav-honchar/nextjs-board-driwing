import React from "react"
import { OrganizationCreate } from "./components/organization-create"
import { OrganizationsList } from "./components/organizations-list"

export const Sidebar: React.FC = () => {
  return (
    <aside
      className={
        "fixed z-[1] left-0 bg-blue-950 h-full w-16 flex flex-col p-3 gap-y-4 text-white overflow-y-auto overflow-x-hidden"
      }
    >
      <OrganizationsList />
      <OrganizationCreate />
    </aside>
  )
}
