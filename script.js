// فتح وإغلاق قائمة الثلاث نقاط
function toggleMenu() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

// إغلاق القائمة عند الضغط خارجها
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function selectSection(num) {
    const sections = [
        "قسم ملفات IPA",
        "قسم ملفات APK",
        "قسم حلول آيفون",
        "قسم حلول أندرويد",
        "قسم حلول كمبيوتر",
        "قسم أسأل AI",
        "قسم Melux"
    ];
    alert("مرحباً بك! تم اختيار: " + sections[num - 1]);
}

// قاموس الترجمات للغات الأربع (العربية، الإنجليزية، الروسية، الفيتنامية)
const translations = {
    ar: {
        heroTitle: "مرحباً في موقع Melux",
        heroDesc: "الموقع لمساعدتك في اي مشكلة قد تواجهك فقط اختار القسم المناسب لك وسوف تجد الذي تريده بإذن الله ❤️",
        mainTitle: "الأقسام الرئيسية",
        sec1: "1. ملفات IPA", desc1: "تطبيقات وأدوات الآيفون بصيغة IPA.",
        sec2: "2. ملفات APK", desc2: "تطبيقات وأدوات الأندرويد بصيغة APK.",
        sec3: "3. حلول آيفون", desc3: "حلول مشاكل ونظام iOS للايفون.",
        sec4: "4. حلول أندرويد", desc4: "حلول مشاكل ونظام Android.",
        sec5: "5. حلول كمبيوتر", desc5: "حلول مشاكل أنظمة الكمبيوتر والبرمجيات.",
        sec6: "6. أسأل AI", desc6: "تحدث مع المساعد الذكي الخاص بـ Melux.",
        sec7: "7. Melux", desc7: "عن المنصة والرؤية والفريق.",
        aiTitle: "مساعد Melux الذكي",
        aiDefault: "أهلاً بك! اسألني أي شيء (مثل: من هو صانع الذكاء الاصطناعي؟)",
        sendBtn: "إرسال",
        footer: "جميع الحقوق محفوظة © Melux 2026",
        creatorAnswer: "تم صنع AI من قبل Melux لمساعدة مطوري الايفون ومطورين الاندرويد و الكمبيوتر كذلك، ماهو سؤالك الاخر"
    },
    en: {
        heroTitle: "Welcome to Melux",
        heroDesc: "The site to help you with any problem you may face, just choose the appropriate section and you will find what you want, God willing ❤️",
        mainTitle: "Main Sections",
        sec1: "1. IPA Files", desc1: "iPhone apps & tools in IPA format.",
        sec2: "2. APK Files", desc2: "Android apps & tools in APK format.",
        sec3: "3. iPhone Solutions", desc3: "iOS problems and iPhone fixes.",
        sec4: "4. Android Solutions", desc4: "Android troubleshooting and solutions.",
        sec5: "5. PC Solutions", desc5: "Computer systems and software solutions.",
        sec6: "6. Ask AI", desc6: "Chat with Melux smart assistant.",
        sec7: "7. Melux", desc7: "About the platform, vision, and team.",
        aiTitle: "Melux AI Assistant",
        aiDefault: "Welcome! Ask me anything (e.g., who is the creator of AI?)",
        sendBtn: "Send",
        footer: "All rights reserved © Melux 2026",
        creatorAnswer: "AI was created by Melux to help iPhone, Android, and PC developers. What is your other question?"
    },
    ru: {
        heroTitle: "Добро пожаловать в Melux",
        heroDesc: "Сайт, который поможет вам решить любую проблему, просто выберите нужный раздел, и вы найдете то, что хотите, с божьей помощью ❤️",
        mainTitle: "Основные разделы",
        sec1: "1. IPA файлы", desc1: "Приложения и инструменты для iPhone в формате IPA.",
        sec2: "2. APK файлы", desc2: "Приложения и инструменты для Android в формате APK.",
        sec3: "3. Решения iPhone", desc3: "Проблемы с iOS и исправления для iPhone.",
        sec4: "4. Решения Android", desc4: "Устранение неполадок и решения для Android.",
        sec5: "5. Решения для ПК", desc5: "Компьютерные системы и программные решения.",
        sec6: "6. Спросить ИИ", desc6: "Общайтесь с умным помощником Melux.",
        sec7: "7. Melux", desc7: "О платформе, видении и команде.",
        aiTitle: "ИИ-помощник Melux",
        aiDefault: "Добро пожаловать! Спросите меня о чем угодно (например, кто создал ИИ?)",
        sendBtn: "Отправить",
        footer: "Все права защищены © Melux 2026",
        creatorAnswer: "ИИ был создан Melux для помощи разработчикам iPhone, Android и ПК. Каков ваш следующий вопрос?"
    },
    vi: {
        heroTitle: "Chào mừng đến với Melux",
        heroDesc: "Trang web giúp bạn giải quyết mọi vấn đề, chỉ cần chọn phần thích hợp và bạn sẽ tìm thấy những gì bạn muốn, ơn Chúa ❤️",
        mainTitle: "Các phần chính",
        sec1: "1. Tệp IPA", desc1: "Ứng dụng & công cụ iPhone định dạng IPA.",
        sec2: "2. Tệp APK", desc2: "Ứng dụng & công cụ Android định dạng APK.",
        sec3: "3. Giải pháp iPhone", desc3: "Khắc phục sự cố iOS và iPhone.",
        sec4: "4. Giải pháp Android", desc4: "Khắc phục sự cố và giải pháp Android.",
        sec5: "5. Giải pháp PC", desc5: "Giải pháp phần mềm và hệ thống máy tính.",
        sec6: "6. Hỏi AI", desc6: "Trò chuyện với trợ lý thông minh Melux.",
        sec7: "7. Melux", desc7: "Giới thiệu về nền tảng, tầm nhìn và đội ngũ.",
        aiTitle: "Trợ lý AI Melux",
        aiDefault: "Chào bạn! Hãy hỏi tôi bất cứ điều gì (ví dụ: ai là người tạo ra AI?)",
        sendBtn: "Gửi",
        footer: "Bảo lưu mọi quyền © Melux 2026",
        creatorAnswer: "AI được tạo ra bởi Melux để giúp các nhà phát triển iPhone, Android và PC. Câu hỏi tiếp theo của bạn là gì?"
    }
};

let currentLang = 'ar';

function changeLanguage(lang) {
    currentLang = lang;
    const root = document.getElementById("html-root");
    
    // ضبط اتجاه الصفحة حسب اللغات
    if (lang === 'ar') {
        root.setAttribute("dir", "rtl");
        root.setAttribute("lang", "ar");
    } else {
        root.setAttribute("dir", "ltr");
        root.setAttribute("lang", lang);
    }

    // تحديث النصوص في الموقع بالكامل تلقائياً
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

function askAI() {
    const inputField = document.getElementById("user-input");
    const input = inputField.value.trim().toLowerCase();
    const output = document.getElementById("chat-output");

    if (!input) {
        output.innerText = currentLang === 'ar' ? "الرجاء كتابة سؤالك أولاً." : "Please type your question first.";
        return;
    }

    // رد حقوق Melux المتطابق حسب اللغة المختارة
    output.innerText = translations[currentLang].creatorAnswer;
    inputField.value = "";
}
