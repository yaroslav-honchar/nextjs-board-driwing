"use client"

import { StarIcon } from "lucide-react"
import React from "react"
import { fontSecondary } from "@/app/_fonts/google"
import { OrganizationSwitcher } from "@/components/organization-switcher/organization-switcher"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ClientRoutes } from "@/routes/client.route"
import { DashboardIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export const OrganizationSidebar: React.FC = () => {
  const searchParams = useSearchParams()
  const isFavorites = searchParams.get("favorites")

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
      <OrganizationSwitcher />
      <div className={"space-y-1 w-full"}>
        <Button
          asChild
          size={"lg"}
          className={"gap-2 w-full justify-start px-4"}
          variant={!isFavorites ? "secondary" : "ghost"}
        >
          <Link href={ClientRoutes.home}>
            <DashboardIcon className={"size-5"} />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          size={"lg"}
          className={"gap-2 w-full justify-start px-4"}
          variant={isFavorites ? "secondary" : "ghost"}
        >
          <Link
            href={{
              pathname: ClientRoutes.home,
              query: {
                favorites: "1",
              },
            }}
          >
            <StarIcon className={"size-5"} />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  )
}
