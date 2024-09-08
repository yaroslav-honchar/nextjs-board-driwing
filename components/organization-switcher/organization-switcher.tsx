"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher as OrganizationSwitcherRoot } from "@clerk/nextjs"
import type { IOrganizationSwitcherProps } from "./organization-switcher.props"

export const OrganizationSwitcher: React.FC<IOrganizationSwitcherProps> = ({
  rootBoxClassnames,
  organizationSwitcherTriggerClassnames,
}) => {
  return (
    <OrganizationSwitcherRoot
      hidePersonal
      appearance={{
        elements: {
          rootBox: cn("w-full flex items-center justify-center mt-5", rootBoxClassnames),
          organizationSwitcherTrigger: cn(
            "p-1 rounded-md rounded-lg border border-muted w-full justify-between",
            organizationSwitcherTriggerClassnames,
          ),
        },
      }}
    />
  )
}
