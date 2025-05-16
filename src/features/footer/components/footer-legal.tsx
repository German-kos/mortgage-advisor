import * as Dialog from "@radix-ui/react-dialog";

export const FooterLegal = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-4">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="text-white hover:text-gray-300 transition hover:cursor-pointer">
            פרטיות ועוגיות
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="z-40 fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <Dialog.Content className="top-1/2 left-1/2 z-50 fixed bg-white shadow-xl p-6 rounded-lg w-[90%] max-w-lg text-black -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="mb-2 font-bold text-lg">
              מדיניות פרטיות ועוגיות
            </Dialog.Title>
            <Dialog.Description className="text-lg">
              <div>
                מדיניות פרטיות ברוכים הבאים לאתר משכנת'ס. פרטיותכם חשובה לנו.
                אנו מתחייבים לשמור על המידע האישי שתמסרו לנו, ולעשות בו שימוש
                אחראי ובהתאם לחוק. איסוף מידע בעת השארת פרטים בטופס יצירת הקשר
                באתר, אתם מתבקשים למסור מידע כגון:
              </div>
              <div>• שם מלא</div>
              <div>• מספר טלפון</div>
              <div>• כתובת דוא"ל</div>
              שימוש במידע המידע שתספקו ישמש ליצירת קשר אתכם, לצורך מתן שירותי
              ייעוץ משכנתאות בלבד. אנו לא נעביר את פרטיכם לגורמים חיצוניים ללא
              אישור מפורש, למעט אם נידרש לכך על פי דין. אבטחת מידע האתר מאובטח
              באמצעים סבירים על מנת להגן על המידע שנאסף מפני גישה בלתי מורשית.
              זכויות המשתמש באפשרותכם לבקש לעיין, לעדכן או למחוק את המידע האישי
              שנשמר עליכם, באמצעות פנייה בכתב mashkantes@gmail.co.il . עוגיות
              (Cookies) האתר עשוי להשתמש בקבצי Cookies לצורך שיפור חוויית
              המשתמש, מדידת ביצועים או התאמה אישית של תוכן. שינויים במדיניות
              הנוסח עשוי להתעדכן מעת לעת. עדכונים מהותיים יתפרסמו באתר.
            </Dialog.Description>

            <Dialog.Close asChild>
              <button className="bg-gray-200 hover:bg-gray-300 mt-4 px-4 py-2 rounded hover:cursor-pointer">
                סגור
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
