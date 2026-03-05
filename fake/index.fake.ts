import { defineFakeRoute } from "vite-plugin-fake-server/client";
import homeModule from "./home";
import searchHotqueryModule from "./search_hotquery";
import searchResultModule from "./search_result";
import goodsList00120Module from "./goods_list/tab_id=0&sub_tab_id=0&page_offset=1&page_count=20";
import goodsList00220Module from "./goods_list/tab_id=0&sub_tab_id=0&page_offset=2&page_count=20";
import goodsList20020Module from "./goods_list/tab_id=2&sub_tab_id=0&page_offset=0&page_count=20";
import goodsList30020Module from "./goods_list/tab_id=3&sub_tab_id=0&page_offset=0&page_count=20";
import goodsList40020Module from "./goods_list/tab_id=4&sub_tab_id=0&page_offset=0&page_count=20";
import goodsList50020Module from "./goods_list/tab_id=5&sub_tab_id=0&page_offset=0&page_count=20";
import cardList10010Module from "./card_list/tab_id=1&sub_tab_id=0&page_offset=0&page_count=10";
import cardList10110Module from "./card_list/tab_id=1&sub_tab_id=0&page_offset=1&page_count=10";

const goodsListMocks: Record<string, any> = {
  "0-0-1-20": goodsList00120Module,
  "0-0-2-20": goodsList00220Module,
  "2-0-0-20": goodsList20020Module,
  "3-0-0-20": goodsList30020Module,
  "4-0-0-20": goodsList40020Module,
  "5-0-0-20": goodsList50020Module,
};

const cardListMocks: Record<string, any> = {
  "1-0-0-10": cardList10010Module,
  "1-0-1-10": cardList10110Module,
};

const getKeyFromQuery = (query: Record<string, any>) => {
  return `${query.tab_id}-${query.sub_tab_id}-${query.page_offset}-${query.page_count}`;
};

export default defineFakeRoute([
  {
    url: "/fake/home",
    method: "POST",
    response: () => homeModule,
  },
  {
    url: "/fake/search_hotquery",
    method: "POST",
    response: () => searchHotqueryModule,
  },
  {
    url: "/fake/search_result",
    method: "POST",
    response: () => searchResultModule,
  },
  {
    url: "/fake/goods_list",
    method: "POST",
    response: ({ query }) => {
      return goodsListMocks[getKeyFromQuery(query)];
    },
  },
  {
    url: "/fake/card_list",
    method: "POST",
    response: ({ query }) => {
      return cardListMocks[getKeyFromQuery(query)];
    },
  },
]);
