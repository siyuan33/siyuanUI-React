import React, { FC, useCallback } from "react"
import "./App.css"
import Button from "./components/Button"
import { ButtonType, ButtonSize } from "./components/Button/interface"
import styled from "styled-components"
import Menu from "./components/Menu/menu"
import SubMenu from "./components/Menu/subMenu"
import MenuItem from "./components/Menu/menuItem"

const Wrapper = styled.div`
  .btn {
    display: block;
    margin: 1rem auto;
    &-link {
      display: table;
    }
  }
`

const App: FC = () => {
  const cb = useCallback(() => {}, [])
  return (
    <Wrapper>
      <Menu defaultIndex={"0"}>
        <MenuItem>item0</MenuItem>
        <MenuItem>item1</MenuItem>
        <SubMenu title={"item2"}>
          <MenuItem>item2-0</MenuItem>
          <MenuItem>item2-1</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Button btnType={ButtonType.Danger} size={ButtonSize.Large} onClick={cb}>
        Danger Large
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="https://www.google.com/"
        size={ButtonSize.Normal}
        target="target"
      >
        google Normal
      </Button>
      <Button disable={true}>disabled</Button> */}
    </Wrapper>
  )
}

export default App
