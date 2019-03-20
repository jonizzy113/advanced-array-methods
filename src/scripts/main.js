// console.log(businesses)

const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

let zipCodeProperty = "addressZipCode"

// businesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business["addressStateCode"]}, ${business[zipCodeProperty]}
//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// });


// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
//     return inNewYork
//   })
//   const manufacturingBusinesses = businesses.filter(business => {
//       if (business.companyIndustry === "Manufacturing") {
//           return true
//       } else {
//           return false
//       }
//   })

// to show list of businesses with manufacturing
//   manufacturingBusinesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business["addressStateCode"]}, ${business[zipCodeProperty]}
//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// });


// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
// const agents = businesses.map(business => {
//     return business.purchasingAgent
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
//   outEl.innerHTML += "<hr/>";
// });
// const agent =businesses.map(business => {
//     return {
//         fullName: `${business.purchasingAgent.nameFirst}  $
//         {busi}`
//         copmany:
//         phoneNumber:
//     }
// })

// const agent = businesses.map(business => {
//     let agent = {};
//     agent.fullName = business.purchasingAgent.nameFirst + ""
//         + business.purchasingAgent.nameLast;
//     agent.compamy = business.companyName;
//     agent.phoneNumber = business.phoneWork;
//     return agent
// })
// agent.forEach(agent => {
//     outEl.innerHTML += `
//     <h2>${agent.fullName}</h2>
//     <h3>${agent.compamy}</h3>
// <h3>${agent.phoneNumber}</h3>`
//     outEl.innerHTML += "<hr/>";
// })
// console.log(agent)


// find method
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.companyName.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) ||business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameFirst +   " "+foundBusiness.purchasingAgent.nameLast}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });


// reduce method
// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
// let totalOrders = business.orders.reduce(
//     (currentTotal, nextValue) => currentTotal += nextValue,
//     0
// )

//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });


// lighting exercise 1 
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((cuurentTotal, nextValue) =>
cuurentTotal +=nextValue)


console.log(totalRainfall)

// lighting excersice 2 
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((sentence, word) => sentence + " " + word)

console.log(sentence)