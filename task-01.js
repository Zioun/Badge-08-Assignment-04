//TODO: 1. function will receive a parameter which will be number.
//TODO: 2. convert the number to cube.
//TODO: 3. return the result.
//TODO: 4. return error message if we get other data types instead of number 

// ? make cube of a privided number ------*
function cubeNumber(number){
    if(typeof number !== 'number'){
        return ('pleace Provider a number');
    }
    let result = Math.pow(number,3);
    return result;
    
}
console.log(cubeNumber(8));