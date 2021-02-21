import React, { FC, memo, useCallback, useContext } from "react"
import concatClass from "classnames"
import { MenuContext } from "./Menu"

export interface MenuItemProps {
  index: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  index,
  disabled,
  className,
  style,
}) => {
  const context = useContext(MenuContext)

  const classNames = concatClass("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  })
  const handleClick = useCallback(() => {
    if (context.onSelect && !disabled) {
      context.onSelect(index ? index : 0)
    }
  }, [])
  return (
    <li className={classNames} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
export default memo(MenuItem)
