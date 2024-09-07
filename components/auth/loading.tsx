import React from "react"
import Image from "next/image"

export const Loading: React.FC = () => {
  return (
    <div className={"size-full flex flex-col gap-y-4 justify-center items-center"}>
      <Image
        className={"animate-pulse duration-800"}
        src={"/icon.svg"}
        alt={"Logo"}
        width={169}
        height={60}
        priority={true}
      />
    </div>
  )
}
