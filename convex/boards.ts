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

    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", orgId))
      .order("desc")
      .collect()

    const boardsWithFavoriteRelation = boards.map((board) => {
      return ctx.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) => q.eq("userId", identity.subject).eq("boardId", board._id))
        .unique()
        .then((favorite) => ({
          ...board,
          isFavorite: !!favorite,
        }))
    })

    return Promise.all(boardsWithFavoriteRelation)
  },
})
