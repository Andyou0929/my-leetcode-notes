class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        return new Calculator(this.value +value)
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        return new Calculator(this.value -value)
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        return new Calculator(this.value *value)
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw 'Division by zero is not allowed'
        }else{
            return new Calculator(this.value /value)
        }
        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        return new Calculator(Math.pow(this.value,value))
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value
    }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()); // 8
console.log(new Calculator(2).multiply(5).power(2).getResult()); // 100

console.log(new Calculator(20).divide(0).getResult());