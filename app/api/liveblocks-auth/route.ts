import { api } from "@/convex/_generated/api"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Liveblocks } from "@liveblocks/node"
import { ConvexHttpClient } from "convex/browser"
import { NextResponse } from "next/server"

const liveblocksSecretKey = process.env.LIVEBLOCKS_SECRET!
const convexApiKey = process.env.NEXT_PUBLIC_CONVEX_URL!

const convex = new ConvexHttpClient(convexApiKey)

const liveblocks = new Liveblocks({
  secret: liveblocksSecretKey,
})

export async function POST(request: Request) {
  const authorization = auth()
  const user = await currentUser()

  if (!user || !authorization) {
    return new NextResponse("Unauthenticated", { status: 401 })
  }

  const { room } = await request.json()
  const board = await convex.query(api.board.get, { id: room })

  if (board?.orgId !== authorization.orgId) {
    return new NextResponse("Unauthorized", { status: 403 })
  }

  const userInfo = {
    name: user.firstName || "Anonymous",
    picture: user.imageUrl,
  }

  const session = liveblocks.prepareSession(user.id, { userInfo })

  if (room) {
    session.allow(room, session.FULL_ACCESS)
  }

  const { status, body } = await session.authorize()

  return new NextResponse(body, { status })
}
