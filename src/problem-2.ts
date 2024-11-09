{
    function removeDuplicates(numbers: number[]): number[] {
        const resultArray: number[] = [];

      for(const num of numbers){
        if(!resultArray.includes(num)){
            resultArray.push(num)
        }
      }

      return resultArray
    
    }

}