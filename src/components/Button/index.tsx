import React, { FC, memo } from "react"
import concatClass from "classnames"
import { ButtonProps, ButtonType, ButtonSize } from "./interface"

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disable,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props
  // 给button添加类名
  const MultiClass = concatClass(
    "btn",
    `${[undefined, "btn"].includes(className) ? "" : className}`,
    {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      disable: btnType === ButtonType.Link && disable,
    }
  )
  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={MultiClass} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={MultiClass} disabled={disable} {...restProps}>
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  disable: false,
  btnType: ButtonType.Default,
  size: ButtonSize.Normal,
  href: "#",
}

export default memo(Button)
