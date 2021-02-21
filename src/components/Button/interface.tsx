import { ReactNode } from "react"

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
  Normal = "nm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface ButtonBaseProps {
  className?: string
  disable?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children?: ReactNode
  href?: string
}

type ButtonInterSection = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLElement>
type AnchorInterSection = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<ButtonInterSection & AnchorInterSection>
