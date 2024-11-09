{
    class Car {
    
        constructor (
            public make: string,
            public model: string,
            public year: number
        ){}
    
        // Method to calculate car's age
        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }

}