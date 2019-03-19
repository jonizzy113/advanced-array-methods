// console.log(businesses)

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

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
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }
    return inNewYork
  })

  const manufacturingBusinesses = businesses.filter(business => {
      if (business.companyIndustry === "Manufacturing") {
          return true
      } else {
          return false
      }
      
  })

  console.log(manufacturingBusinesses)

  manufacturingBusinesses.forEach(business => {
    outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
    ${business.addressCity}, ${business["addressStateCode"]}, ${business[zipCodeProperty]}
    </section>
  `
    outEl.innerHTML += "<hr/>"
});