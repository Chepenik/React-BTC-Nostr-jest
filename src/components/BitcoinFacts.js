import React from "react"

const BitcoinFacts = props => {
  const articleUrl = "https://bitcoin.rocks/"

  const facts = [
    "Satoshi Nakamoto is the name used by the unknown person or people who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation.",
    "There will only ever be 21 million bitcoins (less if you include Satoshi's coins plus the lost bitcoin).",
    "Hal Finney was the first person to receive a bitcoin transaction.",
    "There are 100 million satoshis in a bitcoin.",
    "Bitcoin != Crypto"
  ]

  const factItems = facts.map((fact, index) => <li key={index}>{fact}</li>)

  return (
    <div className="center">
      <h1>
        <a href={articleUrl} target="_blank">
          Here's some fun facts about Bitcoin!
        </a>
      </h1>
      <ul>{factItems}</ul>
    </div>
  )
}

export default BitcoinFacts
