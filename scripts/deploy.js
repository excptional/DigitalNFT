async function main() {
    const CustomNFT = await ethers.getContractFactory("CustomNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const customNFT = await CustomNFT.deploy();
    console.log("Contract deployed to address:", customNFT.address);

}

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

// const { ethers } = require("hardhat");

// async function main() {
//   const signer = await ethers.getSigner();

//   const deploymentOverrides = {
//     gasPrice: ethers.utils.parseUnits("100", "gwei"), // Adjust the gas price
//     gasLimit: 5000000, // Adjust the gas limit
//   };

//   const CustomNFT = await ethers.getContractFactory("CustomNFT");

//   // Start deployment, returning a promise that resolves to a contract object
//   const customNFT = await CustomNFT.deploy(deploymentOverrides);
//   console.log("Contract deployed to address:", customNFT.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


// Import necessary modules
// const { ethers } = require("hardhat");

// // Define the deployment task
// module.exports = async ({ getNamedAccounts, deployments }) => {
//   // Get the deployment function from Hardhat deployments
//   const { get } = deployments;

//   // Get the named accounts configured in Hardhat
//   const { deployer } = await getNamedAccounts();

//   // Get the signer (deployer's wallet)
//   const signer = await ethers.getSigner(deployer);

//   try {
//     // Get the address of the deployed CustomNFT contract
//     const customNFT = await get("CustomNFT");

//     // Get the contract instance using the interface of CustomNFT
//     const customNFTInstance = await ethers.getContractAt("CustomNFT", customNFT.address, signer);

//     // You can now interact with the customNFTInstance as needed
//     // For example, you can call functions on it or perform other operations
//     console.log("CustomNFT deployed at:", customNFT.address);
//   } catch (error) {
//     console.error("Error deploying contract:", error);
//     process.exit(1); // Exit with error
//   }
// };

// async function main() {
//   const { ethers } = require("hardhat");

//   // Get the signer (deployer's wallet)
//   const signer = await ethers.getSigner();

//   // Get the address of the deployed CustomNFT contract
//   const deployedCustomNFTAddress = "<ADDRESS_OF_DEPLOYED_CUSTOMNFT>";

//   // Get a contract instance using the interface of CustomNFT
//   const customNFT = await ethers.getContractAt("CustomNFT", deployedCustomNFTAddress, signer);

//   console.log("CustomNFT contract instance created.");

//   // You can now interact with the customNFT instance as needed
//   // For example, you can call functions on it or perform other operations
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

//0x06cFcb15acB729Dd8ea9d69D473c5a2C1d090658
