const buzz = (firstName, lastName, birthDate) => {
    let fizzBuzzFirstName = fizzBuzz(firstName.length);
    let fizzBuzzLastName = fizzBuzz(lastName.length);
    return {
        name: `${firstName} ${lastName}`,
        fizzBuzzName: `${firstName} ${fizzBuzzFirstName} ${lastName} ${fizzBuzzLastName}`,
        age: getAge(birthDate)
    }
}

const getAge = DOB => {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
}

const fizzBuzz = num => {

    // check if the number is a multiple of 3 and 5
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    } // check if the number is a multiple of 3
    else if (num % 3 === 0) {
        return 'fizz';
    } // check if the number is a multiple of 5
    else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return "";
    }

}
module.exports = {
    buzz:buzz
}