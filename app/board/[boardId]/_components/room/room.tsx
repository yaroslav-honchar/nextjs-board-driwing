"use client"

import React from "react"
import { Loading } from "@/components/auth/loading"
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense"
import type { IRoomProps } from "./room.props"

const apiKey = process.env.NEXT_PUBLIC_LIVEBLOCKS as string

export const Room: React.FC<IRoomProps> = ({ children, roomId }) => (
  <LiveblocksProvider publicApiKey={apiKey}>
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loading />}>{children}</ClientSideSuspense>
    </RoomProvider>
  </LiveblocksProvider>
)
