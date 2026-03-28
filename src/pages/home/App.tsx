import "keen-slider/keen-slider.min.css";
import SearchBox from "./components/search-box";
import HeaderSwiper from "./components/header-swiper";
import Banner from "./components/banner";
import TabList from "./components/tab-list";

export default function App() {
  return (
    <>
      <SearchBox />
      <HeaderSwiper />
      <Banner />
      <TabList />
    </>
  );
}
