    module.exports = function check(str, bracketsConfig) {
        // your solution
        let bracketsArray = str.split('');
        let firstBrackets = [];
        let secondBrackets = [];
        for (let i = 0; i < bracketsConfig.length; i++) {
            firstBrackets.push(bracketsConfig[i][0]);
            secondBrackets.push(bracketsConfig[i][1]);
        }
        let stack = [];
        for (let i = 1; i <= bracketsArray.length; i++) {
            if (firstBrackets.includes(bracketsArray[i - 1]) && secondBrackets.includes(bracketsArray[i - 1]) && !stack.includes(bracketsArray[i - 1])) {
                if (bracketsArray[i - 1] === bracketsArray[i]) {
                    i++;
                } else {
                    stack.push(bracketsArray[i - 1]);
                }
            } else {
                if (firstBrackets.includes(bracketsArray[i - 1]) && !secondBrackets.includes(bracketsArray[i - 1])) {
                    stack.push(bracketsArray[i - 1]);
                } else {
                    if (!Array.isArray(stack) || !stack.length) {
                        return false;
                    }
                    let top = stack[stack.length - 1];
                    for (let j = 0; j < bracketsConfig.length; j++) {
                        if (bracketsArray[i - 1] === bracketsConfig[j][1] && top === bracketsConfig[j][0]) {
                            stack.pop();
                            break;
                        }
                    }
                }
            }
        }
        if (!Array.isArray(stack) || !stack.length) {
            return true;
        } else {
            return false;
        }
    }
