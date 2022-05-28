
function getNumberChecker(count = 0) {
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let resultAnswer = getRandomInRange(1, 100);
    console.log('Загаданное число: ', resultAnswer);

    const rl = require('readline').createInterface(process.stdin, process.stdout);

    function question (quest) {
        return new Promise((resolve, reject) => {
            rl.question(quest, (answer) => {
                resolve(answer);
            })
        })
    }

    const numberChecker = () =>{
        let q = question('Угадайте число от 1 до 100 = ');
        q.then((answer) => {
            if (answer == resultAnswer) {
                count++
                console.log(`Попытка №${count}`);
                console.log(`Вы угадали число ${answer}, Количество попыток= ${count} `); 
                rl.close();
            }
            else if (answer > resultAnswer) {
                count++
                console.log(`Попытка №${count}`);
                console.log(`Загаданное число меньше ${answer}`); 
                numberChecker();

            }
            else if (answer < resultAnswer) {
                count++
                console.log(`Попытка №${count}`);
                console.log(`Загаданное число больше ${answer}`); 
                numberChecker();
            }
        });        
    }
    numberChecker();


};

function main() {
    getNumberChecker() 
}

main();
// node 4.3_index