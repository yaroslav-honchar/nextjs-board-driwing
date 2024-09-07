"use client"

import { StarIcon } from "lucide-react"
import React from "react"
import { fontSecondary } from "@/app/_fonts/google"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { DashboardIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"

export const OrganizationSidebar: React.FC = () => {
  return (
    <div className={"hidden lg:flex flex-col space-y-6 w-[206px] ps-5 pt-5"}>
      <Link href={"/"}>
        <div className={"flex items-center gap-x-2"}>
          <Image
            src={"/icon.svg"}
            alt={"logo"}
            width={60}
            height={20}
            priority={true}
          />
          <span className={cn(fontSecondary.className, "font-semibold text-2xl")}>Board</span>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: "w-full flex items-center justify-center mt-5",
            organizationSwitcherTrigger: "p-1 rounded-md rounded-lg border border-muted w-full justify-between",
          },
        }}
      />
      <div className={"space-y-1 w-full justify-start"}>
        <Button
          asChild
          size={"lg"}
          className={"gap-2 w-full"}
          variant={"ghost"}
        >
          <Link href={"/"}>
            <DashboardIcon className={"size-5"} />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          size={"lg"}
          className={"gap-2 w-full"}
          variant={"ghost"}
        >
          <Link href={"/favorite"}>
            <StarIcon className={"size-5"} />
            Team boards
          </Link>
        </Button>
      </div>
    </div>
  )
}
