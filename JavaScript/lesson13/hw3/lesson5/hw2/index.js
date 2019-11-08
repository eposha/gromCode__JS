 export const getPrimes = n => {
     if (typeof n !== 'number' || n <= 0) return null;
     console.log(1);
     nextStep: for (let i = 2; i < n; i++) {
         for (let j = 2; j < i; j++) {
             if (i % j == 0) {
                 continue nextStep;
             }

         }
         console.log(i);
     }
 };

 //  console.log(getPrimes(5));