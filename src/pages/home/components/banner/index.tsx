import styles from "./style.module.css";

interface ISingleColumnCardItem {
  bgColor: string;
  headerTitle: string;
  headerArrow: string;
  headerColor: string;
  marginLeft: string;
  marginRight: string;
}

const singleColumnItem = [
  {
    bgColor: "#ffeeef",
    headerTitle: "多人团",
    headerArrow:
      "https://funimg.pddpic.com/common/coupons/d313b2e1-a891-4a08-ba93-88faeb54f696.png",
    headerColor: "#f2465b",
  },
  {
    bgColor: "#f2f7ff",
    headerTitle: "手机数码馆",
    headerArrow:
      "https://promotion.pddpic.com/promo/brand/88ec05d6-a173-47b6-82ef-cf9bf716842c.png",

    headerColor: "#7840ff",
  },
];

function SingleColumnCard({
  bgColor,
  headerTitle,
  headerArrow,
  headerColor,
  marginLeft,
  marginRight,
}: ISingleColumnCardItem) {
  return (
    <div
      className={styles.singleColumnCard}
      style={{ backgroundColor: bgColor, marginLeft, marginRight }}
    >
      <section className={styles.singleColumnHeader}>
        <div
          className={styles.singleColumnHeaderTitle}
          style={{ color: headerColor }}
        >
          {headerTitle}
        </div>
        <img className={styles.singleColumnHeaderArrow} src={headerArrow} />
      </section>
      <section className={styles.singleColumnContent}>
        <div className={styles.singleColumnCardItem}></div>
      </section>
    </div>
  );
}

const doubleColumnCardItem = [
  {
    bgColor: "#ebe5ff",
    headerTitle: "百亿加倍补",
    headerArrow:
      "https://funimg.pddpic.com/common/coupons/97b32143-9c8a-47ab-8b2c-3aab155b6023.png",
    headerColor: "#5629ff",
    headerText: "剩02:29:27:0",
  },
  {
    bgColor: "#fe2c4e",
    headerTitle: "百亿消费券",
    headerArrow:
      "https://funimg.pddpic.com/common/coupons/7a8f290e-633a-4ebe-ac13-9a9225ce177f.png",
    headerColor: "#fff",
    headerText: "剩02:29:27:0",
  },
];

interface IDoubleColumnCardItem {
  bgColor: string;
  headerTitle: string;
  headerArrow: string;
  headerColor: string;
  headerText: string;
  marginLeft: string;
  marginRight: string;
}

function DoubleColumnCard({
  bgColor,
  headerTitle,
  headerArrow,
  headerColor,
  headerText,
  marginLeft,
  marginRight,
}: IDoubleColumnCardItem) {
  return (
    <div
      className={styles.doubleColumnCard}
      style={{ backgroundColor: bgColor, marginLeft, marginRight }}
    >
      <section className={styles.doubleColumnHeader}>
        <div
          className={styles.doubleColumnHeaderTitle}
          style={{ color: headerColor }}
        >
          {headerTitle}
        </div>
        <div className={styles.doubleColumnHeaderMore}>
          <span style={{ color: headerColor }}>{headerText}</span>
          <img className={styles.doubleColumnHeaderArrow} src={headerArrow} />
        </div>
      </section>
      <section className={styles.doubleColumnContent}>
        <div className={styles.doubleColumnCardItem}></div>
        <div className={styles.doubleColumnCardItem}></div>
      </section>
    </div>
  );
}

export default function Banner() {
  return (
    <div className={styles.banner}>
      {doubleColumnCardItem.map((item, index) => (
        <DoubleColumnCard
          key={item.bgColor}
          {...item}
          marginLeft={index === 0 ? "0.16rem" : "0.05rem"}
          marginRight="0"
        />
      ))}
      {singleColumnItem.map((item, index) => (
        <SingleColumnCard
          key={item.bgColor}
          {...item}
          marginLeft={"0.05rem"}
          marginRight={index === singleColumnItem.length - 1 ? "0.16rem" : "0"}
        />
      ))}
    </div>
  );
}
