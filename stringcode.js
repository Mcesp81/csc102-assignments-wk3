function checkcreds() {
    //Input validation for week3
    console.log("checkcreds() started");
    document.getElementById("loginstatus").innerHTML = "Status of Login";
    // variables needed for user input 
    var firstname;
    var lastname;
    var zipcode;
    var fullname;
    var fullnamelength;
    var zipcodenumb;

    // functions to message on inspection console regarding all variables on site 
    // function regarding inputing first name
    firstname = document.getElementById("fName").value;
    console.log("First Name " + firstname);
    // function regarding inputing last name
    lastname = document.getElementById("lName").value;
    console.log("Last Name " + lastname);
    // function regarding inputing  zipcode
    zipcode = document.getElementById("zipcode").value;
    console.log("Zipcode " + zipcode);
    // function regarding combination of first and last name
    fullname = firstname + " " + lastname;
    console.log("Full Name " + fullname);
    // function regarding length of fullname
    fullnamelength = fullname.length;
    console.log("Full Name has " + fullnamelength + " characters");
    // function regarding zipcode digits
    zipcodenumb = parseInt(zipcode);
    console.log("Zipcode number is " + zipcodenumb);

    //to check that fullnamelength is less than 30 characters
    //zipcode hasno more than 5 digits
    //if correct data is input login susccesful
    if (fullnamelength > 30) {
        document.getElementById("loginstatus").innerHTML = "Invalid Name";
    } else if (zipcode.length != 5) {
        document.getElementById("loginstatus").innerHTML = "Zipcode Invalid";
    } else {
        alert("User credantials accepted, Welcome " + fullname);
    }
}

function checkpalin() {
    console.log("checkpalin() started");
    // function to record data as a variable
    var entStr;
    entStr = document.getElementById("palininput").value;
    console.log("entStr is " + entStr);

    //function to remove spaces from inputed data
    var entStrNOSpace;
    entStrNOSpace = entStr.split(" ").join("");
    console.log("entStr without spaces is " + entStrNOSpace);

    //function to reveres array and string
    var revStr;
    const revArray = [];
    var length = entStrNOSpace.length - 1;
    console.log("string length is " + length)

    //function to input data into array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNOSpace[i]);
    }

    //function to convert to string from array
    revStr = revArray.join("");
    console.log("reversed is " + revStr)

    //function to compare the entStrNOSpace string and revStr string
    var equal = 0;
    equal = (entStrNOSpace === revStr);
    console.log("the ent and revers being equal is " + equal)

    //Function to show if data input is true or false as a palindrome
    if (equal == true) {
        document.getElementById("palinstatus").innerHTML = entStr + " <b>Is</b> a palindrome!";
    } else {
        document.getElementById("palinstatus").innerHTML = entStr + " is <b>Not</b> a palindrome!";
    }
}