let btn = document.querySelector(".button")
btn.addEventListener("click" , () => {
    window.location.href = './add.html'
})
  const savedCard = localStorage.getItem('userCard');

  if (savedCard) {
    // Qisman yashirish (masalan: 8600 **** **** 1234)
    const formatted = savedCard.replace(/^(\d{4})\d{8}(\d{4})$/, '$1 **** **** $2');

    document.querySelector('.card-number').textContent = formatted;
    let button = document.querySelector(".button")
    button.style.display = 'none'
  }
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.querySelector('.time').textContent = timeString;
  }
let savemoney = localStorage.getItem('narh')
if(savemoney) {
  let pul = savemoney
  let balace = document.querySelector(".balance")
  balace.innerHTML = `${pul} <small>UZS</small>`
}
  // Dastlab yuklaganda va keyin har 30 sekundda yangilanadi
  updateTime();
  setInterval(updateTime, 30000); 
  let btn2 = document.querySelector("#btn")
  btn2.addEventListener("click" , () => {
    window.location.href = './tel.html'
  })