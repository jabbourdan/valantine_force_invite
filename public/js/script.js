const answers_no = {
    english: [
        "No", "Are you sure?", "Really sure??", "Think again?", 
        "Last chance!", "Surely not?", "You might regret this!", 
        "Give it another thought!", "Are you absolutely sure?", 
        "This could be a mistake!", "Have a heart!", "Don't be so cold!", 
        "Change of heart?", "Wouldn't you reconsider?", "Is that your final answer?", 
        "Ok, Let's just start over.."
    ],
    hebrew: [
        "לא", "בטוח/ה?", "באמת בטוח/ה??", "חשבי שוב?", 
        "הזדמנות אחרונה!", "בטוח שלא?", "את/ה תתחרט/י!", 
        "תחשוב/י על זה שוב!", "בטוח/ה לחלוטין?", 
        "זו יכולה להיות טעות!", "תהיה/י נחמד/ה!", "אל תהיה/י כזה/כזו קר/ה!", 
        "אולי תשנה/י את דעתך?", "לא תשקול/י שוב?", "זו התשובה הסופית?", 
        "טוב.. בואו נתחיל מהתחלה.."
    ],
    arabic: [
        "لا", "هل أنت متأكد؟", "متأكد حقاً؟", "فكر مرة أخرى؟", 
        "فرصة أخيرة!", "بالتأكيد لا؟", "قد تندم على هذا!", 
        "فكر ملياً!", "هل أنت متأكد تماماً؟", 
        "قد يكون هذا خطأ!", "كن حنوناً!", "لا تكن بارداً جداً!", 
        "تغيير في الرأي؟", "ألا تعيد التفكير؟", "هل هذا قرارك النهائي؟", 
        "حسناً، لنبدأ من جديد.."
    ]
};

const answers_yes = {
    english: "Yes",
    hebrew: "כן",
    arabic: "نعم"
};

let language = "english";
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;

    // Growth logic
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    yes_button.style.fontSize = `${(size/50) * 18}px`; // Scale font with button

    let total = answers_no[language].length;

    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "70px";
        yes_button.style.fontSize = "18px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();

    document.getElementsByClassName('buttons')[0].style.display = "none";
    document.getElementsByClassName('message')[0].style.display = "block";
    
    createHearts();
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    language = selectElement.value;

    const questionHeading = document.getElementById("question-heading");
    const successMessage = document.getElementById("success-message");
    const langLabel = document.getElementById("lang-label");
    const body = document.body;

    if (language === "hebrew") {
        questionHeading.textContent = "התואיל/י להיות הוולנטיין שלי?";
        successMessage.textContent = "יששש! נתראה בקרוב :3";
        langLabel.textContent = "בחר שפה:";
        body.style.direction = "rtl";
    } else if (language === "arabic") {
        questionHeading.textContent = "هل تقبلين أن تكوني الفالنتاين الخاص بي؟";
        successMessage.textContent = "يااااي! أراكِ قريباً :3";
        langLabel.textContent = "اختر اللغة:";
        body.style.direction = "rtl";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
        successMessage.textContent = "Yepppie, see you sooonnn :3";
        langLabel.textContent = "Choose Language:";
        body.style.direction = "ltr";
    }

    yes_button.innerHTML = answers_yes[language];
    no_button.innerHTML = answers_no[language][0];
}

function createHearts() {
    const container = document.getElementById('heart-container');
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}