function showResult() {
    var userName = document.getElementById("user-name").value;
    var userAge = parseInt(document.getElementById("user-age").value);
    var userGender = document.getElementById("user-gender").value;
    var userWeight = parseFloat(document.getElementById("user-weight").value);
    var userHeight = parseFloat(document.getElementById("user-height").value);

    if (isNaN(userAge) || isNaN(userWeight) || isNaN(userHeight)) {
        alert("Please fill all of the data.");
    }

    if (userAge <= 0 || userWeight <= 0 || userHeight <= 0) {
        alert("Please enter valid data.");
    }

    bmi = bmiCalculate(userWeight, userHeight);
    gender = prefix(userGender);
    finalResult = bmiResult(userAge, bmi);
    document.addEventListener("onclick", display());

    function display() {
        var addRemoveClass = document.getElementById("result").classList;
        addRemoveClass.add("on");
        addRemoveClass.remove("off");

        write = document.querySelector('span'); // Use [0] to get the first element
        // write.innerText = x + ". " + y + " " + z;
        if (typeof bmi === 'number') {

            write.innerHTML = "Hi " + gender + ". " + userName + " " + finalResult;

        }
        else {
            write.innerHTML = "This BMI calculator is not for kids under age 13! and Sorry if you're an adult!";
        }

    }
    console.log(bmi);
    console.log(userGender);
    console.log(finalResult);
    console.log(typeof(bmi))
    // console.log(bmi);

}


function bmiCalculate(weight, height) {
    if (weight >= 35 && height >= 125){
        height = height / 100;
        var result = Math.floor(weight / Math.pow(height, 2));
        return result; 
    }
    else {
        return error = "Its an error value";
    }
}

function bmiResult(age, bmi) {
if (age > 13 && age <= 120) {
        if (bmi <= 16) {
            return "Your BMI result is " + bmi + ". You are thin!";
        } else if (bmi <= 18) {
            return "Your BMI result is " + bmi + ". You are slightly thin!";
        } else if (bmi <= 25) {
            return "Your BMI result is " + bmi + ". You are normal!";
        } else if (bmi <= 30) {
            return "Your BMI result is " + bmi + ". You are overweight!";
        } else {
            return "Your BMI result is " + bmi + ". You are obese!";
        }
    }

    else if (age > 120) {
        return "I think humans rarely live more then 120. Therefore, you must be a turtle!";
    }
}

function prefix(gender) {
    if (gender == "1") {
        return "Mr";
    }
    if (gender == "2") {
        return "Mrs";
    }
    if (gender == "3"){
        return "Mx";
    }
}

