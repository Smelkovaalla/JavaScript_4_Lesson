// node 4.2_index

function getNumberChecker(count = 0) {
    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let resultAnswer = getRandomInRange(1, 100);
    console.log('Загаданное число: ', resultAnswer);

    const readline = require('node:readline');
    const { stdin: input, stdout: output } = require('node:process');
    const rl = readline.createInterface({ input, output });

    
    const numberChecker = () =>{
        rl.question('Угадайте число от 1 до 100 = ', (answer) => {
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

