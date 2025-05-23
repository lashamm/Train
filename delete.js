

// fetch(`https://railway.stepprojects.ge/api/tickets/cancel/${ticketId}`, {
//                     method: "DELETE",
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                 })

    let ticketIdSummon = JSON.parse(localStorage.getItem('tktSrtg'));
    let deleteBtn = document.querySelector('.btn')

    console.log(ticketIdSummon[0].people[0].seatId)
    let ticketId = ticketIdSummon[0].people[0].seatId

        deleteBtn.addEventListener('click', function(){
            fetch(`https://railway.stepprojects.ge/api/tickets/cancel/${ticketId}`, {
                    method: "DELETE",
                })
                .then(x => console.log(x)
                )
            console.log(ticketId + ' წაიშალა')
        })
