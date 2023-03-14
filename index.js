// code your solution here
function saturdayFun(hobby = "roller-skate"){  
    return `This Saturday, I want to ${hobby}!`;
}
function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(adj = "*"){
    const innerFunction = function(adjective = "special"){
        return `You are ${adj}${adjective}${adj}!`;      
    }
    return innerFunction;
}