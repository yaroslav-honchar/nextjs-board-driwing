"use client"

import { SearchIcon } from "lucide-react"
import qs from "query-string"
import React, { useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"
import { Input } from "@/components/ui/input"
import { ClientRoutes } from "@/routes/client.route"
import { useRouter } from "next/navigation"

export const SearchInput: React.FC = () => {
  const router = useRouter()
  const [value, setValue] = useState("")
  const [debouncedValue] = useDebounceValue(value, 500)

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: ClientRoutes.home,
        query: { search: debouncedValue },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      },
    )

    router.push(url)
  }, [debouncedValue, router])

  return (
    <div className={"w-full relative"}>
      <SearchIcon className={"absolute top-1/2 left-2 transform -translate-y-1/2 size-5 text-muted-foreground"} />
      <Input
        className={"w-full max-w-64 ps-9 border border-muted transition"}
        placeholder={"Search boards..."}
        onChange={({ target }) => setValue(target.value)}
        value={value}
      />
    </div>
  )
}
