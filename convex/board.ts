import { mutation } from "./_generated/server"
import { v } from "convex/values"

const images = [
  "/placeholders/1.png",
  "/placeholders/2.png",
  "/placeholders/3.png",
  "/placeholders/4.png",
  "/placeholders/5.png",
  "/placeholders/6.png",
  "/placeholders/7.png",
  "/placeholders/8.png",
  "/placeholders/9.png",
  "/placeholders/10.png",
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
