/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's

const NFTs = []; 
// Initialize an empty array to store NFTs
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT(fullname, fullsize, weapon, football, cricketer, freefire) {
  // Create a new NFT object with all properties
  const NFT = {
    fullname,
    fullsize,
    weapon,
    football,
    cricketer,
    freefire, // Include the freefire property
  };

  // Add the newly created NFT to the NFTs array
  NFTs.push(NFT);

  console.log("Minted NFT: " + fullname);
}

function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID:\t\t" + (i + 1));
    console.log("Fullname:\t\t" + NFTs[i].fullname);
    console.log("Fullsize:\t\t" + NFTs[i].fullsize);
    console.log("Weapon:\t\t" + NFTs[i].weapon);
    console.log("Football:\t\t" + NFTs[i].football);
    console.log("Cricketer:\t\t" + NFTs[i].cricketer);
    console.log("Free Fire:\t\t" + NFTs[i].freefire); // Display freefire property
  }
}

function getTotalSupply() {
  console.log("\nTotal NFTs:\t" + NFTs.length);
}

// Mint some NFTs with corrected variable names and added freefire property
mintNFT("Gurpreet", "Intermediate", "Cobra MP40", "Sunil Chhetri", "Thala For A Reason", "Hyato");
mintNFT("Yadav", "Intermediate", "Cobra MP40", "Sunil Chhetri", "Thala For A Reason", "Hyato");
mintNFT("KillerT", "Intermediate", "Cobra MP40", "Sunil Chhetri", "Thala For A Reason", "Kelly");
mintNFT("Cobra", "Mediator", "Cobra MP40", "Sunil Chhetri", "Thala For A Reason", "Alok");
mintNFT("Demongod", "Mediator", "Cobra MP40", "Sunil Chhetri", "Thala For A Reason", "Hayato");
mintNFT("Alpha", "Noob", "Cobra MP40", "Sunil Chhetri", "Thala For A Reason", "Rafael");

listNFTs();
getTotalSupply();
