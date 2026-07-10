import type { L } from "@/i18n/config";

export type CoverageRegion = { name: L; cities: L };

/** "We serve the whole Kingdom" content — the 13 Saudi administrative regions. */
export const serviceCoverage = {
  eyebrow: {"en": "Kingdom-wide coverage", "ar": "تغطية تشمل المملكة"} as L,
  heading: {"en": "We serve every region of the Kingdom", "ar": "نخدمك في جميع مناطق المملكة"} as L,
  subtext: {"en": "We handle your business and government-services (تعقيب) needs across Saudi Arabia — in person wherever our presence is required, and digitally through the Kingdom's official platforms such as Absher, Qiwa, Balady, and Najiz. For companies and individuals alike, we take care of it on your behalf, all the way to completion.", "ar": "نتولّى نيابةً عنك معاملاتك التجارية وخدمات التعقيب في جميع أنحاء المملكة العربية السعودية، حضوريًّا حيثما تطلّب الأمر، ورقميًّا عبر المنصّات الحكومية الرسمية مثل أبشر وقوى وبلدي وناجز. نخدم الشركات والأفراد على حدٍّ سواء، ونتكفّل بإنجازها عنك حتى النهاية."} as L,
  note: {"en": "Wherever you are in the Kingdom, onboarding can be completed entirely remotely — start with us today without leaving your desk.", "ar": "أينما كنت في المملكة، يمكن إتمام إجراءات البدء عن بُعد بالكامل، فتنطلق معنا اليوم دون أن تغادر مكانك."} as L,
  regions: [
    { name: {"en": "Riyadh Region", "ar": "منطقة الرياض"}, cities: {"en": "Riyadh, Diriyah, Al-Kharj, Al-Majma'ah", "ar": "الرياض، الدرعية، الخرج، المجمعة"} },
    { name: {"en": "Makkah Region", "ar": "منطقة مكة المكرمة"}, cities: {"en": "Makkah, Jeddah, Taif, Rabigh", "ar": "مكة المكرمة، جدة، الطائف، رابغ"} },
    { name: {"en": "Madinah Region", "ar": "منطقة المدينة المنورة"}, cities: {"en": "Madinah, Yanbu, Al-Ula, Badr", "ar": "المدينة المنورة، ينبع، العُلا، بدر"} },
    { name: {"en": "Qassim Region", "ar": "منطقة القصيم"}, cities: {"en": "Buraidah, Unaizah, Al-Rass, Al-Bukayriyah", "ar": "بريدة، عنيزة، الرس، البكيرية"} },
    { name: {"en": "Eastern Region", "ar": "المنطقة الشرقية"}, cities: {"en": "Dammam, Al-Khobar, Dhahran, Al-Ahsa, Jubail", "ar": "الدمام، الخبر، الظهران، الأحساء، الجبيل"} },
    { name: {"en": "Asir Region", "ar": "منطقة عسير"}, cities: {"en": "Abha, Khamis Mushait, Bisha, Al-Namas", "ar": "أبها، خميس مشيط، بيشة، النماص"} },
    { name: {"en": "Tabuk Region", "ar": "منطقة تبوك"}, cities: {"en": "Tabuk, Duba, Umluj, Haql", "ar": "تبوك، ضباء، أملج، حقل"} },
    { name: {"en": "Ha'il Region", "ar": "منطقة حائل"}, cities: {"en": "Ha'il, Baqaa, Al-Ghazalah, Al-Shinan", "ar": "حائل، بقعاء، الغزالة، الشنان"} },
    { name: {"en": "Northern Borders Region", "ar": "منطقة الحدود الشمالية"}, cities: {"en": "Arar, Rafha, Turaif", "ar": "عرعر، رفحاء، طريف"} },
    { name: {"en": "Jazan Region", "ar": "منطقة جازان"}, cities: {"en": "Jazan, Sabya, Abu Arish, Farasan", "ar": "جازان، صبيا، أبو عريش، فرسان"} },
    { name: {"en": "Najran Region", "ar": "منطقة نجران"}, cities: {"en": "Najran, Sharurah, Hubuna", "ar": "نجران، شرورة، حبونا"} },
    { name: {"en": "Al-Bahah Region", "ar": "منطقة الباحة"}, cities: {"en": "Al-Bahah, Baljurashi, Al-Mandaq, Qilwah", "ar": "الباحة، بلجرشي، المندق، قلوة"} },
    { name: {"en": "Al-Jawf Region", "ar": "منطقة الجوف"}, cities: {"en": "Sakaka, Dumat Al-Jandal, Al-Qurayyat", "ar": "سكاكا، دومة الجندل، القريات"} },
  ] as CoverageRegion[],
};
