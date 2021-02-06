
// Original function:

// function division(a, b) {    
//     return a % b;
// }


// Arrow function:

const division = (a,b) => (a % b);

const result = division(10,3)
console.log("Result: ",result);



const resultContainer = document.querySelector(".question1");
resultContainer.innerHTML = `<p>The result is: ${result}</p>`;