import { mutation } from "./_generated/server"
import { v } from "convex/values"

const images = [
  "/placeholders/1.svg",
  "/placeholders/2.svg",
  "/placeholders/3.svg",
  "/placeholders/4.svg",
  "/placeholders/5.svg",
  "/placeholders/6.svg",
  "/placeholders/7.svg",
  "/placeholders/8.svg",
  "/placeholders/9.svg",
  "/placeholders/10.svg",
]

export const create = mutation({
  args: {
    title: v.string(),
    orgId: v.string(),
  },
  handler: async (ctx, { title, orgId }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error("Unauthorized")
    }

    const randomImage = images[Math.floor(Math.random() * images.length)]

    return await ctx.db.insert("boards", {
      title,
      orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    })
  },
})

export const remove = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, { id }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      throw new Error("Unauthorized")
    }

    const userId = identity.subject
    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) => q.eq("userId", userId).eq("boardId", id))
      .unique()

    if (existingFavorite) {
      await ctx.db.delete(existingFavorite._id)
    }

    await ctx.db.delete(id)
  },
})

export const update = mutation({
  args: {
    id: v.id("boards"),
    title: v.string(),
  },
  handler: async (ctx, { id, title }) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
      throw new Error("Unauthorized")
    }

    const newTitle = title.trim()

    if (!newTitle) {
      throw new Error("Title is required")
    }

    if (newTitle.length > 60) {
      throw new Error("Title cannot be longer than 60 characters")
    }

    await ctx.db.patch(id, { title })
  },
})

export const favorite = mutation({
  args: {
    id: v.id("boards"),
    orgId: v.string(),
  },
  handler: async (ctx, { id, orgId }) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
      throw new Error("Unauthorized")
    }

    const board = await ctx.db.get(id)
    if (!board) {
      throw new Error("Board not found")
    }

    const userId = identity.subject
    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board_org", (q) => q.eq("userId", userId).eq("boardId", board._id).eq("orgId", orgId))
      .unique()

    if (existingFavorite) {
      throw new Error("The board already favorited")
    }

    await ctx.db.insert("userFavorites", {
      userId,
      boardId: board._id,
      orgId,
    })

    return board
  },
})

export const unfavorite = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, { id }) => {
    const identity = await ctx.auth.getUserIdentity()

    if (!identity) {
      throw new Error("Unauthorized")
    }

    const board = await ctx.db.get(id)
    if (!board) {
      throw new Error("Board not found")
    }

    const userId = identity.subject

    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) => q.eq("userId", userId).eq("boardId", board._id))
      .unique()

    if (!existingFavorite) {
      throw new Error("Favorited board not found")
    }

    await ctx.db.delete(existingFavorite._id)

    return board
  },
})
