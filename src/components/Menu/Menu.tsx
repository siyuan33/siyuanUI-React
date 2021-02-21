import React, { createContext, FC, memo, useState } from "react"
import concatClass from "classnames"

type MenuPropsMode = "horizontal" | "vertical"
type SelectedCallback = (Index: number) => void
export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode?: MenuPropsMode
  style?: React.CSSProperties
  onSelect?: SelectedCallback
  children?: React.ReactNode
}

interface MenuContextInterface {
  index: number
  onSelect?: SelectedCallback
}

export const MenuContext = createContext<MenuContextInterface>({ index: 0 })

const Menu: FC<MenuProps> = ({
  children,
  defaultIndex,
  className,
  mode,
  style,
  onSelect,
}) => {
  const [activeIndex, setactiveIndex] = useState(defaultIndex)
  const handleClick = (index: number) => {
    setactiveIndex(index)
    onSelect && onSelect(index)
  }
  const passedContext: MenuContextInterface = {
    index: activeIndex ? activeIndex : 0,
    onSelect: handleClick,
  }
  const classNames = concatClass("menu", className, {
    "menu-horizontal": mode === "horizontal",
    "menu-vertical": mode === "vertical",
  })
  return (
    <ul className={classNames} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
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
