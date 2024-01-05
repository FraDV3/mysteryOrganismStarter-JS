// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};


// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns an object that contains the properties specimenNum and dna
const pAequorFactory = (specimenNum, dna) => {
  
  return {
  
    specimenNum,
    dna,
    
    // Genetic mutation 
    mutate() {

      let randBaseIndex = Math.floor(Math.random() * this.dna.length);
      let randBase = this.dna[randBaseIndex];
      let newBase = returnRandBase();
      
      if (randBase === newBase) {
        newBase = returnRandBase();
      }

      this.dna[randBaseIndex] = generatedBase;
      return `The base ${randBaseIndex} has changed from ${randBase} to ${newBase}`;
  
    },

    // DNA comparisson 
    compareDNA(pAequor) {
       let example1 = mockUpStrand();
      let example2 = this.dna;
      let counter = 0;
      for (let j = 0; j < example1.length; j++) {
        for (let k = 0; k < example2.length; k++) {
          if (j === k && example1[j] === example2[k]) {
            counter++;
            console.log(counter);
          }
        }
      }

      matchPercentage = ((counter / this.dna.length) * 100);
      
      return `Specimen #1 and specimen #2 have ${(matchPercentage).toFixed(2)}% DNA in common`;
    },

    willLikelySurvive() {
      
      let count = 0

      for (let l = 0; l < this.dna.length; l++) {
        
        if (this.dna[l] === 'C' || this.dna[l] === 'G') {
          
          count++;
        }
      };

      if (((count / this.dna.length) * 100) >= 60) {

        return true;
      } else {

        return false;
      }
    },
  }
};

const survivors = () => {

  let survivorsArr = []
  let counter = 0
  
  while (counter < 30) {
    
    let pAequor = pAequorFactory(counter, mockUpStrand());

    if (pAequor.willLikelySurvive() === true) {

      counter++
      pAequor.specimenNum = counter
      survivorsArr.push(pAequor);
    }
  }

  return survivorsArr;
};

// DNA Comparisson
console.log(pAequorFactory(1, mockUpStrand()).compareDNA());

// Survival Chances
console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive());

// Survivors Array
console.log(survivors());