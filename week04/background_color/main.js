let contract;
let signer;
let contractWithSigner;

main();

async function main() {

    // if (!window.ethereum) {
    //     alert("No Web3 Provider detected");
    //     return;
    // }

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    // provide text input boxes (or something) for users to add a color value for each color channel (red, green blue) (short version: a place for people to SET color values)

    setInterval(function() {
        setBackgroundColor();
    }, 5000)

    function setRed() {
        contractWithSigner.setRed($('#redInput').val());
        setBackgroundColor();
    }

    function setGreen() {
        contractWithSigner.setGreen($('#greenInput').val());
        setBackgroundColor();
    }

    function setBlue() {
        contractWithSigner.setBlue($('#blueInput').val());
        setBackgroundColor();
    }

    // click buttons to set colors in contract
    $('#redSubmit').click(setRed);
    $('#greenSubmit').click(setGreen);
    $('#blueSubmit').click(setBlue);

    // SET the background color of the page based on the red, green and blue values stored in the contract.

    async function setBackgroundColor() {

        let red = await contract.getRed();
        let green = await contract.getGreen();
        let blue = await contract.getBlue();


        $('body').css('background-color', `rgb(${red}, ${green}, ${blue})`)
    }
}