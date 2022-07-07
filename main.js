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
      // chooses a random index of the dna to mutitate.
      let dnaNumber = Math.floor(Math.random() * dna.length);
      let mutatedDna = dna

      //Creates new non repeating bases for every case of nucleotide.
      let ifBaseA = ['T', 'C', 'G']
      let ifBaseT = ['A', 'C', 'G']
      let ifBaseC = ['T', 'A', 'G']
      let ifBaseG = ['T', 'C', 'A']

      //Changes a random nucleotide from the dna, to a new one (while avoiding repetition like A becoming A).
      if (mutatedDna[dnaNumber] === 'A') {
        let random = Math.floor(Math.random() * ifBaseA.length);
        let newDna = ifBaseA[random];
        if (dnaNumber !== -1) {
          mutatedDna[dnaNumber] = newDna;
          return mutatedDna;
        }
      } else if (mutatedDna[dnaNumber] === 'T') {
        let random = Math.floor(Math.random() * ifBaseT.length);
        let newDna = ifBaseT[random];
        if (dnaNumber !== -1) {
          mutatedDna[dnaNumber] = newDna;
          return mutatedDna;
        }
      } else if (mutatedDna[dnaNumber] === 'C') {
        let random = Math.floor(Math.random() * ifBaseC.length);
        let newDna = ifBaseC[random];
        if (dnaNumber !== -1) {
          mutatedDna[dnaNumber] = newDna;
          return mutatedDna;
        }
      } else if (mutatedDna[dnaNumber] === 'G') {
        let random = Math.floor(Math.random() * ifBaseG.length);
        let newDna = ifBaseG[random];
        if (dnaNumber !== -1) {
          mutatedDna[dnaNumber] = newDna;
          return mutatedDna;
        }
      } else {
        return false;
      }
    }
  }
}

let spe1 = pAequorFactory(1, mockUpStrand())
console.log(spe1)
console.log(spe1.mutate());









