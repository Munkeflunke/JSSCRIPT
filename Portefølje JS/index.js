function hej() {
    console.log("Hejsa og velkommen til mine svar");
}

hej();

console.log("\n" +
    "Create an array that holds 8 grades (integers between 0 and 100) representing the scores of different students - level 1")

function tal(a, b) {
    const returnedNumber = a + b;
    return returnedNumber;
}

const returnedNumber = tal(2, 6);

console.log("Log out how many grades there are - level 1")
console.log(returnedNumber);

console.log("\n" +
    "Classify each grade into one of the following categories - level 2\n" +
    "\n" +
    "A if the grade is 90 or above.\n" +
    "\n" +
    "B if the grade is between 80 and 89.\n" +
    "\n" +
    "C if the grade is between 70 and 79.\n" +
    "\n" +
    "D if the grade is between 60 and 69.\n" +
    "\n" +
    "F if the grade is below 60.")

let grade = [85, 92, 78, 63, 95, 88, 72, 54, 81, 67];
let results = [];  // Array to store the grades

grade.forEach(point => {
    if (point >= 90) {
        console.log(`${point} ;"grade is A"`);
    } else if (point >= 80) {
        console.log(`${point} ;"grade is B"`);
    } else if (point >= 70) {
        console.log(`${point} ;"grade is C"`);
    } else if (point >= 60) {
        console.log(`${point} ;"grade is D"`);
    } else {
        console.log(`${point} ;"grade is F"`);
    }
});

console.log("\n" +
    "Evaluate overall class performance - level 2\n" +
    "\n" +
    "If the average grade is 90 or above, the class performance is Excellent.\n" +
    "\n" +
    "If the average grade is between 80 and 89, the performance is Good.\n" +
    "\n" +
    "If the average grade is between 70 and 79, the performance is Satisfactory.\n" +
    "\n" +
    "If the average grade is below 70, the performance is Needs Improvement.")


let sumgrade=0
for (let i = 0; i < grade.length; i++) {
    sumgrade += grade[i];
}

let avggrade =(sumgrade/grade.length);
console.log("avg_grade",avggrade)

function avggrades(point) {
    if (point >= 90 && point <= 100) {
        return "performance: Excellent";
    } else if (point >= 80 && point < 90) {
        return "performance: Good";
    } else if (point >= 70 && point < 80) {
        return "performance: Satisfactory";
    }  else {
        return "performance: Needs improvement";
    }
}

console.log(avggrades(avggrade))



console.log("\n" +
    "Optional - Determine - level 3\n" +
    "\n" +
    "The highest grade in the array.\n" +
    "\n" +
    "The lowest grade in the array.\n" +
    "\n" +
    "The average grade.")


const maxgrade=Math.max(...grade);
    console.log("højeste karakter" + maxgrade + "class is A")
const mingrade=Math.min(...grade);
    console.log("laveste karakter" + mingrade + "class is F")
console.log(avggrade+ "dette er gennemsnitskarakteren")




console.log("Objectives:\n" +
    "\n" +
    "Log out how many moves there are in the island - level 1\n" +
    "\n" +
    "For each move log the following out - level 2 If there is a treasure log out: Treasure found at move 3 :) If there is not a treasure log out: No treasure found :(\n" +
    "\n" +
    "Log out how many treasures there are in the island - level 3\n" +
    "\n" +
    "Example output:\n" +
    "\n" +
    "The following array should output the following:")



const island = ['-', '-', '-', 'T', '-', "T"];
island.forEach((step, i) => {
    if (step === 'T') {
        console.log(`Step ${i + 1}: You have now found the treasure!`);
    } else {
        console.log(`${i + 1}: Steps taken, no treasure yet.`);
    }
});


console.log("How many T?")


let checkt=0
for (let i = 0; i < island.length; i++) {
    if(island[i]==="T") checkt+=1
}
console.log(checkt)



const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];



console.log("Create a function called getStartupName. When called it should return a random startup name. Here is how it should work:\n" +
    "\n" +
    "Inside the function there should be two arrays with starutp words\n" +
    "\n" +
    "Use the two arrays to get a random word from each array and return the new startup name with the two words")
function startupname(firstIndex, secondIndex) {
    return firstWords[firstIndex]  + secondWords[secondIndex];
}
console.log(startupname(6,5))


const randomFirstIndex = Math.floor(Math.random() * firstWords.length);
const randomSecondIndex = Math.floor(Math.random() * secondWords.length);
console.log(startupname(randomFirstIndex,randomSecondIndex))