function sendBtnClick() {

    try {
        //Iegūstam elementu pēc tā identifikātora
        var inputedText = document.getElementById('inputedText').value; //.value lietojam, lai iegūtu tā vērtību
        let container = document.getElementById("chat");

        //ar createElement("ievieto html tag") izveidojam html elementu 
        let newP = document.createElement("p");

        //Šādi mēs nosakām jaunā p elementa tekstu/vērtību
        newP.innerHTML = inputedText;

        //Iekšējajam chat boxam pievienojam jauno p elementu
        container.appendChild(newP);
    } catch (ex) {
        console.log(`Error: ${ex}`)
    }
}