export const ReasonsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-20 text-white bg-orange-100 sm:px-12 md:px-20 sm:py-28 md:py-32">
      <div className="flex flex-col w-full max-w-2xl gap-6 p-8 pt-20 pb-20 text-white bg-emerald-800">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">למה לבחור באלירן?</h2>
          <p className="pt-8 mt-2 text-lg text-right text-emerald-200 sm:text-lg">
            המומחיות שלנו היא לעזור לכם לקבל את ההחלטות הפיננסיות הנכונות
          </p>
        </div>
        {/* List of Reasons */}
        <div className="flex flex-col gap-6">
          {/* Reason 1 */}
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-xl font-semibold text-white">
              ייעוץ פיננסי מותאם אישית
            </h3>
            <p className="text-emerald-200">
              אנו מנתחים את הצרכים האישיים שלכם ומציעים תוכניות שמותאמות בדיוק
              עבורכם.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-xl font-semibold text-white">
              ניסיון עשיר ומומחיות
            </h3>
            <p className="text-emerald-200">
              צוות המומחים שלנו בעל שנים של ניסיון בשוק ההון, משכנתאות, והשקעות.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="flex flex-col gap-2 text-white">
            <h3 className="text-xl font-semibold text-white">
              שירות לקוחות מעולה
            </h3>
            <p className="text-emerald-200">
              אנו מתחייבים ללוות אתכם לאורך כל התהליך, עם תמיכה מקצועית ומענה
              לכל שאלה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
