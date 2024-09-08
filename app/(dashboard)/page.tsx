"use client"

import React from "react"
import { BoardList } from "./_components/board-list/board-list"
import { NoOrganizationScreen } from "./_components/no-organization-screen"
import { useOrganization } from "@clerk/nextjs"
import type { IDashboardPageProps } from "./page.props"

const DashboardPage: React.FC<IDashboardPageProps> = ({ searchParams }) => {
  const { organization } = useOrganization()

  return (
    <>
      <div className={"h-full p-6"}>
        {!organization ? (
          <NoOrganizationScreen />
        ) : (
          <BoardList
            query={searchParams}
            organizationId={organization.id}
          />
        )}
      </div>
    </>
  )
}
export default DashboardPage
