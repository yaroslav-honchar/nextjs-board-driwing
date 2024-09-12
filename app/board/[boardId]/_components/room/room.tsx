"use client"

import React from "react"
import { Loading } from "@/components/auth/loading"
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from "@liveblocks/react/suspense"
import type { IRoomProps } from "./room.props"

export const Room: React.FC<IRoomProps> = ({ children, roomId }) => (
  <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loading />}>{children}</ClientSideSuspense>
    </RoomProvider>
  </LiveblocksProvider>
)
