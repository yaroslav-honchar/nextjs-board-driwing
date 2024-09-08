import { mutation } from "./_generated/server"
import { v } from "convex/values"

export const create = mutation({
  args: {
    title: v.string(),
    orgId: v.string(),
  },
  handler: async (ctx) => {
    const identity = ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error("Unauthorized")
    }
  },
})
