let userName = prompt("Enter your name:").trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

let lastName = prompt("Enter your last nme:").trim();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

let userMail = prompt("Enter your e-mail:").replaceAll().toLowerCase();
// userMail = (!userMail.includes("@")) ? `not valid e-mail <b> ${userMail} </b> (symbol "@" doesn't exists.)` :
//     (userMail.startsWith("@")) ? `not valid e-mail <b>${userMail}</b> (symbol "@" has been found at the first place.)` :
//         (userMail.endsWith("@")) ? `not valid e-mail <b>${userMail}</b> (symbol "@" has been found at the last place.)` :
//             ` ${userMail} `;

function checkMail() {
    if (!userMail.includes("@")) {
        return `not valid e-mail <b> ${userMail} </b> (symbol "@" doesn't exists.)`;
    } else if (userMail.startsWith("@")) {
        return `not valid e-mail <b>${userMail}</b> (symbol "@" has been found at the first place.)`;
    } else if (userMail.endsWith("@")) {
        return `not valid e-mail <b>${userMail}</b> (symbol "@" has been found at the last place.)`;
    } else {
        return userMail;
    }
}

let dateOfBirth = +prompt("Enter your birth date:").replaceAll();
let today = new Date();
let thisYear = today.getFullYear();
let userAge;

if (dateOfBirth >= 1920 && dateOfBirth <= thisYear) {
    userAge = thisYear - dateOfBirth;
} else {
    userAge = "incorrect";
}


document.write(`<ul><li>Full name: <b>${userName} ${lastName}</b></li><li>E-mail: ${checkMail()}</li><li>Age: <b>${userAge}</b></li></ul>`);