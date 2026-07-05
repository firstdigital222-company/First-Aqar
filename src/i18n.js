import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      brand: 'فيرست عقار',
      brand_sub: 'تشطيبات وتصميمات',
      nav: {
        home: 'الرئيسية',
        services: 'خدماتنا',
        portfolio: 'أعمالنا',
        about: 'من نحن',
        faq: 'الأسئلة الشائعة',
        contact: 'تواصل معنا'
      },
      hero: {
        badge1: '🏆 تشطيبات فاخرة',
        title1: 'نحوّل مساحتك',
        titleGold1: 'لتحفة فنية',
        sub1: 'حلول متكاملة في التشطيبات والتصميمات الداخلية والخارجية بأعلى معايير الجودة',
        cta1: 'احجز استشارة مجانية',

        badge2: '🏡 تصميم خارجي',
        title2: 'واجهتك',
        titleGold2: 'أول انطباع',
        sub2: 'نصمم واجهات مميزة ولاندسكيب احترافي يعكس فخامة وأصالة مشروعك',
        cta2: 'شاهد أعمالنا',

        badge3: '🎨 تصميم 3D',
        title3: 'شوف مشروعك',
        titleGold3: 'قبل التنفيذ',
        sub3: 'تصميمات ثلاثية الأبعاد واقعية ومخططات دقيقة لتصوّر نتيجتك النهائية قبل البدء',
        cta3: 'تعرف على خدماتنا',

        whatsapp: 'تواصل واتساب',
        s1_val: '500+', s1_lbl: 'مشروع منجز',
        s2_val: '8+', s2_lbl: 'سنوات خبرة',
        s3_val: '98%', s3_lbl: 'رضا العملاء',
        s4_val: '50+', s4_lbl: 'مصمم محترف',
        tagline: 'نصمّم… ننفّذ… ونحوّل المساحات لتحف فنية'
      },
      about_snippet: {
        badge: '🏢 من نحن',
        title_main: 'في فيرست عقار بنحوّل كل مساحة لقصة نجاح',
        p1: 'نقدّم تجربة متكاملة تبدأ من الفكرة وتنتهي بالتنفيذ الكامل، مع أعلى معايير الجودة والالتزام. هدفنا تحويل أي مساحة عادية لمكان مميز يعكس ذوقك واحتياجك.',
        p2: 'بدأنا بهدف تقديم خدمات تصميم وتشطيب بجودة عالية وأسلوب احترافي يواكب أحدث الاتجاهات في السوق المصري والعربي.',
        cta_more: 'اعرف أكثر عنا',
        cta_consult: 'احجز استشارة',
        v1_lbl: 'جودة عالية', v1_desc: 'أعلى معايير التنفيذ والإتقان',
        v2_lbl: 'التزام بالمواعيد', v2_desc: 'نسلّم في الوقت المحدد دائماً',
        v3_lbl: 'إبداع وابتكار', v3_desc: 'حلول مبتكرة تفوق التوقعات',
        v4_lbl: 'شفافية تامة', v4_desc: 'تواصل مستمر طوال المشروع',
        exp_lbl: 'سنوات من الخبرة'
      },
      services: {
        badge: '⚡ خدماتنا المميزة',
        title: 'كل ما تحتاجه في مكان واحد',
        sub: 'من الفكرة حتى التسليم — نقدّم حلولاً متكاملة تجمع التصميم والتنفيذ بأعلى معايير الجودة',
        all: 'عرض جميع الخدمات',
        more: 'اعرف أكثر',
        s1_title: 'التشطيبات الكاملة',
        s1_desc: 'نقدّم خدمات تشطيب متكاملة للشقق والفيلات والمشاريع التجارية بمستويات مختلفة: اقتصادي – لوكس – سوبر لوكس مع إشراف كامل حتى التسليم.',
        s1_f1: 'تشطيب شقق وفيلات', s1_f2: 'مشاريع تجارية وإدارية', s1_f3: 'إشراف كامل حتى التسليم',
        s2_title: 'التصميم الداخلي',
        s2_desc: 'نحوّل المساحات لبيئة مريحة وعصرية تناسب ذوقك وأسلوبك. من توزيع المساحات لاختيار الألوان والخامات وتصميم الإضاءة المثالية.',
        s2_f1: 'توزيع ذكي للمساحات', s2_f2: 'اختيار الألوان والخامات', s2_f3: 'تصميم إضاءة احترافي',
        s3_title: 'التصميم الخارجي',
        s3_desc: 'واجهة مشروعك هي أول انطباع. نصمم واجهات حديثة ولاندسكيب وتنسيق حدائق بحلول مبتكرة تجعل مشروعك مميزاً من الخارج.',
        s3_f1: 'تصميم واجهات حديثة', s3_f2: 'لاندسكيب وتنسيق حدائق', s3_f3: 'حلول مبتكرة للمساحات',
        s4_title: 'تصميم 2D & 3D',
        s4_desc: 'نخليك تشوف مشروعك قبل التنفيذ بتصميمات ثلاثية الأبعاد واقعية ومخططات تنفيذية دقيقة تعطيك تصوراً كاملاً للنتيجة النهائية.',
        s4_f1: 'تصميمات 3D واقعية', s4_f2: 'مخططات 2D دقيقة', s4_f3: 'تصور كامل قبل البدء',
        detail_title: 'كل خدمة بالتفصيل',
        detail_badge: '📋 تفاصيل الخدمات',
        btn_book: 'احجز استشارة لهذه الخدمة',
        cat_badge: '📁 سابقة الأعمال',
        cat_title: 'تصفّح أعمالنا بالتصنيف',
        cat_sub: 'كل مشروع بننفذه هو قصة نجاح جديدة — تصفّح مشاريعنا حسب التصنيف',
        cat_btn: 'تواصل معنا لتنفيذ مشروعك',
        cat_res: 'سكني',
        cat_com: 'تجاري',
        cat_adm: 'إداري',
        cat_des: 'تصميمات فقط'
      },
      before_after: {
        badge: '🔄 قبل / بعد',
        title: 'شوف الفرق بنفسك',
        sub: 'نحوّل المساحات من شكل عادي لتجربة معيشة فاخرة — اسحب المؤشر لترى الفرق',
        before: '🏗️ قبل',
        after: '✨ بعد',
        desc_before: 'قبل التشطيب — مساحة خام',
        desc_after: 'بعد التشطيب — تشطيب سوبر لوكس'
      },
      portfolio: {
        badge: '🖼️ أعمالنا المميزة',
        title: 'مشاريع تتكلم عن نفسها',
        sub: 'نفذنا مشاريع متنوعة سكنية وتجارية وإدارية بأعلى جودة وأرقى تصميم',
        all: 'عرض جميع المشاريع',
        filter_all: 'الكل',
        filter_res: 'سكني',
        filter_com: 'تجاري',
        filter_adm: 'إداري',
        filter_des: 'تصميمات',
        start_project: 'ابدأ مشروعك معنا',
        lightbox_area: 'المساحة',
        lightbox_loc: 'الموقع',
        lightbox_year: 'السنة',
        lightbox_type: 'النوع'
      },
      testimonials: {
        badge: '💬 آراء عملائنا',
        title: 'عملاؤنا يتكلموا عنا',
        sub: 'رضا عملائنا هو أكبر جائزة نحصل عليها — إليك ما يقولونه عن تجربتهم معنا',
        h1_title: 'صاحب فيلا — القاهرة الجديدة',
        h1_text: 'تعاملت مع فريق فيرست عقار في تشطيب فيلتي وكانت التجربة استثنائية من البداية للنهاية. الفريق محترف ومبدع والتنفيذ كان أفضل من التوقعات. أنصح الجميع بالتعامل معهم.',
        h2_title: 'صاحبة شقة — مدينة نصر',
        h2_text: 'الله عليهم! التصميم الـ3D حلو جداً وحسست إن الشقة كانت في إيد أمينة. التنفيذ نظيف والمواعيد محترمة. شكراً فيرست عقار على هذه التجربة الرائعة.',
        h3_title: 'صاحب مطعم — المهندسين',
        h3_text: 'عملنا مع فيرست عقار على تصميم وتشطيب مطعمنا وكانت النتيجة تفوق كل التوقعات. الزبائن بيمدحوا الديكور باستمرار. فريق محترف ومتعاون ويستحقون أكثر من 5 نجوم.',
        happy_clients: 'عميل سعيد',
        rating: 'تقييم عملاء',
        recommend: 'توصية بنا'
      },
      faq: {
        badge: '❓ الأسئلة الشائعة',
        title: 'كل أسئلتك هنا',
        sub: 'اجمعنا أكثر الأسئلة التي يسألها عملاؤنا وأجبنا عليها بوضوح وشفافية',
        more: 'لم تجد إجابة لسؤالك؟ تواصل معنا مباشرة',
        btn: 'تواصل معنا'
      },
      contact: {
        badge: '📞 تواصل معنا',
        title: 'نحن هنا لمساعدتك',
        sub: 'تواصل معنا اليوم واحصل على استشارتك المجانية — فريقنا جاهز للرد على استفساراتك',
        form_title: 'أرسل استفسارك',
        name: 'الاسم الكامل *',
        phone: 'رقم الهاتف *',
        email: 'البريد الإلكتروني',
        service: 'نوع الخدمة',
        service_select: 'اختر نوع الخدمة',
        service_s5: 'الإشراف على المشروع',
        message: 'تفاصيل مشروعك *',
        submit: 'إرسال الاستفسار',
        sending: 'جارٍ الإرسال…',
        success: 'شكراً على تواصلك!',
        success_sub: 'سيتواصل معك فريقنا خلال 24 ساعة',
        direct: 'تواصل مباشر',
        hours: '⏰ أوقات العمل',
        label_whatsapp: 'واتساب',
        label_phone: 'هاتف',
        label_email: 'بريد إلكتروني',
        label_address: 'العنوان',
        address_value: 'الشرقية العاشر من رمضان بجوار البنك الاهلي اعلي مكتب الإخوة للمحاماة',
        hours_day1: 'السبت — الخميس',
        hours_time1: '9:00 ص — 9:00 م',
        hours_day2: 'الجمعة',
        hours_time2: '2:00 م — 9:00 م',
        chat_now: 'تحدث معنا الآن',
        chat_sub: 'استجابة فورية على الواتساب'
      },
      cta: {
        badge: '🚀 ابدأ مشروعك اليوم',
        title: 'ابدأ مشروعك مع فريق يضمن لك النتيجة',
        sub: 'استشارتك الأولى مجانية — تواصل معنا الآن ودعنا نحوّل مساحتك لتحفة فنية',
        f1: 'استشارة مجانية', f2: 'تصميم قبل التنفيذ', f3: 'ضمان الجودة', f4: 'التزام بالمواعيد',
        btn: 'تواصل واتساب الآن',
        btn_sub: 'أو أرسل استفساراً',
        call_us: 'أو اتصل بنا: 01234567890+'
      }
    }
  },
  en: {
    translation: {
      brand: 'First Aqar',
      brand_sub: 'Finishing & Design',
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About Us',
        faq: 'FAQ',
        contact: 'Contact Us'
      },
      hero: {
        badge1: '🏆 Premium Finishing',
        title1: 'We Transform Your Space',
        titleGold1: 'Into a Masterpiece',
        sub1: 'Integrated solutions in finishing, interior and exterior designs with the highest quality standards',
        cta1: 'Book Free Consultation',

        badge2: '🏡 Exterior Design',
        title2: 'Your Facade is',
        titleGold2: 'The First Impression',
        sub2: 'We design distinctive facades and professional landscaping reflecting luxury and authenticity',
        cta2: 'View Our Works',

        badge3: '🎨 3D Rendering',
        title3: 'See Your Project',
        titleGold3: 'Before Execution',
        sub3: 'Realistic 3D designs and precise blueprints to visualize your final output before starting',
        cta3: 'Explore Services',

        whatsapp: 'WhatsApp Us',
        s1_val: '500+', s1_lbl: 'Completed Projects',
        s2_val: '8+', s2_lbl: 'Years of Experience',
        s3_val: '98%', s3_lbl: 'Client Satisfaction',
        s4_val: '50+', s4_lbl: 'Professional Designers',
        tagline: 'We design… We execute… We turn spaces into masterpieces'
      },
      about_snippet: {
        badge: '🏢 About Us',
        title_main: 'At First Aqar, We Turn Every Space Into a Success Story',
        p1: 'We provide an integrated experience starting from the concept to full execution, with the highest standards of quality and commitment. Our goal is to transform any ordinary space into a unique place reflecting your taste.',
        p2: 'We started with the goal of offering high-quality design and finishing services in a professional manner that matches the latest market trends.',
        cta_more: 'Read More About Us',
        cta_consult: 'Book a Consultation',
        v1_lbl: 'High Quality', v1_desc: 'Highest execution standards & perfection',
        v2_lbl: 'On-time Delivery', v2_desc: 'We always deliver on the agreed schedule',
        v3_lbl: 'Creativity', v3_desc: 'Innovative solutions beyond expectations',
        v4_lbl: 'Full Transparency', v4_desc: 'Continuous updates throughout the project',
        exp_lbl: 'Years of Experience'
      },
      services: {
        badge: '⚡ Featured Services',
        title: 'Everything You Need in One Place',
        sub: 'From concept to handover — we offer integrated solutions combining design and execution with the highest quality standards',
        all: 'View All Services',
        more: 'Read More',
        s1_title: 'Full Finishing',
        s1_desc: 'We offer full finishing services for apartments, villas, and commercial projects at different levels: economy, deluxe, super deluxe with full supervision.',
        s1_f1: 'Apartment & Villa Finishing', s1_f2: 'Commercial & Administrative', s1_f3: 'Full Supervision until Handover',
        s2_title: 'Interior Design',
        s2_desc: 'We transform spaces into comfortable and modern environments matching your style. From layout planning to choosing colors, materials and lighting.',
        s2_f1: 'Smart Space Layout', s2_f2: 'Color & Material Selection', s2_f3: 'Professional Lighting Design',
        s3_title: 'Exterior Design',
        s3_desc: 'Your facade is your first impression. We design modern facades, landscaping, and garden arrangements with innovative solutions.',
        s3_f1: 'Modern Facade Design', s3_f2: 'Landscaping & Gardens', s3_f3: 'Innovative Outdoor Solutions',
        s4_title: '2D & 3D Design',
        s4_desc: 'We let you see your project before execution with highly realistic 3D designs and precise technical blueprints.',
        s4_f1: 'Realistic 3D Designs', s4_f2: 'Precise 2D Blueprints', s4_f3: 'Full Concept Before Launch',
        detail_title: 'Every Service in Detail',
        detail_badge: '📋 Detailed Services',
        btn_book: 'Book Consultation for this Service',
        cat_badge: '📁 Project Portfolio',
        cat_title: 'Browse Our Work by Category',
        cat_sub: 'Every project we execute is a new success story — browse by category',
        cat_btn: 'Contact Us to Execute Your Project',
        cat_res: 'Residential',
        cat_com: 'Commercial',
        cat_adm: 'Administrative',
        cat_des: '3D/2D Designs'
      },
      before_after: {
        badge: '🔄 Before / After',
        title: 'See the Difference Yourself',
        sub: 'We transform spaces from simple structures into luxury living experiences — drag the slider to compare',
        before: '🏗️ Before',
        after: '✨ After',
        desc_before: 'Before Finishing — Raw Concrete Space',
        desc_after: 'After Finishing — Super Deluxe Finish'
      },
      portfolio: {
        badge: '🖼️ Featured Works',
        title: 'Projects that Speak for Themselves',
        sub: 'We have executed various residential, commercial, and administrative projects with premium quality and elegant designs',
        all: 'View All Projects',
        filter_all: 'All',
        filter_res: 'Residential',
        filter_com: 'Commercial',
        filter_adm: 'Administrative',
        filter_des: 'Designs',
        start_project: 'Start Your Project With Us',
        lightbox_area: 'Area',
        lightbox_loc: 'Location',
        lightbox_year: 'Year',
        lightbox_type: 'Type'
      },
      testimonials: {
        badge: '💬 Testimonials',
        title: 'What Our Clients Say',
        sub: 'Client satisfaction is our greatest reward — here is what they say about their experience with us',
        h1_title: 'Villa Owner — New Cairo',
        h1_text: 'I worked with First Aqar team on my villa finishing, and the experience was exceptional. The team is professional, creative, and the execution exceeded expectations.',
        h2_title: 'Apartment Owner — Nasr City',
        h2_text: 'Amazing work! The 3D design was so beautiful and it felt like the apartment was in safe hands. Clean finishing and great commitment to timing.',
        h3_title: 'Restaurant Owner — Mohandessin',
        h3_text: 'We worked with First Aqar for restaurant design & finishing. The decoration is always praised by our visitors. Highly recommended!',
        happy_clients: 'Happy Clients',
        rating: 'Client Rating',
        recommend: 'Recommendation Rate'
      },
      faq: {
        badge: '❓ FAQ',
        title: 'Frequently Asked Questions',
        sub: 'We collected the most common questions from our clients and answered them transparently',
        more: 'Did not find your question? Contact us directly',
        btn: 'Contact Us'
      },
      contact: {
        badge: '📞 Contact Us',
        title: 'We are Here to Help',
        sub: 'Get in touch with us today for a free consultation — our team is ready to answer your inquiries',
        form_title: 'Send Your Inquiry',
        name: 'Full Name *',
        phone: 'Phone Number *',
        email: 'Email Address',
        service: 'Service Type',
        service_select: 'Select Service Type',
        service_s5: 'Project Supervision',
        message: 'Your Project Details *',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        success: 'Thank you for reaching out!',
        success_sub: 'Our team will contact you within 24 hours',
        direct: 'Direct Contact',
        hours: '⏰ Working Hours',
        label_whatsapp: 'WhatsApp',
        label_phone: 'Phone',
        label_email: 'Email',
        label_address: 'Address',
        address_value: 'Sharqia, 10th of Ramadan, next to the National Bank, above the Brothers Law Firm',
        hours_day1: 'Saturday — Thursday',
        hours_time1: '9:00 AM — 9:00 PM',
        hours_day2: 'Friday',
        hours_time2: '2:00 PM — 9:00 PM',
        chat_now: 'Chat With Us Now',
        chat_sub: 'Instant response on WhatsApp'
      },
      cta: {
        badge: '🚀 Start Your Project Today',
        title: 'Start Your Project with a Team that Guarantees the Result',
        sub: 'Your first consultation is completely free — contact us now and let us turn your space into a masterpiece',
        f1: 'Free Consultation', f2: 'Design Before Execution', f3: 'Quality Assurance', f4: 'On-time Commitment',
        btn: 'Connect via WhatsApp',
        btn_sub: 'Or Send an Inquiry',
        call_us: 'Or Call Us: +20 123 456 7890'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
