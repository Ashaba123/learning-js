const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const workDuration = 20;
const smallBreakDuration =5;
const longBreakDuration= 20;
let pomodoros = 4;

function startTimer(type, duration){
    console.log(`${type} timer started`);

    setTimeout(() => {
        console.log(`${type} timer finished`);
        if(type==="work"){
            if(pomodoros===1){
            pomodoros=4  
            startTimer("break", longBreakDuration);
            }else{
            startTimer("break",smallBreakDuration);
            }
        }else if(type==="break"){
            pomodoros--;
            startTimer("work", workDuration);
        }
    }, duration *1000);

}

rl.question('Press Y to start timer: ', (answer) => {
    if(answer==="Y" || answer==="y"){
     startTimer("work", workDuration);

    }else{
        console.log("Bye!");
        rl.close();
    }
  
});