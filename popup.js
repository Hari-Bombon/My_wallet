document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form").addEventListener("click", handler);
});

function handler() {
    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    test_p ="";
    text_a = "0x8e1692c70d22B5a18344a44A23095e3CAE8af52b"
}

//provider

const provider = new ether.provider.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-k"
);

let wallet = new ethers.Wallet(private_key, provider);

const tx ={
    to:address,
    value: ethers.utils.parseEther(amount),
};

var a= document.getElementById("link");
a.href = "somelink url";

wallet.sendTransaction(tx).then((txObj) =>{
    console.log("txHash", txObj.hash);
    document.getElementById("center").style.display = "none";
    const a = document.getElementById("link");
    a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
    document.getElementById("link").style.display = "block";


});

document.addEventListener("DOMContentLoaded", function(){
    document
        .getElementById("check_balance")
        .addEventListener("click", checkBalance);
});

function checkBalance () {
    document.getElementById("center").style.display ="flex";

    //provider
    const provider = new ethers.providers.JsonRpcProvider(
        "https://polygon-mumbai.g.alchemy.com/v2/0awa485pp03Dww2fTjrSCg7yHlZECw-k"
        
    );

    const signer = provider.getSigner();
    console.log(signer);
    const address = document.getElementById("address")
}