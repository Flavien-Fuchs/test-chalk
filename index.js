import chalk from 'chalk';

let eleves = ["Nassim", "Vincent", "Ayouba", "Sergey", "Samuel"];
let colors = ["red", "green", "magenta", "blue", "yellow", "white", "bgRed", "bgGreen", "bgMagenta", "bgBlue", "bgYellow", "bgWhite"]

for (let i = 0; i < eleves.length; i++) {

    let chiffre = getRandomInt(colors.length);

    switch (colors[chiffre]) {
        case "red":
            console.log(chalk.red(eleves[i]))
            break;
        case "green":
            console.log(chalk.green(eleves[i]))
            break;
        case "magenta":
            console.log(chalk.magenta(eleves[i]))
            break;
        case "blue":
            console.log(chalk.blue(eleves[i]))
            break;
        case "yellow":
            console.log(chalk.yellow(eleves[i]))
            break;
        case "white":
            console.log(chalk.white(eleves[i]))
            break;
        case "bgRed":
            console.log(chalk.bgRed(eleves[i]))
            break;
        case "bgGreen":
            console.log(chalk.bgGreen(eleves[i]))
            break;
        case "bgMagenta":
            console.log(chalk.bgMagenta(eleves[i]))
            break;
        case "bgBlue":
            console.log(chalk.bgBlue(eleves[i]))
            break;
        case "bgYellow":
            console.log(chalk.bgYellow(eleves[i]))
            break;
        case "bgWhite":
            console.log(chalk.bgWhite(eleves[i]))
            break;
        default:
            break;
    }
    ;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
