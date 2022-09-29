
const random = require('random-name');
const TOTAL = 4;
const folderCIDForImages = "QmTofqFMiweBdDbFciySo3tKynvWpL1RQu7ysbWZZ1sTAX";
const gatewayCustomDomain = "gateway.pinata.cloud"
const fs = require('fs')

const generateRandomMetadata = (id) => {
  return {
    name: random.first(), 
    description: 'test description',
    image: `${gatewayCustomDomain}/ipfs/${folderCIDForImages}/${id}.png`
  }
}

(async () => {
  for(let i=1; i < TOTAL + 1; i++) {
    const metadata = generateRandomMetadata(i)
    fs.writeFileSync(`./metadata/${i}.json`, JSON.stringify(metadata));
    console.log(metadata);
  }
  console.log("Your NFT's Metadata has been written and saved in the /metadata directory!");
})();

