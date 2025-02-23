import {
  reasonsWrapper,
  reasonsTitleContainer,
  reasonsTitle,
  reasonsSubtitle,
  reasonsBox,
  reasonsList,
  reasonItem,
  reasonHeading,
  reasonDescription,
} from "../styles/reasonsStyles";

const ReasonsSection: React.FC = () => {
  return (
    <section className={reasonsWrapper}>
      <div className={reasonsBox}>
        <div className={reasonsTitleContainer}>
          <h2 className={reasonsTitle}>למה לבחור באלירן?</h2>{" "}
          <p className={reasonsSubtitle}>
            המומחיות שלנו היא לעזור לכם לקבל את ההחלטות הפיננסיות הנכונות
          </p>
        </div>
        {/* List of Reasons */}
        <div className={reasonsList}>
          {/* Reason 1 */}
          <div className={reasonItem}>
            <h3 className={reasonHeading}>ייעוץ פיננסי מותאם אישית</h3>
            <p className={reasonDescription}>
              אנו מנתחים את הצרכים האישיים שלכם ומציעים תוכניות שמותאמות בדיוק
              עבורכם.
            </p>
          </div>

          {/* Reason 2 */}
          <div className={reasonItem}>
            <h3 className={reasonHeading}>ניסיון עשיר ומומחיות</h3>
            <p className={reasonDescription}>
              צוות המומחים שלנו בעל שנים של ניסיון בשוק ההון, משכנתאות, והשקעות.
            </p>
          </div>

          {/* Reason 3 */}
          <div className={reasonItem}>
            <h3 className={reasonHeading}>שירות לקוחות מעולה</h3>
            <p className={reasonDescription}>
              אנו מתחייבים ללוות אתכם לאורך כל התהליך, עם תמיכה מקצועית ומענה
              לכל שאלה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
