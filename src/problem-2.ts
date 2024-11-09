{
    function removeDuplicates(numbers: number[]): number[] {
        const uniqueNumber: Set<number> = new Set();

       return numbers.filter(n => {
        if(!uniqueNumber.has(n)){
            uniqueNumber.add(n)
            return true
        }
        else{
            return false
        }
    }) 
    }

}