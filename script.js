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
    alert("أهلاً بك! لقد اخترت: " + sections[num - 1] + "\nتفضل بشرح ما تريد إضافته هنا لنقوم بتطويره فوراً.");
}

function askAI() {
    const input = document.getElementById("user-input").value.trim().toLowerCase();
    const output = document.getElementById("chat-output");

    if (!input) {
        output.innerText = "الرجاء كتابة سؤالك أولاً.";
        return;
    }

    // الرد الثابت والخاص بحقوق Melux عند السؤال عن الصانع
    if (input.includes("صانع") || input.includes("من صنعك") || input.includes("من هو صانع الذكاء الاصطناعي") || input.includes("مين صانعك")) {
        output.innerText = "تم صنع AI من قبل Melux لمساعدة مطوري الايفون ومطورين الاندرويد و الكمبيوتر كذلك، ماهو سؤالك الاخر";
    } else {
        output.innerText = "أنا مساعد Melux الذكي. " + "تم صنع AI من قبل Melux لمساعدة مطوري الايفون ومطورين الاندرويد و الكمبيوتر كذلك، ماهو سؤالك الاخر";
    }

    document.getElementById("user-input").value = "";
}
