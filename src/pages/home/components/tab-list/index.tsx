import { useState, useRef } from "react";
import styles from "./style.module.css";

const items = [
  {
    text: "精选",
  },
  {
    text: "天天折扣",
    icon: "https://promotion.pddpic.com/promo/brand_activity/52691d4f-7a3e-4ac7-806d-758554166c2b.png?imageView2/2/w/800/q/70/format/webp",
  },
  {
    text: "包饰",
  },
  {
    text: "食品",
  },
  {
    text: "小家电",
  },
  {
    text: "美家",
  },
  {
    text: "生鲜",
  },
  {
    text: "运动",
  },
  {
    text: "数码",
  },
  {
    text: "男装",
  },
  {
    text: "潮玩",
  },
  {
    text: "美妆",
  },
  {
    text: "百货",
  },
  {
    text: "宠物",
  },
];

const HALF_SCREEN_WIDTH = window.innerWidth / 2;

export default function TabList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandPanelVisible, setExpandPanelVisible] = useState(false);

  const tabListRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    const tabList = tabListRef.current;
    if (!tabList) {
      return;
    }

    const activeTabItem = tabList.children[index] as HTMLDivElement;
    if (!activeTabItem) {
      return;
    }
    const activeTabRect = activeTabItem.getBoundingClientRect();
    const { width } = activeTabRect;
    const { offsetLeft } = activeTabItem;
    const scrollLeft = offsetLeft + width / 2 - HALF_SCREEN_WIDTH;
    tabList.scrollTo({ left: scrollLeft, behavior: "smooth" });
    setActiveIndex(index);
    setExpandPanelVisible(false);
  };

  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.tabList} ref={tabListRef}>
          {items.map((item, index) => (
            <div
              key={item.text}
              className={styles.tabItem}
              onClick={() => handleClick(index)}
            >
              {item.icon ? (
                <img src={item.icon} className={styles.tabIcon} />
              ) : item.text ? (
                <p
                  className={
                    index === activeIndex
                      ? styles.activeTabText
                      : styles.tabText
                  }
                >
                  {item.text}
                </p>
              ) : null}
              <div
                className={index === activeIndex ? styles.tabLine : ""}
              ></div>
            </div>
          ))}
          <div className={styles.tabItemPlaceholder}></div>
        </div>
        <div
          className={styles.expand}
          onClick={() => setExpandPanelVisible(!expandPanelVisible)}
        >
          <img
            src="https://funimg.pddpic.com/brand/bf870610-8091-4b7b-bda4-0f54d02d1b59.png?imageView2/2/w/800/q/70/format/webp"
            className={styles.expandIcon}
          ></img>
        </div>
      </div>
      {expandPanelVisible && (
        <div className={styles.expandTabContainer}>
          <div className={styles.expandTabContent}>
            <div className={styles.expandTabHeader}>
              <p className={styles.expandTabHeaderText}>全部分类</p>
              <img
                className={styles.expandTabHeaderCloseIcon}
                src="https://funimg.pddpic.com/brand/b396e3fb-d689-4287-ac83-ca5535d2315b.png?imageView2/2/w/800/q/70/format/webp"
                onClick={() => setExpandPanelVisible(false)}
              ></img>
            </div>

            <div className={styles.expandTabList}>
              {items.map((item, index) => (
                <div
                  key={item.text}
                  className={
                    index === activeIndex
                      ? styles.activeExpandTabItem
                      : styles.expandTabItem
                  }
                  onClick={() => handleClick(index)}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
