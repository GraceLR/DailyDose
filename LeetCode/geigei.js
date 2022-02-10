
checkPassword = (password) => {
    let numberOfSteps = 0;
    
    // 6 <= length <=20
    // one of each: lowercase, uppercase, number
    // >>> no 3 consecutive repeats

    let repeats = [];
    let repeatStart = 0;
    let prevChar = password[0];
    for (let i = 1; i < password.length - 1; i++) {
        if (password[i] !== prevChar) {
            if (i - repeatStart - 1 >= 2) {
                repeats.push({start: repeatStart, end: i - 1, char: prevChar});
            }

            prevChar = password[i];
            repeatStart = i;
        }
    }

    if (password.length - repeatStart > 2)
    {
        repeats.push({start: repeatStart, end: password.length - 1});
    }

    let characterDeficit = 0;

    if (password.length < 6) {
        characterDeficit = 6 - password.length;
    } else if (password.length > 20) {
        characterDeficit = 20 - password.length;
    }

    let newPassword = password;
    requiredCharacters = [];

    if (password.toUpperCase() === password) {
        requiredCharacters.push('a');
    }
    if (password.toLowerCase() === password) {
        requiredCharacters.push('A');
    }
    if (!/\d/.test(password)) {
        requiredCharacters.push('1');
    }
    
    isValid = () => {
        return characterDeficit === 0 &&
            repeats.length === 0 &&
            requiredCharacters.length === 0
    }

    getMissingChar = () => {
        if (requiredCharacters.length > 0) {
            return requiredCharacters.pop();
        }
        
        let startingChar = 65;

        while (newPassword.indexOf(String.fromCharCode(startingChar)) !== -1) {
            startingChar++;
        }

        return String.fromCharCode(startingChar);
    }

    findFirstIrrelevantChar = () => {
        let valid = [
            (char) => char.toUpperCase() === char,
            (char) => char.toLowerCase() === char,
            (char) => /\d/.test(char)
        ];
        
        for (let i = 0; i < 3; i++) {
            let found = false;
            for (let j = 0; j < valid.length; j++) {
                if (valid[j](newPassword[i])) {
                    valid.splice(j, 1);
                    found = true;
                    break;
                }    
            }

            if (!found) {
                return i;
            }
        }

        return 3;
    }

    const newString = (oldString, newChar, position) => oldString.slice(0, position) + newChar + newPassword.slice(position + 1)

    while (!isValid()) {
        console.log(`${newPassword} - length: ${newPassword.length}`);
        numberOfSteps++;
        
        if (repeats.length > 0) {
            repeats = repeats.sort((b,a) => (a.end - a.start) - (b.end - b.start));
            if (characterDeficit < 0 && requiredCharacters.length === 0)
            {
                for (let i = 0; i < repeats.length; i++) {
                    var modulo = (repeats[i].end - repeats[i].start) % 3;
                    if (modulo + characterDeficit < 0) {
                        newPassword = newPassword.slice(0, repeats[i].start) + newPassword.slice(repeats[i].start + modulo + 1);
                        characterDeficit += modulo + 1;
                        numberOfSteps += modulo;
                        var repeat = repeats.splice(i, 1)[0];
                        repeat.start += modulo + 1;
                        if (repeat.end - repeat.start >= 2) {
                            repeats.push(repeat);
                        }
                    }
                }
            }
            else
            {
                const repeat = repeats.pop();
                if (characterDeficit <= 0) {
                    newPassword = newString(newPassword, getMissingChar(), repeat.start + 2);
                }
                else if (characterDeficit > 0) {
                    newPassword = newPassword.slice(0, repeat.start + 2) + getMissingChar() + newPassword.slice(repeat.start + 3);
                    characterDeficit--;
                }

                if (repeat.end - repeat.start >= 5) {
                    repeats.push({start: repeat.start + 3, end: repeat.end})
                }
            }

        } else if (requiredCharacters.length > 0) {
            if (characterDeficit >= 0) {
                newPassword += requiredCharacters.pop();
                characterDeficit += characterDeficit === 0 ? 0 : -1
            } else {
                var charPos = findFirstIrrelevantChar();
                newPassword = newString(newPassword, requiredCharacters.pop(), charPos);
            }
        } else {
            if (characterDeficit > 0) {
                newPassword += getMissingChar();
                characterDeficit--;
            } else {
                const pos = findFirstIrrelevantChar();
                newPassword = newPassword.slice(0, pos) + newPassword.slice(pos + 1);
                characterDeficit++;
            }
        }
    }

    // aasaa { 0: a, 1: a}
    console.log(newPassword);
    return numberOfSteps;
}

console.log(checkPassword('bbaaaaaaaaaaaaaaacccccc'));


