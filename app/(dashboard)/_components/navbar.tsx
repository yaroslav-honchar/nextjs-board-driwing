"use client"

import React from "react"
import { UserButton } from "@clerk/nextjs"

export const Navbar: React.FC = () => {
  return (
    <div className={"flex items-center gap-x-4 p-5"}>
      <div className={"hidden lg:flex lg:flex-1"}>{/*Todo: Add search*/}</div>
      <div className={"max-lg:ms-auto"}>
        <UserButton />
      </div>
    </div>
  )
}
