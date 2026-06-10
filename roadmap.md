تمام، يبقى هنخلي الموقع \*\*Static / بدون Database\*\*: كل الصفحات والمحتوى من ملفات داخل المشروع، والـ UI/UX يكون معماريته شبه المرجع لكن بهوية أرقى ومختلفة.



\# خطة UI/UX كاملة لموقع خدمات أعمال سعودي بدون Database



\## 1. فكرة الموقع



الموقع عبارة عن منصة تعريفية احترافية لخدمات الأعمال داخل السعودية، تشبه المرجع في قوة التنظيم وتجربة المستخدم، لكن بتصميم مختلف وهوية أفخم.



الموقع لا يحتاج Database ولا لوحة تحكم في المرحلة الحالية.



كل المحتوى سيكون ثابتًا داخل ملفات المشروع مثل:



```text

/content

/data

/config

/mdx

/json

```



يعني الخدمات، المقالات، الباقات، المنصات الحكومية، القطاعات، الأسئلة الشائعة، الروابط، والـ Mega Menus كلها يتم إدارتها من ملفات داخل الكود.



\---



\# 2. الهدف من الـ UI/UX



الهدف أن الزائر يدخل الموقع ويحس مباشرة أن الشركة:



\* موثوقة.

\* منظمة.

\* تفهم السوق السعودي.

\* لديها خدمات واضحة.

\* تساعد الشركات والمستثمرين خطوة بخطوة.

\* تقدم تجربة قريبة من مواقع الشركات الكبيرة.

\* لا تعرض معلومات عشوائية، بل رحلة واضحة من الاستكشاف إلى التواصل.



\---



\# 3. نوع الموقع



التصنيف الصحيح للموقع:



```text

Saudi Business Services Portal

```



أو:



```text

Business Setup \& Government Services Gateway

```



الموقع ليس Landing Page فقط، بل بوابة خدمات كاملة تحتوي على:



\* خدمات.

\* باقات.

\* قطاعات.

\* منصات حكومية.

\* موارد.

\* مقالات.

\* أخبار.

\* فعاليات.

\* نماذج تواصل.

\* صفحات تعريفية عن السعودية.



\---



\# 4. النظام بدون Database



\## 4.1 طريقة إدارة المحتوى



بدل قاعدة البيانات، يتم حفظ المحتوى في ملفات ثابتة.



مثال:



```text

/data/services.ts

/data/pricing.ts

/data/resources.ts

/data/government-platforms.ts

/data/sectors.ts

/data/articles.ts

/data/events.ts

/data/faqs.ts

/data/navigation.ts

```



أو باستخدام JSON:



```text

/data/services.json

/data/pricing.json

/data/articles.json

```



أو MDX للمقالات:



```text

/content/articles/business-setup-saudi.mdx

/content/articles/zakat-compliance.mdx

```



\---



\## 4.2 مزايا عدم استخدام Database



\* الموقع أسرع.

\* أقل تكلفة.

\* أقل أعطال.

\* أسهل في النشر.

\* أمان أعلى.

\* لا يحتاج لوحة تحكم.

\* مناسب جدًا للمواقع التعريفية الكبيرة.

\* SEO ممتاز لأن الصفحات Static.



\---



\## 4.3 عيوب عدم وجود Database



\* تعديل المحتوى يحتاج تعديل ملفات المشروع.

\* لا يوجد Dashboard.

\* لا يوجد تسجيل عملاء داخلي.

\* النماذج لا تحفظ داخل النظام إلا إذا تم ربطها بخدمة خارجية.

\* المقالات الجديدة تحتاج Deploy بعد الإضافة.



الحل العملي:



\* التواصل يتم عبر WhatsApp.

\* النماذج ترسل Email فقط.

\* يمكن ربط النماذج بخدمة خارجية مثل Google Forms أو Formspree أو Resend بدون Database داخل الموقع.

\* المقالات والخدمات تضاف من ملفات المشروع.



\---



\# 5. الهوية البصرية المقترحة



\## 5.1 الاتجاه العام



ستايل الموقع:



```text

Luxury Corporate + Saudi Business + Clean Portal UI

```



الستايل يجب أن يكون:



\* فخم.

\* بسيط.

\* راقٍ.

\* رسمي.

\* واسع المساحات.

\* بدون زحمة.

\* بدون ألوان صارخة.

\* قريب من مواقع الجهات الكبيرة والشركات الاستشارية.



\---



\# 6. الألوان



\## 6.1 Primary Color



```text

Midnight Navy

\#0B1220

```



الاستخدام:



\* الهيدر عند الـ Scroll.

\* الفوتر.

\* العناوين الكبيرة.

\* الخلفيات الداكنة.

\* الأقسام الفخمة.



\---



\## 6.2 Accent Color



```text

Royal Gold

\#C8A24A

```



الاستخدام:



\* أزرار CTA.

\* Highlights.

\* الأيقونات المهمة.

\* الخطوط الصغيرة.

\* شارة Featured.

\* حدود الباقات المميزة.



\---



\## 6.3 Background Color



```text

Warm Ivory

\#F8F5EE

```



الاستخدام:



\* خلفية عامة للموقع.

\* أقسام هادئة.

\* خلفيات صفحات الخدمات.

\* مساحات بين الأقسام.



\---



\## 6.4 Card Color



```text

White

\#FFFFFF

```



الاستخدام:



\* الكروت.

\* النماذج.

\* Mega Menu.

\* الباقات.

\* كروت الخدمات.



\---



\## 6.5 Text Colors



```text

Main Text: #111827

Secondary Text: #6B7280

Muted Text: #9CA3AF

Border: #E5E7EB

```



\---



\## 6.6 ألوان الحالات



```text

Success: #16A34A

Warning: #D97706

Error: #DC2626

Info: #2563EB

Premium: #C8A24A

```



\---



\# 7. الخطوط



\## 7.1 English Font



اقتراح:



```text

Inter

```



أو:



```text

Satoshi

```



\## 7.2 Arabic Font



اقتراح:



```text

IBM Plex Sans Arabic

```



أو:



```text

Tajawal

```



الأفضل:



```text

IBM Plex Sans Arabic

```



لأنه رسمي ونظيف ومناسب للمواقع الحكومية والشركات.



\---



\# 8. Grid System



\## 8.1 Desktop Container



```text

Max Width: 1280px

Padding: 24px

```



\## 8.2 Tablet



```text

Padding: 20px

Grid: 2 columns

```



\## 8.3 Mobile



```text

Padding: 16px

Grid: 1 column

```



\---



\# 9. Border Radius



استخدام زوايا مدورة ناعمة:



```text

Small: 8px

Medium: 14px

Large: 24px

Hero Cards: 28px

Buttons: 999px

```



\---



\# 10. Shadows



الظلال تكون خفيفة جدًا:



```text

Card Shadow:

0 10px 30px rgba(15, 23, 42, 0.06)



Mega Menu Shadow:

0 24px 80px rgba(15, 23, 42, 0.10)



Button Shadow:

0 8px 20px rgba(200, 162, 74, 0.20)

```



\---



\# 11. Header UI/UX



\## 11.1 شكل الهيدر



الهيدر يكون أبيض في البداية، وعند النزول يظهر Shadow خفيف.



المكونات:



\* Logo في اليسار أو اليمين حسب اللغة.

\* Main Navigation.

\* Icons سريعة:



&#x20; \* WhatsApp.

&#x20; \* Email.

&#x20; \* Phone.

\* Search.

\* Language Switcher.

\* CTA صغير: Book Consultation.



\---



\## 11.2 مقاسات الهيدر



```text

Height Desktop: 78px

Height Mobile: 68px

Logo Width: 140px

Nav Gap: 28px

```



\---



\## 11.3 سلوك الهيدر



\* Sticky.

\* عند Scroll يظهر Border Bottom خفيف.

\* Active Link يظهر بخط ذهبي تحته.

\* Dropdown يظهر بسلاسة.

\* Search يفتح Overlay.

\* Mobile Menu يكون Drawer من الجانب.



\---



\# 12. Mega Menu UI/UX



\## 12.1 شكل الـ Mega Menu



Mega Menu يظهر كمساحة كبيرة أسفل الهيدر، أبيض، بظل خفيف، وتقسيم أعمدة.



التصميم:



\* Background أبيض.

\* Cards خفيفة.

\* أيقونة صغيرة لكل عنصر.

\* سهم صغير.

\* Hover بلون Ivory.

\* العنصر المهم يكون Highlight بلون ذهبي خفيف.

\* لا يوجد زحمة بصرية.



\---



\## 12.2 Mega Menu للـ Services



تقسيم 4 أعمدة:



\### Business Support



\* Saudi Partners.

\* Consultation.

\* Translation Services.

\* Free Zones in KSA.

\* Business Setup in Saudi Arabia.



\### Residency \& Visas



\* Premium Residency.

\* Business Incubators.

\* Visa Issuance.



\### Office Solutions



\* Virtual Address.

\* Serviced Offices.

\* Co-working Spaces.

\* Meeting Rooms.



\### Finance \& Compliance



\* Accounting Services.

\* ZAKAT.

\* Audit Support.



\---



\## 12.3 شكل عنصر الخدمة داخل Mega Menu



كل عنصر يحتوي على:



\* Icon صغير.

\* Service title.

\* سطر وصف صغير عند Hover أو في نسخة Desktop الكبيرة.

\* Arrow صغير.

\* Hover background.



مثال بصري:



```text

\[icon] Business Setup in Saudi Arabia

&#x20;      Company formation and market entry support

```



\---



\## 12.4 Mega Menu للـ Resources



العناصر:



\* Government Platforms.

\* Library.

\* Articles.

\* News.

\* Events.

\* Market Insights.



الـ UI يكون على Grid من 3 أعمدة، كل عنصر كارت خفيف.



\---



\## 12.5 Mega Menu للـ About Kingdom



العناصر:



\* Sectors.

\* Life in Saudi Arabia.

\* Quality of Life.

\* Investment Opportunities.

\* Why Invest in Saudi Arabia?

\* NEOM.



قسم Sectors يحتوي روابط فرعية:



\* Energy.

\* Finance \& Fintech.

\* Logistics \& Transport.

\* Technology.

\* Tourism.



\---



\## 12.6 Mega Menu للـ Pricing



العناصر:



\* Setup Packages.

\* HR Packages.



كل عنصر يظهر ككارت عريض مع وصف بسيط.



\---



\# 13. Mobile Navigation



\## 13.1 شكل القائمة في الموبايل



\* Drawer من اليمين في العربي.

\* Drawer من اليسار في الإنجليزي.

\* خلفية بيضاء.

\* Logo بالأعلى.

\* زر Close واضح.

\* روابط رئيسية Accordion.

\* أيقونات التواصل في الأسفل.

\* زر Book Consultation ثابت أسفل القائمة.



\---



\## 13.2 UX للموبايل



\* لا يوجد Hover.

\* كل Dropdown يتحول Accordion.

\* Search داخل القائمة.

\* Language Switcher واضح.

\* أزرار التواصل كبيرة وسهلة الضغط.



\---



\# 14. Home Page UI/UX



\## 14.1 Hero Section



\### الهدف



أول 5 ثواني لازم الزائر يفهم:



\* الشركة تقدم خدمات أعمال داخل السعودية.

\* تساعد في التأسيس والتشغيل والامتثال.

\* يمكنه التواصل أو استكشاف الخدمات فورًا.



\---



\### Layout



Desktop:



\* يسار: نصوص و CTA.

\* يمين: كروت عائمة أو صورة Skyline.

\* خلفية Ivory مع Gradient خفيف.

\* Pattern هندسي خفيف جدًا.



Mobile:



\* النص أولًا.

\* الكروت بعدها.

\* الأزرار بعرض كامل تقريبًا.



\---



\### عناصر Hero



\* Breadcrumb صغير أو Label:



```text

Saudi Business Support Platform

```



\* H1:



```text

Start, Grow, and Manage Your Business in Saudi Arabia

```



\* Paragraph:



```text

A complete gateway for business setup, government platforms, compliance, office solutions, and market entry support.

```



\* CTA Buttons:



```text

Book a Consultation

Explore Services

```



\* Trust Points:



```text

Government-ready process

Bilingual support

Saudi market expertise

End-to-end guidance

```



\---



\### Hero Cards



كروت عائمة في يمين الهيرو:



1\. Business Setup.

2\. Government Platforms.

3\. Compliance Support.

4\. Office Solutions.



كل كارت:



\* Icon.

\* Title.

\* Short text.

\* Small arrow.



\---



\## 14.2 Trust Bar



شريط تحت الهيرو مباشرة.



المكونات:



\* 4 أو 5 نقاط ثقة.

\* أيقونة لكل نقطة.

\* خلفية بيضاء.

\* Border خفيف.



أمثلة:



```text

Saudi Market Expertise

Fast Consultation

Clear Process

Business-Friendly Support

Bilingual Team

```



\---



\## 14.3 Market Overview Section



قسم يعرض نبذة عن السوق.



Layout:



\* عنوان يسار.

\* كروت إحصائيات يمين.

\* رسم بسيط أو Line Chart وهمي Static.



Cards:



\* Business Growth.

\* Investment Climate.

\* Digital Government Services.

\* Strategic Location.



كل كارت:



\* رقم أو مؤشر.

\* Label.

\* وصف صغير.

\* Trend icon.



\---



\## 14.4 Services Preview Section



قسم أهم الخدمات.



Layout:



\* Section Header.

\* Grid من 6 أو 8 خدمات.

\* زر View All Services.



كل Service Card يحتوي:



\* Icon.

\* Title.

\* Description.

\* Link.

\* Hover effect.



Hover:



\* الكارت يرتفع 4px.

\* Border يتحول Gold.

\* Arrow يتحرك قليلًا.



\---



\## 14.5 Business Setup Process



قسم خطوات.



شكل UX:



\* Timeline أفقي على Desktop.

\* Timeline عمودي على Mobile.



الخطوات:



1\. Consultation.

2\. Business Structure.

3\. Documents.

4\. Government Registration.

5\. Licensing.

6\. Compliance.

7\. Office Setup.

8\. Launch.



كل خطوة:



\* رقم.

\* عنوان.

\* وصف مختصر.

\* Icon.



\---



\## 14.6 Government Platforms Section



قسم شبه Dashboard يعرض المنصات الحكومية.



Layout:



\* عنوان.

\* وصف.

\* Tabs أو Filters:



&#x20; \* Business Setup.

&#x20; \* HR.

&#x20; \* Compliance.

&#x20; \* Residency.

&#x20; \* Finance.



Grid كروت منصات:



\* Saudi Business Center.

\* MISA.

\* Qiwa.

\* Muqeem.

\* ZATCA.

\* GOSI.

\* Mudad.

\* Balady.

\* Absher Business.



كل كارت:



\* Platform name.

\* Category.

\* Description.

\* Related services.

\* Button: Learn More.



\---



\## 14.7 Sectors Section



قسم القطاعات.



Design:



\* كروت فخمة بخلفية داكنة أو صور خفيفة.

\* Gold accent.

\* Hover overlay.



القطاعات:



\* Energy.

\* Finance \& Fintech.

\* Logistics \& Transport.

\* Technology.

\* Tourism.

\* Real Estate.

\* Healthcare.

\* Entertainment.



\---



\## 14.8 Events Section



قسم الفعاليات.



بدون Database، الفعاليات ستكون من ملف:



```text

/data/events.ts

```



UI:



\* يسار: قائمة فعاليات.

\* يمين: Calendar visual static.

\* كل فعالية:



&#x20; \* التاريخ.

&#x20; \* المدينة.

&#x20; \* العنوان.

&#x20; \* القطاع.

&#x20; \* زر Details.



\---



\## 14.9 Library Section



قسم الملفات والمستندات.



UI:



\* Tabs:



&#x20; \* Guides.

&#x20; \* Checklists.

&#x20; \* Templates.

&#x20; \* Reports.

\* Search static داخل الصفحة.

\* Download Cards.



كل كارت:



\* File type icon.

\* Title.

\* Description.

\* Language.

\* File size.

\* Download button.



\---



\## 14.10 Articles \& Updates Section



يعرض:



\* 3 مقالات.

\* 3 أخبار.

\* 1 Market Insight مميز.



كل Article Card:



\* Image.

\* Category.

\* Title.

\* Excerpt.

\* Date.

\* Read More.



\---



\## 14.11 Pricing Preview



يعرض باقتين أو ثلاث.



Cards:



\* Starter.

\* Growth.

\* Premium.



كل كارت:



\* Package name.

\* Short description.

\* Starting from أو Custom.

\* Features.

\* CTA.



الباقة المميزة تكون:



\* Border Gold.

\* Badge: Recommended.

\* Shadow أعلى قليلًا.



\---



\## 14.12 Final CTA



قسم إغلاق قوي.



Design:



\* خلفية Navy.

\* Pattern خفيف.

\* نص أبيض.

\* زر Gold.

\* زر Secondary أبيض شفاف.



النص:



```text

Ready to start your business journey in Saudi Arabia?

```



الأزرار:



```text

Book a Consultation

Contact on WhatsApp

```



\---



\# 15. Services Page UI/UX



\## 15.1 صفحة كل الخدمات



Layout:



\* Hero صغير.

\* Filters.

\* Search.

\* Service Categories.

\* Service Cards.



الفلاتر:



\* Business Support.

\* Residency \& Visas.

\* Office Solutions.

\* Finance \& Compliance.



\---



\## 15.2 Service Card



كل كارت خدمة يحتوي:



\* Icon.

\* Category label.

\* Title.

\* 2 lines description.

\* CTA: Explore Service.

\* Arrow.



Hover:



\* Border Gold.

\* Background Ivory.

\* Arrow moves.

\* Icon يتحول للذهبي.



\---



\# 16. Service Details Page UI/UX



\## 16.1 Hero



العناصر:



\* Breadcrumb.

\* Category Badge.

\* H1.

\* Short description.

\* CTA.

\* Side info card.



Side Card يحتوي:



\* Estimated timeline.

\* Best for.

\* Support type.

\* Contact button.



\---



\## 16.2 Content Layout



Desktop:



\* Main content 70%.

\* Sticky sidebar 30%.



Mobile:



\* Sidebar يتحول أسفل المحتوى.



\---



\## 16.3 أقسام صفحة الخدمة



1\. Overview.

2\. Who is this for?

3\. Key Benefits.

4\. Process.

5\. Requirements.

6\. Deliverables.

7\. Timeline.

8\. Related Services.

9\. FAQ.

10\. CTA.



\---



\## 16.4 Process UI



Timeline مرقم.



كل خطوة:



\* Number circle.

\* Title.

\* Description.

\* Optional document note.



\---



\## 16.5 FAQ UI



Accordion.



حالات:



\* Closed: سؤال فقط.

\* Open: إجابة + رابط تواصل.



\---



\# 17. About Kingdom UI/UX



\## 17.1 Overview Page



Hero:



```text

Explore Saudi Arabia’s Business Landscape

```



أقسام:



\* Why Saudi Arabia.

\* High-growth sectors.

\* Investment opportunities.

\* Quality of life.

\* NEOM.

\* Related resources.



\---



\## 17.2 Sectors Page



Grid كروت قطاعات.



كل كارت:



\* Sector name.

\* Short description.

\* Opportunity level.

\* Related services.

\* Learn more.



\---



\## 17.3 Sector Details Page



الصفحة تحتوي:



\* Hero.

\* Overview.

\* Opportunities.

\* Market drivers.

\* Government initiatives.

\* Challenges.

\* Related services.

\* Related articles.

\* CTA.



\---



\# 18. Resources UI/UX



\## 18.1 Resources Overview



Grid من 6 كروت:



\* Government Platforms.

\* Library.

\* Articles.

\* News.

\* Events.

\* Market Insights.



كل كارت:



\* Icon.

\* Title.

\* Description.

\* Count static.

\* CTA.



\---



\## 18.2 Articles Listing



UI:



\* Hero.

\* Search.

\* Categories.

\* Featured Article.

\* Article Grid.

\* Pagination Static أو Load More وهمي.



Article Card:



\* Image.

\* Category.

\* Date.

\* Title.

\* Excerpt.

\* Read time.

\* Read more.



\---



\## 18.3 Article Details



Layout:



\* Hero with title.

\* Meta.

\* Table of Contents.

\* Content.

\* Related articles.

\* CTA box.



Typography:



\* H1 كبير.

\* Paragraph line-height مريح.

\* Quotes بتصميم مميز.

\* Lists واضحة.

\* Tables عند الحاجة.



\---



\## 18.4 Government Platforms Page



UI:



\* Hero.

\* Search.

\* Category filter.

\* Platforms grid.



Platform Card:



\* Logo أو Icon.

\* Name.

\* Category.

\* Description.

\* Services covered.

\* Link.

\* Related service.



\---



\## 18.5 Library Page



UI:



\* Hero.

\* Search.

\* Filters.

\* Download list.



Filters:



\* File type.

\* Category.

\* Language.

\* Sector.



Document Card:



\* Icon حسب النوع.

\* Title.

\* Description.

\* File type.

\* Size.

\* Language.

\* Download.



\---



\## 18.6 Events Page



UI:



\* Hero.

\* Event filters.

\* Calendar visual.

\* Event cards.



Event Card:



\* Date block.

\* Title.

\* City.

\* Sector.

\* Organizer.

\* CTA.



\---



\## 18.7 Market Insights Page



UI:



\* Featured insight.

\* Insight cards.

\* Charts static.

\* Category filters.



\---



\# 19. Pricing UI/UX



\## 19.1 Pricing Overview



Hero:



```text

Flexible packages for business setup and operational support

```



Tabs:



\* Setup Packages.

\* HR Packages.



\---



\## 19.2 Pricing Cards



كل باقة تحتوي:



\* Package name.

\* Short description.

\* Price أو Custom Quote.

\* Features.

\* Ideal for.

\* CTA.



الباقة المميزة:



\* Gold border.

\* Badge Recommended.

\* لون خلفية خفيف Ivory.

\* زر Gold.



\---



\## 19.3 Compare Table



جدول مقارنة.



UX:



\* Sticky first column على Desktop.

\* Scroll أفقي على Mobile.

\* Check icons.

\* Not included icon.

\* Highlight للباقة الأفضل.



\---



\## 19.4 Pricing FAQ



أسئلة حول:



\* هل الأسعار ثابتة؟

\* هل يوجد تخصيص؟

\* هل تشمل الرسوم الحكومية؟

\* كيف يتم الدفع؟

\* هل يوجد دعم مستمر؟



\---



\# 20. Contact Page UI/UX



\## 20.1 Layout



Desktop:



\* يسار: بيانات التواصل.

\* يمين: نموذج التواصل.



Mobile:



\* النموذج أولًا أو بيانات التواصل حسب CTA.



\---



\## 20.2 Contact Cards



\* Phone.

\* WhatsApp.

\* Email.

\* Location.

\* Working hours.



كل كارت:



\* Icon.

\* Label.

\* Value.

\* Action button.



\---



\## 20.3 Contact Form



الحقول:



\* Full Name.

\* Company Name.

\* Email.

\* Phone.

\* Service Needed.

\* Message.

\* Preferred Contact Method.



بدون Database:



\* النموذج يرسل Email.

\* أو يفتح WhatsApp برسالة مملوءة.

\* أو يستخدم API بسيط لإرسال الرسالة فقط بدون تخزين.



\---



\## 20.4 Form UX



\* Validation واضح.

\* Error تحت كل حقل.

\* Success message.

\* Loading state.

\* Disabled button أثناء الإرسال.

\* لا يتم مسح البيانات عند حدوث خطأ.



\---



\# 21. Search UI/UX بدون Database



البحث يكون Client-side من ملفات Static.



\## 21.1 طريقة البحث



يتم إنشاء ملف:



```text

/data/search-index.ts

```



يحتوي على:



\* title.

\* type.

\* description.

\* url.

\* keywords.



\---



\## 21.2 Search Overlay



عند الضغط على Search:



\* يظهر Overlay في منتصف الشاشة.

\* Input كبير.

\* نتائج مباشرة أثناء الكتابة.

\* تصنيف النتائج حسب:



&#x20; \* Services.

&#x20; \* Articles.

&#x20; \* Platforms.

&#x20; \* Sectors.

&#x20; \* Pages.



\---



\## 21.3 Empty State



لو مفيش نتائج:



```text

No results found. Try searching for business setup, ZAKAT, visa, or consultation.

```



مع اقتراحات بحث.



\---



\# 22. Language Switcher UI/UX



\## 22.1 الشكل



زر صغير في الهيدر:



```text

English / العربية

```



مع أيقونة لغة.



\---



\## 22.2 السلوك



\* في الإنجليزي يذهب إلى `/en`

\* في العربي يذهب إلى `/ar`

\* يحافظ على نفس الصفحة لو متاحة.



مثال:



```text

/en/services/business-setup

/ar/services/business-setup

```



\---



\# 23. RTL Arabic UI



\## 23.1 قواعد العربي



\* اتجاه الصفحة RTL.

\* النصوص يمين.

\* الأيقونات تتبدل اتجاهها عند الحاجة.

\* الأسهم تعكس الاتجاه.

\* Drawer من اليمين.

\* Breadcrumb من اليمين.

\* الجداول تراعي RTL.



\---



\# 24. Buttons System



\## 24.1 Primary Button



```text

Background: Gold

Text: Navy

Radius: 999px

Height: 48px

Padding: 0 24px

```



Hover:



\* Gold أغمق.

\* Shadow خفيف.

\* Arrow يتحرك.



\---



\## 24.2 Secondary Button



```text

Background: Transparent

Border: Navy / Gold

Text: Navy

```



\---



\## 24.3 Ghost Button



لروابط الكروت.



```text

Text only + arrow

```



\---



\# 25. Cards System



\## 25.1 Service Card



\* White background.

\* Border soft.

\* Icon box.

\* Title.

\* Description.

\* Link.



\## 25.2 Feature Card



\* Icon.

\* Short title.

\* Small text.



\## 25.3 Stats Card



\* Number.

\* Label.

\* Trend.

\* Mini chart.



\## 25.4 Article Card



\* Image.

\* Category.

\* Date.

\* Title.

\* Excerpt.

\* Read more.



\## 25.5 Pricing Card



\* Package title.

\* Price.

\* Features.

\* CTA.

\* Badge.



\---



\# 26. Forms UI



\## 26.1 Input



```text

Height: 48px

Radius: 12px

Border: #E5E7EB

Focus Border: #C8A24A

Focus Shadow: Gold light

```



\## 26.2 Textarea



```text

Min Height: 140px

```



\## 26.3 Select



يكون واضح وسهل.



\## 26.4 Error State



\* Border أحمر.

\* رسالة صغيرة تحت الحقل.



\## 26.5 Success State



\* رسالة خضراء.

\* Icon.

\* CTA للواتساب.



\---



\# 27. Animations



الأنيميشن يكون راقٍ جدًا.



\## 27.1 المسموح



\* Fade up.

\* Smooth dropdown.

\* Card hover.

\* Counter animation.

\* Soft parallax بسيط في الهيرو.

\* Button arrow motion.



\## 27.2 الممنوع



\* حركات كثيرة.

\* انيميشن مزعج.

\* دخول عناصر بسرعة.

\* 3D مبالغ فيه.

\* تشتيت المستخدم.



\---



\# 28. Micro Interactions



أمثلة:



\* عند Hover على الخدمة يظهر Arrow.

\* عند Hover على كارت تظهر Border ذهبية.

\* عند فتح Accordion يتحرك بسلاسة.

\* عند إرسال نموذج يظهر Loading spinner.

\* عند Copy email تظهر رسالة Copied.

\* عند فتح Search يتم Focus تلقائيًا.



\---



\# 29. Empty States



\## 29.1 لا توجد نتائج بحث



```text

No results found

Try a different keyword or browse our services.

```



\## 29.2 لا توجد فعاليات



```text

No upcoming events currently listed.

Check back soon for new business events.

```



\## 29.3 لا توجد ملفات



```text

No documents available in this category yet.

```



\---



\# 30. Error Pages



\## 30.1 404 Page



Design:



\* Illustration بسيط.

\* عنوان.

\* وصف.

\* أزرار:



&#x20; \* Back Home.

&#x20; \* Explore Services.

&#x20; \* Contact Us.



النص:



```text

This page seems to have moved.

```



\---



\# 31. Footer UI/UX



\## 31.1 Layout



الفوتر يكون داكن Navy.



الأعمدة:



1\. Logo + وصف الشركة.

2\. Services.

3\. Resources.

4\. About Kingdom.

5\. Contact.

6\. Newsletter.



\---



\## 31.2 Bottom Bar



يحتوي على:



\* Copyright.

\* Privacy Policy.

\* Terms.

\* Social icons.



\---



\# 32. SEO UI Requirements



كل صفحة تحتوي على:



\* Breadcrumb.

\* H1 واضح.

\* Meta title.

\* Meta description.

\* Internal links.

\* FAQ في الصفحات المهمة.

\* CTA واضح.

\* صور لها Alt Text.

\* Structured content.



\---



\# 33. Accessibility UX



الموقع يجب أن يدعم:



\* Contrast قوي.

\* Focus states واضحة.

\* Keyboard navigation.

\* Labels للنماذج.

\* Alt text للصور.

\* حجم خط لا يقل عن 16px.

\* أزرار الموبايل لا تقل عن 44px ارتفاع.



\---



\# 34. Performance UX



لأن الموقع بدون Database، لازم يكون سريع جدًا.



المطلوب:



\* Static generation.

\* Image optimization.

\* Lazy loading.

\* Fonts optimized.

\* Components خفيفة.

\* عدم استخدام مكتبات ضخمة بدون داعي.

\* تحميل الصور WebP.

\* Page transitions خفيفة.



\---



\# 35. File Structure مقترح



```text

src/

&#x20; app/

&#x20;   \[locale]/

&#x20;     page.tsx

&#x20;     about-us/

&#x20;     contact/

&#x20;     pricing/

&#x20;     services/

&#x20;     resources/

&#x20;     about-kingdom/

&#x20; components/

&#x20;   layout/

&#x20;     Header.tsx

&#x20;     Footer.tsx

&#x20;     MegaMenu.tsx

&#x20;     MobileDrawer.tsx

&#x20;   ui/

&#x20;     Button.tsx

&#x20;     Card.tsx

&#x20;     Badge.tsx

&#x20;     Input.tsx

&#x20;     Accordion.tsx

&#x20;     Tabs.tsx

&#x20;   sections/

&#x20;     HeroSection.tsx

&#x20;     ServicesGrid.tsx

&#x20;     ProcessTimeline.tsx

&#x20;     PricingCards.tsx

&#x20;     GovernmentPlatforms.tsx

&#x20;     ArticlesGrid.tsx

&#x20; data/

&#x20;   navigation.ts

&#x20;   services.ts

&#x20;   pricing.ts

&#x20;   sectors.ts

&#x20;   articles.ts

&#x20;   platforms.ts

&#x20;   events.ts

&#x20;   library.ts

&#x20;   faqs.ts

&#x20; content/

&#x20;   articles/

&#x20;   news/

&#x20;   insights/

&#x20; styles/

&#x20;   globals.css

```



\---



\# 36. Pages بدون Database



\## Main Pages



```text

Home

About Us

Contact

Pricing

Search

Privacy Policy

Terms

```



\## Services



```text

Services Overview

Business Setup

Saudi Partners

Consultation

Translation Services

Free Zones in KSA

Premium Residency

Business Incubators

Visa Issuance

Virtual Address

Serviced Offices

Co-working Spaces

Meeting Rooms

Accounting Services

ZAKAT

Audit Support

```



\## About Kingdom



```text

Overview

Sectors

Energy

Finance \& Fintech

Logistics \& Transport

Technology

Tourism

Life in Saudi Arabia

Quality of Life

Investment Opportunities

Why Invest in Saudi Arabia

NEOM

```



\## Resources



```text

Resources Overview

Government Platforms

Library

Articles

Article Details

News

News Details

Events

Event Details

Market Insights

Insight Details

```



\---



\# 37. UX Flow للزائر



\## Flow 1: زائر يريد تأسيس شركة



1\. يدخل Home.

2\. يضغط Services.

3\. يختار Business Setup.

4\. يقرأ الخطوات والمتطلبات.

5\. يشاهد الباقات.

6\. يضغط Book Consultation.

7\. يرسل النموذج أو يفتح WhatsApp.



\---



\## Flow 2: زائر يبحث عن منصة حكومية



1\. يدخل Resources.

2\. يختار Government Platforms.

3\. يبحث عن Qiwa أو ZATCA.

4\. يقرأ شرح المنصة.

5\. يرى الخدمات المرتبطة.

6\. يتواصل مع الشركة للمساعدة.



\---



\## Flow 3: زائر يقارن الباقات



1\. يدخل Pricing.

2\. يختار Setup Packages.

3\. يقارن الباقات.

4\. يقرأ FAQ.

5\. يطلب Custom Package.



\---



\## Flow 4: زائر يقرأ محتوى



1\. يدخل Articles.

2\. يفتح مقال.

3\. يقرأ المحتوى.

4\. يرى CTA داخل المقال.

5\. يضغط Consultation.



\---



\# 38. UX Copy Tone



النصوص تكون:



\* رسمية.

\* واضحة.

\* قصيرة.

\* موجهة للقرار.

\* لا تستخدم كلام مبالغ فيه.

\* لا تستخدم وعود غير واقعية.

\* تشرح الفائدة مباشرة.



أمثلة:



بدل:



```text

We are the best company

```



نستخدم:



```text

Clear business support designed for companies entering the Saudi market.

```



\---



\# 39. CTA Placement



كل صفحة يجب أن تحتوي على CTA في:



\* Hero.

\* منتصف الصفحة بعد شرح الخدمة.

\* قبل الفوتر.

\* Sidebar في صفحات الخدمات.

\* داخل المقالات.

\* داخل Pricing.



\---



\# 40. أفضل Tech Stack بدون Database



\## Frontend



```text

Next.js

TypeScript

Tailwind CSS

Framer Motion

MDX

```



\## Forms



بدون Database:



```text

Resend API

SMTP

Formspree

WhatsApp pre-filled message

```



\## Deployment



```text

VPS + Nginx + PM2

```



أو:



```text

Vercel

```



\---



\# 41. ملاحظات تنفيذ مهمة



1\. لا يتم استخدام Database.

2\. لا يتم استخدام CMS.

3\. كل المحتوى من ملفات Static.

4\. الموقع يكون قابل للتوسع مستقبلًا.

5\. يمكن إضافة CMS لاحقًا بدون تغيير التصميم.

6\. يجب بناء Component System من البداية.

7\. لا يتم نسخ الموقع المرجعي حرفيًا.

8\. يتم أخذ نفس تنظيم الصفحات فقط.

9\. الهوية البصرية تكون Navy + Gold + Ivory.

10\. كل صفحة تكون SEO-ready.

11\. دعم العربي والإنجليزي من البداية.

12\. Search يكون Static Client-side.

13\. Forms ترسل فقط ولا تخزن.

14\. الصور تكون WebP.

15\. الموقع لازم يكون سريع جدًا.



\---



\# 42. الخلاصة



الموقع المطلوب سيكون نسخة في القوة والتنظيم من المرجع، لكن بدون Database وبدون CMS.



الاعتماد سيكون على:



```text

Static Pages + Static Data Files + MDX Content + Email/WhatsApp Forms

```



النتيجة المطلوبة:



\* موقع سريع جدًا.

\* شكله فخم.

\* منظم.

\* متعدد الصفحات.

\* مناسب للسوق السعودي.

\* فيه Mega Menus قوية.

\* فيه صفحات خدمات وقطاعات وموارد.

\* فيه تجربة استخدام تشجع الزائر يتواصل.

\* بدون تعقيد Backend أو Database.



أفضل وصف للمشروع:



```text

Luxury Static Business Services Portal for the Saudi Market

```



كده الموقع هيبقى خفيف وسريع ومش محتاج قاعدة بيانات، بس في نفس الوقت شكله كبير ومنظم كأنه Platform محترمة مش صفحة تعريفية عادية.



