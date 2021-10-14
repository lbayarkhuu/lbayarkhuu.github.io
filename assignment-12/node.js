console.log(`Let's find my lucky number`)

const getNumber = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    readline.question('Give me a number? ', number => {
        readline.close()

        if (number == 'stop') {
            console.log(`Thank you for playing with me.`)

            return ;
        } else {
            if (isNaN(number)) {
                console.log(`${ number } is not number! try again`)
            } else if(number == '6')  {
                console.log(`${ number } is my lucky number! If you want to finish that game, please write stop`)
            } else if(Number.parseInt(number) > 6)  {
                console.log(`${ number } is greater than my lucky number ! try again`)
            } else {
                console.log(`${ number } is less than my lucky number ! try again`)
            }

            getNumber()
        }
    });
} 

getNumber()