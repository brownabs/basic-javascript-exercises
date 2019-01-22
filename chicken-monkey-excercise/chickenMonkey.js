// Write a program that prints the numbers from 1 to 100. 
// But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven 
// (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".
// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator




    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
        console.log(currentNumber)
        if  (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
            console.log("ChickenMonkey")
        } else if (currentNumber % 5 === 0) {
            console.log("chicken") 
        } else if (currentNumber % 7 === 0) {
            console.log("monkey")
        }
    }
 
    //could also do it like this 

        
    // for (var i=1; i < 101; i++) {
    //     if (i % 7 == 0 && i % 5 == 0) console.log("ChickenMonkey");
    //     else if (i % 7 == 0) console.log("Monkey");
    //     else if (i % 5 == 0) console.log("Chicken");
    //     else console.log(i);

    // //code above is not recommended in a team environment 

    //another way to do this 

    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

        let output = `${currentNumber}: `
    
        if (currentNumber % 5 === 0) {
            output += "Chicken"
        }
    
        if (currentNumber % 7 === 0) {
            output += "Monkey"
        }
    
        console.log(output)
    
    }