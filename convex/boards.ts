import type { Id } from "./_generated/dataModel"
import { query } from "./_generated/server"
import { getAllOrThrow } from "convex-helpers/server/relationships"
import { v } from "convex/values"

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favorites: v.optional(v.string()),
  },
  handler: async (ctx, { orgId, search, favorites }) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
      throw new Error("Unauthorized")
    }

    const userId = identity.subject

    if (favorites) {
      const favoriteBoards = await ctx.db
        .query("userFavorites")
        .withIndex("by_user_org", (q) => q.eq("userId", userId).eq("orgId", orgId))
        .order("desc")
        .collect()

      const ids = favoriteBoards.map((favorite) => favorite.boardId)

      const boards = await getAllOrThrow(ctx.db, ids as Id<"boards">[])

      return boards.map((board) => ({
        ...board,
        isFavorite: true,
      }))
    }

    let boards = []

    if (search) {
      boards = await ctx.db
        .query("boards")
        .withSearchIndex("search_title", (q) => q.search("title", search).eq("orgId", orgId))
        .collect()
    } else {
      boards = await ctx.db
        .query("boards")
        .withIndex("by_org", (q) => q.eq("orgId", orgId))
        .order("desc")
        .collect()
    }

    const boardsWithFavoriteRelation = boards.map((board) => {
      return ctx.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) => q.eq("userId", userId).eq("boardId", board._id))
        .unique()
        .then((favorite) => ({
          ...board,
          isFavorite: !!favorite,
        }))
    })

    return Promise.all(boardsWithFavoriteRelation)
  },
})
