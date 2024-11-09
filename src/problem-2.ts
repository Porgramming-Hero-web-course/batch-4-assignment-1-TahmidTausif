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

    console.log(removeDuplicates([1,1,2,2,3,3,4,4,4,4,5,5,8,8,6,6,7,7]));

}