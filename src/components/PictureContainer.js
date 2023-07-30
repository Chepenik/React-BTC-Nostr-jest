import React, { useState } from "react";
import Pictures from "./Pictures";

const PictureContainer = props => {

  const ostrichImage = "https://pbs.twimg.com/profile_images/1604195803748306944/LxHDoJ7P_400x400.jpg";
  const bitcoinImage = "https://cdn.nostr.build/p/nb12036.jpg";
  
  const [bitcoin, setBitcoin] = useState(false);

  const handleClick = () => {
    setBitcoin(!bitcoin);
  };

  let ostrichText = "The mascot for Nostr is an Ostrich, I know another damn bird app...";
  let bitcoinText = "Bitcoin offers humanity money backed by math and code instead of violence and debt";

  let image = ostrichImage;
  let text = ostrichText;

  if (bitcoin) {
    image = bitcoinImage;
    text = bitcoinText;
  }

  return (
    <div>
      <Pictures image={image} onClick={handleClick} text={text} />
    </div>
  );
};

export default PictureContainer;