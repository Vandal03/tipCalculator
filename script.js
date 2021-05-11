function calculateTip() {
    let billAmt = document.getElementById("billAmt").value;
    let serviceRating = document.getElementById("serviceRating").value;
    let sharingBill = document.getElementById("sharingBill").value;

    if(billAmt == "" || sharingBill == "")  {
        console.log("Missing Fields");
    }
    else{
        let tip = (billAmt * serviceRating)/sharingBill;
        document.getElementById("tipAmt").innerHTML = "$" + tip.toFixed(2);
    }
}


const calculateBut = document.getElementById("calculateBut");
calculateBut.addEventListener("click", function(e){
    e.preventDefault();
    calculateTip();
})