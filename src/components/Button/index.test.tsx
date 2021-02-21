import React from "react"
import { render } from "@testing-library/react"
import Button from "."

// test("first case", () => {
//   const wrapper = render(<Button>Nice</Button>)
//   const element = wrapper.queryAllByText("Nice")
//   expect(element).toBeTruthy()
//   expect(element).toBeInTheDocument()
// })

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText("Nice")
    // 测试在渲染后文档中
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual("BUTTON")
    expect(element).toHaveClass("btn")
  })
  it("should render the correct  button within others props ", () => {})
  it("should render the link Button", () => {})
})
 