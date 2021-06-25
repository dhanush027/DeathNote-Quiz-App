const readline = require('readline-sync')
const chalkpiece = require('chalk')
var count = 1
var flag = 0
var score = 0
var bingeWatcher = 0
const error = chalkpiece.bgRedBright.whiteBright.underline.bold.strikethrough;
const correctAnswer = chalkpiece.blue.bgGreen.bold.underline.bold;
const scoreView = chalkpiece.bold.italic.yellowBright;
const welcome = chalkpiece.greenBright.italic;
const highest = chalkpiece.bgYellow.greenBright.underline.bold;

console.log(correctAnswer("Hello Buddy! How you doing"))
var qOne = readline.question(chalkpiece.bgWhite.blackBright.bold.underline("\nMay I know your name please:") + " ")

//Welcome Message for user
console.log(chalkpiece.bgCyan("---------------------------------------------"))
console.log(chalkpiece.greenBright("Welcome! "), chalkpiece.bold.cyanBright(qOne.toUpperCase()), welcome("\nGood to have you for the quiz", "\nLet's see how much you know about Death Note Series"))
console.log(chalkpiece.bgCyan("---------------------------------------------"))
instructions()
console.log(chalkpiece.italic.keyword('orange')("Type only the letter of option "))

//List to store Q's and A's
var quizQnA = [{
        question: "Welcome to Level 1\n1] Who was the first detective involved in the Kira case \n a.Madara\n b.Riyuzaki \n c.El\n d.Naruto \n Your Answer->",
        answer: "c"
    },
    {
        question: "2] Who was L's butler/caregiver/handler?\n a.Watari\n b.Berus \n c.Gelus\n d.Misa \nYour Answer->",
        answer: "a"
    },
    {
        question: "3] When making a deal for shinigami eyes, what must a human give up? \n a.Apples\n b.Chips \n c.Half of their life span\n d.Chola bature \n Your Answer->",
        answer: "c",
    },
    {
        question: "4] Who killed L? \n a.Riyuzaki\n b.Misa \n c.Rem\n d.Ryuk\n Your Answer->",
        answer: "c"
    },
    {
        question: "5] What is the name of the second Kira? \n a.Zen\n b.Misa Amane \n c.Sazuka\n d.Riyuzaki\n Your Answer->",
        answer: "b",

    },
    {
        question: "Welcome to Level 2\n6] What was the name of the F.B.I. agent who spied on Light because he was suspected as Kira? \n a.Haris\n b.Jonathan \n c.Raye Penber\n d.Andrew Paul\n Your Answer->",
        answer: "c"
    }, {
        question: "7]  Who did L always call an idiot?  \n a.Matsuda\n b.Shipuden \n c.Madara\n d.Misa\n Your Answer->",
        answer: "a",
    },
    {
        question: "8] What is L usually eating? \n a.Pizza\n b.Some sweet food \n c.Burger \n d.Rolls \n Your Answer->",
        answer: "b",
    },
    {
        question: "9] Which member of the Japanese police was able to enter NHN studios as Misa Amane's manager?  \n a. Matsuda\n b.Ide \n c.Aizawa\n d.Mogi \n Your Answer->",
        answer: "d",
    },
    {
        question: "10] Why do Shinigamis use Death Notes? \n a.To get Wings\n b.To prolong their lives \n c.For Apples\n d.For Fun\n Your Answer->",
        answer: "b",
    },
    {
        question: "Welcome to Level 3\n11] What is Ryuk's favorite food?  \n a.Capsium\n b.Meat \n c.Apples\n d.Human Blood\n Your Answer->",
        answer: "c",
    },
    {
        question: "12] How many different humans have used a notebook's pages to kill? \n a.10\n b.12 \n c.7\n d.24\n Your Answer->",
        answer: "c",
    },
    {
        question: "13] Which of the taskforce members was killed in front of the Sakura television station?  \n a. Matsuda \n b.Mogi \n c. Aizawa\n d.Ukita\n Your Answer->",
        answer: "d",
    },
    {
        question: "14] What was one way a shinigami could die from? \n a.Falling in love with a human\n b.Eating vegetables \n c.By poison\n d.By speaking truth\n Your Answer->",
        answer: "a",
    },
    {
        question: "15] Who kills Kira? \n a.Police\n b.Ryuk \n c.Rem\n d.Madara\n Your Answer->",
        answer: "b",
    },
    {
        question: "Welcome to Level 4\n16] Where did Misa Amane first find Light? \n a.Beiging\n b.Rio De Janerio \n c.Aoyama\n d.Los Angeles\n Your Answer->",
        answer: "c",
    },
    {
        question: "17] What sport did L and Light play against each other? \n a.Swimming\n b.Tennis \n c.Cricket\n d.FootBall\n Your Answer->",
        answer: "b",
    },
    {
        question: "18] Why couldn't Light kill Misa? \n a.Due to love for Misa\n b.He wanted Shinigami eyes \n c.She had a Occult Powers\n d.Rem would kill him first\n Your Answer->",
        answer: "d",
    },
    {
        question: "19] For how many days was Light held in solitary confinement by the taskforce? \n a.30 days\n b.60 days \n c.50 days\n d.3 months\n Your Answer->",
        answer: "c",
    },
    {
        question: "20] Who on L's investigation team had to fake his own death in order to protect himself from Kira? \n a.Misa\n b.Yagami \n c.Riyuzaki\n d.Matsuda\n Your Answer->",
        answer: "d",
    },
]

//list to store users with high score 
var highScore = [{
        name: "Dhanush",
        score: "48",
    },
    {
        name: "Ashish",
        score: "35",
    },
    {
        name: "Ani",
        score: "38",
    }

]

function levelOne(flag) {
    if (flag == 1) {
        score = score + 1
        return score
    } else {
        score = score - 1
        return score
    }
}

function levelTwo(flag) {
    if (flag == 1) {
        score = score + 2
        return score
    } else {
        score = score - 2
        return score
    }
}

function levelThree(flag) {
    if (flag == 1) {
        score = score + 3
        return score
    } else {
        score = score - 3
        return score
    }
}

function levelFour(flag) {
    if (flag == 1) {
        score = score + 4
        return score
    } else {
        score = score - 4
        return score
    }
}

function quizHelper(question, answer, logic) {
    var quizAnswer = readline.question(chalkpiece.bgBlue(question))
    if (quizAnswer.toLowerCase() === answer) {
        flag = 1
        console.log(correctAnswer("Hurray! That's a right answer"))
        score = logic(flag)
        //score++
        console.log(scoreView("Your current score is: " + score))
        console.log(chalkpiece.bgWhite("-----------------------------------------------"))
    } else {
        flag = 0
        console.log(chalkpiece.keyword('orange')("Oops! ") + error(quizAnswer.toUpperCase() + " is incorrect") + "\n" + correctAnswer(answer.toUpperCase() + " is the correct answer"))
        score = logic(flag)
        //score--
        console.log(scoreView("Your current score is: " + score))
        console.log(chalkpiece.bgWhite("-----------------------------------------------"))
    }

}

function instructions() {
    console.log(chalkpiece.cyanBright.underline("Detailed Instructions for this Quiz:\n This Quiz consists of 4 Sections\n 1]Section-1 Consists of 5 Questions->\nEvery right answer is rewarded with 1 mark and wrong answer is rewarded with -1\n 2]Section-2 Consists of 5 Questions->\nEvery right answer is rewarded with 2 mark and wrong answer is rewarded with -2\n 3]Section-3 Consists of 5 Questions->\nEvery right answer is rewarded with 3 mark and wrong answer is rewarded with -3\n 4]Section-4 Consists of 5 Questions->\nEvery right answer is rewarded with 4 mark and wrong answer is rewarded with -4"))
}

function topPerformers() {
    console.log(welcome("We have " + highScore.length + " top performers" + "\nThey are:"))
    for (var k = 0; k < highScore.length; k++) {
        console.log(welcome((k + 1) + ": " + highScore[k].name + "\n" + "Score: " + highScore[k].score))
    }
}

function quizFunc(question, answer, count) {
    if (count < 6) {
        if (count === 1) {
            console.log(chalkpiece.bgWhite("\n-----------------------------------------------"))
        }
        console.log("")
        console.log(correctAnswer("Quick Reminder:\n +1 for right answer -1 for wrong answer"))
        console.log("")
        quizHelper(question, answer, levelOne)
    } else if (count > 5 && count < 11) {

        console.log(correctAnswer("Quick Reminder\n +2 for right answer -2 for wrong answer"))
        console.log("")
        quizHelper(question, answer, levelTwo)
    } else if (count > 10 && count < 16) {
        console.log("")
        console.log(correctAnswer("Quick Reminder\n +3 for right answer -3 for wrong answer"))
        console.log("")
        quizHelper(question, answer, levelThree)
    } else if (count > 15 && count < 21) {
        console.log("")
        console.log(correctAnswer("Quick Reminder\n +4 for right answer -4 for wrong answer"))
        console.log("")
        quizHelper(question, answer, levelFour)
    }
}
for (var i = 0; i < quizQnA.length; i++) {
    quizFunc(quizQnA[i].question, quizQnA[i].answer, count)
    count++
    if (i === (quizQnA.length) - 1) {
        topPerformers()
        console.log("Your final score is: " + score)
        for (var j = 0; j < highScore.length; j++) {
            if (score > highScore[j].score) {
                bingeWatcher = 1
                console.log(highest("Hurray! Kudos " + " You beat->" + highScore[j].name + " by " + ((score - highScore[j].score)) + " points"))
                if (j === highScore.length - 1) {
                    console.log("\n Please send us a Screenshot of your score")
                }
            }
        }
    }
}
var rating = readline.question(highest("\nHow much would you rate this quiz (out of 10)?:") + " ")
console.log('\nYou rated: ' + rating);
console.log(emoji = (rating < 6 && rating > 0) ? " ;| " : (rating > 5 && rating < 9) ? ":)" : (rating > 8 && rating < 11) ? "Wah Wah! Thank you ;) ;D " : (rating < 1 && rating > -1) ? ":( :|" : "Invalid! Please Enter a number from 1-10")