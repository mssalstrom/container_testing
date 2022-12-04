let calcButton = document.getElementById("calcBMI");
calcButton.addEventListener("click", doCalcBMI, false);

function doCalcBMI() {
    let theWeight = document.getElementById("myPounds1").value;
    let theHeight = document.getElementById("myHeight").value;
    let myBMI = (theWeight / (theHeight ** 2)) * 703;
    myBMI = myBMI.toFixed(2);
    document.getElementById("bmiResult").innerHTML = "Your body mass index (BMI) is: " +
        myBMI;
    return false
}

// function myOutput(getBMI) {
//     let theString = "Your body mass index (BMI) is:",
//         myBMI;
//     return theString;
// }