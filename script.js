// Elementlarni tanlab olamiz
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const eyeBtn = document.getElementById('eye');
const submitBtn = document.getElementById('w1');

// 1. Dastlab parolni yashirin (password) rejimiga o'tkazamiz
inp2.type = 'password';

// 2. Har ikkala input to'ldirilganligini tekshiruvchi funksiya
function checkInputs() {
    // Inputlardagi bo'shliqlarni olib tashlab tekshiramiz
    if (inp1.value.trim() !== '' && inp2.value.trim() !== '') {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
    } else {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'not-allowed';
    }
}

// Boshlanishida tugmani o'chirib qo'yamiz
checkInputs();

// Inputlarga matn kiritilganda tekshirish
inp1.addEventListener('input', checkInputs);
inp2.addEventListener('input', checkInputs);

// 3. Ko'z tugmasi bosilganda parolni ko'rsatish yoki berkitish
eyeBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Sahifa qayta yuklanib ketmasligi uchun

    if (inp2.type === 'password') {
        inp2.type = 'text'; // Parolni ko'rsatish
    } else {
        inp2.type = 'password'; // Parolni nuqtacha qilib berkitish
    }
});
































































































































































































