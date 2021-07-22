import { useState } from "react"
import React from "react"

function FunctionClick() {
  const [state, setState] = useState({
    user: [],
    active: false,
  })
  function clickHandler() {
    console.log("function button click")

    fetch("https://api.github.com/users/2021maggie")
      .then((response) => response.json())
      .then((data) => setState({ user: data, active: !state.active }))
  }

  return (
    <div>
      <button className="hidden" onClick={clickHandler}>
        Function Click
      </button>
    </div>
  )
}

export default FunctionClick

