import styles from "./style.module.css";
import { useKeenSlider, type KeenSliderPlugin } from "keen-slider/react";

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
};

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
    icon: "https://promotion.pddpic.com/promo/baiyibutie/f80b4af7-a053-48b2-9dbc-e9edbcc156a1.png",
    text: "即食牛肉",
  },
  {
    icon: "https://promotion.pddpic.com/promo/baiyibutie/f80b4af7-a053-48b2-9dbc-e9edbcc156a1.png",
    text: "减肥代餐",
  },
  {
    icon: "https://promotion.pddpic.com/promo/baiyibutie/f80b4af7-a053-48b2-9dbc-e9edbcc156a1.png",
    text: "低卡食品",
  },
];

export default function SearchBox() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      vertical: true,
    },
    [AdaptiveHeight, AutoPlay],
  );

  return (
    <>
      <div className={styles.searchBox}>
        <div
          className={styles.searchContent}
          onClick={() =>
            (window.location.href = "/views/search.html#/hot-query")
          }
        >
          <div ref={sliderRef} className="keen-slider">
            {items.map((item) => (
              <div
                className={`keen-slider__slide ${styles.searchItem}`}
                key={item.text}
              >
                <img className={styles.searchIcon} src={item.icon} />
                <div className={styles.searchText}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
