import React, { FC, memo } from "react"
import concatClass from "classnames"

export interface MenuItemProps {
  index?: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  index,
  disabled,
  className,
  style,
}) => {
  const classNames = concatClass("menu-item", className, {
    "is-disabled": disabled,
  })

  return (
    <li className={classNames} style={style}>
      {children}
    </li>
  )
}
export default memo(MenuItem)
