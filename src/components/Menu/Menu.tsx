import React, { FC, memo } from "react"
import concatClass from "classnames"

type MenuPropsMode = "horizontal" | "vertical"

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuPropsMode
  style?: React.CSSProperties
  onSelect?: (Index: number) => void
  children?: React.ReactNode
}

const Menu: FC<MenuProps> = ({
  children,
  defaultIndex,
  className,
  mode,
  style,
  onSelect,
}) => {
  const classNames = concatClass("menu", className, {
    "menu-horizontal": mode === "horizontal",
    "menu-vertical": mode === "vertical",
  })
  return (
    <ul className={classNames} style={style}>
      {children}
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
  onSelect: (index) => {
    console.log(index, `selected ${index}`)
  },
}

export default memo(Menu)
