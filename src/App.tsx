import React, { FC, useCallback } from "react"
import "./App.css"
import Button from "./components/Button"
import { ButtonType, ButtonSize } from "./components/Button/interface"
import styled from "styled-components"
// import Button from "./components/Button/index"

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
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large} onClick={cb}>
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
      <Button disable={true}>disabled</Button>
    </Wrapper>
  )
}

export default App
