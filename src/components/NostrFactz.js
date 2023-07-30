import React from "react"

const NostrFacts = props => {
  const articleUrl = "https://nostr.com/"

  const factz = [
    "Nostr stands for Notes & Other Stuf Transmitted By Relay",
    "Users have one private key that controls all your data. If you lose it, you lose everything",
    "You can zap people bitcoin in Nostr",
    "Nostr is a protocol anyone can build on top of",
    "You can use any client (app) to access Nostr with a public or private key but without the private key you can only read from that profile", 
    "Jack Dorsey, co-founder and former CEO of Twitter donated 14 bitcoin to Fiatjaf for Nostr development",
  ]

  const factzItems = factz.map((fact, index) => <li key={index}>{fact}</li>)

  return (
    <div className="center">
      <h1>
        <a href={articleUrl} target="_blank">
          Here's some fun facts about Nostr!
        </a>
      </h1>
      <ul>{factzItems}</ul>
    </div>
  )
}

export default NostrFacts