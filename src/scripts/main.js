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


outEl.innerHTML += "<h1>Purchasing Agents</h1>";

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

const agent = businesses.map(business => {
    let agent = {};
    agent.fullName = business.purchasingAgent.nameFirst + ""
    + business.purchasingAgent.nameLast;
    agent.compamy = business.companyName;
    agent.phoneNumber = business.phoneWork;
    return agent
})
agent.forEach(agent => {
    outEl.innerHTML +=`
    <h2>${agent.fullName}</h2>
    <h3>${agent.compamy}</h3>
    <h3>${agent.phoneNumber}</h3>` 
    outEl.innerHTML += "<hr/>";
})
console.log(agent)