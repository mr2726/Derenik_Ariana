const passBtn = document.getElementById('passh');
const wrapper = document.querySelector('.wrapper');
const pass= document.querySelector('.passhunter');
passBtn.addEventListener('click', () => {
    console.log('Pass button clicked');
    wrapper.style.display = 'none';
    pass.style.display = 'block';
});