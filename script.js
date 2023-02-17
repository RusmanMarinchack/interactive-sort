-'use strict'

const readline = require('readline');
const process = require('process');

let rl = readline.createInterface(process.stdin, process.stdout);

let listQuestion = `
1. Sort words alphabetically \n2. Show numbers from lesser to greater \n3. Show numbers from bigger to smaller \n4. Display words in ascending order by number of letters in the word \n5. Show only unique words \n6. Display only unique values from the set of words and numbers entered by the user \n7. To exit the program, the user need to enter exit, otherwise the program will repeat itself again and again, asking for new data and suggesting sorting \n`;


function interactiveSorting(list) {

    let state = list.split(' ');

    function sorts(optionSort) {

        state = state.map(string => {
            if(isNaN(+string)) {
                return string
            } else {
                return string = +string
            }
        });
    
        if(optionSort === '1') {
            state = state.filter(stringItem => {
                if(typeof stringItem === 'string') {
                    return stringItem
                }
            })

            state.sort();

        } else if (optionSort === '2') {

            state = state.filter(stringItem => {
                if(typeof stringItem === 'number') {
                    return stringItem
                }
            })

            state.sort(function(a, b) {
                return a - b
            })

        } else if (optionSort === '3') {

            state = state.filter(stringItem => {
                if(typeof stringItem === 'number') {
                    return stringItem
                }
            })

            state.sort(function(a, b) {
                return b - a
            })

        } else if (optionSort === '4') {
            state = state.filter(stringItem => {
                if(typeof stringItem === 'string') {
                    return stringItem
                }
            })

            state.sort(function(a, b) {
               return a.length - b.length
            })
            
        } else if (optionSort === '5') {
            state = state.filter((stringItem, index) => {
                if(typeof stringItem === 'string') {
                    return index === state.indexOf(stringItem)
                }
            })
        } else if (optionSort === '6') {
            state = state.filter((item, index) => {
                return index === state.indexOf(item)
            })
        } else {

            if (optionSort === 'exit' || optionSort === '7') {
                process.exit()
            } 

        }
    
        console.log(state.join(' '))
        rl.question('Hello. enter 10 words or numbers separated by spaces: \n', interactiveSorting);
    }

    rl.question(`${listQuestion.trim()} \n`, sorts);
};

rl.question('Hello. enter 10 words or numbers separated by spaces: \n', interactiveSorting);


