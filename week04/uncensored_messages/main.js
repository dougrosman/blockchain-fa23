let contract;
let signer;
let contractWithSigner;

main();

async function main() {

    if (!window.ethereum) {
        alert("No Web3 Provider detected");
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    // update message list if new message is added

    displayMessages();

    contract.on("MessageAddedEvent", (message) => {
        const newMessage = `<p class="message">${message}</p>`
        $('#messages').append(newMessage);
    })

    $('#submitMessageButton').click(addMessage);

    function addMessage() {
       contractWithSigner.addMessage($('#newMessage').val())
    }

    async function displayMessages() {
        let allMessages = await contract.getAllMessages();

        if (allMessages.length > 0) {

            allMessages.forEach(message => {
                const newMessage = `<p class="message">${message}</p>`
                $('#messages').append(newMessage);
            })
        }
    }
}