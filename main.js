// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let dnaNumber = Math.floor(Math.random() * dna.length);
      let randomDna = dna[dnaNumber];
      let mutatedDna = dna

      let ifBaseA = ['T', 'C', 'G']
      let ifBaseT = ['A', 'C', 'G']
      let ifBaseC = ['T', 'A', 'G']
      let ifBaseG = ['T', 'C', 'A']
      /* let newDna = ''; */

      /* return mutatedDna[dnaNumber] + dnaNumber; */
      if (mutatedDna[dnaNumber] === 'A') {
        let random = Math.floor(Math.random() * ifBaseA.length);
        let newDna = ifBaseA[random];
        return newDna + mutatedDna[dnaNumber] + dnaNumber;
      } else if (mutatedDna[dnaNumber] === 'T') {
        let random = Math.floor(Math.random() * ifBaseT.length);
        let newDna = ifBaseT[random];
        return newDna + mutatedDna[dnaNumber] + dnaNumber;
      } else if (mutatedDna[dnaNumber] === 'C') {
        let random = Math.floor(Math.random() * ifBaseC.length);
        let newDna = ifBaseC[random];
        return newDna + mutatedDna[dnaNumber] + dnaNumber;
      } else if (mutatedDna[dnaNumber] === 'G') {
        let random = Math.floor(Math.random() * ifBaseG.length);
        let newDna = ifBaseG[random];
        return newDna + mutatedDna[dnaNumber] + dnaNumber;
      } else {
        return false;
      }

      if (dnaNumber !== -1) {
        mutatedDna[dnaNumber] = newDna;
        return mutatedDna;
      }
    }
  }
}

let spe1 = pAequorFactory(1, mockUpStrand())
console.log(spe1)
console.log(spe1.mutate())









