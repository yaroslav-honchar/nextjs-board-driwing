"use client"

import React from "react"
import { NoOrganizationScreen } from "./_components/no-organization-screen"
import { useOrganization } from "@clerk/nextjs"

const DashboardPage: React.FC = () => {
  const { organization } = useOrganization()

  return (
    <>
      <div className={"h-full p-6"}>{!organization && <NoOrganizationScreen />}</div>
    </>
  )
}
export default DashboardPage
