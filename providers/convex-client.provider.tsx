"use client"

import type { PropsWithChildren } from "react"
import React from "react"
import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"

interface IConvexClientProviderProps extends PropsWithChildren {}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || ""
const convex = new ConvexReactClient(convexUrl)

export const ConvexClientProvider: React.FC<IConvexClientProviderProps> = ({ children }) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk
        useAuth={useAuth}
        client={convex}
      >
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
