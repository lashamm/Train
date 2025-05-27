let ticketData = JSON.parse(localStorage.getItem('tktSrtg') || 'null');

let deleteBtn = document.querySelector(".btn")
let textElement = document.querySelector('.text');


let ticketId = ticketData?.[0]?.people?.[0]?.seatId;


if (!ticketId) {
    textElement.innerHTML = `<h1>თქვენ არ გაქვთ ნაყიდი ბილეთები</h1>`;
} else {
    textElement.innerHTML = `
        <h1>თქვენი ბილეთის Id არის ${ticketId} გასაუქმებლად დააჭირეთ ღილაკ "წაშლა"-ს</h1>
    `;
}

        deleteBtn.addEventListener('click', function(){
             let text = document.querySelector('.text')
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
            text.innerHTML = `
            <h1>თქვენ გააუქმეთ ბილეთები</h1>
            `
        })
