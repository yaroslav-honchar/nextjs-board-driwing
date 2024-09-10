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

    // TODO: Check favorite relation

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
