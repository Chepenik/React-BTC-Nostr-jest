import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PictureContainer from "./PictureContainer";
import BitcoinFacts from "./BitcoinFacts";
import NostrFacts from "./NostrFactz";
import Pictures from "./Pictures";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render PictureContainer component for the root path", () => {
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(wrapper.find(PictureContainer)).toHaveLength(1);
    expect(wrapper.find(BitcoinFacts)).toHaveLength(0);
    expect(wrapper.find(NostrFacts)).toHaveLength(0);
  });
});

describe("BitcoinFacts", () => {
  it("should render the BitcoinFacts component with correct facts", () => {
    const wrapper = mount(
      <BrowserRouter>
        <BitcoinFacts />
      </BrowserRouter>
    );
    expect(wrapper.find("h1 a").prop("href")).toBe("https://bitcoin.rocks/");

    const facts = [
      "Satoshi Nakamoto is the name used by the unknown person or people who developed bitcoin, authored the bitcoin white paper, and created and deployed bitcoin's original reference implementation.",
      "There will only ever be 21 million bitcoins (less if you include Satoshi's coins plus the lost bitcoin).",
      "Hal Finney was the first person to receive a bitcoin transaction.",
      "There are 100 million satoshis in a bitcoin.",
      "Bitcoin != Crypto"
    ];
    expect(wrapper.find("li")).toHaveLength(facts.length);

    facts.forEach((fact, index) => {
      expect(wrapper.find("li").at(index).text()).toBe(fact);
    });
  });
});

describe("NostrFacts", () => {
  it("should render the NostrFacts component with correct facts", () => {
    const wrapper = mount(
      <BrowserRouter>
        <NostrFacts />
      </BrowserRouter>
    );
    expect(wrapper.find("h1 a").prop("href")).toBe("https://nostr.com/");

    const factz = [
      "Nostr stands for Notes & Other Stuf Transmitted By Relay",  
      "Users have one private key that controls all your data. If you lose it, you lose everything",
      "You can zap people bitcoin in Nostr",
      "Nostr is a protocol anyone can build on top of",
      "You can use any client (app) to access Nostr with a public or private key but without the private key you can only read from that profile",
      "Jack Dorsey, co-founder and former CEO of Twitter donated 14 bitcoin to Fiatjaf for Nostr development",
    ];
    expect(wrapper.find("li")).toHaveLength(factz.length);

    factz.forEach((fact, index) => {
      expect(wrapper.find("li").at(index).text()).toBe(fact);
    });
  });
});

describe("Pictures", () => {
  it("should render the Pictures component with given props", () => {
    const image = "HARDCODING IS A BAD PRACTICE";
    const text = "If you hardcode kids, you're going have a bad time.";
    const onClickMock = jest.fn();

    const wrapper = mount(
      <BrowserRouter>
        <Pictures image={image} text={text} onClick={onClickMock} />
      </BrowserRouter>
    );
    
    expect(wrapper.find("img").prop("src")).toBe("HARDCODING IS A BAD PRACTICE");
    expect(wrapper.find("h1").text()).toBe("If you hardcode kids, you're going have a bad time.");
    expect(wrapper.find("Link[to='/facts']").prop("to")).toBe("/facts");
    expect(wrapper.find("Link[to='/factz']").prop("to")).toBe("/factz");

    wrapper.find("div").simulate("click");
    expect(onClickMock).toHaveBeenCalled();
  });
});