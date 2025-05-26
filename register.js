// export{userObj}
let btn = document.querySelector('.btn')
let regist = document.querySelector('.regist')
let nameInput = document.querySelector('.name')
let mailInput = document.querySelector('.mail')
let numInput = document.querySelector('.num')
let pass = document.querySelector('#password')
let cardNum = document.querySelector('#cardNum')
let owner = document.querySelector('#owner')
let expData = document.querySelector('#expData')
let ccv = document.querySelector('#CCV')

let userObj = []

btn.addEventListener('click', function() {
    if(!nameInput.value || !mailInput.value || !numInput.value || 
       !pass.value || !cardNum.value || !owner.value || !expData.value || !ccv.value) {
        alert('გთხოვთ შეავსოთ ყველა მონაცემი');
    }
else{
    let userObj = JSON.parse(localStorage.getItem('userObj')) || [];
    userObj.push({
        name: nameInput.value,
        mail: mailInput.value,
        num: numInput.value,
        pass: pass.value,
        cardNum: cardNum.value,
        owner: owner.value,
        expData: expData.value,
        ccv: ccv.value
    });
    
    localStorage.setItem('userObj', JSON.stringify(userObj));
    
    console.log("Attempting redirect to search.html");

    try {
        window.location.assign('./search.html');
        setTimeout(() => {
            if(window.location.href.indexOf('search.html') === -1) {
                console.warn("Standard redirect failed, trying replace");
                window.location.replace('./search.html');
            }
        }, 100);
    } catch(e) {
        console.error("Redirect failed completely:", e);
        alert("Please run this through a local server (see instructions)");
    }
}});