"use client"

/* eslint-disable react/jsx-key */
import Link from "next/link"
import styles from "./styles.module.scss"
import { IoSearchSharp } from "react-icons/io5"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { useState } from "react"
import Carousel from "react-multi-carousel"
import { IoCheckmark } from "react-icons/io5"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

const sliderImages = [
  { image: "/images/service2.jpg" },
  { image: "/images/service1.jpg" },
  { image: "/images/service2.jpg" },
]

const content = [
  {
    id: "01",
    title: "موشن جرافيك",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/motion",
  },
  {
    id: "02",
    title: "تطبيقات ومواقع",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/apps",
  },
  {
    id: "03",
    title: "تسويق ومشاهير",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/marketing",
  },
  {
    id: "04",
    title: "خدمات الانتاج الفني",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/art",
  },
  {
    id: "05",
    title: "تصوير المنتجات",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/product",
  },
  {
    id: "06",
    title: "دراسة المشاريع التقنية",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/technique",
  },
  {
    id: "07",
    title: "فاست كارت",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/fastCart",
  },
  {
    id: "08",
    title: "إداره سوشيال ميديا",
    arrow: HiOutlineArrowNarrowLeft,
    link: "/service/management",
  },
]

const ServiceDetail = () => {
  const [activeService, setActiveService] = useState("01")
  const [searchQuery, setSearchQuery] = useState("")

  const handleService = (idService) => {
    setActiveService(activeService === idService ? idService : "")
  }

  const filteredContent = content.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const BreakpointSlides = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    Tdesktop: {
      breakpoint: { max: 1024, min: 767 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 767, min: 560 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  }

  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={styles.uk_grid}>
          <div className={styles.uk_sidebar}>
            <div className={styles.widget_search}>
              <form>
                <input
                  className={styles.uk_input}
                  type="text"
                  value={searchQuery}
                  placeholder="بحث هنا .."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                  <IoSearchSharp className={styles.icon} />
                </button>
              </form>
            </div>

            <div className={styles.service_list}>
              {filteredContent.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div
                    onClick={() => {
                      handleService(item.id)
                    }}
                    className={`${styles.list} ${
                      activeService === item.id ? styles.active : ""
                    }`}
                  >
                    <span>{item.title}</span>
                    <item.arrow className={styles.arrow} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.inner}>
            <h3>موشن جرافيك</h3>
            <p>
              خدمة موشن جرافيك اعلان وشرح الخدمات بتصميم الموشن جرافيك وهي من
              اهم الأفكار المبسطة والغير مكلفة مادياً للإعلان وشرح الخدمات
              للعملاء والتي تشمل رسم الخطط والشخصيات بهدف توضيح و تبسيط
              المعلومات ..
            </p>

            <div className={styles.services_images_slider}>
              <Carousel
                responsive={BreakpointSlides}
                infinite={true}
                autoPlay={true}
                keyBoardControl={true}
                autoPlaySpeed={2000}
                showDots={true}
                itemClass="carousel-item"
              >
                {sliderImages.map((item, index) => (
                  <div key={index} className={styles.slider}>
                    <Image
                      className={styles.image}
                      src={item.image}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      objectFit="cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <ul className={styles.services_features_list}>
              <li>
                <IoCheckmark className={styles.check} />
                تنفيذ العمل
              </li>
              <li>
                <IoCheckmark className={styles.check} />
                كتابة السيناريو
              </li>
              <li>
                <IoCheckmark className={styles.check} />
                صناعة الفكرة
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
