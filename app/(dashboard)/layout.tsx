import React from "react"
import { Navbar } from "./_components/navbar"
import { OrgSidebar } from "./_components/org-sidebar"
import { Sidebar } from "./_components/sidebar/sidebar"
import type { IDashboardLayoutProps } from "./layout.props"

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <main className={"size-full"}>
      <Sidebar />
      <div className={"ps-16 h-full"}>
        <div className={"flex gap-x-3 h-full"}>
          <OrgSidebar />
          <div className={"h-full flex-1"}>
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardLayout
