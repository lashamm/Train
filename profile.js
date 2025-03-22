let profileObj = localStorage.getItem('userObj')
console.log(JSON.parse(profileObj))

let userInfo = document.querySelector('.userInfo')

userInfo.innerHTML = `
    <p>სახელი: ${JSON.parse(profileObj)[0].name}</p>
    <p>ნომერი: ${JSON.parse(profileObj)[0].mail}</p>
    <p>მეილი: ${JSON.parse(profileObj)[0].num}</p>
`
