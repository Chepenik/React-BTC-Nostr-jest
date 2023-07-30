import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PictureContainer from "./PictureContainer"
import BitcoinFacts from "./BitcoinFacts"
import NostrFacts from "./NostrFactz"

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PictureContainer} />
        <Route exact path="/facts" component={BitcoinFacts} />
        <Route exact path="/factz" component={NostrFacts} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
