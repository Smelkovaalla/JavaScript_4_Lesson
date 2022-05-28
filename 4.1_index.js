function getPasswordChecker(password = 'Parol') {
    let counter = password;
    return function (proverka) {
        if (counter !== proverka) {
            return false;
        } else {
            return true
        };
    };
};

const cnt1 = getPasswordChecker();
console.log(cnt1('Parol'));
const cnt2 = getPasswordChecker();
console.log(cnt2('bftgj'));



// node 4.1_index