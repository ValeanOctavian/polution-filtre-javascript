function solution(array) {
  if (array === undefined) {
    alert('please add numbers')
  } else {

    let total = 0;
    for (let n of array) {
      total += n
    }

    let half = total / 2;
    console.log(total, 'impartit la 2 = ', half);
    let totalFiltre = 0;

    const sortedarr = Object.assign(array.sort((a, b) => a - b));

    let factoryDetails = [];
    for (let i = 0; i < sortedarr.length; i++) {
      factoryDetails.push({
        pollution: sortedarr[i],
        index: i,
      });
    }

    const addFilters = (factoryDetails) => {
      factoryDetails[0].pollution = factoryDetails[0].pollution / 2;
      sortedarr[factoryDetails[0].index] = factoryDetails[0].pollution;

      totalFiltre++;
    }
    console.log(factoryDetails);

    for (let i = 0; i < factoryDetails.length; i++) {
      let totalEmission = 0;
      for (let n of sortedarr) {
        totalEmission += n
      }
      factoryDetails.sort((a, b) => a.pollution - b.pollution).reverse();
      if (totalEmission >= half) {
        addFilters(factoryDetails);

      }
    }

    console.log(totalFiltre);
    return totalFiltre;
  }
}

solution([5, 2, 8, 1]);

//NOTE: Eu am inteles in felul urmator:
// sorted : [19, 8, 5, 1] adunate este = cu 33 impartim 33 la 2 ne da 23.5
// impartim cel mai mare nr din array: 19 / 2 = 9.5
// impartim cel mai mare nr din array: 9.5 / 2 = 4.75
// 23.5 - 4.75 = 18.75
// Utmatorul cel mai mare numar este 8 / 2 = 4
// 18.5 - 4 = 14.75

//Si aici am pus un if statement care verifica daca totalul poluarii ramase este mai mica decat jumatatea totalului initial atunci oprim rularea acelui for().


