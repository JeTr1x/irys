import Irys from "@irys/sdk";


const pk = "" // your private keys
const fileToUpload = "./mypicture.png"; // path file to upload
const tags = [{ name: "application-id", value: "MyNFTDrop" }]; // MyNFTDrop - any name you want

const getIrys = async () => {
        const url = "https://node2.irys.xyz";
        const token = "matic";

        const irys = new Irys({
                url, // URL of the node you want to connect to
                token, // Token used for payment
                key: pk, // ETH or SOL private key
        });
        return irys;
};



const uploadFile = async () => {
        const irys = await getIrys();
        try {
                const receipt = await irys.uploadFile(fileToUpload, { tags });
                console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
        } catch (e) {
                console.log("Error uploading file ", e);
        }
};

await uploadFile()

