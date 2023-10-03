let contract;
let signer;
let contractWithSigner;

main();

async function main() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    // store the user's URL

    $('#submitURLButton').click(function(){
        contractWithSigner.storeURL($('#textBox').val());
    })

    // retrieve the URL and update the image
    setInterval(async function(){
        console.log("retrieving image")
        let imageURL = await contract.retrieveURL();

        $('#myImage').attr('src', `${imageURL}`);
        
    }, 4000)
   
}