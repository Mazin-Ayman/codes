const codes = {
  "CB01280001": {
    bankNameAr: "المصرف المتحد",
    bankNameEn: "THE UNITED BANK",
    classification: "بنك"
  },
  "CB13000001": {
    bankNameAr: "البنك التجاري الدولي",
    bankNameEn: "COMMERCIAL INTERNATIONAL BANK",
    classification: "بنك"
  },
  "CB14000001": {
    bankNameAr: "بنك بلوم مصر ش.م.م",
    bankNameEn: "BLOM BANK EGYPT S.A.E",
    classification: "بنك"
  },
  "CB15000001": {
    bankNameAr: "بنك الإمارات دبي الوطني",
    bankNameEn: "EMIRATES NBD",
    classification: "بنك"
  },
  "CB17000001": {
    bankNameAr: "بنك قناة السويس",
    bankNameEn: "SUEZ CANAL BANK",
    classification: "بنك"
  },
  "CB19000001": {
    bankNameAr: "بنك أبوظبي الأول مصر",
    bankNameEn: "FAB MISR",
    classification: "بنك"
  },
  "CB20000001": {
    bankNameAr: "البنك الأهلي المتحد (مصر) ش.م.م",
    bankNameEn: "AHLI UNITED BANK (EGYPT) S.A.E",
    classification: "بنك"
  },
  "CB23000001": {
    bankNameAr: "بنك فيصل الإسلامي المصري",
    bankNameEn: "FAISAL ISLAMIC BANK OF EGYPT",
    classification: "بنك"
  },
  "CB24000001": {
    bankNameAr: "البنك الأهلي الكويتي - مصر",
    bankNameEn: "AL AHLI BANK OF KUWAIT - EGYPT",
    classification: "بنك"
  },
  "CB25010001": {
    bankNameAr: "مصرف أبوظبي الإسلامي",
    bankNameEn: "ABU DHABI ISLAMIC BANK",
    classification: "بنك"
  },
  "CB26000001": {
    bankNameAr: "بنك البركة مصر",
    bankNameEn: "AL BARAKA BANK EGYPT",
    classification: "بنك"
  },
  "CB27000001": {
    bankNameAr: "بنك الكويت الوطني",
    bankNameEn: "NATIONAL BANK OF KUWAIT",
    classification: "بنك"
  },
  "CB30000001": {
    bankNameAr: "بنك أبوظبي التجاري - مصر",
    bankNameEn: "ABU DHABI COMMERCIAL BANK - EGYPT",
    classification: "بنك"
  },
  "CB32000001": {
    bankNameAr: "البنك المصري الخليجي",
    bankNameEn: "EGYPTIAN GULF BANK",
    classification: "بنك"
  },
  "CB33000001": {
    bankNameAr: "بنك إتش إس بي سي مصر",
    bankNameEn: "HSBC BANK EGYPT",
    classification: "بنك"
  },
  "CB34000001": {
    bankNameAr: "بنك العمال المصري",
    bankNameEn: "EGYPTIAN WORKERS BANK",
    classification: "بنك"
  },
  "CC00010001": {
    bankNameAr: "بريميوم إنترناشيونال",
    bankNameEn: "PREMIUM INTERNATIONAL",
    classification: "خدمات مالية"
  },
  "CC96010001": {
    bankNameAr: "شركة أميكس مصر (أمريكان إكسبريس)",
    bankNameEn: "AMEX EGYPT COMPANY",
    classification: "خدمات مالية"
  },
  "FS00010001": {
    bankNameAr: "إيجيبت فاكتورز",
    bankNameEn: "EGYPT FACTORS",
    classification: "تخصيم"
  },
  "FS00020001": {
    bankNameAr: "كاتاليست بارتنرز",
    bankNameEn: "CATALYST PARTNERS",
    classification: "تخصيم / خدمات مالية"
  },
  "FS00040001": {
    bankNameAr: "شركة القاهرة للتخصيم",
    bankNameEn: "CAIRO FACTORS COMPANY",
    classification: "تخصيم"
  },
  "FS00120001": {
    bankNameAr: "كونتكت للتخصيم",
    bankNameEn: "CONTACT FACTORING",
    classification: "تخصيم"
  },
  "FS00130001": {
    bankNameAr: "شركة ضمان مخاطر الائتمان",
    bankNameEn: "CREDIT GUARANTEE COMPANY (CGC EGYPT)",
    classification: "ضمان ائتمان"
  },
  "IB41000001": {
    bankNameAr: "التجاري وفا بنك",
    bankNameEn: "ATTIJARIWAFA BANK",
    classification: "بنك"
  },
  "IB42000001": {
    bankNameAr: "ميد بنك",
    bankNameEn: "MID BANK",
    classification: "بنك"
  },
  "IB43000001": {
    bankNameAr: "بنك الشركة المصرفية العربية الدولية",
    bankNameEn: "SOCIETE ARABE INTERNATIONALE DE BANQUE",
    classification: "بنك"
  },
  "IB44000001": {
    bankNameAr: "بنك كريدي أجريكول مصر",
    bankNameEn: "CREDIT AGRICOLE EGYPT",
    classification: "بنك"
  },
  "IB45000001": {
    bankNameAr: "بنك قطر الوطني الأهلي",
    bankNameEn: "QNB AL AHLI",
    classification: "بنك"
  },
  "IB46000001": {
    bankNameAr: "بنك الاستثمار العربي",
    bankNameEn: "ARAB INVESTMENT BANK",
    classification: "بنك"
  },
  "IB47000001": {
    bankNameAr: "بنك التعمير والإسكان",
    bankNameEn: "HOUSING AND DEVELOPMENT BANK",
    classification: "بنك"
  },
  "IB49000001": {
    bankNameAr: "المؤسسة العربية المصرفية - مصر (بنك ABC)",
    bankNameEn: "ARAB BANKING CORPORATION - EGYPT",
    classification: "بنك"
  },
  "IB50000001": {
    bankNameAr: "البنك المصري لتنمية الصادرات",
    bankNameEn: "EXPORT DEVELOPMENT BANK OF EGYPT",
    classification: "بنك"
  },
  "IB54000001": {
    bankNameAr: "البنك العربي الأفريقي الدولي",
    bankNameEn: "ARAB AFRICAN INTERNATIONAL BANK",
    classification: "بنك"
  },
  "LF98500001": {
    bankNameAr: "إنكوليس للتأجير التمويلي",
    bankNameEn: "INCOLEASE",
    classification: "تأجير تمويلي"
  },
  "LF98520001": {
    bankNameAr: "الشركة المصرية للتأجير التمويلي (كوربليس)",
    bankNameEn: "CORPORATE LEASING COMPANY EGYPT",
    classification: "تأجير تمويلي"
  },
  "LF98530001": {
    bankNameAr: "سما فاينانس ش.م.م",
    bankNameEn: "SAMA FINANCE SAE",
    classification: "تأجير تمويلي"
  },
  "LF98540001": {
    bankNameAr: "التوفيق للتأجير التمويلي",
    bankNameEn: "AL TAWFEEK",
    classification: "تأجير تمويلي"
  },
  "LF98560001": {
    bankNameAr: "تكنوليس للتأجير التمويلي",
    bankNameEn: "TECHNOLEASE",
    classification: "تأجير تمويلي"
  },
  "LF98590001": {
    bankNameAr: "جي بي ليس للتأجير التمويلي",
    bankNameEn: "GB LEASE",
    classification: "تأجير تمويلي"
  },
  "LF98600001": {
    bankNameAr: "ترو فاينانس للتأجير التمويلي (تروليس)",
    bankNameEn: "TRUE FINANCE LEASING - TRUELEASE",
    classification: "تأجير تمويلي"
  },
  "LF98610001": {
    bankNameAr: "بنك قطر الوطني الأهلي للتأجير التمويلي",
    bankNameEn: "QNB AL AHLI FOR LEASING FINANCE",
    classification: "تأجير تمويلي"
  },
  "LF98680001": {
    bankNameAr: "كونتكت للتأجير التمويلي ش.م.م",
    bankNameEn: "CONTACT LEASING S.A.E",
    classification: "تأجير تمويلي"
  },
  "LF98700001": {
    bankNameAr: "المجموعة المالية هيرميس للحلول التمويلية",
    bankNameEn: "EFG HERMES CORP SOLUTIONS",
    classification: "تأجير تمويلي"
  },
  "LF98720001": {
    bankNameAr: "جلوبال ليس للتأجير التمويلي",
    bankNameEn: "GLOBAL LEASE",
    classification: "تأجير تمويلي"
  },
  "LF98780001": {
    bankNameAr: "إيجي ليس للتأجير التمويلي",
    bankNameEn: "EGY LEASE",
    classification: "تأجير تمويلي"
  },
  "LF98800001": {
    bankNameAr: "شركة القاهرة للتأجير التمويلي",
    bankNameEn: "CAIRO LEASING CORPORATION",
    classification: "تأجير تمويلي"
  },
  "LF98900001": {
    bankNameAr: "شركة بلتون للتأجير التمويلي",
    bankNameEn: "BELTONE LEASING COMPANY",
    classification: "تأجير تمويلي"
  },
  "MF00010001": {
    bankNameAr: "تنمية لخدمات المشاريع متناهية الصغر",
    bankNameEn: "TANMEYAH MICRO ENTERPRISE SERVICE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020000": {
    bankNameAr: "الاتحاد المصري للتمويل متناهي الصغر",
    bankNameEn: "EGYPTIAN MICROFINANCE FEDERATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020001": {
    bankNameAr: "جمعية رجال أعمال إسكندرية - مشروع تنمية المنشآت الصغيرة",
    bankNameEn: "ALEXANDRIA BUSINESS ASSOCIATION - SMALL MICRO ENTERPRISE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020003": {
    bankNameAr: "جمعية الدقهلية لتنمية المجتمع",
    bankNameEn: "DAKAHLIYA ASSOCIATION FOR COMMUNITY DEVELOPMENT",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020008": {
    bankNameAr: "الشركة الأولى للتمويل متناهي الصغر",
    bankNameEn: "FIRST COMPANY FOR MICRO FINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020010": {
    bankNameAr: "فاروس مايكرو",
    bankNameEn: "FAROUS MICRO",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020011": {
    bankNameAr: "شركة كاش للتمويل متناهي الصغر",
    bankNameEn: "CASH MICROFINANCE COMPANY",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020012": {
    bankNameAr: "شركة فاروس للتمويل متناهي الصغر",
    bankNameEn: "FAROUS MICRO FINANCE CO.",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020013": {
    bankNameAr: "شركة أور للتمويل متناهي الصغر",
    bankNameEn: "AUR MICROFINANCE COMPANY",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00020015": {
    bankNameAr: "فينبي",
    bankNameEn: "FINBI",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021002": {
    bankNameAr: "جمعية التنمية الاقتصادية والاجتماعية للمعاش المبكر",
    bankNameEn: "ECONOMIC AND SOCIAL DEVELOPMENT FOR EARLY RETIREMENT",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021004": {
    bankNameAr: "جمعية شروق للعاملين",
    bankNameEn: "PERSONNEL SHEROK ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021005": {
    bankNameAr: "جمعية سيدات الأعمال للصناعات الصغيرة والمتوسطة",
    bankNameEn: "BUSINESS WOMEN ASSOCIATION FOR SMALL AND MEDIUM INDUSTRIES",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021006": {
    bankNameAr: "مؤسسة ليد للتنمية (تطوير)",
    bankNameEn: "LEAD DEVELOPMENT FOUNDATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021007": {
    bankNameAr: "الجمعية المصرية للتمويل",
    bankNameEn: "EGYPTIAN ASSOCIATION FOR FINANCING",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021008": {
    bankNameAr: "جمعية تنمية المجتمع المحلي - الكوم",
    bankNameEn: "LOCAL SOCIETY DEVELOPMENT ASSOCIATION - ELKOM",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021014": {
    bankNameAr: "جمعية تنمية المجتمع المحلي - الجيزة",
    bankNameEn: "LOCAL SOCIETY DEVELOPMENT ASSOCIATION - GIZA",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021020": {
    bankNameAr: "قرية الأمل - القاهرة",
    bankNameEn: "HOPE VILLAGE - CAIRO",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021021": {
    bankNameAr: "الجمعية المصرية (I THE EGYPTIAN)",
    bankNameEn: "I THE EGYPTIAN",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021026": {
    bankNameAr: "جمعية سيدات أعمال المستقبل",
    bankNameEn: "FUTURE BUSINESS WOMAN ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021027": {
    bankNameAr: "جمعية رجال أعمال أسوان",
    bankNameEn: "ASWAN BUSINESS MEN ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021028": {
    bankNameAr: "جمعية شباب مصر للتنمية",
    bankNameEn: "EGYPT'S YOUTH FOR DEVELOPMENT ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021029": {
    bankNameAr: "جمعية مستثمري ورجال أعمال الشرقية",
    bankNameEn: "SHARKEYA BUSINESSMEN ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021030": {
    bankNameAr: "المركز الإقليمي لتنمية المشروعات",
    bankNameEn: "REGIONAL ENTERPRISES DEVELOPMENT CENTER",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021032": {
    bankNameAr: "جمعية رجال أعمال أسيوط",
    bankNameEn: "ASSUIT BUSINESSMEN ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021040": {
    bankNameAr: "الجمعية المصرية للتنمية الشاملة",
    bankNameEn: "EGYPTIAN ASSOCIATION FOR COMPREHENSIVE DEVELOPMENT",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021043": {
    bankNameAr: "جمعية تنمية المجتمع المحلي بنجع العرقي - قنا",
    bankNameEn: "LOCAL SOCIETY DEVELOPMENT IN NAGAA ELARKY - QENA",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021051": {
    bankNameAr: "جمعية فكرة للتنمية والباعة الجائلين",
    bankNameEn: "FEKRAH ASSOCIATION FOR DEVELOPMENT AND STREET SELLERS",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021054": {
    bankNameAr: "جمعية سان مارك - المنيا",
    bankNameEn: "SAN MARC ASSOCIATION - MENIA",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021062": {
    bankNameAr: "جمعية تنمية البيئة والمجتمع",
    bankNameEn: "ASSOCIATION OF ENVIRONMENT DEVELOPMENT AND SOCIETY",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021064": {
    bankNameAr: "جمعية دندرة لتنمية المشروعات الصغيرة",
    bankNameEn: "DANDA ASSOCIATION - DEVELOPMENT SMALL PROJECTS",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021065": {
    bankNameAr: "جمعية تنمية المجتمع المحلي بفرشوط",
    bankNameEn: "LOCAL SOCIETY DEVELOPMENT IN FARSHOOT",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021070": {
    bankNameAr: "الجمعية المصرية للتدريب وتنمية المشروعات الصغيرة",
    bankNameEn: "EGYPTIAN ASSOCIATION FOR TRAINING AND DEVELOPING SMALL ENTERPRISES",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021082": {
    bankNameAr: "جمعية تنمية المجتمع بفيديمين - الفيوم",
    bankNameEn: "SOCIETY DEVELOPMENT ASSOCIATION IN FEDMEN - FAYOUM",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021090": {
    bankNameAr: "مصر المحروسة",
    bankNameEn: "MASR EL-MAHROUSA",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021097": {
    bankNameAr: "جمعية تحالف المرأة العربية - القاهرة",
    bankNameEn: "ARABIC WOMEN ALLIANCE ASSOCIATION - CAIRO",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021114": {
    bankNameAr: "باب رزق جميل",
    bankNameEn: "BAB RIZQ JAMEEL",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021115": {
    bankNameAr: "جمعية الرفاعية الخيرية - تله - المنيا",
    bankNameEn: "ELREFAYA CHARITY ASSOCIATION - TALAH - MENIA",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021119": {
    bankNameAr: "مؤسسة أدوات دعم المشروعات (بيست)",
    bankNameEn: "BUSINESS ENTERPRISE SUPPORT TOOLS - BEST FOUNDATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021122": {
    bankNameAr: "جمعية السلام - قوص - قنا",
    bankNameEn: "ELSALAM ASSOCIATION - QOUS - QENA",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021124": {
    bankNameAr: "رؤية جديدة للتنمية - المنيا",
    bankNameEn: "NEW VISION FOR DEVELOPMENT - MENIA",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021132": {
    bankNameAr: "جمعية نادي رجال الأعمال",
    bankNameEn: "BUSINESSMEN CLUB ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021147": {
    bankNameAr: "رعاية المستقبل",
    bankNameEn: "FUTURE CARE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021150": {
    bankNameAr: "الجمعية المصرية لتنظيم الأسرة - أسوان",
    bankNameEn: "EGYPTIAN FAMILY PLANNING ASSOCIATION - ASWAN",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021173": {
    bankNameAr: "جمعية المستقبل للتمويل متناهي الصغر",
    bankNameEn: "FUTURE ASSOCIATION FOR MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021174": {
    bankNameAr: "المؤسسة الأولى للتمويل متناهي الصغر",
    bankNameEn: "FIRST MICROFINANCE FOUNDATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021178": {
    bankNameAr: "جمعية تنمية المجتمع - الأقالتة - الأقصر",
    bankNameEn: "SOCIETY DEVELOPMENT ASSOCIATION - AKALTA - LUXOR",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021206": {
    bankNameAr: "مؤسسة تنمية الأسرة بأسيوط",
    bankNameEn: "ASSUIT FAMILY DEVELOPMENT FOUNDATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021213": {
    bankNameAr: "منظمة سبتاس لتنمية المجتمع",
    bankNameEn: "SBTAS SOCIETY DEVELOPMENT ORGANIZATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021242": {
    bankNameAr: "جمعية تنمية المجتمع - المشروعات الصغيرة ومتناهية الصغر",
    bankNameEn: "COMMUNITY DEVELOPMENT ASSOCIATION - SMALL MICRO ENTERPRISES",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021256": {
    bankNameAr: "جمعية سيدات أعمال أسيوط",
    bankNameEn: "ASSUIT BUSINESS WOMEN ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021262": {
    bankNameAr: "شباب مصر لتنمية المجتمع - الفيوم",
    bankNameEn: "EGYPT YOUTH FOR SOCIETY DEVELOPMENT - FAYOUM",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021359": {
    bankNameAr: "جمعية تنمية قدرات المجتمع والبيئة",
    bankNameEn: "COMMUNITY CAPABILITY DEVELOPMENT AND ENVIRONMENTAL ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021424": {
    bankNameAr: "جمعية الطفولة والتنمية بأسيوط",
    bankNameEn: "ASSUIT CHILDHOOD AND DEVELOPMENT ASSOCIATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021425": {
    bankNameAr: "تنمية الأسرة والمجتمع المحلي بالفيوم",
    bankNameEn: "FAMILY AND LOCAL SOCIETY DEVELOPMENT IN FAYOUM",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021443": {
    bankNameAr: "جمعية مفتاح الحياة - الأقصر",
    bankNameEn: "LIFE KEY ASSOCIATION - LUXOR",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021543": {
    bankNameAr: "جمعية تنمية المجتمع بالعجميين - الفيوم",
    bankNameEn: "SOCIETY DEVELOPMENT ASSOCIATION IN AGMEEN - FAYOUM",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021621": {
    bankNameAr: "جمعية رعاية الصيادين وعمال الصيد - أسوان",
    bankNameEn: "FISHERMEN AND HUNTING WORKERS CARE ASSOCIATION - ASWAN",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021697": {
    bankNameAr: "مؤسسة منة للتنمية",
    bankNameEn: "MENNA DEVELOPMENT CORPORATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021755": {
    bankNameAr: "جمعية وادي النيل للتنمية - طهطا - سوهاج",
    bankNameEn: "WADI EL NILE FOR DEVELOPMENT ASSOCIATION - TAHTA - SOHAG",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021864": {
    bankNameAr: "خالد أبو الله للتنمية الاجتماعية - القاهرة",
    bankNameEn: "KHALED ABOALLAH FOR SOCIAL DEVELOPMENT - CAIRO",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00021931": {
    bankNameAr: "جمعية أمان للتنمية البشرية",
    bankNameEn: "AMAN ASSOCIATION FOR HUMAN DEVELOPMENT",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00030001": {
    bankNameAr: "شركة ريفي لخدمات المشاريع متناهية الصغر",
    bankNameEn: "MICROFINANCE ENTERPRISE SERVICES COMPANY 'REEFY'",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00040001": {
    bankNameAr: "تساهيل للتمويل متناهي الصغر",
    bankNameEn: "TASAHEEL MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00050001": {
    bankNameAr: "مؤسسة التضامن للتمويل الأصغر",
    bankNameEn: "ALTADAMUN MICROFINANCE INSTITUTION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00060001": {
    bankNameAr: "جمعية تنمية المشروعات الصغيرة ببورسعيد",
    bankNameEn: "SMALL ENTERPRISES DEVELOPMENT ASSOCIATION OF PORT SAID",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00070001": {
    bankNameAr: "الهيئة القبطية الإنجيلية للخدمات الاجتماعية",
    bankNameEn: "COPTIC EVANGELICAL ORGANIZATION FOR SOCIAL SERVICES",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00090001": {
    bankNameAr: "مؤسسة مصر الخير",
    bankNameEn: "MISR EL-KHEIR FOUNDATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00100001": {
    bankNameAr: "سندة للتمويل متناهي الصغر",
    bankNameEn: "SANDAH MICRO FINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00110001": {
    bankNameAr: "أمان للتمويل متناهي الصغر",
    bankNameEn: "AMAN MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00120001": {
    bankNameAr: "تمويلي للمشروعات متناهية الصغر",
    bankNameEn: "TAMWEELY MICRO FINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00121007": {
    bankNameAr: "إرادة للتمويل متناهي الصغر",
    bankNameEn: "ERADA MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00130001": {
    bankNameAr: "فوري للتمويل متناهي الصغر",
    bankNameEn: "FAWRY MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00131007": {
    bankNameAr: "إنجاز للتمويل متناهي الصغر",
    bankNameEn: "INGAZ MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00140001": {
    bankNameAr: "بساطة للتمويل متناهي الصغر",
    bankNameEn: "BASATA MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00150001": {
    bankNameAr: "المؤسسة العامة للتكافل الاجتماعي",
    bankNameEn: "GENERAL FOUNDATION FOR SOCIAL SOLIDARITY",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00160001": {
    bankNameAr: "المؤسسة المصرية لتنمية المشروعات الصغيرة",
    bankNameEn: "EGYPTIAN SMALL ENTERPRISE DEVELOPMENT FOUNDATION",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00180001": {
    bankNameAr: "الأهلي كابيتال للتمويل متناهي الصغر - تمكين",
    bankNameEn: "AL AHLY CAPITAL FOR MICROFINANCE - TAMKEEN",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00190001": {
    bankNameAr: "بدايتي للتمويل متناهي الصغر",
    bankNameEn: "BEDAYTI - MICROFINANCE COMPANY",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00200001": {
    bankNameAr: "إيزي كريديت للتمويل متناهي الصغر",
    bankNameEn: "EASY CREDIT FOR MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00210001": {
    bankNameAr: "المصرية للتمويل متناهي الصغر - مكسب",
    bankNameEn: "EGYPTIAN FOR MICROFINANCE - MAKSAB",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00220001": {
    bankNameAr: "ثقة للتمويل متناهي الصغر",
    bankNameEn: "THIQA MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MF00230001": {
    bankNameAr: "شاري للتمويل متناهي الصغر",
    bankNameEn: "SHARI MICROFINANCE",
    classification: "تمويل متناهي الصغر / جمعية"
  },
  "MG98010001": {
    bankNameAr: "الشركة المصرية للتمويل العقاري",
    bankNameEn: "EGYPTIAN HOUSING FINANCE COMPANY",
    classification: "تمويل عقاري"
  },
  "MG98060001": {
    bankNameAr: "الشركة العربية الأفريقية الدولية للتمويل العقاري",
    bankNameEn: "ARAB AFRICAN INTERNATIONAL MORTGAGE FINANCE",
    classification: "تمويل عقاري"
  },
  "MG98120001": {
    bankNameAr: "كونتكت للتمويل العقاري",
    bankNameEn: "CONTACT MORTGAGE FINANCE",
    classification: "تمويل عقاري"
  },
  "MG98130001": {
    bankNameAr: "سي آي للتمويل العقاري",
    bankNameEn: "CI MORTGAGE",
    classification: "تمويل عقاري"
  },
  "NB95000001": {
    bankNameAr: "بنك ناصر الاجتماعي",
    bankNameEn: "NASSER SOCIAL BANK",
    classification: "بنك"
  },
  "PC01000001": {
    bankNameAr: "بنك الإسكندرية",
    bankNameEn: "BANK OF ALEXANDRIA",
    classification: "بنك"
  },
  "PC02000001": {
    bankNameAr: "البنك الأهلي المصري",
    bankNameEn: "NATIONAL BANK OF EGYPT",
    classification: "بنك"
  },
  "PC03000001": {
    bankNameAr: "بنك القاهرة",
    bankNameEn: "BANQUE DU CAIRE",
    classification: "بنك"
  },
  "PC04000001": {
    bankNameAr: "بنك مصر",
    bankNameEn: "BANQUE MISR",
    classification: "بنك"
  },
  "RA00990001": {
    bankNameAr: "البنك المركزي المصري",
    bankNameEn: "CENTRAL BANK OF EGYPT",
    classification: "جهة رقابية"
  },
  "RA00990002": {
    bankNameAr: "الهيئة العامة للرقابة المالية",
    bankNameEn: "FINANCIAL REGULATORY AUTHORITY (FRA)",
    classification: "جهة رقابية"
  },
  "RC00570001": {
    bankNameAr: "بلنك للتمويل الاستهلاكي",
    bankNameEn: "BLNK CONSUMER FINANCE",
    classification: "تمويل استهلاكي"
  },
  "RC00580001": {
    bankNameAr: "حالا للتمويل الاستهلاكي",
    bankNameEn: "HALAN CONSUMER FINANCE",
    classification: "تمويل استهلاكي"
  },
  "RC00590001": {
    bankNameAr: "جلوبال كورب للتمويل الاستهلاكي",
    bankNameEn: "GLOBAL CORP CONSUMER FINANCE",
    classification: "تمويل استهلاكي"
  },
  "RC00610001": {
    bankNameAr: "مصرف أبوظبي الإسلامي للتمويل الاستهلاكي",
    bankNameEn: "ABU DHABI ISLAMIC CONSUMER FINANCE",
    classification: "تمويل استهلاكي"
  },
  "RC00670001": {
    bankNameAr: "درايف للتمويل والخدمات المالية غير المصرفية",
    bankNameEn: "DRIVE FINANCE AND NON-BANKING SERVICES",
    classification: "تمويل استهلاكي"
  },
  "RC00680001": {
    bankNameAr: "وان فاينانس لخدمات التمويل الاستهلاكي",
    bankNameEn: "ONE FINANCE FOR CONSUMER FINANCE SERVICES",
    classification: "تمويل استهلاكي"
  },
  "RC00700001": {
    bankNameAr: "فوري للتمويل الاستهلاكي",
    bankNameEn: "FAWRY CONSUMER FINANCE",
    classification: "تمويل استهلاكي"
  },
  "RC00720001": {
    bankNameAr: "أو باي ناو",
    bankNameEn: "OPAY NOW",
    classification: "تمويل استهلاكي"
  },
  "RC00740001": {
    bankNameAr: "ألكان فاينانس للخدمات المالية",
    bankNameEn: "ALKAN FINANCE FOR FINANCIAL SERVICES",
    classification: "تمويل استهلاكي"
  },
  "RC00750001": {
    bankNameAr: "كونتكت كريديتك",
    bankNameEn: "CONTACT CREDITECH",
    classification: "تمويل استهلاكي"
  },
  "RC00780001": {
    bankNameAr: "فاروس للتمويل الاستهلاكي (أبجد)",
    bankNameEn: "PHAROS CONSUMER FINANCE (ABGAD)",
    classification: "تمويل استهلاكي"
  },
  "RC00800001": {
    bankNameAr: "أور للتمويل الاستهلاكي",
    bankNameEn: "AUR CONSUMER FINANCE",
    classification: "تمويل استهلاكي"
  },
  "SB77000001": {
    bankNameAr: "البنك العقاري المصري العربي",
    bankNameEn: "EGYPTIAN ARAB LAND BANK",
    classification: "بنك"
  },
  "SB80000001": {
    bankNameAr: "بنك التنمية الصناعية",
    bankNameEn: "INDUSTRIAL DEVELOPMENT BANK",
    classification: "بنك"
  },
  "SB82010001": {
    bankNameAr: "البنك الزراعي المصري",
    bankNameEn: "AGRICULTURAL BANK OF EGYPT (ABE)",
    classification: "بنك"
  },
  "UC00010001": {
    bankNameAr: "الشركة الوطنية للغاز (ناتجاس)",
    bankNameEn: "NATIONAL GAS COMPANY (NATGAS)",
    classification: "مرافق / خدمات"
  },
  "UC00020001": {
    bankNameAr: "أورنج مصر",
    bankNameEn: "ORANGE",
    classification: "اتصالات"
  },
  "UC00030001": {
    bankNameAr: "شركة الفيوم للغاز",
    bankNameEn: "FAYOUM GAS COMPANY",
    classification: "مرافق / خدمات"
  }
};

export default codes;