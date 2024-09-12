import type { ImageProps } from "next/image"
import type { LinkProps } from "next/link"

export interface ILogoProps extends Omit<LinkProps, "href"> {
  className?: string
  imageProps?: ImageProps
}
