// // Code your solution here

const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, string) {

    let filteredArray = arr.filter(el => el.toLowerCase() === string.toLowerCase());
    
   

   console.log(filteredArray)
    return filteredArray;
    
}

function fuzzyMatch(arr, string) {
    let filteredArray = arr.filter(el => {
        let stringLength = string.length;
        
        for (let i = 0; i < stringLength; i++) {
            console.log(el[i], string[i])
            if (el[i] === string[i] && el[stringLength - 1] === string[stringLength - 1]) {
                return el[i]
            }
        }
    })
    console.log(filteredArray)
    return filteredArray;
}

function matchName(arr, string) {
    let newArray = arr.filter(obj => obj.name.toLowerCase() === string.toLowerCase())
    
    console.log(newArray)
    return newArray;
}


findMatching(drivers, 'sammy')
fuzzyMatch(drivers, 'sa')
matchName(drivers1, 'bobby')

