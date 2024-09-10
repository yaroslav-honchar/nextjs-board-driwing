import { query } from "./_generated/server"
import { v } from "convex/values"

export const get = query({
  args: {
    orgId: v.string(),
  },
  handler: async (ctx, { orgId }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error("Unauthorized")
    }

    return ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", orgId))
      .order("desc")
      .collect()
  },
})
