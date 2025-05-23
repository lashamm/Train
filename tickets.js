let id = window.location.search.split("=")[1]
let btnss = document.querySelector('.btnss')
let trainId = document.querySelector('.trainId')
let buyBtnParent = document.querySelector('.buyBtnParent')

fetch(`https://railway.stepprojects.ge/api/getvagon/${id}`)
.then(resp => resp.json())
.then(resp => render(resp))

function render(data) {
    console.log(data);
    postObj.trainId = data[0].id
    btnss.innerHTML = ''

    data.forEach(vagon => {
        trainId.innerHTML = `<p>მატარებლის ნომერი: ${vagon.trainNumber}</p>`;
        
        vagon.seats.forEach(seats => {
            let seatBtn = document.createElement('button')
            seatBtn.className = "btn"
            seatBtn.innerHTML = `Vagon: ${seats.vagonId} | Seat: ${seats.number} | Price: ${seats.price}₾`
            
            if (postObj.people.some(person => person.seatId === seats.seatId)) {
                seatBtn.style.backgroundColor = 'brown'
                seatBtn.style.color = 'white'
                seatBtn.disabled = true
            } else {
                seatBtn.style.backgroundColor = 'red'
            }

            seatBtn.addEventListener("click", function() {
                if (seatBtn.style.backgroundColor !== "blue" && seatBtn.style.backgroundColor !== "brown") {
                    seatBtn.style.backgroundColor = 'blue'
                    seatBtn.style.color = 'white'
                    postObj.people.push({
                        seatId: seats.seatId,
                        name: "string",
                        surname: "string",
                        idNumber: "string",
                        status: "string",
                        payoutCompleted: true
                    })
                    localStorage.setItem("postObject", JSON.stringify(postObj))
                } else if (seatBtn.style.backgroundColor === "blue") {
                    seatBtn.style.backgroundColor = 'red'
                    postObj.people = postObj.people.filter(el => el.seatId !== seats.seatId)
                    localStorage.setItem("postObject", JSON.stringify(postObj))
                }
            })
            
            btnss.appendChild(seatBtn)
        })
        
        let buyBtn = document.createElement("button")
        buyBtn.className = 'buyBtn'
        buyBtn.innerHTML = `შეძენა`
        
        buyBtn.addEventListener('click', function() {
            Swal.fire({
                title: `ბილეთ(ებ)ის რაოდენობა: ${postObj.people.length}`,
                text: `თანხის უკან დაბრუნება არ შეიძლება`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "შევიძენ!"
            }).then((result) => {
                let formData = localStorage.getItem('postObject')
                fetch('https://railway.stepprojects.ge/api/tickets/register', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: formData,
                })
                .then(x => {
                    console.log(x)
                    localStorage.removeItem('postObject')
                    
                    
                    document.querySelectorAll('.btn').forEach(seatBtn => {
                        if (seatBtn.style.backgroundColor === 'blue') {
                            seatBtn.style.backgroundColor = 'grey'
                        } else if (seatBtn.style.backgroundColor === 'red') {
                            seatBtn.style.backgroundColor = 'red'
                        }
                    })
                })

                if (result.isConfirmed) {
                    Swal.fire({
                        title: "თქვენ წარმატებით შეიძინეთ ბილეთ(ებ)ი",
                        text: "მშვიდობიან მგზავრობას გისურვებთ",
                        icon: "success"
                    });
                    console.log(postObj)
                    tktSrtg.push(postObj)
                    localStorage.setItem('tktSrtg', JSON.stringify(tktSrtg))
                }
            });
        })
        buyBtnParent.appendChild(buyBtn)
    })
}

let tktSrtg = []

let postObj = {
    trainId: 0,
    date: "2025-03-11T14:32:50.024Z",
    email: "string",
    phoneNumber: "string",
    people: []
}

























//   {
//     "seatId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "name": "string",
//     "surname": "string",
//     "idNumber": "string",
//     "status": "string",
//     "payoutCompleted": true
//   }