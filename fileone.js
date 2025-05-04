//This is a normal/traditional function in JS
function greet() {
    console.log("Hello");
}

greet();


//This is an arrow function
const greet2 = () => console.log("Hello");
greet2();

const greet3 = (num1, num2) => {
    const result = num1 + num2;
    console.log(`The result is ${result}`);
}
greet3(10, 25);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(`The old list id ${numbers}`);
console.log(`The new list id ${doubled}`);
console.log(typeof numbers);

const loopsExample = () => {

    ///For loop example
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    ///While loop example
    let i = 11;
    while (i < 10) {
        console.log(i);
        i++;
    }

    ///Do while loop example
    let j = 11;
    do {
        console.log(j);
        j++;
    } while (j < 10);


    ///For...of loop
    const courses = ["HTML", "CSS", "JS", "React", "Node"];
    for (const course of courses) {
        console.log(course);
    }

    for (const course in courses){
        console.log(course);
    }

    //for...in loop

    const coursesObj = {
        "BCA": "4 Years",
        "MBA": "2 Years",
        "BTECH": "3 Years",
        "MMBS": "5 Years",
    }

    for(const courseKey in coursesObj){
       console.log(courseKey); 
       console.log(`The value of ${courseKey} is ${coursesObj[courseKey]}`);
    }

    courses.forEach(singleCourse => {
        console.log(`Using forEach loop ${singleCourse}`);
    });
}

loopsExample();

