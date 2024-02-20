import Irys from "@irys/sdk";


const pk = ""; // your private key
const dataToUpload = "GM, World!"; //any text


const getIrys = async () => {
        const url = "https://devnet.irys.xyz";
        // Devnet RPC URLs change often, use a recent one from https://chainlist.org/chain/80001
        const providerUrl = "https://polygon-mumbai.blockpi.network/v1/rpc/public";
        const token = "matic";
        const irys = new Irys({
                url, // URL of the node you want to connect to
                token, // Token used for payment
                key: pk, // ETH or SOL private key
                config: { providerUrl }, // Optional provider URL, only required when using Devnet
        });
        return irys;
};

const uploadData = async () => {
        const irys = await getIrys();
        try {
                const receipt = await irys.upload(dataToUpload);
                console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
        } catch (e) {
                console.log("Error uploading data ", e);
        }
};

await uploadData()

