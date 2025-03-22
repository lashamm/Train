// export{userObj}
let btn = document.querySelector('.btn')
let regist = document.querySelector('.regist')
let nameInput = document.querySelector('.name')
let mailInput = document.querySelector('.mail')
let numInput = document.querySelector('.num')

let userObj = []

regist.addEventListener('click', function(){
   
    let user = {
        name: nameInput.value,
        mail: mailInput.value,
        num: numInput.value
    }
    userObj.push(user)
    console.log(userObj)
    localStorage.setItem('userObj', JSON.stringify(userObj))
})
