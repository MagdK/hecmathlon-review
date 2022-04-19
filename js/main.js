class HECMAthlon {
    // constructor(input) {
    //     this.input = input;
    // }
    getMaxValue(input) {
        const maxValues = input.split(",");
        
        let maxValue = maxValues.reduce((a, b) => {
            return Math.max(a, b)
        })
        return [maxValue];
    }

    getGreaterThan(input) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num > parseInt(input))
    }

    fizzBuzz(input) {
        const numbers = [ ...Array(parseInt(input) + 1).keys() ].slice(1);
        return numbers.map(k => {
            let value;
            if(k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
            else if(k % 3 === 0) value = "Fizz";
            else if(k % 5 === 0) value = "Buzz";
            else value = k;
            return value;
        })
    }
    
}

export default HECMAthlon; 