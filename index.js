let n = Math.floor(Math.random() * 1000);

console.log('Загаданное число:', n);

while (true) {

    let guess = prompt('Угадайте число от 0 до 1000:');

    console.log('Вы загадали число', guess);
    
    if (guess === n) {
        alert('Вы угадали');
        break;
    }
    if (guess > n) {
        alert('Загаданное число меньше');
    } else if (guess < n) {
        alert('Загаданное число больше')
    } else {
        alert('Вы не угадали');
    } 
}
