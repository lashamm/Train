let cont = document.querySelector('.cont')
let sel = document.querySelector('.sel')
let sel2 = document.querySelector('.sel2')
let selChild = document.querySelector('.selChild')
let selChild2 = document.querySelector('.selChild2')
let dateINP = document.querySelector('.dateINP')
let search = document.querySelector('.search')
let userArr = [];

function render(arr) {
  cont.innerHTML = ``
  console.log("Rendering data:", arr)

  for (let el of arr) {
console.log(el)
    for (let el2 of el.trains){
      console.log(el2)
      let train = document.createElement("div")
      train.innerHTML = `
        <div class="inCont">
          <p>დან: ${el2.from}</p>
          <p>მდე: ${el2.to}</p>
          <p>გასვლა: ${el2.departure}</p>
          <p>ჩასვლა: ${el2.arrive}</p>
          <p>კლასი: ${el2.id % 3 == 1? "I კლასი":(el2.id % 3 == 2?"II კლასი": "ბიზნეს კლასი")}</p>
          <h3>კვირისდღე: ${el2.date}</h3>
          <div class="btn">
            <button><a href="tickets.html?id=${el2.id}">ყიდვა</a></button>
          </div>
        </div>
      `
      cont.appendChild(train)
    }
  }
  
}



search.addEventListener('click', function () {
  const from = selChild.value
  let to = selChild2.value
  let date = dateINP.value

  if (!from || !to || !date) {
    alert("გთხოვთ შეიყვანოთ ყველა ველი!")
    return
  }

fetch(`https://railway.stepprojects.ge/api/getdeparture?from=${from}&to=${to}&date=${date}`)
    .then(resp => resp.json())
    .then(resp => render(resp))
})