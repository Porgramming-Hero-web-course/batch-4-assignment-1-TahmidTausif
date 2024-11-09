{
    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLowerCase().split(' ');
        const targetWord = word.toLowerCase();

        let count: number = 0;
        for(const w of words) {
            if(w === targetWord){
                count++
            }
        }

        return count;
    }


}