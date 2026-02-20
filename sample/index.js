// function showAnswer(ans){
//     console.log(ans)
// }

// console.log("What is the largest country in the world?")
// setTimeout(showAnswer, 3000, "It's Russia !")

// rest functions

function permission(level, ...names){
    names.forEach(
        (names) => console.log(`Hi this is ${names} who is a ${level}`)
    )
}

permission("admin", "stark", "sam", "clark", "chris", "kent")