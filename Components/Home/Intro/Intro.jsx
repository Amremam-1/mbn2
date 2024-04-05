import styles from "./styles.module.scss"
import Link from "next/link"

const Intro = () => {
  return (
    <>
      <div className="secContainer">
        <div className={styles.container}>
          <div className={styles.intro}>
            <div className={styles.main_banner}>
              <h1 className="dark:text-white">مجموعة ماهر بن نايف التجارية</h1>
              <p className="color84 dark:text-white">
                نقدم لكم خدماتنا التقنية والفنية والتسويقية من أمهر الكوادر
                الشابه لفروعنا في المملكة العربية السعودية وجمهورية مصر العربية
                وماليزيا وهدفنا هو تقديم كل ماهو جديد وعصري لخدمة عملائنا
              </p>

              <Link href={""}>
                <button className={`btn ${styles.contact}`}>تواصل معانا</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
