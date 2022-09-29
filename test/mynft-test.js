const { expect } = require("chai");
const { ethers } = require("hardhat");
const BASE_URI = "ipfs://FAKE_IPFS_CID/";
const TEST_WALLET = "0x243dc2F47EC5A0693C5c7bD39b31561cCd4B0e97";

describe("MyNFT", function () {
  it("Should mint a new token", async function () {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy(BASE_URI);
    await myNFT.deployed();
    await myNFT.mintTo(TEST_WALLET);
    expect(await myNFT.ownerOf(1)).to.equal(TEST_WALLET);
  });
  it("Should return a valid token URI", async function () {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy(BASE_URI);
    await myNFT.deployed(BASE_URI);
    await myNFT.mintTo(TEST_WALLET);
    expect(await myNFT.ownerOf(1)).to.equal(TEST_WALLET);
    expect(await myNFT.tokenURI(1)).to.equal(`${BASE_URI}1`);
  });
});