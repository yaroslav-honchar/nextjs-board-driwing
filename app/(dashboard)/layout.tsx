import React from "react"
import type { IRootLayoutProps } from "../layout.props"

export interface IDashboardLayoutProps extends IRootLayoutProps {}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
