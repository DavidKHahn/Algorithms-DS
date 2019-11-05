const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach

  companies.forEach(company => {
      console.log(company.name)
  })

// Alternative method
//   for(let i = 0; i<companies.length; i++){
//       console.log(companies[i]);
//   }


// filter

// Get 21 and older

// const canDrink = ages.filter(age => {
//   if (age >= 21) {
//     return true;
//   }
// })

// ES6 Version

const canDrink = ages.filter(age => age >= 21);

console.log(canDrink)

// Alternate method
// for (let i =0; i<ages.length; i++){
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// Filter Retail Companies

// const retailCompanies = companies.filter((company) => {
//   if(company.category === 'Retail') {
//     return true;
//   }
// })

// ES6 Version

const retailCompanies = companies.filter(company => company.category === 'Retail')

console.log(retailCompanies)

// Get 80's companies

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))

console.log(eightiesCompanies)

// Get companies that lasted 10 years or more

const tenYearCompanies = companies.filter(company => (company.end - company.start >= 10))

console.log(tenYearCompanies)

// Map

// Create array of company names

// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

const testMap = companies.map(company => `${company.name} [${company.end} - ${company.start}]`)
console.log(testMap)

//   'Company One [2004 - 1981]',
//   'Company Two [2008 - 1992]',
//   'Company Three [2007 - 1999]',
//   'Company Four [2010 - 1989]',
//   'Company Five [2014 - 2009]',
//   'Company Six [2010 - 1987]',
//   'Company Seven [1996 - 1986]',
//   'Company Eight [2016 - 2011]',
//   'Company Nine [1989 - 1981]' ]

const agesSquare = ages
// square roots each age
  .map(age => Math.sqrt(age))
// multipies each age by 2
  .map(age => age * 2)

console.log(agesSquare)


// Sort

