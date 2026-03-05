import styles from "./style.module.css";
import { useKeenSlider, type KeenSliderPlugin } from "keen-slider/react";

const AutoPlay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  }
  slider.on("created", () => {
    nextTimeout();
  });
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

const items = [
  {
    url: "https://commimg.pddpic.com/oms_img_ng/2026-03-05/91488867-c739-4e27-9704-64c3a0a6300f.jpeg",
    objectPosition: "0 -0.6rem",
  },
  {
    url: "https://promotion.pddpic.com/promo/brand/2efda8c5-5436-40d7-ad1a-26367ca06319.png.slim.png",
    objectPosition: "0 -0.6rem",
  },
];

export default function HeaderSwiper() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [AutoPlay],
  );

  return (
    <div className={styles.headerSwiper}>
      <div ref={sliderRef} className={`keen-slider ${styles.swiper}`}>
        {items.map((item) => (
          <img
            className={`keen-slider__slide ${styles.swiperItem}`}
            key={item.url}
            src={item.url}
            style={{ objectPosition: item.objectPosition }}
          />
        ))}
      </div>
    </div>
  );
}
