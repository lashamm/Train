    let ticketIdSummon = JSON.parse(localStorage.getItem('tktSrtg'));
    let deleteBtn = document.querySelector('.btn')

    console.log(ticketIdSummon[0].people[0].seatId)
    let ticketId = ticketIdSummon[0].people[0].seatId

    console.log(ticketIdSummon)

        deleteBtn.addEventListener('click', function(){
             let ticketIdSummon = JSON.parse(localStorage.getItem('tktSrtg'));
             let ticketId = ticketIdSummon[0].people[0].seatId
             console.log(ticketId)
            fetch(`https://railway.stepprojects.ge/api/tickets/cancelAll`, {
                    method: "DELETE",
                })
                .then(x => console.log(x)
                )
            console.log(ticketId + ' წაიშალა')
            localStorage.removeItem('tktSrtg')
        })
