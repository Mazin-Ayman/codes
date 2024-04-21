const data = {
  "انشاء ملف بيانات عميل افراد": { shortcut: "CERC", en_job: "Create  Retail CIF", officer: "Maker" },
  "اثراء (استكمال) ملف بيانات عمبل افراد": { shortcut: "ERC", en_job: "Enrich Retail CIF", officer: "Maker" },
  "اعتماد ملفات بيانات عملاء الافراد / شركات": { shortcut: "RCCAT", en_job: "Retail and Corporate CIF Approval Tray", officer: "Checker" },
  "تحويل كيان عميل افراد الى عميل": { shortcut: "CREC", en_job: "Convert Retail Entity to Customer", officer: "Maker" },
  "استعلام عن بيانات اساسية لعميل افراد": { shortcut: "IERC", en_job: "Inquire On Retail CIF", officer: "Maker-Checker" },
  "انشاء ملف بيانات عميل شركات": { shortcut: "CECC", en_job: "Creat CorporateCIF", officer: "Maker" },
  "اثراء ملف بيانات عميل شركات": { shortcut: "ECC", en_job: "Enrich Corporate CIF", officer: "Maker" },
  "اضافه حقول اساسية لملف بيانات عميل افراد / شركات": { shortcut: "ACCF", en_job: "Add CIF Core Fields", officer: "Maker" },
  "مراجعة الحقول الاساسية لملف بيانات العميل": { shortcut: "VCCF", en_job: "Verify CIF Core Fields", officer: "Checker" },
  "تحويل كيان الشركة الى عميل": { shortcut: "CCEC", en_job: "Convert Corporatel Entity to Customer", officer: "Maker" },
  "استعلام عن بيانات اساسية لعميل شركات": { shortcut: "IECC", en_job: "Inquire On Corporate CIF", officer: "Maker-Checker" },
  "استعلام عن الحقول الاساسية لملف عميل": { shortcut: "ICCF", en_job: "Inquire On CIF Core Fields", officer: "Maker-Checker" },
  "الفتح الفورى للحساب": { shortcut: "INSTACCT", en_job: "Instant Account Opening", officer: "Maker" },
  "المراجعة الفورية للحساب": { shortcut: "INSTACCT", en_job: "Instant Account Opening", officer: "Checker" },
  "استعلام عن حسابات توفير للعميل": { shortcut: "ISAC", en_job: "Inquire on Saving Accounts of Customer", officer: "Maker-Checker" },
  "استعلام عن حسابات جارية للعميل": { shortcut: "ICAC", en_job: "Inquire on Current Accounts of Customer", officer: "Maker-Checker" },
  "اغلاق الحساب": { shortcut: "CAT", en_job: "Close Account", officer: "Maker" },
  "مراجعة اغلاق الحساب": { shortcut: "VAC", en_job: "Verify Account Closure", officer: "Checker" },
  "الغاء اغلاق الحساب (قبل المراجعة)": { shortcut: "CAC", en_job: "Cancel Account Closure", officer: "Maker" },
  "تحصيل رسوم اغلاق الحساب": { shortcut: "CACCS", en_job: "Collect Account Closure Charges", officer: "Maker" },
  "مراجعة تحصيل رسوم اغلاق الحساب": { shortcut: "VACCC", en_job: "Verify Acount Closure Charges Collection", officer: "Checker" },
  "الفتح الفورى لحساب وديعة او شهادة": { shortcut: "INSTTD", en_job: "Instant TU account Opening", officer: "Maker-Checker" },
  "المراجعة الفورية لحساب وديعة او شهادة": { shortcut: "INSTTD", en_job: "Instant TU account Opening", officer: "Maker-Checker" },
  "استعلام عن شهادات وودائع حاصة بالعميل": { shortcut: "IDDC", en_job: "Inquire on Deposit Detailes of Customer", officer: "Maker-Checker" },
  "تنفيذ اغلاق تجريبي لحساب وديعة": { shortcut: "PTCTDA", en_job: "Perform Trial Closure of Deposit Account", officer: "Maker" },
  "اغلاق حساب وديعة": { shortcut: "CTDA", en_job: "Close Deposit Account", officer: "Maker" },
  "مراجعة اغلاق حساب وديعة/شهادة": { shortcut: "VTDAC", en_job: "Verify Deposit Account Closure", officer: "Checker" },
  "الغاء اغلاق حساب وديعة / شهادة ": { shortcut: "CTDAC", en_job: "Cancel Deposite Account Closure", officer: "Maker" },
  "عرض قائمة حسابات العميل": { shortcut: "VCAL", en_job: "View Customer accounts list", officer: "Maker-Checker" },
  "الاستعلام عن ملخص عميل": { shortcut: "ICSY", en_job: "Inquire on Customer Summary", officer: "Maker-Checker" },
  "الاستعلام عن دفتر الاستاذ": { shortcut: "IAL ", en_job: "Inquire on Account Ledger", officer: "Maker-Checker" },
  "الاستعلام عن حساب": { shortcut: "IEA", en_job: "Inquire on Account", officer: "Maker-Checker" },
  "الاستعلام عن تقاصيل الحسابات العامة": { shortcut: "IAGD", en_job: "Inquire on Account General Details", officer: "Maker-Checker" },
  "الاستعلام عن تفاصيل العائد على الحساب": { shortcut: "IAID", en_job: "Inquire on Account Interest Details", officer: "Maker-Checker" },
  "طباعة التقارير الموجود فى قائمة الانتظار": { shortcut: "PQR", en_job: "Print Queued Reports", officer: "Maker-Checker" },
  "الغاء الحقول الاساسية لملف بيانات العميل": { shortcut: "CCCF", en_job: "Cancel CIF Core Fields", officer: "Maker" },
  "تعديل الحقول الاساسية لملف بيانات العميل": { shortcut: "MCCF", en_job: "Modify CIF Core Fields", officer: "Maker" },
  "الغاء تحصيل رسوم اغلاق الحساب": { shortcut: "CACCC", en_job: "Cancel Acount Closure Charges Collection", officer: "Maker" },
  "تحوبل بناء على طلب العميل": { shortcut: "MCITTD", en_job: "Maintain Customer Induced Transfer Transaction Details", officer: "Maker" },
  "تحوبل بناء على طلب البنك": { shortcut: "MBITTD", en_job: "Maintain Bank Induced Transfer Transaction Details", officer: "Maker" },
  "توثيق الحركات الغير نقدية": { shortcut: "PNCT", en_job: "Post Non Cash Transaction", officer: "Checker" },
  "ادارة تفاصيل حركة الايداع النقدي": { shortcut: "MCDTD", en_job: "Maintain Cash Deposit Transaction Details", officer: "Maker" },
  "ادارة تفاصيل حركة السحب النقدي": { shortcut: "MCWTD", en_job: "Maintain Cash Withdrawal Transaction Details", officer: "Maker" },
  "الاستعلام عن رقم حساب الشيك": { shortcut: "IANC", en_job: "Inquire on Account Number of Cheque", officer: "Maker-Checker" },
  "الاستعلام عن شيك مصرفي": { shortcut: "IDDT", en_job: "Inquire on Deman Draft", officer: "Maker-Checker" },
  "توثيق حركة النقدية": { shortcut: "PCT", en_job: "Post Cash Transactions", officer: "Checker" },
  "توثيق او مراجعة الحركات ": { shortcut: "PVT", en_job: "Post or VerifyTransactions", officer: "Checker" },
  "حذف تفاصيل الحركة": { shortcut: "DTDS", en_job: "DeleteTransactions Details", officer: "Maker" },
  "اجراء تبادل العملات النقدية": { shortcut: "PCCE", en_job: "Perform Cash Currency Exchange", officer: "Maker" },
  "ادارة تفاصيل حركة تحويل نقدي": { shortcut: "MCTTD", en_job: "Maintain Cash Transfer Transaction Details", officer: "Head Teller" },
  "طباعة الايصال": { shortcut: "PVR", en_job: "Print Voucher", officer: "Maker" },
  "انشاء تفاصيل حركة تبادل العملات الاجنبية": { shortcut: "CFCCETD", en_job: "Create Foreign Currency Cash Exchange Transaction Details", officer: "Maker" },
  "فتح تفاصيل النقدية بالخزينة": { shortcut: "OVCD", en_job: "Open Vault Cash Details", officer: "Maker" },
  "الغاء تفاصيل النقدية بالحزينة": { shortcut: "CCVD", en_job: "Cancel Vault Cash Details", officer: "Maker" },
  "تعديل تفاصيل النقدية بالخزينة": { shortcut: "MVCDS", en_job: "Modify Vault Cash Details", officer: "Maker" },
  "مراجعة تفاصيل نقدية الخزينة": { shortcut: "VVCD", en_job: "Verify Vault Cash Details", officer: "Checker" },
  "طباعة اشعار او ايصال خصم او اضافة": { shortcut: "PDCAV", en_job: "Print Debit or Credit Advice or Voucher", officer: "Maker" },
  "اغلاق الحركات النقدية": { shortcut: "CCT", en_job: "Close Cash Transaction", officer: "Maker" },
  "فتح حركات نقدية": { shortcut: "OCT", en_job: "Open Cash Transaction", officer: "Maker" },
  "الاستعلام عن حالة شيك": { shortcut: "ICES", en_job: "Inquire on Cheque Status", officer: "Maker" },
  "حذف حركات فى حالة الادخال": { shortcut: "DTES", en_job: "Delete Transactions In Entered Status", officer: "Maker" },
  "ادارة تفاصيل فئات نقدية حساب الصراف": { shortcut: "MTADD", en_job: "Maintain Teller Account Denomination Details", officer: "Maker-Checker" },
  "عكس الحركة": { shortcut: "RTN", en_job: "Reverse Transaction", officer: "Maker" },
  "مراجعة عكس الحركة": { shortcut: "VTR", en_job: "Verify Transaction Reversal", officer: "Checker" },
  "تأشير حركة لعكسها": { shortcut: "MTR", en_job: "Marked Transaction for Reversal", officer: "Maker" },
  "مراجعة عكس حركة مؤشرة": { shortcut: "VRMT", en_job: "Verify Reversal of Marked Transaction", officer: "Checker" },
  "الاستعلام عن موقف الصراف النقدي للموظف": { shortcut: "ITCPE", en_job: "Inquire on Teller Cash Position for Employee", officer: "Maker" },
  "تفاصيل اغلاق النقدية بالخزينة": { shortcut: "CVCDS", en_job: "Close Vaulte Cash Details", officer: "Maker" },
  "انشاء تقرير الفئات النقدية حسب الحركة والصراف والفرع (محضر الجرد)": { shortcut: "GSTTCDR", en_job: "Generate SOL-wise Teller-wise Transaction-wise Cash Denomination Rpt", officer: "Head Teller" },
  "اضافة امر الدفع من خلال المقاصة الالية": { shortcut: "AAPO", en_job: "Add ACH Payment Order", officer: "Maker" },
  "اضافة امر الدفع من خلال السويفت الالي": { shortcut: "AEPO", en_job: "Add ESWIFT Payment Order", officer: "Maker" },
  "اضافة امر الدفع من خلال السويفت": { shortcut: "ASPO", en_job: "Add SWIFT Payment Order", officer: "Maker" },
  "مراجعة امر الدفع": { shortcut: "MPOR", en_job: "Add Payment Order", officer: "Checker" },
  " اصدار شيك مصرفي": { shortcut: "IEDD", en_job: "Issue Demand Draft", officer: "Maker" },
  "طباعة  شيك مصرفي": { shortcut: "PDDT", en_job: "Print Demand Draft", officer: "Maker" },
  "ايقاف دفع شيك مصرفي": { shortcut: "SDDP", en_job: "Stop Deman Draft Payment", officer: "Maker" },
  "مراجعة ايقاف دفع شيك مصرفي": { shortcut: "VDDSP", en_job: "VerifyDemand Draft Stop Payment", officer: "Checker" },
  "التأشير على الشيك المصرفي كمفقود": { shortcut: "MDDL", en_job: "Mark Demand Draft as Lost", officer: "Maker" },
  "عكس حركة الشيك المصرفي": { shortcut: "RDDS", en_job: "Revert Demand Dtraf Status", officer: "Maker" },
  " اصدار شيك مصرفي مكرر": { shortcut: "IDDD", en_job: "Issue Duplicate Demand Draft", officer: "Maker" },
  "صرف الشيك المصرفي": { shortcut: "PDD", en_job: "Pay Demand Draft", officer: "Maker" },
  "ادارة تفاصيل الفئات النقدية للحركة المرحلة": { shortcut: "MCDDPTN", en_job: "Maintain Cash Denomination Details for Posted Transaction", officer: "Maker" },
  "فك الايقاف للشيك المصرفي": { shortcut: "RDDSP", en_job: "Revoke Demand Draft Stop Payment", officer: "Maker" },
  "الغاء فك الايقاف للشيك المصرفي": { shortcut: "CRDDSP", en_job: "Cancel Revcn of DD Stop Payment", officer: "Maker" },
  "مراجعة فك الايقاف للشيك المصرفي": { shortcut: "VRDDSP", en_job: "Verify Revcn of DD Stop Payment", officer: "Checker" },
  "اعادة الطباعة للشيك المصرفي": { shortcut: "RDDF", en_job: "Reprint Demand Draft", officer: "Maker" },
  "الاستعلام عن العمليات المستديمة": { shortcut: "ISGI", en_job: "Inquire on Standing Instrns", officer: "Maker" },
  "اضافة حجز على الحساب": { shortcut: "ALA", en_job: "Add Lien Account", officer: "Maker" },
  "الغاء الحجز على الحساب": { shortcut: "CLA", en_job: "Cancel lien on account", officer: "Maker" },
  "مراجعة الحجز على الحساب": { shortcut: "VLA", en_job: "Verify Lien Account", officer: "Checker" },
  "تعديل الحجز على الحساب": { shortcut: "MLA", en_job: "Modify lien on account", officer: "Maker" },
  "الاستعلام الحجز على الحساب": { shortcut: "IELN", en_job: "Inquire on lien", officer: "Maker-Checker" },
  "سجل الحجز على الحساب": { shortcut: "ILHY", en_job: "Inquire on lien History", officer: "Maker-Checker" },
  "الاستعلام عن الحجز الخاص بالعميل": { shortcut: "ICL", en_job: "Inquire on Customer Lien", officer: "Maker-Checker" },
  "قائمة الحجز على الحساب": { shortcut: "LAL", en_job: "List of Account lien ", officer: "Maker-Checker" },
  "الاستعلام عن رصيد حساب": { shortcut: "IAB", en_job: "Inquire on Account Balance", officer: "Maker- Checker" },
  "الاستعلام عن الحقول الاساسية لملف بيانات العميل": { shortcut: "ICCF", en_job: "Inquire on CIF Core Fields  ", officer: "Maker- Checker" },
  "الاستعلام عن رصيد حساب": { shortcut: "IAB", en_job: "Inquire on Account Balance", officer: "Maker- Checker" },
  " حظر او الغاء حظر ملف بيانات العملاء افراد من القائمة السوداء": { shortcut: "BURCF", en_job: "Blacklist or Unblack-list Retail CIF  ", officer: "Maker" },
  " حظر او الغاء حظر ملف بيانات العملاء الشركات من القائمة السوداء": { shortcut: "BUCCF", en_job: "Blacklist or Unblack-list Corporate CIF  ", officer: "Maker" },
  " تعليق او الغاء تعليق ملف بيانات العميل افراد": { shortcut: "SURC", en_job: "Suspend or Unsuspend Retail CIF  ", officer: "Maker" },
  " تعليق او الغاء تعليق ملف بيانات العميل الشركات": { shortcut: "SUCC", en_job: "Suspend or Unsuspend Corporate CIF  ", officer: "Maker" },
  "ادارة تفاصيل مجموعة ملفات تفاصيل العميل": { shortcut: "MCGD", en_job: "Maintain CIF Group Details", officer: "Maker" },
  "ادارة تفاصيل العائلة": { shortcut: "MHDS", en_job: "Maintain Household Details", officer: "Maker" },
  " صندوق مهام اعتماد ملفات بيانات العملاء الافراد والشركات": { shortcut: "RCCAT", en_job: "Retail and corporate CIF Approval tray", officer: "Checker" },
  "  ادارة التفاصيل الرئيسية لقائمة استبعاد العملاء افراد ": { shortcut: "MRNLMD", en_job: "Retail closed CIF menu ", officer: "Maker" },
  " ادارة التفاصيل الرئيسية لقائمة استبعاد العملاء  شركات": { shortcut: "MCNLMD", en_job: "Corporate Closed CIF menu ", officer: "Maker" },
  " فتح حساب جاري ": { shortcut: "OCA", en_job: "Open Current Account", officer: "Maker" },
  " تعديل الحساب الجاري قبل المراجعة": { shortcut: "MOCAV", en_job: "Modify Opened Current Account Before Verification ", officer: "Maker" },
  " الغاء فتح حساب جاري قبل المراجعة": { shortcut: "CCAO", en_job: "Cancel Current Account Opening", officer: "Maker" },
  " مراجعة فتح/الغاء/تعديل حساب جاري": { shortcut: "VCAO", en_job: "Verify Current Account Opening", officer: "Checker" },
  " فتح حساب توفير ": { shortcut: "OSA", en_job: "Open Saving Account", officer: "Maker" },
  " تعديل حساب التوفير قبل المراجعة": { shortcut: "MOSAV", en_job: "Modify Opened Saving Account Before Verification ", officer: "Maker" },
  " الغاء فتح حساب توفير قبل المراجعة": { shortcut: "CSAO", en_job: "Cancel Current Account Opening", officer: "Maker" },
  " مراجعة فتح/الغاء/تعديل حساب توفير": { shortcut: "VSAO", en_job: "Verify Current Account Opening", officer: "Checker" },
  " تعديل خاص لحالة حساب": { shortcut: "CMAS", en_job: "Custom Modify Account Status", officer: "Maker-Checker" },
  "تعديل اسم الحساب": { shortcut: "MAN", en_job: "Modify Account Name", officer: "Maker-Checker" },
  "الغاء تعديل اسم الحساب": { shortcut: "CANM", en_job: "Cancel Account Name Modification ", officer: "Maker-Checker" },
  " مراجعة تعديل اسم الحساب": { shortcut: "VANM", en_job: "Verify Account Name Modification", officer: "Maker-Checker" },
  " انشاء حساب مرتبات للعميل ": { shortcut: "CSPAC", en_job: "Customer Salary Payroll Account Creation ", officer: "Maker-Checker" },
  "اضافة مذكرة": { shortcut: "AMP", en_job: "Add Memo Pad", officer: "Maker" },
  "تعديل مذكرة": { shortcut: "MMP", en_job: "Modify Memo Pad", officer: "Maker" },
  "الغاء المذكرة قبل المراجعة": { shortcut: "CMPV", en_job: "Cancel Memo Pad before Verification", officer: "Maker" },
  "مراجعة المذكرة": { shortcut: "VMP", en_job: "Verify Memo Pad", officer: "Checker" },
  "الاستعلام عن تفاصيل المذكرة": { shortcut: "IMP", en_job: "Inquire Memo Pad", officer: "Maker-Checker" },
  "حذف المذكرة": { shortcut: "DMP", en_job: "Delete Memo Pad", officer: "Maker" },
  "فتح حساب وديعة متزايدة": { shortcut: "OTUDA", en_job: "Open Top Up Deposit Account", officer: "Maker" },
  "تعديل حساب الوديعة المتزايدة المفتوح قبل المراجعة": { shortcut: "MOTUDAV", en_job: "Modify Opened Top Up Deposit Account before verification", officer: "Maker" },
  "الغاء فتح حساب وديعة متزايدة": { shortcut: "CTUDAO", en_job: "Cancel Top Up Deposit Account opening", officer: "Maker" },
  "مراجعة فتح حساب وديعة متزايدة": { shortcut: "VTUDAO", en_job: "Verify Top Up Deposit Account Opening", officer: "Checker" },
  "تجميد الحساب": { shortcut: "FAS", en_job: "Freeze Account", officer: "Maker" },
  "مراجعة تجميد الحساب": { shortcut: "VAFD", en_job: "Verify Account Freeze Detail", officer: "Checker" },
  "تعديل تفاصيل تجميد الحساب": { shortcut: "MADF", en_job: "Modify Account Freeze Details", officer: "Maker" },
  "الغاء عملية تجميد حساب قبل المراجعة": { shortcut: "CAFD", en_job: "Cancel Account Freeze Details", officer: "Maker" },
  " الغاء تجميد الحساب ": { shortcut: "UAS", en_job: "Unfreeze Account", officer: "Maker" },
  "الاستعلام على الحسابات المجمدة على مستوى العميل والحسابات": { shortcut: "IAFD", en_job: "Inquire on Account Freeze Details", officer: "Maker-checker" },
  "تننفيذ الى مجمع لتجميد او عدم تجميد الحسابات": { shortcut: "BFUAS", en_job: "Batch Freeze or Unfreeze Accounts", officer: "central Ops -Manager Liabilities" },
  "ادارة امر دفع": { shortcut: "MPOR", en_job: "Maintain Payment Order", officer: "Maker-Checker" },
  "الاعتماد مركزيا للحوالات الصادرة": { shortcut: "AOPO", en_job: "Authorize outward Payment Orders", officer: "Maker-Checker" },
  "استعلام عن امر الدفع": { shortcut: "IMPOR", en_job: "Inquire Payment Order", officer: "Maker-Checker" },
  "ادارة التفاصيل المالية لمقدم الطلب": { shortcut: "MAFDS", en_job: "Maintain Applicant Financial Dtls", officer: "Maker" },
  "انشاء طلب": { shortcut: "CRCAN", en_job: "Creat RTL CR APPLCN", officer: "Maker" },
  "ادارة تسجيل بيانات الطلب": { shortcut: "MDCA", en_job: "Maintain Data Capture APPLCN", officer: "Maker" },
  "ادارة طلب قرار الائتمان": { shortcut: "MCDA", en_job: "Maintain CR DESCN APPLCN", officer: "Maker" },
  "ادارة طلب ما بعد الاعتماد": { shortcut: "MPAA", en_job: "Maintain Post Approval APPLCN", officer: "Maker" },
  " انشاء طلب قرض شخصي": { shortcut: "CRCAN", en_job: "Creat RTL CR APPLCN", officer: "Maker" },
  "ادارة تسجيل بيانات الطلب قرض شخصي": { shortcut: "MDCA", en_job: "Maintain Data Capture APPLCN", officer: "Maker" },
  "ادارة طلب التنفيذ القرض الشخصي": { shortcut: "MPA", en_job: "Maintain Processing APPLCN", officer: "Maker" },
  " ادارة طلب قرار الائتمان للقرض الشخصي": { shortcut: "MCDA", en_job: "Maintain CR DESCN APPLCN", officer: "Maker" },
  "ادارة طلب ما بعد الاعتماد للقرش الشخصي": { shortcut: "MPAA", en_job: "Maintain Post Approval APPLCN", officer: "Maker" },
  " انشاء طلب بطاقة ائتمان ": { shortcut: "CRCAN", en_job: "Creat RTL CR APPLCN", officer: "Maker" },
  "ادارة تسجيل بيانات الطلب بطاقة الائتمان": { shortcut: "MDCA", en_job: "Maintain Data Capture APPLCN", officer: "Maker" },
  "ادارة طلب التنفيذ بطاقة الائتمان": { shortcut: "MPA", en_job: "Maintain Processing APPLCN", officer: "Maker" },
  " ادارة طلب قرار الائتمان بطاقة الائتمان": { shortcut: "MCDA", en_job: "Maintain CR DESCN APPLCN", officer: "Maker" },
  "ادارة طلب ما بعد الاعتماد بطاقة الائتمان": { shortcut: "MPAA", en_job: "Maintain Post Approval APPLCN", officer: "Maker" },
  "اجراء دفعة مجدولة للقرض": { shortcut: "PLSP", en_job: "Perform Loan Schedule Payment", officer: "Maker" },
  "الغاء دفعة للقرض": { shortcut: "CLSP", en_job: "Cancel Loan Schedule Payment", officer: "Maker" },
  "مراجعة دفعة للقرض": { shortcut: "VLSP", en_job: "Verify Loan Schedule Payment", officer: "Checker" },
  "عكس الدفعة المجدولة للقرض": { shortcut: "RLSP", en_job: "Reverse Loan Schedule Payment", officer: "Maker" },
  "اضافة دفعة غير مجدولة للقرض": { shortcut: "ARLUP", en_job: "Add Retail Loan Unscheduled Payment", officer: "Maker" },
  "الغاء دفعة غير مجدولة لقرض عملاء افراد": { shortcut: "CRLUP", en_job: "Cancel Loan Retail Unscheduled Payment", officer: "Maker" },
  "مراجعة دفعة للقرض": { shortcut: "VRLUP", en_job: "Verify Retail Loan Unscheduled Payment", officer: "Checker" },
  "عكس دفعة غير مجدولة لقرض عملاء افراد": { shortcut: "RRLUP", en_job: "Reverse Retail Loan Unscheduled Payment", officer: "Checker" },
  "تنفيذ تجريبي لسداد كامل مبلغ القرض": { shortcut: "PTLP", en_job: "Perform Trial Loan Payoff", officer: "Maker" },
  "الغاء سداد كامل مبلغ للقرض": { shortcut: "CLP", en_job: "Cancel Loan Payoff", officer: "Maker" },
  "سداد كامل مبلغ للقرض": { shortcut: "POLA", en_job: "Payoff Loan Amount", officer: "Maker" },
  "مراجعة سداد كامل مبلغ القرض": { shortcut: "VLP", en_job: "Verify Loan Payoff", officer: "checker" },
  "عكس سداد كامل مبلغ للقرض": { shortcut: "RLPF", en_job: "Reverse Loan Payoff", officer: "Maker" },
  "اجراء نمذجة قرض عملاء افراد": { shortcut: "PRLM", en_job: "Perform retail loan modeling", officer: "Maker-Checker" },
  "فتح حساب اقراض عملاء افراد": { shortcut: "ORLA", en_job: "Open retail lendinig Account", officer: "Maker" },
  "تعديل حساب اقراض عملاء افراد قبل المراجعة": { shortcut: "MORLAV", en_job: "Modify Open Retail Lending Account Before Verification", officer: "Maker" },
  "الغاء حساب اقراض عملاء افراد": { shortcut: "CRLAO", en_job: "Cancel Retail Lending Account Opening", officer: "Maker" },
  "مراجعة حساب اقراض عملاء افراد": { shortcut: "VRLA", en_job: "Verify Retail Loan Account", officer: "Checker" },
  "تعديل حساب اقراض عملاء افراد": { shortcut: "MRLAT", en_job: "Modify Retail Lending Account", officer: "Maker" },
  "الغاء تعديل حساب اقراض عملاء افراد": { shortcut: "CRLAM", en_job: "Cancel Retail Lending Account Modification", officer: "Maker" },
  "مراجعة تعديل حساب اقراض عملاء افراد": { shortcut: "VRLAM", en_job: "Verify Retail Lending Account Modification", officer: "Checker" },
  "الاستعلام عن حساب اقراض عملاء افراد": { shortcut: "IRLAT", en_job: "Inquire On Retail Lending Account ", officer: "Maker-checker" },
  "اجراء صرف قرض": { shortcut: "PLD", en_job: "Perform Loan Disbursement ", officer: "Maker" },
  "الغاء صرف او عكس صرف قرض": { shortcut: "CLDR", en_job: "Cancel Loan Disbursement ", officer: "Maker" },
  "مراجعة صرف او عكس قرض": { shortcut: "VLDR", en_job: "Verify Loan Disbursement ", officer: "Checker" },
  "عكس تفاصيل صرف قرض": { shortcut: "RLDD", en_job: "Reverse Loan Disbursement ", officer: "Maker" },
  "اجراء نمذجة قرض عملاء افراد موظفين": { shortcut: "PRLM", en_job: "Perform retail loan modeling", officer: "Maker-Checker" },
  "فتح حساب اقراض عملاء افراد موظفين": { shortcut: "ORLA", en_job: "Open retail lendinig Account", officer: "Maker" },
  "تعديل حساب اقراض عملاء افراد قبل المراجعة موظفين": { shortcut: "MORLAV", en_job: "Modify Open Retail Lending Account Before Verification", officer: "Maker" },
  "الغاء حساب اقراض عملاء افراد موظفين": { shortcut: "CRLAO", en_job: "Cancel Retail Lending Account Opening", officer: "Maker" },
  "مراجعة حساب اقراض عملاء افراد موظفين": { shortcut: "VRLA", en_job: "Verify Retail Loan Account", officer: "Checker" },
  "تعديل حساب اقراض عملاء افراد": { shortcut: "MRLAT", en_job: "Modify Retail Lending Account", officer: "Maker" },
  "الغاء تعديل حساب اقراض عملاء افراد موظفين": { shortcut: "CRLAM", en_job: "Cancel Retail Lending Account Modification", officer: "Maker" },
  "مراجعة تعديل حساب اقراض عملاء افراد موظفين": { shortcut: "VRLAM", en_job: "Verify Retail Lending Account Modification", officer: "Checker" },
  "الاستعلام عن حساب اقراض عملاء افراد موظفين": { shortcut: "IRLAT", en_job: "Inquire On Retail Lending Account ", officer: "Maker-checker" },
  "اغلاق حساب القرض": { shortcut: "CLAT", en_job: "Close Loan Account", officer: "Maker" },
  "الغاء اغلاق حساب القرض": { shortcut: "CLAC", en_job: "Cancel Loan Account Closure", officer: "Maker" },
  "مراجعة اغلاق حساب القرض": { shortcut: "VLAC", en_job: "Verify Loan Account Closure", officer: "Checker" },
  "انشاء هيكل حد ائتماني": { shortcut: "CLS", en_job: "Creat Limit Structure", officer: "Maker" },
  "تعديل نقطة حد": { shortcut: "MLN", en_job: "Modify Limit Node", officer: "Maker" },
  "الغاء نقطة حد ": { shortcut: "CLNE", en_job: "Cancel Limit Node", officer: "Maker" },
  "مراجعة نقطة حد ائتماني": { shortcut: "VLN", en_job: "Verify Limit Node", officer: "Checker" },
  "اغلاق نقطة حد ائتماني": { shortcut: "CLTN", en_job: "Close Limit Node", officer: "Maker" },
  "فتح حساب جاري مدين": { shortcut: "OOA", en_job: "Open Overdraft Account", officer: "Maker" },
  "تعديل حساب جاري مدين مفتوح قبل المراجعة": { shortcut: "MOOAV", en_job: "Modify Opened Overdraft Account Before Verification", officer: "Maker" },
  "الغاء فتح حساب جاري مدين": { shortcut: "COAO", en_job: "Cancel Overdraft Account Opening", officer: "Maker" },
  "مراجعة فتح حساب جاري مدين": { shortcut: "VOAO", en_job: "Verify Overdraft Account Opening", officer: "Checker" },
  "تعديل قوة السحب": { shortcut: "MDP", en_job: "Modify Drawing Power", officer: "Maker" },
  "الغاء قوة السحب": { shortcut: "CDP", en_job: "Cancel Drawing Power", officer: "Maker" },
  "مراجعة قوة السحب": { shortcut: "VDP", en_job: "Verify Drawing Power", officer: "Checker" },
  "تعديل حدود المنح": { shortcut: "MSL", en_job: "Modify Sanction Limit", officer: "Maker" },
  "الغاء حدود المنح": { shortcut: "CSLS", en_job: "Cancel Sanction Limit", officer: "Maker" },
  "مراجعة حدود المنح": { shortcut: "VSL", en_job: "Verify Sanction Limit", officer: "Checker" },
  "الاستعلام عن حد المنح": { shortcut: "ISL", en_job: "Inquire On Sanction Limit", officer: "Maker-Checker" },
  "تسجيل ضمان": { shortcut: "LCL", en_job: "Lodge Collateral", officer: "Maker" },
  "تعديل ضمان": { shortcut: "MYC", en_job: "Modify Collateral", officer: "Maker" },
  "الغاء ضمان": { shortcut: "CCL", en_job: "Cancel Collateral", officer: "Maker" },
  "مراجعة ضمان": { shortcut: "VYC", en_job: "Verify Collateral", officer: "Checker" },
  "ربط ضمان برقم كيان": { shortcut: "LCEI", en_job: "Link Collateral to Entity", officer: "Maker-Checker" },
  "تعديل ربط ضمان برقم كيان": { shortcut: "MCLEI", en_job: "Modify Collateral Linkingto Entity", officer: "Maker" },
  "الغاء ربط ضمان برقم كيان قبل المراجعة": { shortcut: "CCLEIV", en_job: "Cancel Collateral Linking to Entity Before Verification", officer: "Maker" },
  "مراجعة ربط ضمان برقم كيان": { shortcut: "VCLEI", en_job: "Verify Collateral Link to Entity", officer: "Checker" },
  " فك ربط ضمان برقم كيان": { shortcut: "UCEI", en_job: "Unlink Collateral from Entity ID", officer: "Maker" },
  "سحب الضمان": { shortcut: "WCL", en_job: "Withdraw Collateral", officer: "Maker" },
  "الاستعلام عن تفاصيل الضمان": { shortcut: "IECDS", en_job: "Inquire on Collateral Details", officer: "Maker" },
  "الاستعلام عن سجل التقييم": { shortcut: "IVHY", en_job: "Inquire on Valuation History", officer: "Maker" },
  "الاستعلام عن تفاصيل الضمانات الخاصة بالعميل": { shortcut: "ICCD", en_job: "Lodge Collateral", officer: "Maker" },
  "اصدار خطاب ضمان صادر": { shortcut: "IOGE", en_job: "Issue Outward Guarantee", officer: "Maker" },
  "تعديل خطاب ضمان صادر قبل المراجعة": { shortcut: "MOG", en_job: "Modify Outward Guarantee", officer: "Maker" },
  "الغاء خطاب ضمان صادر قبل المراجعة": { shortcut: "COGE", en_job: "Cancel Outward Guarantee", officer: "Maker" },
  "مراجعة خطاب ضمان صادر": { shortcut: "VOG", en_job: "Verify Outward Guarantee", officer: "Checker" },
  "تعديل خطاب ضمان صادر": { shortcut: "AOG", en_job: "Amend Outward Guarantee", officer: "Maker" },
  "تعديل حالة خطاب ضمان صادر": { shortcut: "ASOG", en_job: "Amend Status Outward Guarantee", officer: "Maker" },
  "عكس حفظ خطابات الضمان الصادرة": { shortcut: "ROG", en_job: "Reverse Outward Guarantee", officer: "Maker" },
  "التأشير باستعادة الضمانات الصادرة": { shortcut: "MIOG", en_job: "Mark Invoke Outward Guarantee", officer: "Maker" },
  "عكس التأشير باستدعاء الضمانات الصادرة": { shortcut: "RMIOG", en_job: "Reverse Mark Invoke Outward Guarantee", officer: "Maker" },
  "استدعاء ادارة الضمانات الصادرة": { shortcut: "IODG", en_job: "Invoke Outward Guarantee", officer: "Maker" },
  "اغلاق الضمانات الصادرة": { shortcut: "COG", en_job: "Close Outward Guarantee", officer: "Maker" },
  "الغاء اغلاق الضمانات الصادرة": { shortcut: "UOG", en_job: "Unclose Outward Guarantee", officer: "Maker" },
  "الاستعلام عن خطاب الضمان الصادر": { shortcut: "IOG", en_job: "Inquire Outward Guarantee", officer: "Maker-Checker" },
  "طباعة الية مجمعة للضمان البنكي": { shortcut: "BPBG", en_job: "Batch Print Bank Guarantee", officer: "Maker-Checker" },
  "اصدار خطاب ضمان وارد": { shortcut: "AIG", en_job: "Add Intward Guarantee", officer: "Maker" },
  "تعديل خطاب ضمان وارد قبل المراجعة": { shortcut: "MIG", en_job: "Modify Inward Guarantee", officer: "Maker" },
  "الغاء خطاب ضمان وارد قبل المراجعة": { shortcut: "CIGE", en_job: "Cancel Inward Guarantee", officer: "Maker" },
  "مراجعة خطاب ضمان وارد": { shortcut: "VIG", en_job: "Verify Inward Guarantee", officer: "Checker" },
  "تعديل خطاب ضمان وارد": { shortcut: "AIGE", en_job: "Amend Inward Guarantee", officer: "Maker" },
  "تعديل حالة خطاب ضمان وارد": { shortcut: "ASIG", en_job: "Amend Status Inward Guarantee", officer: "Maker" },
  "عكس حفظ خطابات الضمان الواردة": { shortcut: "RIG", en_job: "Reverse Inward Guarantee", officer: "Maker" },
  "التأشير باستعادة الضمانات الواردة": { shortcut: "MIIG", en_job: "Mark Invoke Inward Guarantee", officer: "Maker" },
  "عكس التأشير باستدعاء الضمانات الواردة": { shortcut: "RMIIG", en_job: "Reverse Mark Invoke Inward Guarantee", officer: "Maker" },
  "استدعاء ادارة الضمانات الواردة": { shortcut: "IIDG", en_job: "Invoke Inward Guarantee", officer: "Maker" },
  "اغلاق الضمانات الواردة": { shortcut: "CIG", en_job: "Close Inward Guarantee", officer: "Maker" },
  "الغاء اغلاق الضمانات الواردة": { shortcut: "IUG", en_job: "Unclose Inward Guarantee", officer: "Maker" },
  "الاستعلام عن خطاب الضمان الوارد": { shortcut: "IIG", en_job: "Inquire Inward Guarantee", officer: "Maker-Checker" },
  "اخطار بالاعتماد المستندي الوارد": { shortcut: "AIDCT", en_job: "Advice Inward Documentary Credit", officer: "Maker" },
  "تعديل اعتماد مستندي وارد قبل المراجعة": { shortcut: "MIDCT", en_job: "Modify Inward Documentary Credit", officer: "Maker" },
  "طلب حذف تعديل استعلام مراجعة دفتر شيكات": { shortcut: "CCHQBOOK", en_job: "Cheque book request maintainance", officer: "Maker-Checker" },
  "طباعة آلية مجمعة لبيانات العميل الرئيسية": { shortcut: "BPCMD", en_job: "Btch Print Customer Master Details", officer: "Maker-Checker" },
  "الاستعلام عن ملف بيانات العملاء شركات": { shortcut: "IECC", en_job: "Inquire on Corporate CIF", officer: "Maker-Checker" },
  "الاستعلام عن ملف بيانات العملاء افراد": { shortcut: "IERC", en_job: "Inquire on Retail CIF", officer: "Maker-Checker" },
  "انشاء الي مجمع لتقرير حسابات تحت الرصيد الادنى": { shortcut: "BGMBAR", en_job: "Batch Generat Below Minimum Balance Account Report ", officer: "Maker-Checker"},
  "طباعة اليه مجمعة لرصيد عميل": { shortcut: "BPCB", en_job: "Batch Print Customer Balance ", officer: "Maker-Checker" },
  "انشاء الى مجمع لتقرير ارصدة يومية": { shortcut: "BGDBR", en_job: "Batch Generate Day-Wise Balance Report ", officer: "Maker-Checker" }
}
export default data;
