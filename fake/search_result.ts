export default {
  errorRedirectUrl: "index.html",
  isServerRendered: true,
  isFinishInitLoading: true,
  commonGoodsInfoStoreUnderlineV3: {
    unionKeys: ["place_id", "refresh_goods_sn"],
    maxRefreshCnt: 100,
    perRefreshCnt: 50,
    refreshKeyList: [
      "activity_price_word_before_tag",
      "activity_price_word",
      "activity_price",
      "origin_price",
      "is_member_goods",
      "tag_info_list",
      "is_bybt_goods",
      "corner_wording",
      "show_sold_out_img",
      "is_goods_sold_out",
      "flag_set",
      "free_order_surround_icon",
      "extra_tag_map",
      "trax_data",
      "lt_icon",
      "title_top",
      "coupon_time_wording",
      "coupon_wording",
      "night_countdown",
      "enable_eight",
    ],
    refreshKeyMap: {
      activity_price_word_before_tag: true,
      activity_price_word: true,
      activity_price: true,
      origin_price: true,
      is_member_goods: true,
      tag_info_list: true,
      is_bybt_goods: true,
      corner_wording: true,
      show_sold_out_img: true,
      is_goods_sold_out: true,
      flag_set: true,
      free_order_surround_icon: true,
      extra_tag_map: true,
      trax_data: true,
      lt_icon: true,
      title_top: true,
      coupon_time_wording: true,
      coupon_wording: true,
      night_countdown: true,
      enable_eight: true,
    },
    refreshKeyConfigMap: {
      activity_price: {
        emptyValueOverride: false,
        emptyValueReadable: true,
      },
      activity_price_word: {
        emptyValueOverride: false,
        emptyValueReadable: true,
        attachedProp: "activity_price",
      },
      activity_price_word_before_tag: {
        emptyValueOverride: true,
        emptyValueReadable: true,
        attachedProp: "activity_price",
      },
      origin_price: {
        emptyValueOverride: false,
        emptyValueReadable: true,
      },
      origin_price_word: {
        emptyValueOverride: false,
        emptyValueReadable: true,
        attachedProp: "origin_price",
      },
      coupon_wording: {
        emptyValueOverride: true,
        emptyValueReadable: true,
        attachedProp: "origin_price",
      },
      corner_wording: {
        emptyValueOverride: true,
        emptyValueReadable: true,
      },
      new_goods_discount_info: {
        emptyValueOverride: true,
        emptyValueReadable: true,
      },
      tag_info_list: {
        emptyValueOverride: false,
        emptyValueReadable: true,
      },
      show_sold_out_img: {
        emptyValueOverride: true,
        emptyValueReadable: true,
      },
      is_goods_sold_out: {
        emptyValueOverride: true,
        emptyValueReadable: true,
      },
      same_goods_entrance: {
        emptyValueOverride: true,
        emptyValueReadable: true,
      },
      flag_set: { emptyValueOverride: false, emptyValueReadable: true },
      free_order_surround_icon: {
        emptyValueOverride: true,
        emptyValueReadable: true,
      },
      place_id: { emptyValueOverride: false, emptyValueReadable: true },
      extra_tag_map: {
        emptyValueOverride: true,
        emptyValueReadable: true,
      },
      trax_data: { emptyValueOverride: true, emptyValueReadable: true },
      lt_icon: { emptyValueOverride: true, emptyValueReadable: true },
    },
    refreshIdTransMap: {
      "CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=":
        {},
      "CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=":
        {},
    },
    needUpdateKeyMaps: [],
    recentGoodsUnionIdsList: [
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=",
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=",
    ],
    goodsUnionIdUnionInfoMap: {
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=":
        {
          place_id: "BYBT_SEARCH",
          refresh_goods_sn:
            "CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=",
        },
    },
    goodsIdGoodsRefreshSnMap: {
      685713886123:
        "CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=",
      660114854595:
        "CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=",
      632712235306:
        "CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=",
      208366717554:
        "CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=",
      725816229529:
        "CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=",
      581575125599:
        "CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=",
      913183514096:
        "CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=",
      581570824312:
        "CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=",
      905474755166:
        "CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=",
      874904256790:
        "CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=",
      637528618011:
        "CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=",
      900700774262:
        "CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=",
      613540244792:
        "CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=",
      629041760311:
        "CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=",
      866451735014:
        "CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=",
      871172273841:
        "CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=",
      877239384819:
        "CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=",
      773563111725:
        "CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=",
      683760314032:
        "CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=",
      720368523036:
        "CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=",
    },
    goodsInfoMap: {
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1328,
          origin_price: 3790,
          tag_info_list: [
            {
              text: "预计后天送达",
              type: 23,
              tag_ext: { type: "estimated_delivery_tag" },
            },
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省24.62元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "来自回头客好店，品质保证",
              type: "mall_sell_point182189",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                exp: 2,
              },
            },
            img_ai: true,
          },
          trax_data: {
            22: [
              {
                text: "预计后天送达",
                type: "estimated_delivery_tag",
                tag_ext: { type: "estimated_delivery_tag" },
              },
            ],
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1680,
          origin_price: 2990,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省13.1元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "近90天22万人浏览过",
              type: "recent_view_count_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fc93be054-6cad-4f72-8496-0b85becbfe53.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            111: { text: "品质生鲜", type: "fruit_best_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 696,
          origin_price: 1270,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省5.74元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "近90天27万人浏览过",
              type: "recent_view_count_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fc93be054-6cad-4f72-8496-0b85becbfe53.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1336,
          origin_price: 2480,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省11.44元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "来自回头客好店，品质保证",
              type: "mall_sell_point182189",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                exp: 2,
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1720,
          origin_price: 3460,
          tag_info_list: [
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省17.4元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              ext: { exp: 2 },
              text: "2.01万人评价百亿补贴饮料是正品",
              rgoods: { extra_tag_map: {}, goods_id: 725816229529 },
              type: "certified_products_tag",
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1424,
          origin_price: 3080,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省16.56元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "来自回头客好店，品质保证",
              type: "mall_sell_point182189",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                exp: 2,
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1032,
          origin_price: 2110,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
          ],
          corner_wording: "共省10.78元",
          flag_set: [0, 3, 6],
          extra_tag_map: { img_ai: true },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1104,
          origin_price: 3240,
          tag_info_list: [
            {
              text: "预计后天送达",
              type: 23,
              tag_ext: { type: "estimated_delivery_tag" },
            },
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省21.36元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "来自回头客好店，品质保证",
              type: "mall_sell_point182189",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                exp: 2,
              },
            },
            img_ai: true,
          },
          trax_data: {
            22: [
              {
                text: "预计后天送达",
                type: "estimated_delivery_tag",
                tag_ext: { type: "estimated_delivery_tag" },
              },
            ],
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 2624,
          origin_price: 3990,
          tag_info_list: [
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省13.66元",
          flag_set: [0, 33, 3, 6],
          extra_tag_map: { img_ai: true },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
              {
                type: "area221_live",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Fmms_static\u002F2019-12-04\u002F7cd72b60-b17f-4862-b50e-76b0fbe81895.gif",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 928,
          origin_price: 1890,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省9.62元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "来自回头客好店，品质保证",
              type: "mall_sell_point182189",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                exp: 2,
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 2048,
          origin_price: 3980,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 24, text: "未发货秒退", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省19.32元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "来自回头客好店，品质保证",
              type: "mall_sell_point182189",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                exp: 2,
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            111: {
              text: "礼盒包装",
              type: "gift_box_sf_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002F94402536-b291-4d51-9c63-a9fa42adaf2c.png.slim.png",
                exp: 2,
              },
            },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1504,
          origin_price: 3370,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 24, text: "未发货秒退", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省18.66元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "近30天6万人浏览过",
              type: "recent_view_count_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fc93be054-6cad-4f72-8496-0b85becbfe53.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            111: {
              text: "同款热销",
              type: "same_hot_sale_tag",
              tag_ext: { exp: 2 },
            },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1936,
          origin_price: 3690,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省17.54元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "3年老店",
              type: "mall_sell_points_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 284,
          origin_price: 570,
          tag_info_list: [
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省2.86元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "3年老店",
              type: "mall_sell_points_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            111: {
              text: "同款热销",
              type: "same_hot_sale_tag",
              tag_ext: { exp: 2 },
            },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 800,
          origin_price: 1440,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省6.4元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "来自回头客好店，品质保证",
              type: "mall_sell_point182189",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                exp: 2,
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            111: {
              text: "大额补贴",
              type: "purchase_limit_emphasize_subsidy_tag",
              tag_ext: { sub_text: " 限购1件", limit_count: 1 },
            },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1184,
          origin_price: 2420,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省12.36元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "3年老店",
              type: "mall_sell_points_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            111: { text: "品质生鲜", type: "fruit_best_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1352,
          origin_price: 2770,
          tag_info_list: [
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省14.18元",
          flag_set: [0, 3, 6],
          extra_tag_map: { img_ai: true },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1384,
          origin_price: 2990,
          tag_info_list: [
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省16.06元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              ext: { exp: 2 },
              text: "2.64万人评价百亿补贴方便速食是正品",
              rgoods: { extra_tag_map: {}, goods_id: 773563111725 },
              type: "certified_products_tag",
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 1080,
          origin_price: 1980,
          tag_info_list: [
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省9元",
          flag_set: [0, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "5年老店",
              type: "mall_sell_points_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
      "BYBT_SEARCH@CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=":
        {
          activity_price_word_before_tag: {
            text: "只剩3小时",
            type: "pre_price_coupon_tag",
            tag_ext: {
              icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
            },
          },
          activity_price_word: "券后",
          activity_price: 2392,
          origin_price: 4600,
          tag_info_list: [
            { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
            { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
          ],
          corner_wording: "共省22.08元",
          flag_set: [0, 16, 3, 6],
          extra_tag_map: {
            help_decision: {
              text: "6年老店",
              type: "mall_sell_points_tag",
              tag_ext: {
                icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
              },
            },
            img_ai: true,
          },
          trax_data: {
            44: { type: "origin_price_word_tag" },
            112: {
              type: "surprise_box_coupon_tag",
              url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
            },
            221: [
              {
                text: "品牌",
                type: "area221_black",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              },
              {
                text: "百亿补贴",
                type: "area221_bybt",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              },
              {
                text: "买贵赔双倍",
                type: "area221_compensate",
                url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
              },
            ],
          },
          lt_icon:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
        },
    },
  },
  immersiveStore: {
    immersiveEnable: false,
    navHeight: 0,
    statusBarHeight: 0,
    isInitedOnClient: false,
  },
  goodsIdRefreshGoodsSnMap: {
    685713886123:
      "CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=",
    660114854595:
      "CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=",
    632712235306:
      "CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=",
    208366717554:
      "CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=",
    725816229529:
      "CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=",
    581575125599:
      "CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=",
    913183514096:
      "CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=",
    581570824312:
      "CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=",
    905474755166:
      "CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=",
    874904256790:
      "CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=",
    637528618011:
      "CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=",
    900700774262:
      "CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=",
    613540244792:
      "CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=",
    629041760311:
      "CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=",
    866451735014:
      "CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=",
    871172273841:
      "CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=",
    877239384819:
      "CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=",
    773563111725:
      "CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=",
    683760314032:
      "CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=",
    720368523036:
      "CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=",
  },
  timeStore: { diff: 0 },
  networkStatusStore: { networkType: 0 },
  elderStore: { isElder: false, isInitedOnClient: false },
  pointsModuleStore: {
    bubbleList: [],
    tabInsertData: {},
    showPointBubble: false,
    pointIndexApiExtras: {},
  },
  abTestStore: {
    grayMap: {
      optimizePicTagGray: 1,
      abDeepColorInfoGray: 1,
      abEnlargePriceGray: 1,
      abShofarSymbolGray: 1,
      unBoldAndroidGray: null,
      backSubsidyPageAfterBuyGray: { vids: [], vids_str: "" },
      abNarrowPriceGapGray: 1,
      abEnhanceBrandInfoGray: null,
      lowerNumberGapGray: null,
      bizCardThreeOptGray: { param: 2, vid: 1313374 },
      swapOriginPriceSalesGray: 1,
      reduceSpaceGray: 1,
    },
    grayCompareMap: {
      optimizeLeftTagGray: true,
      isTestCenterPageGray: true,
      reduceSpaceBrandAndNameGray: true,
      abPriceContrastGray: true,
      reduceGoodsInfoGapGray: true,
    },
    reportStatusMap: {
      optimizePicTagGray: false,
      abDeepColorInfoGray: false,
      abEnlargePriceGray: false,
      abShofarSymbolGray: false,
      unBoldAndroidGray: false,
      backSubsidyPageAfterBuyGray: false,
      abNarrowPriceGapGray: false,
      abEnhanceBrandInfoGray: false,
      lowerNumberGapGray: false,
      bizCardThreeOptGray: false,
      swapOriginPriceSalesGray: false,
      reduceSpaceGray: false,
      optimizeLeftTagGray: false,
      isTestCenterPageGray: false,
      reduceSpaceBrandAndNameGray: false,
      abPriceContrastGray: false,
      reduceGoodsInfoGapGray: false,
    },
    experimentConfigList: [
      { key: "optimizePicTagGray", brandId: "BRAND-36087" },
      { key: "abDeepColorInfoGray", brandId: "BRAND-36851" },
      { key: "abEnlargePriceGray", brandId: "BRAND-34498" },
      { key: "abShofarSymbolGray", brandId: "BRAND-38189" },
      { key: "unBoldAndroidGray", brandId: "BRAND-37543" },
      { key: "backSubsidyPageAfterBuyGray", brandId: "BRAND-37426" },
      { key: "abNarrowPriceGapGray", brandId: "BRAND-36741" },
      { key: "abEnhanceBrandInfoGray", brandId: "BRAND-38477" },
      { key: "lowerNumberGapGray", brandId: "BRAND-37718" },
      { key: "bizCardThreeOptGray", brandId: "BRAND-38833" },
      { key: "swapOriginPriceSalesGray", brandId: "BRAND-38253" },
      { key: "reduceSpaceGray", brandId: "BRAND-37199" },
    ],
    experimentCompareConfigList: [
      {
        key: "optimizeLeftTagGray",
        brandId: "BRAND-36917",
        compareValue: 1,
      },
      {
        key: "isTestCenterPageGray",
        brandId: "BRAND-38955",
        compareValue: 1,
      },
      {
        key: "reduceSpaceBrandAndNameGray",
        brandId: "BRAND-37476",
        compareValue: 2,
      },
      {
        key: "abPriceContrastGray",
        brandId: "BRAND-38532",
        compareValue: 1,
      },
      {
        key: "reduceGoodsInfoGapGray",
        brandId: "BRAND-37204",
        compareValue: 1,
      },
    ],
  },
  premiumBrandStore: {
    listIdSuffix: "",
    premiumBrandData: {},
    tabList: [],
    showPremiumBrandModule: false,
    activeTabIndex: 0,
  },
  elderFontSizeGray: true,
  abDotMagnifyGray: true,
  abBorderRadiusGray: 2,
  abPartialTagGoldGray: true,
  changePriceColorGray: true,
  hiddenInfoForAndroidGray: null,
  abAndroidBoldGray: true,
  tagSeperateGray: 1,
  isFirstServiceIconGoldGray: 2,
  axiosHttp: null,
  query: {
    _pdd_fs: "1",
    _pdd_tc: "f4f4f4",
    _pdd_sbs: "0",
    search_key: "减脂期蔬菜",
    source: "10001",
    options: "2",
    refer_search_met_pos: "6",
    refer_page_el_sn: "615206",
    search_met_track: "hot",
    _x_share_id: "0bfbe10a860749a38dcac64773bdc4d8",
    _x_no_login_launch: "1",
    refer_page_name: "subsidy_search_result",
    refer_page_id: "10015_1772717237020_j49i1kv9ln",
    refer_page_sn: "10015",
  },
  buiSSRData: {
    listID: "pkpKTkEBSN",
    ssrListData: {
      page: 1,
      rcmdQueryInfo: { rcmdQuery: "", rcmdQueryList: [] },
      actEntryInfo: [],
      isBlack: false,
      flip: "0;0;0;0;36feef66-ebca-41a2-b983-1d985ebf1c4d;\u002F20;0;0;ff826b3f62c42163bac9714b6ca549ef",
      pSearch:
        '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","style":1,"is_qc":false,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
      filterSwitch: { showFavmall: false },
      actFilterConfig: null,
      filterPrice: [
        { start: 0, end: 9, text: "0-9" },
        { start: 9, end: 12, text: "9-12" },
        { start: 12, end: 16, text: "12-16" },
        { start: 16, end: -1, text: "16以上" },
      ],
      filterProperty: [
        {
          col_num: 3,
          name: "精选服务",
          select_type: 1,
          id: -1,
          items: [
            { name: "退货包运费", id: 3, value: "property,-1,3" },
            { name: "顺丰包邮", id: 17, value: "property,-1,17" },
            { name: "正品险", id: 36, value: "property,-1,36" },
            { name: "假一赔十", id: 15, value: "property,-1,15" },
            { name: "极速退款", id: 24, value: "property,-1,24" },
          ],
        },
        {
          col_num: 3,
          name: "其他筛选",
          select_type: 0,
          id: -1001,
          items: [
            {
              name: "回头客常拼",
              id: -10002,
              value: "property,-1001,-10002",
            },
          ],
        },
        {
          col_num: 3,
          name: "商品发货地",
          items_style: 1,
          select_type: 0,
          id: -6,
          items: [
            {
              icon: {
                not_selected:
                  "https:\u002F\u002Ffunimg.pddpic.com\u002Fe08d935d-f73e-4418-8d95-35dbdf79cac5.png.slim.png",
                width: 10,
                selected:
                  "https:\u002F\u002Ffunimg.pddpic.com\u002F8358678e-0fcb-494a-bfb8-7813bb11b1f9.png.slim.png",
                height: 10,
              },
              name: "北京",
              id: -102,
              value: "property,-6,-102",
            },
            { name: "山东", id: -122, value: "property,-6,-122" },
            { name: "云南", id: -130, value: "property,-6,-130" },
            { name: "福建", id: -104, value: "property,-6,-104" },
            { name: "河南", id: -111, value: "property,-6,-111" },
            { name: "陕西", id: -124, value: "property,-6,-124" },
            { name: "湖北", id: -113, value: "property,-6,-113" },
            { name: "上海", id: -125, value: "property,-6,-125" },
            { name: "四川", id: -126, value: "property,-6,-126" },
            { name: "安徽", id: -103, value: "property,-6,-103" },
            { name: "广西", id: -107, value: "property,-6,-107" },
            { name: "江苏", id: -116, value: "property,-6,-116" },
            { name: "辽宁", id: -118, value: "property,-6,-118" },
            { name: "山西", id: -123, value: "property,-6,-123" },
            { name: "浙江", id: -131, value: "property,-6,-131" },
          ],
        },
        {
          col_num: 3,
          name: "热门品牌",
          select_type: 1,
          id: 310,
          items: [
            {
              name: "卓上",
              id: 102037,
              priority: 0,
              value: "property,310,102037",
            },
            {
              name: "胡鲜森",
              id: 299882,
              priority: 0,
              value: "property,310,299882",
            },
            {
              name: "八荒",
              id: 63580,
              priority: 0,
              value: "property,310,63580",
            },
            {
              name: "一号农场",
              id: 267957,
              priority: 0,
              value: "property,310,267957",
            },
            {
              name: "南早",
              id: 348006,
              priority: 0,
              value: "property,310,348006",
            },
            {
              name: "卓颐",
              id: 215737,
              priority: 0,
              value: "property,310,215737",
            },
            {
              name: "星仔岛",
              id: 17388,
              priority: 0,
              value: "property,310,17388",
            },
          ],
        },
        {
          col_num: 3,
          name: "产地",
          items_style: 1,
          select_type: 1,
          id: -482,
          items: [
            {
              name: "四川省",
              id: -39407,
              priority: 0,
              value: "property,-482,-39407",
            },
            {
              name: "攀枝花市",
              id: -56395,
              priority: 0,
              value: "property,-482,-56395",
            },
            {
              name: "山东省",
              id: -39408,
              priority: 0,
              value: "property,-482,-39408",
            },
            {
              name: "潍坊市",
              id: -56355,
              priority: 0,
              value: "property,-482,-56355",
            },
            {
              name: "陕西省",
              id: -56086,
              priority: 0,
              value: "property,-482,-56086",
            },
            {
              name: "河南省",
              id: -56077,
              priority: 0,
              value: "property,-482,-56077",
            },
            {
              name: "云南省",
              id: -56089,
              priority: 0,
              value: "property,-482,-56089",
            },
            {
              name: "昆明市",
              id: -56429,
              priority: 0,
              value: "property,-482,-56429",
            },
            {
              name: "焦作市",
              id: -56215,
              priority: 0,
              value: "property,-482,-56215",
            },
            {
              name: "福建省",
              id: -56072,
              priority: 0,
              value: "property,-482,-56072",
            },
            {
              name: "广西壮族自治区",
              id: -56074,
              priority: 0,
              value: "property,-482,-56074",
            },
            {
              name: "南宁市",
              id: -56155,
              priority: 0,
              value: "property,-482,-56155",
            },
            {
              name: "漳州市",
              id: -56119,
              priority: 0,
              value: "property,-482,-56119",
            },
            {
              name: "咸阳市",
              id: -56377,
              priority: 0,
              value: "property,-482,-56377",
            },
            {
              name: "中国大陆",
              id: -24044,
              priority: 0,
              value: "property,-482,-24044",
            },
            {
              name: "湖北省",
              id: -56078,
              priority: 0,
              value: "property,-482,-56078",
            },
            {
              name: "聊城市",
              id: -56350,
              priority: 0,
              value: "property,-482,-56350",
            },
            {
              name: "曲靖市",
              id: -56440,
              priority: 0,
              value: "property,-482,-56440",
            },
          ],
        },
        {
          col_num: 3,
          name: "黄瓜种类",
          select_type: 0,
          id: 2104,
          items: [
            {
              name: "刺黄瓜",
              id: 995762,
              priority: 0,
              value: "property,2104,995762",
            },
            {
              name: "金童玉女黄瓜",
              id: 995818,
              priority: 0,
              value: "property,2104,995818",
            },
          ],
        },
        {
          col_num: 3,
          name: "可配送至",
          select_type: 0,
          id: -9,
          items: [
            {
              data: {
                drop_down_list: [
                  {
                    name: "北京",
                    id: 2,
                    value: "property,-9,2",
                    property_id: -9,
                  },
                  {
                    name: "安徽",
                    id: 3,
                    value: "property,-9,3",
                    property_id: -9,
                  },
                  {
                    name: "福建",
                    id: 4,
                    value: "property,-9,4",
                    property_id: -9,
                  },
                  {
                    name: "甘肃",
                    id: 5,
                    value: "property,-9,5",
                    property_id: -9,
                  },
                  {
                    name: "广东",
                    id: 6,
                    value: "property,-9,6",
                    property_id: -9,
                  },
                  {
                    name: "广西",
                    id: 7,
                    value: "property,-9,7",
                    property_id: -9,
                  },
                  {
                    name: "贵州",
                    id: 8,
                    value: "property,-9,8",
                    property_id: -9,
                  },
                  {
                    name: "海南",
                    id: 9,
                    value: "property,-9,9",
                    property_id: -9,
                  },
                  {
                    name: "河北",
                    id: 10,
                    value: "property,-9,10",
                    property_id: -9,
                  },
                  {
                    name: "河南",
                    id: 11,
                    value: "property,-9,11",
                    property_id: -9,
                  },
                  {
                    name: "黑龙江",
                    id: 12,
                    value: "property,-9,12",
                    property_id: -9,
                  },
                  {
                    name: "湖北",
                    id: 13,
                    value: "property,-9,13",
                    property_id: -9,
                  },
                  {
                    name: "湖南",
                    id: 14,
                    value: "property,-9,14",
                    property_id: -9,
                  },
                  {
                    name: "吉林",
                    id: 15,
                    value: "property,-9,15",
                    property_id: -9,
                  },
                  {
                    name: "江苏",
                    id: 16,
                    value: "property,-9,16",
                    property_id: -9,
                  },
                  {
                    name: "江西",
                    id: 17,
                    value: "property,-9,17",
                    property_id: -9,
                  },
                  {
                    name: "辽宁",
                    id: 18,
                    value: "property,-9,18",
                    property_id: -9,
                  },
                  {
                    name: "内蒙古",
                    id: 19,
                    value: "property,-9,19",
                    property_id: -9,
                  },
                  {
                    name: "宁夏",
                    id: 20,
                    value: "property,-9,20",
                    property_id: -9,
                  },
                  {
                    name: "青海",
                    id: 21,
                    value: "property,-9,21",
                    property_id: -9,
                  },
                  {
                    name: "山东",
                    id: 22,
                    value: "property,-9,22",
                    property_id: -9,
                  },
                  {
                    name: "山西",
                    id: 23,
                    value: "property,-9,23",
                    property_id: -9,
                  },
                  {
                    name: "陕西",
                    id: 24,
                    value: "property,-9,24",
                    property_id: -9,
                  },
                  {
                    name: "上海",
                    id: 25,
                    value: "property,-9,25",
                    property_id: -9,
                  },
                  {
                    name: "四川",
                    id: 26,
                    value: "property,-9,26",
                    property_id: -9,
                  },
                  {
                    name: "天津",
                    id: 27,
                    value: "property,-9,27",
                    property_id: -9,
                  },
                  {
                    name: "西藏",
                    id: 28,
                    value: "property,-9,28",
                    property_id: -9,
                  },
                  {
                    name: "新疆",
                    id: 29,
                    value: "property,-9,29",
                    property_id: -9,
                  },
                  {
                    name: "云南",
                    id: 30,
                    value: "property,-9,30",
                    property_id: -9,
                  },
                  {
                    name: "浙江",
                    id: 31,
                    value: "property,-9,31",
                    property_id: -9,
                  },
                  {
                    name: "重庆",
                    id: 32,
                    value: "property,-9,32",
                    property_id: -9,
                  },
                  {
                    name: "香港",
                    id: 33,
                    value: "property,-9,33",
                    property_id: -9,
                  },
                  {
                    name: "澳门",
                    id: 34,
                    value: "property,-9,34",
                    property_id: -9,
                  },
                  {
                    name: "台湾",
                    id: 35,
                    value: "property,-9,35",
                    property_id: -9,
                  },
                ],
              },
              icon: {
                not_selected:
                  "https:\u002F\u002Ffunimg.pddpic.com\u002Fmobile-search\u002F2020-12-09\u002Fde4aba2d-9627-4bd7-85e8-bbbe1bc3134f.png",
                width: 10,
                height: 10,
              },
              name: "添加省份",
              id: -9,
              state: 0,
              type: 1,
              value: "property,-9,0",
            },
            { name: "北京", id: 2, value: "property,-9,2" },
            { name: "浙江", id: 31, value: "property,-9,31" },
          ],
        },
      ],
      filterTotalNumStr: "973件商品",
      filterNotShowPrice: false,
      dynamicFilterBars: {
        sortConfig: [
          {
            type: "sort",
            style: 2,
            name: "",
            items: [
              {
                dataReport: {
                  click: {
                    parameter: { type: "default" },
                    page_el_sn: "470319",
                  },
                },
                detail: "综合排序",
                name: "综合",
                selected: true,
                value: "default",
              },
              {
                dataReport: {
                  click: {
                    parameter: { type: "_hotcomment" },
                    page_el_sn: "470319",
                  },
                },
                detail: "好评排序",
                name: "好评",
                selected: false,
                value: "_hotcomment",
              },
            ],
            dataReport: {
              impr: {
                parameter: { type: "mult" },
                page_el_sn: "470319",
              },
            },
          },
          {
            type: "sort",
            style: 1,
            name: "销量",
            value: "_sales",
            dataReport: {
              click: {
                parameter: { type: "_sales" },
                page_el_sn: "470319",
              },
            },
          },
          {
            type: "sort",
            style: 3,
            items: [
              {
                name: "",
                dataReport: {
                  click: {
                    parameter: { type: "price" },
                    page_el_sn: "470319",
                  },
                },
                value: "price",
              },
              {
                name: "",
                dataReport: {
                  click: {
                    parameter: { type: "_price" },
                    page_el_sn: "470319",
                  },
                },
                value: "_price",
              },
            ],
            name: "价格",
          },
          { type: "split", style: 5 },
          {
            type: "filter_old",
            style: 4,
            dataReport: {
              click: {
                parameter: { type: "filter_old" },
                page_el_sn: "470418",
              },
            },
            name: "筛选",
          },
        ],
        logoFilter: { name: "", logoStyle: 0, items: [] },
        outsideFilter: [
          {
            select_type: 0,
            singleClickParentId: 0,
            state: 0,
            name: "包装方式",
            style: 2,
            dataReport: {
              impr: {
                parameter: { type: "包装方式" },
                page_el_sn: "470733",
              },
              click: {
                parameter: { type: "包装方式" },
                page_el_sn: "470733",
              },
            },
            id: 677,
            type: "",
            value: "",
            items: [
              {
                name: "普通盒装",
                dataReport: {
                  click: {
                    parameter: { type: "普通盒装" },
                    page_el_sn: "470733",
                  },
                },
                id: 55420,
                value: "property_tag,677,55420",
                guide: "",
              },
              {
                name: "礼盒装",
                dataReport: {
                  click: {
                    parameter: { type: "礼盒装" },
                    page_el_sn: "470733",
                  },
                },
                id: 55421,
                value: "property_tag,677,55421",
                guide: "",
              },
              {
                name: "散装",
                dataReport: {
                  click: {
                    parameter: { type: "散装" },
                    page_el_sn: "470733",
                  },
                },
                id: 56057,
                value: "property_tag,677,56057",
                guide: "",
              },
              {
                name: "泡沫箱装",
                dataReport: {
                  click: {
                    parameter: { type: "泡沫箱装" },
                    page_el_sn: "470733",
                  },
                },
                id: 2705166,
                value: "property_tag,677,2705166",
                guide: "",
              },
              {
                name: "袋装",
                dataReport: {
                  click: {
                    parameter: { type: "袋装" },
                    page_el_sn: "470733",
                  },
                },
                id: 56055,
                value: "property_tag,677,56055",
                guide: "",
              },
              {
                name: "食用农产品",
                dataReport: {
                  click: {
                    parameter: { type: "食用农产品" },
                    page_el_sn: "470733",
                  },
                },
                id: 862380,
                value: "property_tag,677,862380",
                guide: "",
              },
            ],
          },
          {
            select_type: 0,
            singleClickParentId: 0,
            state: 0,
            name: "适用场景",
            style: 2,
            dataReport: {
              impr: {
                parameter: { type: "适用场景" },
                page_el_sn: "470733",
              },
              click: {
                parameter: { type: "适用场景" },
                page_el_sn: "470733",
              },
            },
            id: 802,
            type: "",
            value: "",
            items: [
              {
                name: "通用",
                dataReport: {
                  click: {
                    parameter: { type: "通用" },
                    page_el_sn: "470733",
                  },
                },
                id: 518376,
                value: "property_tag,802,518376",
                guide: "",
              },
              {
                name: "家用",
                dataReport: {
                  click: {
                    parameter: { type: "家用" },
                    page_el_sn: "470733",
                  },
                },
                id: 83778,
                value: "property_tag,802,83778",
                guide: "",
              },
            ],
          },
          {
            select_type: 0,
            singleClickParentId: 0,
            state: 0,
            name: "食品工艺",
            style: 2,
            dataReport: {
              impr: {
                parameter: { type: "食品工艺" },
                page_el_sn: "470733",
              },
              click: {
                parameter: { type: "食品工艺" },
                page_el_sn: "470733",
              },
            },
            id: 2581,
            type: "",
            value: "",
            items: [
              {
                name: "洗净带皮",
                dataReport: {
                  click: {
                    parameter: { type: "洗净带皮" },
                    page_el_sn: "470733",
                  },
                },
                id: 3201220,
                value: "property_tag,2581,3201220",
                guide: "",
              },
              {
                name: "带泥带皮",
                dataReport: {
                  click: {
                    parameter: { type: "带泥带皮" },
                    page_el_sn: "470733",
                  },
                },
                id: 3201217,
                value: "property_tag,2581,3201217",
                guide: "",
              },
              {
                name: "去皮水洗净葱",
                dataReport: {
                  click: {
                    parameter: { type: "去皮水洗净葱" },
                    page_el_sn: "470733",
                  },
                },
                id: 5074035,
                value: "property_tag,2581,5074035",
                guide: "",
              },
            ],
          },
          {
            select_type: 0,
            singleClickParentId: 0,
            state: 0,
            name: "储藏方法",
            style: 2,
            dataReport: {
              impr: {
                parameter: { type: "储藏方法" },
                page_el_sn: "470733",
              },
              click: {
                parameter: { type: "储藏方法" },
                page_el_sn: "470733",
              },
            },
            id: 1087,
            type: "",
            value: "",
            items: [
              {
                name: "常温",
                dataReport: {
                  click: {
                    parameter: { type: "常温" },
                    page_el_sn: "470733",
                  },
                },
                id: 1591567,
                value: "property_tag,1087,1591567",
                guide: "",
              },
              {
                name: "冷藏",
                dataReport: {
                  click: {
                    parameter: { type: "冷藏" },
                    page_el_sn: "470733",
                  },
                },
                id: 1591565,
                value: "property_tag,1087,1591565",
                guide: "",
              },
              {
                name: "冷冻",
                dataReport: {
                  click: {
                    parameter: { type: "冷冻" },
                    page_el_sn: "470733",
                  },
                },
                id: 1591566,
                value: "property_tag,1087,1591566",
                guide: "",
              },
            ],
          },
        ],
      },
      listStyle: 1,
      searchMallInfo: null,
      list: [
        {
          key: "goods_685713886123_1_0",
          goodsID: 685713886123,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F9255f584-cad2-11ef-b012-0a580a4b0c79.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName: "贝蓓芯水果胡萝卜即食蔬菜新鲜甜脆迷你拇指小萝卜30g装",
          price: "13.28",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1328,
          salesTip: "已抢3.5万+件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"OJWU2hjZbhkzC4mXw5AT6dq27cWzCsT\u002FyYCf21MyxuDSBxC2XfCQ6Lwo9k8pdVkwBLQ3T\u002FuMETJsVe\u002FJMCka45T5+x\u002FBqaseNBe5FY+gSoESWwkwtPOeFWiayvqGBgjcykkbAsIxwRbqqtfE7OJMK8pYZ6I\u002FcXc9VX36ac2uYz4=","pubinfo":"{\\"item\\":\\"iXUB2Vg\u002FSVcIg3euvlauRPAqvbLZ9Z8Jt109zYMP4r2tgfudpo+Uu+xtIFiXDcgt8htZXyOvz9MVHeuI\u002FU+9Km9Cm\u002FnM3v+zyGOVyABuRDnYUnrd4SV75tbI6KnOSviZcXT4MlnD8cWSWQI1D6cJN+jjI\u002FNmCrVfIE7EINoS4\u002FHnN0ggNsnsCgh21I79l844OhknAKV\u002FKrAb6AXHguG\u002FjwAoGBOOloZFY8XOlgSKCyTRiHXYedhAvzF\u002FIu8GC9dgrV9egLaVdWD6RlZQZEAT9LpSRAV18ESmoewiDSJHPO9SzuuGEHoFcVg9mMShgWMex0bqx5Rq4a1DsZDrIGrBvR88wAUn2df0o4rwwVSC17nHR7XObkGN\u002FcgUqy6YXoeESslAY2bNl+KNKA8OQcgLv3lN7C4Z9kEz1\u002FU7tJAtGTZHSXC0VZKKIhVhXh\u002FedEeKpGyEPukXTMb\u002FN\u002FQ4fKvqA9tVpcNPHgmGwLT\u002Fuo1tTQ09DzTYo5p2cQQ2OJrLyYXI3F0cjI\u002Fq8UPcoXfQyioXJMDRpViMgCDQh0jUORAeFn1iX60epIrKzaNwkpPSZmT8VBHQW9M36j7XR5zdJf7UXff6dYp74ns0uAKBqDKdF5M\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"olKVs45Mpkw+dUQSkww8NMhsauQbDXiWpOadEa\u002FSVvyt2TZo58F5QhOGKD6IGAW3g2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7FF5nu1qRMILXBuOnlYJ38RnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":7165708053,\\"is_tr\\":1}","mark":"LxX8HquEm8qwU9\u002FJTnh4Welc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23013,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":0,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F9255f584-cad2-11ef-b012-0a580a4b0c79.jpg",
            price_type: 0,
            price: "13.28",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=685713886123&_oak_rcto=YWL1B5_4Cp_o-BV-T9RhwoKgtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=1377fef31b4d941c6420a794368b8fff&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fgarner-api-new%2Faba53a1a905174ae602b5ed1f560e2f2.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgarner-api-new\u002Faba53a1a905174ae602b5ed1f560e2f2.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F7d0c4578-cad4-11ef-bd91-0a580a4b0c79.jpg",
            cat_id4: 23017,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIPVjoxaE\u002FmWDVMPaVyDIQEKopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23013,
            cat_id1: 8172,
            mall_id: 474117331,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 2661,
            subsidy_wording: "官方补贴14.1元",
            brand_name: "贝蓓芯",
            activity_quantity: 2661,
            theme_group_id: 0,
            detail_id: 22990956199,
            brand_id: 1628480,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前37.9元",
            sales_wording: "已补贴3.5万+件",
            normalPrice: 3790,
            flag_set: [0, 3, 6],
            origin_price: 3790,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 685713886123,
            trax_data: {
              22: [
                {
                  text: "预计后天送达",
                  type: "estimated_delivery_tag",
                  tag_ext: { type: "estimated_delivery_tag" },
                },
              ],
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36"],
            listType: 0,
            origin_activity_price: 2380,
            activity_type: 34,
            subsidy_amount: 1410,
            cat_id: 23017,
            activity_price: 1328,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-12-15\u002F5bec645b2a7717f90110c4e561f1ac62.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgarner-api-new\u002Fimalgo-b-whiteImg\u002F6735f77a-53c9-11f0-921b-0a580a245a7b.jpg",
            origin_price_word: "优惠前",
            price_str: "13.28元",
            use_ad_pic: 0,
            corner_wording: "共省24.62元",
            tag_info_list: [
              {
                text: "预计后天送达",
                type: 23,
                tag_ext: { type: "estimated_delivery_tag" },
              },
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "来自回头客好店，品质保证",
                type: "mall_sell_point182189",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                  exp: 2,
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_660114854595_1_1",
          goodsID: 660114854595,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F4a388556-101d-11f0-b31e-0a580a4b1cba.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "一号农场法式田园蔬菜沙拉组合E开袋即食新鲜蔬菜健身轻食代餐3包",
          price: "16.8",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1680,
          salesTip: "已抢4.4万+件",
          localGroup: { list: [] },
          logData: {
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":8230,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":1,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F4a388556-101d-11f0-b31e-0a580a4b1cba.jpg",
            price_type: 0,
            price: "16.8",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=660114854595&_oak_rcto=YWKb1FW8yEdViWISkkUb-s1PtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=6a1ed2a5fb1bc4461953052a599a429e&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-04-02%2F0a5f5314-4891-44e3-9283-e684c75fd320.png",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-04-02\u002F0a5f5314-4891-44e3-9283-e684c75fd320.png",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F1f1e3096-0fff-11f0-9d3d-0a580a4b1cba.jpg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaINtvI7TFcnU1qXVdBEds6waopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 8230,
            cat_id1: 8172,
            mall_id: 697980114,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 3594,
            subsidy_wording: "官方补贴7.7元",
            brand_name: "一号农场",
            activity_quantity: 3594,
            theme_group_id: 0,
            detail_id: 8438213534,
            brand_id: 253185,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前29.9元",
            sales_wording: "已补贴4.4万+件",
            normalPrice: 2990,
            flag_set: [0, 3, 6],
            origin_price: 2990,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
            },
            goodsId: 660114854595,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              111: { text: "品质生鲜", type: "fruit_best_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36", "1&3", "1&24"],
            listType: 0,
            origin_activity_price: 2220,
            activity_type: 34,
            subsidy_amount: 770,
            cat_id: 8230,
            activity_price: 1680,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-04-02\u002F800c5ba23f4a067bb121efbb52a515f4.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Fresized-background-pic\u002F2025-05-07\u002F2bee19b045e7450eef0333e598091ff7.jpeg",
            origin_price_word: "优惠前",
            price_str: "16.8元",
            corner_wording: "共省13.1元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "近90天22万人浏览过",
                type: "recent_view_count_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fc93be054-6cad-4f72-8496-0b85becbfe53.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_632712235306_1_2",
          goodsID: 632712235306,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F055b2b46-631b-11ef-bf4c-0a580a4c908d.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "大希地开袋即食低脂裙带菜丝海带丝中华海草日料式下饭凉拌菜寿司",
          price: "6.96",
          priceType: 0,
          priceInfo: "",
          rawPrice: 696,
          salesTip: "总售12.3万+件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"IvY5F9KISf+2UiTFNdAb4Rlupbp7+AM6Vs4jyvXhwQh8IyNsb4J8\u002Fk4axCl29tG1KiQa6PYrY1jmo4F0jgiuiTJQfjdRiV9FGb45H7HCFOaoTiinlCOGjDmvKQGawTYDoApy01xS5urmH1vo9VsSAikwcL2geoBuHhCKAsOXnXs=","pubinfo":"{\\"item\\":\\"\u002F1QfNUjIV8eYLee7ax5VQlr9\u002FFHo0Nc6KEI1XpjP7mkHfmYUxyvMU7qNSDRQ7rYO8ZZV0hf+BZ9C3G9D1loO4tGq4tOttjI2uupP2mFau+AIgUQEniJuVwy+o96cPC8mQTH65mgaDLFqjXfx4fCdS5yCRFgEvvGEvP1NZ+G0TyJGPsr8eLfaADcLTa2Mg+0izjoUGhBCnag9qwalZK46ydZR38jItg5m1RHDehFMfRba64U\u002F3kUl7kJc1dfdIZ2KUGbU1aEh7SzL9OacHn+2kc3si3SKT64mC9Z8SutMDx14Jw\u002FS4dz4cfHltP\u002FKgqDDo0VpqzKS9\u002Fq29bFR8ciRjSacPgXQrJMIymVSTRTPy+Jg0sJYohIEeukuXBD51SnldWbcPY+gA6dtZqWWO0pw6ih\u002FNKbtWfQjhOMkrIKfFs+IXOiX9CeyBeDtdAss1gzqecCgNgxvrp4eQfbbVLOsRRwgcD8SMSYaZj7XvX1ee4UhvVIgV6IomtpuBkPr8CItiduFsUoXnkE\u002FllqSUPXmLvT0p1jHov2k9ooJ9XexeYuD\u002FlVlsG\u002FSCxXf1E6J8yc3\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"6tG0GCD5pRlSXMeADtSta\u002FDVbEKj+e9P0dgTVQ275e2OJkeBb7mCOJCo90FDkB2E+w+N\u002Fse8tkTn1mIQojFofXesnV6dkNhWXpF+1olBTLY9MvpBYiwdfm99BatwHiaaGBQvAPcwwRzQo6aLwa9vGA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":6835124472,\\"is_tr\\":1}","mark":"tpJssUMKGIQ6ZrRLjwrXA+lc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":6708,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":2,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F055b2b46-631b-11ef-bf4c-0a580a4c908d.jpg",
            price_type: 0,
            price: "6.96",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=632712235306&_oak_rcto=YWJWndEF8YczLOT7JmJygi2AtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=0d0f46b6a80ae828afcf706b1d062feb&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-09-28%2F74cff440-efbe-4bdc-8569-baadc0ddc6c3.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-09-28\u002F74cff440-efbe-4bdc-8569-baadc0ddc6c3.jpeg.a.jpeg",
            reserve_quantity: 10,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F698935c8-631f-11ef-8143-0a580a4c908d.jpg",
            brand_logo:
              "http:\u002F\u002Ft00img.yangkeduo.com\u002Fgoods\u002Fimages\u002F2019-09-17\u002F06e5fb08f6b786dfa1c8c9a5e62f9d25.jpeg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIO2ojPRqVMDa3i+E9ZsCZgOopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6689,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 6708,
            cat_id1: 6630,
            mall_id: 149422937,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 42202,
            subsidy_wording: "官方补贴4元",
            brand_name: "大希地",
            activity_quantity: 2147459403,
            theme_group_id: 0,
            detail_id: 20517618517,
            brand_id: 13659,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前12.7元",
            sales_wording: "",
            normalPrice: 1270,
            flag_set: [0, 3, 6],
            origin_price: 1270,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 632712235306,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&9", "1&36", "1&15"],
            listType: 0,
            origin_activity_price: 870,
            activity_type: 34,
            subsidy_amount: 400,
            cat_id: 6708,
            activity_price: 696,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-09-28\u002Fec86a5048657cd2e1862fa1a47c7131c.jpeg",
            origin_price_word: "优惠前",
            price_str: "6.96元",
            use_ad_pic: 0,
            corner_wording: "共省5.74元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "近90天27万人浏览过",
                type: "recent_view_count_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fc93be054-6cad-4f72-8496-0b85becbfe53.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_208366717554_1_3",
          goodsID: 208366717554,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fd7a63592-e424-11f0-be37-0a580a4ed59f.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "澳农卡圣女果水果小黄瓜新鲜西红柿子樱桃番茄千禧青瓜生吃2\u002F4斤",
          price: "13.36",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1336,
          salesTip: "疯抢200万+斤",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"U2sViEEEWbPxo086npPnQSQ+6LDNMcy4xCzd5mJAnL6pZ1sFe+KNKQh2ltnhZs5zuJ1r12dtL7DSm6zT0WlLGCvLBhswY5hR2r5CRZTa88TMvO+O+N+z\u002FLefm8\u002FujyPPTvRgIPByveFyooSX0OXfj3vut1Ebg9OZj0TpQsJdP5Q=","pubinfo":"{\\"item\\":\\"3t1TrJ3eOagSbFpiPph4jUL1FOAoJRzTjknn5i9GTiXwFYnKACU8ua23UgE+61BkSf1oA5YNF8eu3Ci9muNsBSBxEG2\u002FyEsl4b6iP08pPP6MBFP+aJbfW\u002FAatNBQ1gjN0res5ckK1HGglqNXKbQHxrOt4Ux42fE7Ez9cISWeTiJm+wKaDmYx+D+gLqbXFxPQURPBpUMh9h2srE21Mu\u002FbBX6VXa6D1gieFMSNRjY9LoCq4PUTpmAdQIUY662O5vROcBAk\u002FOOCH59O+g3QYUf1Y2xlgsIkVeebdDwKcxtto58YgBTZGXQSSd0G8tUU\u002Fi2viQL46nCBx64qmkrgagWTZoQOqnOzbyVx+aHqZ24C5WKzb4Z4bhwErO763Qgzd\u002FukGCZpbvBMXjE9DWNo9q7KS1320PDQbFst85lUEOKoNhCdhNe1EYLyJxEgprbyjxydcl3nX9GVSuC0AUP5DJfWKKihV5TwSTH3Zw57eDk97Pc1v9oTlgbzGdwZkVh6vyfApP4S7B3L6o5gRlPbrEdWIC+658AExFoocpv5U2jnbU1lhJXctd+W5yvVk\u002FsWN9Qt\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"QgMg171RvBCQiUSu8lJJdRCSD1yPNYkRx7vE\u002FoDi16rL+yFDBqZWlndkllfnGElig2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7Gnr7PwN+FWyNLomqUSRJMbnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":5012648829,\\"is_tr\\":1}","mark":"5mX0SjBZNM3TfTC4Rq6yR+lc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23632,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":3,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fd7a63592-e424-11f0-be37-0a580a4ed59f.jpg",
            price_type: 0,
            price: "13.36",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=208366717554&_oak_rcto=YWKJCOXkTyn9x6rMijxhqaLdtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=f253067eb66a1a34f11e40ca485528b9&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2021-08-31%2F284e7415-51dc-428b-b76f-20cd34932540.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2021-08-31\u002F284e7415-51dc-428b-b76f-20cd34932540.jpeg.a.jpeg",
            reserve_quantity: 1,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F36dfbdb8-e424-11f0-8213-0a580a48d414.jpg",
            cat_id4: 24085,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIERZgFNojqpxFyr7\u002FGfCAUKopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23632,
            cat_id1: 8172,
            mall_id: 592738763,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 665656,
            subsidy_wording: "官方补贴7.2元",
            brand_name: "澳农卡",
            activity_quantity: 665656,
            theme_group_id: 0,
            detail_id: 15213247617,
            brand_id: 721543,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前24.8元",
            sales_wording: "已补贴200万+件",
            normalPrice: 2480,
            flag_set: [0, 3, 6],
            origin_price: 2480,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 208366717554,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36"],
            listType: 0,
            origin_activity_price: 1760,
            activity_type: 34,
            subsidy_amount: 720,
            cat_id: 24085,
            activity_price: 1336,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2021-08-31\u002F5fd58a0f72b9fc7b76cc849d91905a3e.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgarner-api-new\u002Faigc-img\u002Fwhite-img\u002F61ed5429c3251a9a68d642792961116a-57a2f-1765182496.png",
            origin_price_word: "优惠前",
            price_str: "13.36元",
            use_ad_pic: 0,
            corner_wording: "共省11.44元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "来自回头客好店，品质保证",
                type: "mall_sell_point182189",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                  exp: 2,
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_725816229529_1_4",
          goodsID: 725816229529,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F88eb6e62-127e-11f1-b5bc-0a580a4cacee.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "麦谷村果蔬液体沙拉120g\u002F袋冷藏口味佳代餐轻液断蔬菜沙拉液体",
          price: "17.2",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1720,
          salesTip: "已抢5.5万+袋",
          localGroup: { list: [] },
          logData: {
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23602,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":4,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F88eb6e62-127e-11f1-b5bc-0a580a4cacee.jpg",
            price_type: 0,
            price: "17.2",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=725816229529&_oak_rcto=YWLJpomATuP4rE3G9Qqt4JD_tgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=35ba41f55caec13bb1e627e7397543b6&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-12-17%2Fc4f9496b-17d6-49f8-820d-208e25d135f0.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-12-17\u002Fc4f9496b-17d6-49f8-820d-208e25d135f0.jpeg",
            reserve_quantity: 1,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F507afbb0-127e-11f1-8cb5-0a580a4efbb3.jpg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaINreDUQTjK\u002F+6hZ0Z1IL9BKopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6569,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23602,
            cat_id1: 6536,
            mall_id: 779211775,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 3443,
            subsidy_wording: "官方补贴13.1元",
            brand_name: "麦谷村",
            activity_quantity: 2147483401,
            theme_group_id: 0,
            detail_id: 22759403265,
            brand_id: 840224,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前34.6元",
            sales_wording: "已补贴5.5万+件",
            normalPrice: 3460,
            flag_set: [0, 3, 6],
            origin_price: 3460,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
            },
            goodsId: 725816229529,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&36", "1&3", "1&15"],
            listType: 0,
            origin_activity_price: 2150,
            activity_type: 34,
            subsidy_amount: 1310,
            cat_id: 23602,
            activity_price: 1720,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-12-17\u002Fd3b3016db9bc2f4b076968705c9a7b99.jpeg",
            origin_price_word: "优惠前",
            price_str: "17.2元",
            corner_wording: "共省17.4元",
            tag_info_list: [
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                ext: { exp: 2 },
                text: "2.01万人评价百亿补贴饮料是正品",
                rgoods: { extra_tag_map: {}, goods_id: 725816229529 },
                type: "certified_products_tag",
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_581575125599_1_5",
          goodsID: 581575125599,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fb5331518-f4a3-11f0-a6f0-0a580a4d9d0f.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "贝甜水果胡萝卜生吃脆甜低脂轻食蔬菜沙拉零食整根装新品198g每袋",
          price: "14.24",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1424,
          salesTip: "已抢7.8万+袋",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"TUtQfKxru+iPGeddteP7C69373sLuwxZ281O0KwjRa+lv+AC5derVOxFHtl2Z6IkGbhBiTAzDXCWX3JuOuQNdhgOtrhUxklszx+cCewg7pji3SUot3eO9LOwOen9PW\u002FAuJ\u002Fpd4iLpipz\u002F2jQ7ON8jbU0sHkSChWY9SgFIdWhWeI=","pubinfo":"{\\"item\\":\\"W3WIiix0XyCRdFilEJO+3o6goBO64FDssF44nXxcyaAF5MmKHrQyHGFhltFd2JnK\u002FyDJCX24u\u002Fyat3b2bn1o2ZV\u002F\u002FJHc8bA\u002F779TTSyuM2TRXrAfpWq0ixg7OJoaTICg2jTUHLqQ5YfBGfiQHyJ5h2FMsJIayeLDH+wfoEOPILrDK81xf4OfXYjX5lKlQ01hb+JzFblmRSjDpS1UPYu5Rg9xZcheTF0jWLwmuKt3dgq4kheC3B7i+JwngN4rq+OnQ7BvIU\u002F5OoEdFp6r4m6RIJUmnb7HyZuV1MSNr1+Ei6akMefvCE0+HaygxCsqkB5wPXEAvXQ0l8jMZxB9ncPZgA6uW30VcQow3PNYXgedkRxO5BcOOjCrHsuP0J9wmCP5ZM0w5O5g+fkHHcQ7zaqFUiYlCoJRPet\u002Fqj4Sp9U4Bkou1oquX09ObLkJ76DdFi4i7eHx6SL\u002F\u002FDzf5ftHArbojgxiVXr1bScip++7R\u002FaRYesqpg4oIc+82lpgoxpbL49p7eeYBjXd43NS6qmwKFv8TTfB8qOIjBnLAzoiuY\u002FI7wbFnQmDPNrpUPvZycMrQGlxyt+mL42Y1gJLPNGF4jSCDrIqkwKmTWO7Z42iGFscfRc\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"olKVs45Mpkw+dUQSkww8NOf1TuUsOiBuJ5QiAeR932ctGugkLBjIiI3yWbwAZbMsg2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7GLtsiJJV\u002FkLEvqJvjcbUVxnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":7996618852,\\"is_tr\\":1}","mark":"jo1n5NKPfe4LEa62s6x6xelc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23013,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":5,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fb5331518-f4a3-11f0-a6f0-0a580a4d9d0f.jpg",
            price_type: 0,
            price: "14.24",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=581575125599&_oak_rcto=YWKCoq5Fl2Y1mUas2kY57m16tgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=69f7d9d3725990dc170a38f735f0c21f&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-goods-image%2F2025-08-29%2F556cd225-89c4-49ee-8da2-d62d70f025d8.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-goods-image\u002F2025-08-29\u002F556cd225-89c4-49ee-8da2-d62d70f025d8.jpeg.a.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fc2bd4d06-f4a4-11f0-938b-0a580a4d9d0f.jpg",
            cat_id4: 23015,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIC\u002FE\u002FxVZmkA9hd3XQgO5mYqopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23013,
            cat_id1: 8172,
            mall_id: 474117331,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 15563,
            subsidy_wording: "官方补贴12元",
            brand_name: "贝蓓芯",
            activity_quantity: 2147483049,
            theme_group_id: 0,
            detail_id: 21109637711,
            brand_id: 1628480,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前30.8元",
            sales_wording: "已补贴7.8万+件",
            normalPrice: 3080,
            flag_set: [0, 3, 6],
            origin_price: 3080,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 581575125599,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36"],
            listType: 0,
            origin_activity_price: 1880,
            activity_type: 34,
            subsidy_amount: 1200,
            cat_id: 23015,
            activity_price: 1424,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-08-29\u002F7e0b20892fd8fc50ae5164e29b17fb9d.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-goods-image\u002F2025-09-30\u002F4ca67bca-495e-459c-963b-f6edde8ef931.jpeg.a.jpeg",
            origin_price_word: "优惠前",
            price_str: "14.24元",
            use_ad_pic: 0,
            corner_wording: "共省16.56元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "来自回头客好店，品质保证",
                type: "mall_sell_point182189",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                  exp: 2,
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_913183514096_1_6",
          goodsID: 913183514096,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Fresized-background-pic\u002F2026-03-05\u002Fa90531abc8c8c058601e6996c92602a5.jpeg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "云南长条黄瓜带刺新鲜黄瓜绿心4.5\u002F9斤清香爽口鲜嫩农家蔬菜水果",
          price: "10.32",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1032,
          salesTip: "已抢6件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"m2UaGaouK54X4Xm2dJg4Sr3B5RodZIswqtORlFVAbsXWa0EtVrjrGXgzLuUIoB8a\u002FInMCyB6L3CJOsdN00rZ6ikQdAN2gDcwBfERyupkx7uxNtMB1oErxxuQDNpC13ShI7U26P6NYHNv+FhzGv8Q5u+hphMVs7fON2mhA9G+us8=","pubinfo":"{\\"item\\":\\"dhm4hTXTtFO6XAsHDewzd6hZ1lctefxJJrAXoCf51HziF3lbFxXllkB4ujWkSL0iMDPPWyRQjmLvLb6baNwB9fTU+j7RGXtC77sf04Y5mFTq5dGXQLIgoWGLg9394K2eAWdbFKzoeY5Tm14l1m6xxm+j5dCSIIrvBD2NtpffIBbfPaZfz6NP7ECCx\u002F0WYghUF1RJ1k7c+zNp68hyfORIcEyDXCDfkL8A+XJbNhk73Qyz2I8Mdzr98XKRpWkt\u002FjVYBuYEBC6LqRACR71FJrP\u002FnFpuvj\u002F9WfHiH19E5fEkuIzZ7Y6mIwMobDIFleeBzkDxetVlfw4PZbDfPYO+Lg7uV5AKbUrk\u002FycqoJuE\u002FzNh1CUpLfeeyOfNwwQPFy0uJsj6aqhxfMrKdwYW6FUOLwxbTsA3\u002FXzMEa\u002FzNr\u002F0D5ZcGMJWLk9U+0ykkptsqET63XDITfIW4ebj7vPf7YPTlSyp4A4S6w4mRDvh3dJoN1QkCT\u002FsZlE0xqWmGwJEZlhReBbx6\u002Fpnmiv6pI8TiH7nxbnNUAVlS4EVfEe+NN23Ss9VbatU8kfVYHAMxaG5YDZflJl52rUo6HsVwNUkvPuoBAIMk\u002FTlb6DrcQx2c\u002FprXsEKmVx7gkE6EtY6PImpqMB1+ZO\u002F\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"6uUGn4g+KS1Nm6U0tWdUa5jRDjwIxxSFWXigWErT3k+85IOzGHzTV851m2ckGMbgafkL9L2RPEbUsrEKfsFn4yfsMTFpmuRlySCe0pgO\u002FjyD1FsFPkslE0IiQH5l9s1xphJXMEWZRQcdj1kxFoHm45bicaQNhn4ztap\u002FGJwWMUY=","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":9230346431,\\"is_tr\\":1}","mark":"n8slmwA3N+JfUkzIv68fKelc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":8221,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":6,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Fresized-background-pic\u002F2026-03-05\u002Fa90531abc8c8c058601e6996c92602a5.jpeg",
            price_type: 0,
            price: "10.32",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=913183514096&_oak_rcto=YWLJpomATuP4rDsW914RPkY_tgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=6bc4f31cdf092d20b9f6c0293ff8a791&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2026-02-25%2F1f83d521-81be-4838-b9fa-ab1159adf7b6.png.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2026-02-25\u002F1f83d521-81be-4838-b9fa-ab1159adf7b6.png.a.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2026-02-25\u002F1f83d521-81be-4838-b9fa-ab1159adf7b6.png.a.jpeg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIGw82eOmV2RyJ8KTMVZ2PeOopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 8221,
            cat_id1: 8172,
            mall_id: 332637433,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 19994,
            subsidy_wording: "官方补贴8.2元",
            brand_name: "滇台蜜",
            activity_quantity: 2147483641,
            theme_group_id: 0,
            detail_id: 23044455702,
            brand_id: 1191403,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前21.1元",
            sales_wording: "已补贴6件",
            normalPrice: 2110,
            flag_set: [0, 3, 6],
            origin_price: 2110,
            track_info: { gimgsrc: 1, use_ad_pic: 1 },
            goodsId: 913183514096,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9"],
            listType: 0,
            origin_activity_price: 1290,
            activity_type: 34,
            subsidy_amount: 820,
            cat_id: 8221,
            activity_price: 1032,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2026-03-05\u002Fa2b9930df4d96a13c7706157d4ab9184.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-goods-image\u002F2026-03-05\u002F15c4b6a5-6461-4253-ba8c-735c3ebc8bb9.png.a.jpeg",
            origin_price_word: "优惠前",
            price_str: "10.32元",
            use_ad_pic: 1,
            corner_wording: "共省10.78元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
            ],
            extra_tag_map: { img_ai: true },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_581570824312_1_7",
          goodsID: 581570824312,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F297cd4fe-23a8-11f0-8e18-0a580a4dd059.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "贝蓓芯迷你水果胡萝卜开袋即食新鲜拇指小胡萝卜营养蔬菜零食45g",
          price: "11.04",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1104,
          salesTip: "疯抢200万+袋",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"DdPj6aXxqXykWQBIxZRAdd0LrPPp7pwZ0zg16xvfHAgDY6czZNwAubSM8wRTsWQtUfLqcvq+xUzEAA0E2AXrSB5G6JMCNXhwO5jkxekHNYU09h41t+Bo3B4uHTDm5FKfRX53Ces5AClb6sDkqJtfdVVPLnjx63et41NxyL29SFQ=","pubinfo":"{\\"item\\":\\"dqNmjANHWEt+gkYSQLZ2rtFnTqtegPOVyGCYb+TOdLC5D42qap2yMJ6xYbLj0fVwaLvH8x8XEEySDKXniCWb+LBQ5EoBrPAIifsu6bxQ+9SdHVi6kKeRVzw8OtTcBLDMQrQ7ZwV53DVv4Hubbbwk7o7A2aUJUAac1OzjgLpGCGGPnX+4qQON4e8NiO\u002Fx71zrL0C95vPbGnEl4yr5rxHa6nPkdeq+MRrTYAchhMysxnLo9Nfx21NgTWv8wgQ2aZXHhCgpPNfSRJBT8AdEvTDtxFNUQmOLuC55f670qGpBFsJYmcSv2lj5CNE3qmRuUiC2HCqUmbl\u002FyfwO\u002FRTvdXDEUko4j9NOdAHjXXDokQnkAuHWmhWlC5XANnjnfm\u002F9kBGWuuqomCjdzvBhxPMsmSegSASIzY+H43W199+C+7tkr+2xs82fbvwfFpmZD+Yp\u002Fy7hgsza+Wvl0Sp5f\u002F7TTqbhBRcjAJWxj0rwPWyUzIcoug\u002F71gnMlYjK63ouXZpjgsbD0izxLKKbDKKSWFGgawbU3WuhneCjEZ+sfS6eCAqc+TlqjdoQJV1AoOFV8pqdJBPwvOgGZff\u002FeOYzFzpkBEIF52fCuNgoUdNXO8IsXNeT+J4\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"olKVs45Mpkw+dUQSkww8NBFi\u002Fe+VDCAd0w\u002FDlqE5op1UXRnGiD281Gke0zMyZxCFg2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7GqEZZyoi6UHH3dEAmaHoGInBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":6414318369,\\"is_tr\\":1}","mark":"u5jLCwbDCLEyq7twmL\u002FGm+lc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23013,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":7,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F297cd4fe-23a8-11f0-8e18-0a580a4dd059.jpg",
            price_type: 0,
            price: "11.04",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=581570824312&_oak_rcto=YWLYEXYbfR5DbFxPEcGCHc2JtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=25b8546d90a9546c680deada874b8c70&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2024-03-26%2Fc3e5722e-50ed-4102-a339-e02a0bba80da.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2024-03-26\u002Fc3e5722e-50ed-4102-a339-e02a0bba80da.jpeg",
            reserve_quantity: 2,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fdb9a3fce-23a7-11f0-9194-0a580a4dd059.jpg",
            cat_id4: 23015,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIK+ZjZlb1BqAoyrnaUHWjLmopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23013,
            cat_id1: 8172,
            mall_id: 474117331,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 3262,
            subsidy_wording: "官方补贴12.6元",
            brand_name: "贝蓓芯",
            activity_quantity: 3262,
            theme_group_id: 0,
            detail_id: 22989572908,
            brand_id: 1628480,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前32.4元",
            sales_wording: "已补贴200万+件",
            normalPrice: 3240,
            flag_set: [0, 3, 6],
            origin_price: 3240,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 581570824312,
            trax_data: {
              22: [
                {
                  text: "预计后天送达",
                  type: "estimated_delivery_tag",
                  tag_ext: { type: "estimated_delivery_tag" },
                },
              ],
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36"],
            listType: 0,
            origin_activity_price: 1980,
            activity_type: 34,
            subsidy_amount: 1260,
            cat_id: 23015,
            activity_price: 1104,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-06-24\u002F9b75ea846e30a16b9081e2e9528c36ef.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Fresized-background-pic\u002F2025-04-30\u002F7db1fa4249d5acb68be8c3469a65af0c.jpeg",
            origin_price_word: "优惠前",
            price_str: "11.04元",
            use_ad_pic: 0,
            corner_wording: "共省21.36元",
            tag_info_list: [
              {
                text: "预计后天送达",
                type: 23,
                tag_ext: { type: "estimated_delivery_tag" },
              },
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "来自回头客好店，品质保证",
                type: "mall_sell_point182189",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                  exp: 2,
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_905474755166_1_8",
          goodsID: 905474755166,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fcommimg.pddpic.com\u002Fresized-background-pic\u002F2026-03-02\u002F2fcaf21c06a94e0ff8128d1860c78b57.jpeg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "【7日轻食】三只松鼠蜻蜓教练轻食餐884g整箱轻食代餐鸡胸肉零食",
          price: "26.24",
          priceType: 0,
          priceInfo: "",
          rawPrice: 2624,
          salesTip: "总售4032件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"HdrxU6kFvSzsbZpa8gKQJJJScedy5ajz8aT41E\u002F8zUKDlG2BReFs1xyTkULeENs+PrI98sW92rDF1NO8Jr\u002Fak0gdZILJG7FXj5u5hVYDc9\u002FGP6joBNEH662nizrbKr7bmDbcsuKvQoEKc+07MR3rUuqUmXOhcmWtf185L2tXm0Q=","pubinfo":"{\\"item\\":\\"SaXxOZhE3fICbbmymE8xFDoc\u002FrJxuP9TgVxjf5OSkK558RzOLFlde8C\u002FsxWMKhbsTvt\u002FD0HRu4WmwgPmBL\u002Fzyrdb8TSzEnCqaclZYsw2nFL7NVNxX+HLmRFYrcSL2tFkjqgTB0OjoyHAeuG9pYWnXqKs6tTZZ0yIOqFXiqoLXNUIXPOTZKD7vTgPTjpQJO3y7ovSqMrnjkLIiNjtFPAFwIKWUQHGfNguQmTzRWzMFe7xC9cGe9Ydyxj5ny\u002FhB1sMRxMOTgA0nT8c\u002FQMmhYQRJf9QB9vhgroA38wRqoWUiy2FBhMNwqbpW3T0eVkkXQxs7oZ+fNRYHcHNijcYZtpSHJBQmCl+HLCDWG8r9ds2izKhx1f+2n2mana42Acw3D0EWcAEnUs9y7\u002F2B1iJmTX4gbyYh1TvpsV6nIi0rdG7KNmzoqH0krf+\u002F52\u002F2VoY08VO8rflIaNzCD0rwNLXmdmuuXPbN5iwTxXtsBVk+eSkm+mXa00peWbqngCKBEb9xrykWBVU+JOVvwTtalOyZodA\u002F\u002FPMvip8E8uuNb8nRdS09Ij9vITYTYtXwRUVBQuLw0GT74Rbhz1aNsDfINke3hXGEw\\\\u003d\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"bN1gD1nmo9D2UjE\u002FJ\u002FExGwaNcEwmqcq4pxJm0dhHBABUodX\u002F6BS+Oq07K4j7KZJ78Gw7jgqMiezh9TclqVbLSSfsMTFpmuRlySCe0pgO\u002FjyD1FsFPkslE0IiQH5l9s1xheB2CGo81FdEj\u002F4QjxUtMJbicaQNhn4ztap\u002FGJwWMUY=","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":9207728703,\\"is_tr\\":1}","mark":"B2AkBjsC3gktiGEduHtfIulc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23839,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":8,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Fresized-background-pic\u002F2026-03-02\u002F2fcaf21c06a94e0ff8128d1860c78b57.jpeg",
            price_type: 0,
            price: "26.24",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=905474755166&_oak_rcto=YWLbFaeYzMbEdfCZoJPCZBv4tgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=c4052aa10cd44fff4386298d0b47fc14&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2026-02-24%2F0c11b533-a03e-41fb-b20b-e91a66506d68.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2026-02-24\u002F0c11b533-a03e-41fb-b20b-e91a66506d68.jpeg.a.jpeg",
            reserve_quantity: 3,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2026-02-24\u002Fa04d1c96-feff-4724-aab6-65b51fb8d83e.jpeg.a.jpeg",
            brand_logo:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2021-08-09\u002Fbd08a796-f53c-44ec-8582-6a255dd2714f.jpeg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIA6WTiT9a+8SO1aBN+oSm6CopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6490,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
              "https:\u002F\u002Fcommimg.pddpic.com\u002Fmms_static\u002F2019-12-04\u002F7cd72b60-b17f-4862-b50e-76b0fbe81895.gif",
            ],
            cat_id3: 23839,
            cat_id1: 6398,
            mall_id: 983988835,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 2592,
            subsidy_wording: "官方补贴7.1元",
            brand_name: "三只松鼠",
            activity_quantity: 2147483496,
            theme_group_id: 0,
            detail_id: 23014305308,
            brand_id: 2017,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前39.9元",
            sales_wording: "",
            normalPrice: 3990,
            flag_set: [0, 33, 3, 6],
            origin_price: 3990,
            track_info: { gimgsrc: 1, use_ad_pic: 1 },
            goodsId: 905474755166,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
                {
                  type: "area221_live",
                  url: "https:\u002F\u002Fcommimg.pddpic.com\u002Fmms_static\u002F2019-12-04\u002F7cd72b60-b17f-4862-b50e-76b0fbe81895.gif",
                },
              ],
            },
            tag_track_list: ["1&35", "1&36", "1&15"],
            listType: 0,
            origin_activity_price: 3280,
            activity_type: 34,
            subsidy_amount: 710,
            cat_id: 23839,
            activity_price: 2624,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2026-02-24\u002Fceae38a87c89c660152f6449e5dc65a9.jpeg",
            origin_price_word: "优惠前",
            price_str: "26.24元",
            use_ad_pic: 1,
            corner_wording: "共省13.66元",
            tag_info_list: [
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
            ],
            extra_tag_map: { img_ai: true },
            icon_track_list: ["10014", "20001", "10015"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_874904256790_1_9",
          goodsID: 874904256790,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F081cef66-e1ca-11f0-8833-0a580a4bbce2.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "吉香居减盐海带丝32g袋开味下饭拌面拌粉快手菜佐餐小包装速食菜",
          price: "9.28",
          priceType: 0,
          priceInfo: "",
          rawPrice: 928,
          salesTip: "已抢5747斤",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"l3HXfBbIGByv3nVOw7IbwbKjVaJyuBaZ7+0IZC1B6l9ASrr6kqh80gXSqd0DYzegglxo0H71QqKGebQf33RNLkbhdfn6q5ADtfBDKinGwq8Ecam8W7QNKyMV5HE7qJTGvLqYFt3RwybKxOcEtqPhysMm4TcTfOVD7w\u002F\u002FFYg9S5I=","pubinfo":"{\\"item\\":\\"Qye5RoHw9h1UK5M\u002F8Rp+5zaszhk\u002F+V8gD7FPtAqo2I2IKr4Tu32NgwdvSuuQt1vkLHMoY59BOEziv5gXKLS+hEA7oXc98N\u002F9k3LkH3zpMYKFp48A\u002FP\u002FYlHSVSbAJjSeT6kpyPzxzoGzXe8S\u002Fn6k\u002FHbi+QLWTa3xnk4fGXwXfZy5yBAsexzDEIQHSWi4b9hCugaUTzrFY2fuhmn9QyMath6zK0Uy9qoWWVLGYI2X0+Guu5yJaLcE51TugqWiYpOTWS3GfFqModXU8kJodJxithO4KznOg1Ex5N\u002FLB8Pc7LE4z8vOyTpm6DZnpOFC2OLqkTM7jFmGRrU9X\u002FdeUbdyJ+f1R89ZzcritAzEDT6443I2rQ4BcH9yreMk2dil8odtDZmn4Aa7So7AeEsNBzz7DvdvY6bAXLMzLVdEQQTpYLhHi5QKTPUSjk9lWPJn0Tk4OztYivEutl\u002Fv9bqHM8pQiAaWMg996SUu1lpRvA9mEMpbv9SKfbKiDRanIHgXTPBHuBQj5tcvS2KBqd0DaQ\u002Fmz6Sq\u002FUKd6ECDtvN2eZ9Ria7rvmaY2hBGGIcHm4h+a58fv\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"YMUIqQN0ckpxw5ay+JrclwgD7K89T\u002FYdafoHDndQ1\u002FiH3D2YQFEj96Z1tDQ59BD6+EabeBkBJe08dHekGGzlxyTPG3ukIDckAH\u002FjL8RCx\u002FlzZcIVV6\u002Fx5Z\u002FbSIpsqttma8loDOZigOCgLZPWfLogjQ==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":8807585608,\\"is_tr\\":1}","mark":"afKbSRMtZWn23axslFI9celc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":6708,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":9,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F081cef66-e1ca-11f0-8833-0a580a4bbce2.jpg",
            price_type: 0,
            price: "9.28",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=874904256790&_oak_rcto=YWKtM8d0OevAp1lKOq6wPkSCtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=ebbf58b0692498928e4d2400f6f5ec43&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-12-18%2Fbaebbf36-6d5c-43fd-a3e6-fa2ba072a81c.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-12-18\u002Fbaebbf36-6d5c-43fd-a3e6-fa2ba072a81c.jpeg.a.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F87add938-e1cb-11f0-b4a7-0a580a48d480.jpg",
            brand_logo:
              "http:\u002F\u002Fomsproductionimg.yangkeduo.com\u002Fimages\u002F2017-07-18\u002F26ce4da22e1f5ee6c7a173775e690c04.jpeg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaINS\u002F4AF4wiolvBgDGJN3cQGopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6689,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 6708,
            cat_id1: 6630,
            mall_id: 258367,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 194794,
            subsidy_wording: "官方补贴6.6元",
            brand_name: "吉香居",
            activity_quantity: 2147478442,
            theme_group_id: 0,
            detail_id: 15071068439,
            brand_id: 163,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前18.9元",
            sales_wording: "已补贴5747件",
            normalPrice: 1890,
            flag_set: [0, 3, 6],
            origin_price: 1890,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 874904256790,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&9", "1&36", "1&15", "1&24"],
            listType: 0,
            origin_activity_price: 1230,
            activity_type: 34,
            subsidy_amount: 660,
            cat_id: 6708,
            activity_price: 928,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-12-18\u002F61c724f137811d904b1439adf20201af.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-goods-image\u002F2025-12-17\u002F6dccb7a5-92f4-46c7-9586-17d822040439.jpeg.a.jpeg",
            origin_price_word: "优惠前",
            price_str: "9.28元",
            use_ad_pic: 0,
            corner_wording: "共省9.62元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "来自回头客好店，品质保证",
                type: "mall_sell_point182189",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                  exp: 2,
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_637528618011_1_10",
          goodsID: 637528618011,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F6d4aa88c-c196-11f0-a634-0a580a4ef361.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "甜小南正宗贝贝南瓜2.0斤礼盒装板栗味小南瓜旗舰店粉糯新鲜早餐",
          price: "20.48",
          priceType: 0,
          priceInfo: "",
          rawPrice: 2048,
          salesTip: "已抢28.1万+件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"XxnyUJLsEihi+ZNlJeIQNCW40nZwVnb9ZH\u002FHYwkh9bSKPXlz0F6w4zEsmFOlv3rCe0VPGHgQZ1iu8eIv1O++Mlzna0PGDt6gECAf68ewpMs+2AKkurIz8Olo19x3a5Xil\u002F9UWB1TOOm6B5RDjUPIInzvwFR6Q92aPPuqy0wZ2BE=","pubinfo":"{\\"item\\":\\"l0qzKwyl5k6WGg3fajPtzeQ0HrgUEhczw+mFtrNtFhaN4R9z2fuTzYEg2JP4IdRVImP1I4EW\u002FWI6nH5LmyxteONxXVGhRiGtalfXxy6yUd90rJMZ37MwirvBBOtTjoPrWNbiavrJxyYhU9wkLVoSsvkNGEnnyGp2tjJQZORHja1HTuFFq\u002FK95bv57JPVtuUHVf9WJ5k2tVhGAa\u002FLXaxJMYu7AQYGTe+YZOy8m+bZ7vqRVIbSFOhICaULiNhozruZtvHlEjHL+sU3wmSnVxdCjS45QedjDVdHo+PykbJmMtF4SDqxqMOJi2HjZR+lVFL6nTGUPnrNf9P481\u002F7zVqiyUo4j9NOdAHjXXDokQnkAuHy9GAmtUeM5CWFCeJEIdHKuATjIE6v6r1veetQ\u002FvfPtSiwv2\u002FofhA\u002F05QxcomW6wMDFrZs97mSWVgjL25EEjpfuI\u002F6GEVEJiGTHmGvQsHe\u002Fp3kkje4hH2k6MmLtKYtCLH1+sRODFjczVwEgC2HvlhwT\u002F0zQ3VNhM+qKriRiWXMfF+ztXQZwOZc6\u002FmQ5\u002Fn9M8rXt5+Brm59rBLvsgw5K4\u002FoSO2Gfw81qCQTkF+2ExRL7Q\\\\u003d\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"XJRT64+o2trRfhDJ6p\u002FNKSjCoj6NAqgAbSdavbv6Mi\u002FxrrcV2t+o7iMo\u002FaMToY5ng2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7HwGxbyH+6AxZ0aDOzqgYtGnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":6882783543,\\"is_tr\\":1}","mark":"MeL1f5Gr7EyS7BB0aDr4Zelc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":8226,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":10,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F6d4aa88c-c196-11f0-a634-0a580a4ef361.jpg",
            price_type: 0,
            price: "20.48",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=637528618011&_oak_rcto=YWLpKyKXTCMVOE8-By3Ceji5tgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=445014d707eb97c52d37583f265fcc86&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fgarner-api-new%2Fcba44da7d0d507f8e6f5bf7b5cebb422.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgarner-api-new\u002Fcba44da7d0d507f8e6f5bf7b5cebb422.jpeg",
            reserve_quantity: 50,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Ff830ae3e-c195-11f0-9b97-0a580a4aa0c0.jpg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIGXmdjaV4pq8AHCTkservleopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 8226,
            cat_id1: 8172,
            mall_id: 993016851,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 39144,
            subsidy_wording: "官方补贴14.2元",
            brand_name: "甜小南",
            activity_quantity: 2147416488,
            theme_group_id: 0,
            detail_id: 13461217246,
            brand_id: 1117058,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前39.8元",
            sales_wording: "已补贴28.1万+件",
            normalPrice: 3980,
            flag_set: [0, 3, 6],
            origin_price: 3980,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 637528618011,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              111: {
                text: "礼盒包装",
                type: "gift_box_sf_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002F94402536-b291-4d51-9c63-a9fa42adaf2c.png.slim.png",
                  exp: 2,
                },
              },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36", "1&24"],
            listType: 0,
            origin_activity_price: 2560,
            activity_type: 34,
            subsidy_amount: 1420,
            cat_id: 8226,
            activity_price: 2048,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-01-03\u002Fda97aa5399bb2a27f6a8ed781f82e82f.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgarner-api-new\u002Faigc-img\u002Fwhite-img\u002F6d1f478fdec35eff228d7eeeedc5f07e-cb3ac-1763040406.png",
            origin_price_word: "优惠前",
            price_str: "20.48元",
            use_ad_pic: 0,
            corner_wording: "共省19.32元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              {
                tag_id: 24,
                text: "未发货秒退",
                type: 0,
                tag_series: 1,
              },
            ],
            extra_tag_map: {
              help_decision: {
                text: "来自回头客好店，品质保证",
                type: "mall_sell_point182189",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                  exp: 2,
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_900700774262_1_11",
          goodsID: 900700774262,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F325f76ca-fc84-11f0-85da-0a580a4cc43c.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "水果小黄瓜+西红柿【组合装】3\u002F 5斤番茄沙瓤新鲜现摘生吃整箱",
          price: "15.04",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1504,
          salesTip: "已抢4928件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"UDgYNX5g3Y8hS0q+Mhkfsw6SEkFAc60D6CWCWdAnb0WPrJB7WGF9uFt70VLh4oZ7+efkf5UapqWDS6NzzecU607EzN1jSpuKb4CguUBesU0oNcakxEBJHJPL+ZiJbXsKu5JGuhs7Nk05yElA5kTFuu6Pv6Mi1XYUVxIUj2VwT8g=","pubinfo":"{\\"item\\":\\"UpwyNMOy1eaz2mgWDwIlvwgAKC5ymH1tuOKQt\u002FeQ6ur6fR+qhAlRwpFFuT2xI2IRf9BFAG5on3tl0RyQ5OO5VhTLpUkr\u002FGlgA6GN6XpSTeDHNCKvO5BUCbvfbQBfWRnQypH8X7zYQrYRI4Iq4nO1VlDyhz8m6Kvl83U5obLgVSAmPgzL5NOpUHacwFGdT3W23deKCQdVNivj1qup0vLfA7tL4s8je4XJ964oaWsjH9fh1uYup\u002F7BdS4fnpSNym1zcIHD7skNGTGh3qkDgjBS6y1Af2jToMDDD6Xabw7DAmpSvbIP4Ti5MYqqMExwROe74uzgHU6fynwQ\u002FcRnjjUJVsLy0KRbEXsmwk3+ejYpF2MDMbV2DzkejyM8KK7zilBcbt4EjxNosBm8zVYxbg2zH5cy0N5DTg7GtEmAys\u002FiM1LmqQysOkwyvIym4Cggca34TMnpHWvdQuf8uhMrDJdB7AzqS69TZJ+LD8DLUAU9YbnBfhhHNQaabdoDN19Rj70pRpG8k9T5hTzEu8JK9d\u002Fl3qcMtZsjBg567TtMiHoVhwxnvRwMXAUFmfEG51SFH4Qm\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"BmRxygf8mvQ9fE0yiz2vN2WOGznnfTvegRFcRFqBLxgN01Zk+YBev6H3Z9uqJzofg2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7EYz7E\u002FFfNy460QwVaR3kYdnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":9137381917,\\"is_tr\\":1}","mark":"qrQO2ZBRR5Hsms3VDhDObulc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23632,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":11,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F325f76ca-fc84-11f0-85da-0a580a4cc43c.jpg",
            price_type: 0,
            price: "15.04",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=900700774262&_oak_rcto=YWJku7LYKgvr1wEWzzlQh6WdtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=9ebb8503be59e13d59e7ec4995916550&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2026-01-11%2Fd300359a-68ff-4bf1-a64f-a1669459fdc9.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2026-01-11\u002Fd300359a-68ff-4bf1-a64f-a1669459fdc9.jpeg.a.jpeg",
            reserve_quantity: 1,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F34c9b998-fc84-11f0-aa9c-0a580a4bbb8c.jpg",
            cat_id4: 24084,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIJs+vXllAvg7vSGeWO0kYZ6opRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23632,
            cat_id1: 8172,
            mall_id: 966501014,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 19984021,
            subsidy_wording: "官方补贴12.8元",
            brand_name: "五叔家",
            activity_quantity: 2147482008,
            theme_group_id: 0,
            detail_id: 21645102642,
            brand_id: 757275,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前33.7元",
            sales_wording: "已补贴4928件",
            normalPrice: 3370,
            flag_set: [0, 3, 6],
            origin_price: 3370,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 900700774262,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              111: {
                text: "同款热销",
                type: "same_hot_sale_tag",
                tag_ext: { exp: 2 },
              },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36", "1&24"],
            listType: 0,
            origin_activity_price: 2090,
            activity_type: 34,
            subsidy_amount: 1280,
            cat_id: 24084,
            activity_price: 1504,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2026-01-28\u002Fefcced035fe7060ad322dd186f7307af.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-goods-image\u002F2026-01-28\u002Fd1d63b56-1325-4e00-8781-88f94bdcc65e.jpeg.a.jpeg",
            origin_price_word: "优惠前",
            price_str: "15.04元",
            use_ad_pic: 0,
            corner_wording: "共省18.66元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              {
                tag_id: 24,
                text: "未发货秒退",
                type: 0,
                tag_series: 1,
              },
            ],
            extra_tag_map: {
              help_decision: {
                text: "近30天6万人浏览过",
                type: "recent_view_count_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fc93be054-6cad-4f72-8496-0b85becbfe53.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_613540244792_1_12",
          goodsID: 613540244792,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fa174cade-fc83-11f0-aaa4-0a580a4bbb8c.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName: "一号农场开袋即食日式风情沙拉轻食代餐色拉生菜健身混合蔬菜",
          price: "19.36",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1936,
          salesTip: "已抢182件",
          localGroup: { list: [] },
          logData: {
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":8230,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":12,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fa174cade-fc83-11f0-aaa4-0a580a4bbb8c.jpg",
            price_type: 0,
            price: "19.36",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=613540244792&_oak_rcto=YWK5_t6idhdiSloIwB7qfhYCtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=13e842b52fc9f8277502340513f7ebd3&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-07-17%2F529e0ceb-5f33-4f01-9a8e-af0d84148dcd.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-07-17\u002F529e0ceb-5f33-4f01-9a8e-af0d84148dcd.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fb31e9a34-fc84-11f0-94a5-0a580a4cabc9.jpg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIFmGGiNYFj8SMM\u002FsaafdWgKopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 8230,
            cat_id1: 8172,
            mall_id: 697980114,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 1935,
            subsidy_wording: "官方补贴7元",
            brand_name: "一号农场",
            activity_quantity: 2147483609,
            theme_group_id: 0,
            detail_id: 21676030028,
            brand_id: 253185,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前36.9元",
            sales_wording: "已补贴182件",
            normalPrice: 3690,
            flag_set: [0, 3, 6],
            origin_price: 3690,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
            },
            goodsId: 613540244792,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36", "1&3", "1&24"],
            listType: 0,
            origin_activity_price: 2990,
            activity_type: 34,
            subsidy_amount: 700,
            cat_id: 8230,
            activity_price: 1936,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-07-17\u002F6a8b6504152af21e8212efa486da4f9d.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-07-17\u002Fa03ba74c-274d-40c0-a0a7-0494e897bd86.jpeg",
            origin_price_word: "优惠前",
            price_str: "19.36元",
            corner_wording: "共省17.54元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "3年老店",
                type: "mall_sell_points_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_629041760311_1_13",
          goodsID: 629041760311,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F91ce8716-f894-11f0-9a68-0a580a4cfb3c.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName: "西奥图压缩海带丝16g快手速食菜凉拌菜速食火锅菜独立小包装",
          price: "2.84",
          priceType: 0,
          priceInfo: "",
          rawPrice: 284,
          salesTip: "疯抢200万+片",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"ink4wmH3v+vOFD5bagXoWo\u002F9WZXspf23rbIhNgBha3+1QNLPkvuXmSnWC+V3qVtbdxqE0NlAw\u002FcRuc17Jsjc1Jtof1zNja\u002FrGfdo8ebZSXAHvFJg6\u002FEJbIA76zTCXJKvi\u002Fzuy0BPWu3c7Wit+Ejp0KaI6sENbD4PWeZa1zNDxfA=","pubinfo":"{\\"item\\":\\"+Pxq13yjOpZLeMxhEDrwoX7GRN3J4ePPv0YPwYAdbkIV3sZZgg2B\u002FqXcuCmejimalwrk4k0iT6f+v\u002FtKQ\u002FACJEIx8E6TERQfZVuoXnnU1SySCRn8M4vnVeJ4KYwXrqQp4i1DiojTCsM6eBqNvM9ywltzGy9o66qmO0Yp7NNLArKqVR78UGjYOjD5HCQOFH7Msbtn29W3yX5njwWC2WqOljb0MLaVOtTzv9DAfgkqUB43zRcZKLObNTMU0uu3ZdX\u002FMh2D8l5ne3Ze+D0\u002FST3CMvhxG\u002F3Q7GH+fft\u002FEn6GNa8n1Rsouys3eNF9t5l\u002FWtbnCXgoWo8HmlnlXS3SClAiAVZCb5FIesWTu0q85ERqVNG2Zip85UZ5rGoBMsxD+O6e8tyfUfUp1uga+TRw0qajVwHWdWcjJRRBcTTYKEKWfryA9qxmy+oUy9RkqUeh5sg71ZYHqYTB+xZPVCm9A9rP6n32vzfNzrWP68boEAII5Cs0wp1XVG8X\u002Fs0Zpg0nmBOYgqYRVaCpxb67jzDXj3DPuyHVrExEBaJIGCtELQX\u002Flo1wLpfECmI2nppELQ3qcCmz11nsC38DMVbVtJlLSMTU8w\\\\u003d\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"sSEarzBQp2l4VcSLwyHxs2CIjwvL\u002FvSWj6u45l8FdV+TBJ3Womq8kBhJf5RtmAsm+w+N\u002Fse8tkTn1mIQojFofXesnV6dkNhWXpF+1olBTLbFf+oDtipJAfogyuAakqU7GBQvAPcwwRzQo6aLwa9vGA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":6813747860,\\"is_tr\\":1}","mark":"FdluJqroVRq+lzMQiRIgwOlc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":6708,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":13,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F91ce8716-f894-11f0-9a68-0a580a4cfb3c.jpg",
            price_type: 0,
            price: "2.84",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=629041760311&_oak_rcto=YWJhC6PK9eOK_8SK7mP7SR3itgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=c66f71197560fbe05ce62030a7268a91&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2026-01-30%2F422b26cb-77f9-49f3-9f0a-e819835de8dc.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2026-01-30\u002F422b26cb-77f9-49f3-9f0a-e819835de8dc.jpeg.a.jpeg",
            reserve_quantity: 8,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F00502c36-f894-11f0-8937-0a580a4cace8.jpg",
            brand_logo:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2022-02-11\u002F7247955c-9427-4210-9f98-b95ec349e29a.jpeg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIPNt1aishFL+fVAysT8U2liopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6689,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 6708,
            cat_id1: 6630,
            mall_id: 188119809,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 1289294,
            subsidy_wording: "官方补贴2.09元",
            brand_name: "西奥图",
            activity_quantity: 2147472435,
            theme_group_id: 0,
            detail_id: 21412248824,
            brand_id: 229432,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前5.7元",
            sales_wording: "已补贴200万+件",
            normalPrice: 570,
            flag_set: [0, 3, 6],
            origin_price: 570,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 629041760311,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              111: {
                text: "同款热销",
                type: "same_hot_sale_tag",
                tag_ext: { exp: 2 },
              },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&36", "1&15", "1&24"],
            listType: 0,
            origin_activity_price: 361,
            activity_type: 34,
            subsidy_amount: 209,
            cat_id: 6708,
            activity_price: 284,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2026-01-30\u002Fe46f1cb1ecbd062d7f7f2de8877b1307.jpeg",
            origin_price_word: "优惠前",
            price_str: "2.84元",
            use_ad_pic: 0,
            corner_wording: "共省2.86元",
            tag_info_list: [
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "3年老店",
                type: "mall_sell_points_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_866451735014_1_14",
          goodsID: 866451735014,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F40671a1c-11b9-11f1-86be-0a580a4cec8b.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "云南高原新鲜娃娃菜青菜嫩脆蔬菜大白菜火锅黄心菜净重4.5\u002F8.5斤",
          price: "8",
          priceType: 0,
          priceInfo: "",
          rawPrice: 800,
          salesTip: "已抢8.9万+件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"MImDSfemkwAjE2t3p8sHF7gC3qrJe+x2lpewrtx74xpwD4HR1xnRAZn\u002FI3icCoXcE1yktR5DQ8Dn1TcUVn37YVn3jlmKDKL1BamAHQo82lX9t+\u002FtZKH6ppJA8vXFeQPJS5plL4\u002FWw0tKpcDNctlvhfVuglnLlb1dqdfqTFllNbk=","pubinfo":"{\\"item\\":\\"+t\u002Fydzzs6m65RH81ZrlzEuYoDk9pZZhIjb9oikiHIuCcJvvaplpzGNiCqMq1Y2tu49qSK\u002F+YK8ACDdOKz9XPHX592MOLghk0QzPD8Wh+R4Oxy7jhaKnA62P7C\u002FtTk1yvpgnb2M8TIhDQz5Zb3HqfDmewuTIRhbEkaQOFoje7dderKzwfB5CVhnhcS4J0NR2Bfgu5YUzNJjYqfy30xLatViLOETUqXziwdNEYBw+hGE0dS9VR1fHHDVFNxI9obtviMi4Q9FVlSpLz5ITpWkok5JDq78V2rtUrXBV0Zv6IETWrFaiT1zXEm9ikmUnNx2USNgE6JRWgsmpPfd+49fALbrtROZG7KNf4oDEjtxzO6aanuqcnsOdkdrRcUr67oYavlThpxQx4OB+0tgXEwBnAQQdgHkEVOg+ZWz\u002FsUWEBPdTjxwiQvoNJjOYkHqxZq3B052h10rbOp7CqScPf9pzU1cp4hcBTqaN9Vt4ID4BhfSSLWCiwoR6Z0jYLWbcVfONuiqKfxIwkqtF6Zy79o3oUYFGDchsZ9zrCAvrnrBYM2vTOsY3TuBTikelOwk9Gc9FCC+3zF9N76TNcVxPkzB4pWg\\\\u003d\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"OfVC0yjjZTb2ZVkp5fV5XGm2XQpqxZ+wWqK3cyWqaAKLolk64zje0\u002FhoWT7C0FZDg2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7G3ZxRd8NosI2slKE0mqf+pnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":8730736140,\\"is_tr\\":1}","mark":"54WQj0WyhlaJySehIuyZielc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23028,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":14,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F40671a1c-11b9-11f1-86be-0a580a4cec8b.jpg",
            price_type: 0,
            price: "8",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=866451735014&_oak_rcto=YWI24a65LhcBVPxe3ofpbDDztgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=975dac4f5e526408b805a3b19fa1f82b&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-12-08%2F0f2827f8-ed7f-4bd5-8358-5a289796dcb3.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-12-08\u002F0f2827f8-ed7f-4bd5-8358-5a289796dcb3.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F0da26eac-11b8-11f1-b392-0a580a4cad6a.jpg",
            cat_id4: 23031,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIMJX2RLCki5pkAUSHxktQ2SopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23028,
            cat_id1: 8172,
            mall_id: 465012694,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 92731,
            subsidy_wording: "官方补贴4.41元",
            brand_name: "南早",
            activity_quantity: 92731,
            theme_group_id: 0,
            detail_id: 22722557677,
            brand_id: 343209,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前14.4元",
            sales_wording: "已补贴8.9万+件",
            normalPrice: 1440,
            flag_set: [0, 3, 6],
            origin_price: 1440,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 866451735014,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              111: {
                text: "大额补贴",
                type: "purchase_limit_emphasize_subsidy_tag",
                tag_ext: { sub_text: " 限购1件", limit_count: 1 },
              },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36"],
            listType: 0,
            origin_activity_price: 999,
            activity_type: 34,
            subsidy_amount: 441,
            cat_id: 23031,
            activity_price: 800,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-12-08\u002F8f55cf838b1e630db258ce30bd8ccc39.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgarner-api-new\u002Faigc-img\u002Fwhite-img\u002Fffcd5d360e99ba78aa19d64f54594a6e-6f92a-1766890719.png",
            origin_price_word: "优惠前",
            price_str: "8元",
            use_ad_pic: 0,
            corner_wording: "共省6.4元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "来自回头客好店，品质保证",
                type: "mall_sell_point182189",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F89600f37-dc07-4ca9-ab52-6a66a02007f6.png.slim.png",
                  exp: 2,
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_871172273841_1_15",
          goodsID: 871172273841,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F05fa4a44-e4ea-11f0-96d0-0a580a4ef506.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "【有机土豆】京东包邮胶河源有机土豆马铃薯新鲜土豆4.9斤2.9斤",
          price: "11.84",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1184,
          salesTip: "已抢6601件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"XTHN1WJPEcxLNKPB4y67HEuEw6exRC4HOy5X8t6PUNjj0iqad\u002FlJ3GSbgmBUkEu5Zb4ObPqm\u002Fq7nY7NpJ2GDAGJKnuWdMOyrkiAeqg4bo4ZM8SW7owexT7pLJIfF2dbavhMNKeNfG9rJmxov6E7G6wHXa2QPWCOKXftPj2jHARI=","pubinfo":"{\\"item\\":\\"lzGEBiLQ\u002FXq6oHTKCu1YApiaDesP4E6IQVyJCwIzj\u002FL4tWpud95P64Zfoh+wHxymsd7JzTGYeAKRMOCItDlv3HoaBOdxutxF\u002F2ZNx1NhxkGgHB10frnnOHjtufT5fZJlaxZZmHsm8xdn+tXtcqi\u002Fyzgv5E7ddhy1TpIxglaVlFJb2Vsn1YxvbLi13PIMCyn57Ns3wwamQQvRk3y6x6ToBfkyWKa5RhyIDvk0W5gkdfVATtxtL3XnQUvY2wKeB+rz\u002F8GAsNKSysIr4f6hJ7\u002FuetsGNRftyv4EGBiBDLzEPRYkz4hTk006dbNfIePO1J2kW+xi2F188gSdy6TClFx+FK1sEXXBJ5x9sXrouXua0BUdSV1q8bMj+IZ+aHItczA9dT1EFhBbqcRcpQ1\u002FraujeaHHV\u002F7afaZqdrjYBzDcPQTcTdY6Ul6SsjkfNZrW2w7F5sGL0y9jKvThp6D7UWpOXL09VWulODU71FI6+OfLMibcNOx6LonDLM0RM8C8MwAm\u002FgW2tLHSWvNF4mGN\u002FVhqlqTxmZOI6DNJZHRi8S\u002FxYs4GKf9G7Hx+Bn\u002FGhTU2jPpB3X9TfyKP84gaWW\u002FZuaCnXz0\u002F08hfdVRxufMqTxTb0K2yKpMCpk1ju2eNohhbHH0X\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"docGgpuBjXw\u002FxHVwpaaGr2vdk2TT5na2eY2bfIaDPc6iinPyVjGv5GY0+vELNnPMg2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7GXJ5HYET83N8boq5vRedSCnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":8764902961,\\"is_tr\\":1}","mark":"3jowyZwLkNmpCw8g56smnelc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":8233,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":15,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F05fa4a44-e4ea-11f0-96d0-0a580a4ef506.jpg",
            price_type: 0,
            price: "11.84",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=871172273841&_oak_rcto=YWIqaS3LZzTbsBr7eSTZUfBptgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=f2891b1e7b89d206b323e7ea000e2803&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-goods-image%2F2025-11-28%2F2f90fffe-5ee6-4cd6-a102-e3b5aeaeed73.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-goods-image\u002F2025-11-28\u002F2f90fffe-5ee6-4cd6-a102-e3b5aeaeed73.jpeg.a.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F0416697e-e4ea-11f0-a107-0a580a4d64b9.jpg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIIOaeBZikWWcifm9y7\u002FwiZiopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 8181,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 8233,
            cat_id1: 8172,
            mall_id: 994680618,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 984,
            subsidy_wording: "官方补贴9.4元",
            brand_name: "胶河源",
            activity_quantity: 984,
            theme_group_id: 0,
            detail_id: 15231219213,
            brand_id: 831247,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前24.2元",
            sales_wording: "已补贴6601件",
            normalPrice: 2420,
            flag_set: [0, 3, 6],
            origin_price: 2420,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 871172273841,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              111: { text: "品质生鲜", type: "fruit_best_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&9", "1&36", "1&3"],
            listType: 0,
            origin_activity_price: 1480,
            activity_type: 34,
            subsidy_amount: 940,
            cat_id: 8233,
            activity_price: 1184,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-12-12\u002F8aedc9008467957fc2200e6b2341d795.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgarner-api-new\u002Faigc-img\u002Fwhite-img\u002F59a26dc860697c270df2eddc1344b086-ec05e-1770779046.png",
            origin_price_word: "优惠前",
            price_str: "11.84元",
            use_ad_pic: 0,
            corner_wording: "共省12.36元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "3年老店",
                type: "mall_sell_points_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_877239384819_1_16",
          goodsID: 877239384819,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F034bbe04-077c-11f1-8db8-0a580a4ed416.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "粗粮君荞麦粗粮馅饼480克海带香菇辣味轻速食懒人健康早餐半成品",
          price: "13.52",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1352,
          salesTip: "已抢455件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"T7tOKB7lLmfuh0zW4coQ3+L1fdBsJAP\u002F1xlzcMs1o5ax3tPtWiqCTRsBrVOsAWc\u002FhdiNDDRDd7aIHRq57n0+9xQFdO7wnW+DBOxnnkxuCpSqmTG5N7T0tbbFnqm26uIKPeNnMfkGttpdQsMzvRCzKpBEMkcRSqMnmrSUXQ9fW2I=","pubinfo":"{\\"item\\":\\"nNYVFkJhrIvrwWzxQdQY3dHRQmqas\u002FxR0iYhWbbnmMHyBcDrL+RyoCsYkGda5vyGFhAcCV57aO8puQXehoIM5GxJLfZ1Y1LU2IGwLemo6NnE96arcqcCL3r24lNweRbk50emHnUM9Ez9iVRULHdbU4XGx1qi+D7t1d0xC19SLoHnGhLWO3wmkryIqHTJ1xkGoqUwLyrLbJ1YiHwn7k4GwRiiobuxkhm+2w2KDDmkxJ9eU+\u002FNVsHccGv\u002FoNrDf\u002FU+cbwOTTIpClkEIZujUZ+gGnjDadLiPje2hlSQ\u002FbJonzpwG9FOPFRSYD\u002F3aJLOH4MPPIgTnNx0p2Q9OukknehMwbtROZG7KNf4oDEjtxzO6aagR\u002F1BgbLjwHz9CuE28ev95cPp6Xv3c+1OenRNg0QFWe46RS6BLw1YuHoMLCwASAE\u002FGoeeF\u002FC3WcmDkxx8I+vobdyd4NrlYpqKMqLBnTCATAhzwg485l+DFDblZGuABUNMHtk32TAmHKCIdfZ3\u002F6GMgrehe7GNhOZbGLqxCf02OWQAmFrIsLFmN1Qw8Edb4MkSHleKRKBFvx+pQ4fvVMtfeD1cMVQG5qnTAQ+QCTP9Yw\\\\u003d\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"HzM7FGnpB2Rw13OLtQsBEUXsb6WgCz7eNYikyjANuQ1lV6rv41EXHgrOl66tOg4+g2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7FDLEOoB+MyQkdBFxnKQCRpnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":8832733066,\\"is_tr\\":1}","mark":"RJM0x47HejAVrUX3Dy1O\u002Fulc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23961,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":16,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F034bbe04-077c-11f1-8db8-0a580a4ed416.jpg",
            price_type: 0,
            price: "13.52",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=877239384819&_oak_rcto=YWIiAcoeZ_dNysRTOBDHVbQDtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=536c17e8bb263fc34a4b87deb4f3279f&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2026-02-09%2Fde50eb6f-93e8-4610-bd9a-346ebf0f7cd2.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2026-02-09\u002Fde50eb6f-93e8-4610-bd9a-346ebf0f7cd2.jpeg.a.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fe8d9ed02-077b-11f1-bd1c-0a580a4ea81e.jpg",
            cat_id4: 24010,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIC1GoXWCf1rLd9IidecJWZaopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6689,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23961,
            cat_id1: 6630,
            mall_id: 869158730,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 54545,
            subsidy_wording: "官方补贴10.8元",
            brand_name: "粗粮君",
            activity_quantity: 2147483403,
            theme_group_id: 0,
            detail_id: 22436268004,
            brand_id: 512278,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前27.7元",
            sales_wording: "已补贴455件",
            normalPrice: 2770,
            flag_set: [0, 3, 6],
            origin_price: 2770,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 877239384819,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&36", "1&3", "1&15", "1&24"],
            listType: 0,
            origin_activity_price: 1690,
            activity_type: 34,
            subsidy_amount: 1080,
            cat_id: 24010,
            activity_price: 1352,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2026-02-09\u002F0e056df8c56788ef7a33b10a11540afc.jpeg",
            origin_price_word: "优惠前",
            price_str: "13.52元",
            use_ad_pic: 0,
            corner_wording: "共省14.18元",
            tag_info_list: [
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 3, text: "退货包运费", type: 0, tag_series: 1 },
            ],
            extra_tag_map: { img_ai: true },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_773563111725_1_17",
          goodsID: 773563111725,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F96b291da-9400-11f0-9957-0a580a4ef471.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "食者道蔬菜饼儿童膳食饼谷物果蔬煎饼冷冻速食方便早餐营养干净",
          price: "13.84",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1384,
          salesTip: "总售2.7万+件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"Zmxgzs7yNPJJ0uzJc6p\u002F6nqktoem+mnUYMvZvms6ybQPUjlxi81rO7DSK9HgCt3+XAaWlI4+MRBT1gD4gc4O5INjK\u002FQzLsCaVUBkGcQEdQqXPBm0sEczPnVsmFdvYarCw9I2XG7qRWtowYsoRkvwRvEUGKTEwE7FiSAvsSYtd8Q=","pubinfo":"{\\"item\\":\\"esMhBgh8Ab\u002F0VDSUzHtWO5hnGWu9LCZMX3BIFV8mvnMA8vnt5fHiSpGo2hDA0Cv+a936yssoEc5zdKdR6LSPkmok8AC4X7wvsV4AucA\u002Fx59FUPBGHVcFZb8rUZRWacnktIUxUhmofrTLskEzwTpFEK3UbJKn2jLNuJminffznGWr3OkQNxQdS6XvtvnYG6jTsrCscJ8KAYlBbArXK1zOL2kDVA\u002Fc8K6mhw6aCMSBr4gElqgtdK8eHyQ5C34cGD9ou+HT8mayc+GT6t522DWUAeHIQHWa8vQz4DI9zXvaqOuqvpAk9nAtHhy+ATLV7EcYjzDBYXMz2gfwvFowDbIYYP04nrDFV8k9dNfHnOOsXiahx1f+2n2mana42Acw3D0E9QW5cvPXP+qp4Lz3r9t3koH1C18GpjIEGQsypBSlpcFNLUnSITCXKolNk4KD+ED79TpOTCSuyojmjvYatt0q7uIAyoc7g9jAt9aM3M1B5nSGYq9YIKXQEMzy6l2bWfKhNJGb\u002Fe5YZbDw9ZnTFkczlQ3HGZkiBDHBxoKZA9m3yjKoR+QPH0QrI4amHw5LmwcF\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"D1Y64FqjOYosI71bqjI1Ab57RpORHWuzNYb9knVp+z3aR419Q97a0DdcPWdN8tJWg2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7FdMq3+1m5sitmDSK27lO9bnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":8047570536,\\"is_tr\\":1}","mark":"XaPjvpDO2McsSmit\u002F3nZ\u002F+lc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":23961,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":17,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F96b291da-9400-11f0-9957-0a580a4ef471.jpg",
            price_type: 0,
            price: "13.84",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=773563111725&_oak_rcto=YWL_qzlTO2iTQYXclqHHKy2ftgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=e1a4c4de509a9f3315fd8e0bb9be616e&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-08-27%2F5e8550fe-d944-4b22-91bc-00bfe2ac2e1c.jpeg.a.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-08-27\u002F5e8550fe-d944-4b22-91bc-00bfe2ac2e1c.jpeg.a.jpeg",
            reserve_quantity: 4,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F19ccf9a8-93fb-11f0-af17-0a580a4ef471.jpg",
            cat_id4: 24008,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIGBCh\u002Fy7MOa0JbDe1xlOtpKopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6689,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 23961,
            cat_id1: 6630,
            mall_id: 754646670,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 3630,
            subsidy_wording: "官方补贴11.6元",
            brand_name: "食者道",
            activity_quantity: 2147470897,
            theme_group_id: 0,
            detail_id: 11961927406,
            brand_id: 1069622,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前29.9元",
            sales_wording: "",
            normalPrice: 2990,
            flag_set: [0, 3, 6],
            origin_price: 2990,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 773563111725,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&36", "1&15"],
            listType: 0,
            origin_activity_price: 1830,
            activity_type: 34,
            subsidy_amount: 1160,
            cat_id: 24008,
            activity_price: 1384,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-08-27\u002F3a8bbc16c60409898c8725755a3a7574.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-07-05\u002Fe58d6274-6947-44ab-a712-c46e3e5b74b0.jpeg.a.jpeg",
            origin_price_word: "优惠前",
            price_str: "13.84元",
            use_ad_pic: 0,
            corner_wording: "共省16.06元",
            tag_info_list: [
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                ext: { exp: 2 },
                text: "2.64万人评价百亿补贴方便速食是正品",
                rgoods: { extra_tag_map: {}, goods_id: 773563111725 },
                type: "certified_products_tag",
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_683760314032_1_18",
          goodsID: 683760314032,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F4e624fce-4572-11f0-8161-0a580a48183d.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "云山半脱水蔬菜包混合脱水蔬菜干方便面煮汤蔬菜料包方便速食菜",
          price: "10.8",
          priceType: 0,
          priceInfo: "",
          rawPrice: 1080,
          salesTip: "已抢1.3万+件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"imNsTYyD+ie7d3F7Xngdrm+1xlzBPm+4LPD\u002FvtOSh36x+TSRcI22bYF+GS52oOoOxaembJSnJkWhWosCZi91MiQRwTY\u002FvQXFo21tk8Y605aO0oLAk1vZVB1+tSSQ9YcK1C7Z1QctA\u002FJtOISmV2ZMOQJc4v4rbeRWSiw81AFmc2c=","pubinfo":"{\\"item\\":\\"6qYlSQQTa3ZcimuLkf9eKmp6FiyAxLHakrbwqWj7V0urlYYIisF3iysOGa5SiyedSqIrqarGOBdKvHV1+bMhLT8ImtD7Ch8hLj0zoHZPDSyJV2ma0zVryVKV9a3V7jErquMTg4RJSsap5fd2bMwa19dQicWRkwKw75JrzZiQPEoMHstcuU3AJxpViQZ8NoQzn6DDKukze9piKgzQC5PIL5aHMNxmgoX6rJx60cq1vuVvLsgVxRakmyVsAbfASnVfXkFtBzJdrkHRGmkvlKPCKxV3slyavL+cIsBD8zWbjnfi+rhbfhiuVjXiMCVi3\u002FtnOf4KniEHifBjM4pXRZmb4OgUgq5lw\u002FkKU63divN\u002FWfJg0sJYohIEeukuXBD51Snl\u002Ft3jFgHL0O8mxar5iszts8Yxs9GOgeVHk+Ey1yH8Lw7tlw17s\u002F5HijI4X\u002FtlunRMWvJwHgwjFqkW2UPkcmxnAkfcLonAXKo0dNFlt6QlxslpPN0jWlBkhEncNXGSNrnPCkqAZ8smCZcMWg7qUuQmCpx6W9C4D8PCiQTYyLAYarnNsMvb+EpOSUGEJd124rR7siqTAqZNY7tnjaIYWxx9Fw\\\\u003d\\\\u003d\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"f14\u002F1tK3f7Fpblvt5q8oy0FXhBu2NGlmAHwfRLO5nqDfmukriKGt0ZMCmMYBItx2+w+N\u002Fse8tkTn1mIQojFofXesnV6dkNhWXpF+1olBTLYPlBOKdsV2vycjqwobB3VXGBQvAPcwwRzQo6aLwa9vGA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":7149664168,\\"is_tr\\":1}","mark":"9\u002FuW8kWXzbYwV+MHEAlrG+lc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":6708,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":18,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002F4e624fce-4572-11f0-8161-0a580a48183d.jpg",
            price_type: 0,
            price: "10.8",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=683760314032&_oak_rcto=YWKJmhqjAWYSFvhKKw36JdbitgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=82e69f2efa7b5a0bc5483024aa67b215&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2024-12-12%2F1d081686-80c6-4508-a9c2-25a55fa15999.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2024-12-12\u002F1d081686-80c6-4508-a9c2-25a55fa15999.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fb9bdc208-4572-11f0-8161-0a580a48183d.jpg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIMi6MZXuRfiC8VhQvC159HiopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6689,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 6708,
            cat_id1: 6630,
            mall_id: 265071940,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 0,
            purchasable_quantity: 11627,
            subsidy_wording: "官方补贴6.3元",
            brand_name: "云山半",
            activity_quantity: 2147472593,
            theme_group_id: 0,
            detail_id: 9841586979,
            brand_id: 491759,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前19.8元",
            sales_wording: "已补贴1.3万+件",
            normalPrice: 1980,
            flag_set: [0, 3, 6],
            origin_price: 1980,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 1,
              use_ad_pic: 0,
            },
            goodsId: 683760314032,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&36", "1&15", "1&24"],
            listType: 0,
            origin_activity_price: 1350,
            activity_type: 34,
            subsidy_amount: 630,
            cat_id: 6708,
            activity_price: 1080,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2024-12-12\u002F60885ce92dfcf091d6a18028f62e1a46.jpeg",
            origin_price_word: "优惠前",
            price_str: "10.8元",
            use_ad_pic: 0,
            corner_wording: "共省9元",
            tag_info_list: [
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
              { tag_id: 15, text: "假一赔十", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "5年老店",
                type: "mall_sell_points_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
        {
          key: "goods_720368523036_1_19",
          goodsID: 720368523036,
          qc: "",
          recTitle: "你可能会喜欢",
          itemType: 3,
          listType: 0,
          secondSearchHeader: false,
          imgUrl:
            "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fdcab0328-1fb8-11f0-b59d-0a580a4b1c46.jpg",
          longImgUrl: "",
          longImgUrlWM: "",
          viewType: 1,
          tagList: [],
          tagLen: 0,
          propertyTagList: [],
          mallName: "",
          mallStyle: 1,
          goodsName:
            "渔大叔即食虾仁22包原味低脂解馋小零食孕妇儿童高蛋白零食特产",
          price: "23.92",
          priceType: 0,
          priceInfo: "",
          rawPrice: 2392,
          salesTip: "已抢7680件",
          localGroup: { list: [] },
          logData: {
            ad: '{"bkfl":1,"join_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_","ad_logo":false,"pkinfo":"cHZ\u002FHoSa0bm9ljFcBHB9W0LCK6hew\u002FoUn2R24nq6rlTnppv0AEFpse5Ji5QUwUhrMwoOnl\u002FGK41afgBIYtA12xLCTjf65KWc\u002FW36SRY3sa4xjNYiviN1O1Dt0yFcbJDlGMzhTsvOI9pf+bsKcRA3L8m4b3mWGwE2sftNlx2yqjQ=","pubinfo":"{\\"item\\":\\"55S1JZDFQ8e2eHOpUPsIZIcBJBFbR0LWJvFqAkwaXrhO01syWdqeUDSpc+b17Bp+Qs1Sdpz7vWxf1SB75UsGA1zcv7Wpx9iUC9d5Nd+HyZ1s736f\u002F+fktk4wxQ+MBOHrQIlYwIC4IMdqzjU6Y4L55Raa9kZNct1NOXLBBvep9W4MxoCp8vq5MPfAzEgRows39RklSvgUH4fO7gyLIePOBEE7TTfXeDM1u\u002FsP4KVSmxv1eLMiDsJyu\u002Fe7eAjKdIYGvfYfk07VLZ6zq0BO2EeuWE4nEi104atrNzPL3Sa1VmKEnx+b8l2aBZAeMBNvPknykXZ0MT21Gd2E8g\u002FHoICOf07foXNkkJInDhm\u002F4BTn6NVUHFrCsjIlwWvdXd1CyzeRgUL4GZS2lTM85Mw38u220OMsX27ezhxPCv2WbTLWb7ixnAkUryu+80KinBiNok1qPRACo3OBP8DD9uOS0QF+rxvuJWsyySOp6AVvuXlKo4KgAQn8ylQb8L1rDpUKIfw8XC\u002F7A0CugYo6oHARdTnKvlFiqiQflzbmk2uR35qoohqyy281OxSGdOIgpSl4JoBr\\",\\"req\\":\\"MJJVCJJXtqZ377WZtSUUag\\\\u003d\\\\u003d\\"}","nbid":"8Al1ZyZhY2\u002FqQiK3uRqlqcrrC+Kt3aeROZ79ScF197nbfjD6jrxnaQUR\u002FqZkmXE\u002Fg2GO21Mk\u002F95bfrl\u002FSO6fmLZTXVGcUYLtzZGfpqc2I7GJ5\u002FDoOftnsIBiVa6RMlWOnBNtQ\u002Fnbnx5XFsIk9XhfyA==","openinfo":"{\\"ads_from\\":0,\\"ad_id\\":7501300794,\\"is_tr\\":1}","mark":"hH4SW94bvb0w0obecd+e9elc4kqn93zsLzsfsVABpcc=","search_id":"eJAgWqoaHeW4uiZdIFUNC-h9ltcEfxm-IL1a5sVyhO2fobo_-ev6C9dO4mgQCLK_"}',
            p_search:
              '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"ept_inf":"apyJpPb8Y4BTQ\u002F5SZE2LoToRBOXJbfn+zSUTaifk9yACz83lbw2UCqAkxGS1SJBQ","dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","cat_id":6504,"style":1,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","idx":19,"request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
            goods_image_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fdcab0328-1fb8-11f0-b59d-0a580a4b1c46.jpg",
            price_type: 0,
            price: "23.92",
            price_src: 0,
          },
          needAdLogo: false,
          prefixIcons: [],
          creativeInfo: null,
          linkURL:
            "goods.html?goods_id=720368523036&_oak_rcto=YWJISfqnvzygVoGU_PDn8JsFtgSbsYOZ3aGapHWy3HTpthPjKOEIowLf&page_from=51&_oak_gallery_token=394e6c24fb8657f1c50657284cd694aa&_oak_gallery=https%3A%2F%2Fimg.pddpic.com%2Fmms-material-img%2F2025-03-28%2F288f4852-c1b9-4399-8621-13fa4ea5fb41.jpeg",
          thumbWM: "",
          isRepeated: true,
          customData: {
            hd_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fmms-material-img\u002F2025-03-28\u002F288f4852-c1b9-4399-8621-13fa4ea5fb41.jpeg",
            reserve_quantity: 0,
            hd_url:
              "https:\u002F\u002Fimg.pddpic.com\u002Faid-image\u002Faid-sr\u002Fcrsl_image_enlarge\u002Fdcab0328-1fb8-11f0-b59d-0a580a4b1c46.jpg",
            brand_logo:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-12-29\u002F4ab57f29-e676-4ddc-85e7-6c15cac4632d.jpeg",
            cat_id4: 0,
            refresh_goods_sn:
              "CgI2WRIIUEhUbjExaVAaIJkqFH1LpLCs9Bu0Ez+7w0mopRMu4FmHS7DANzc7SDlwMAI=",
            activity_price_word: "券后",
            cat_id2: 6501,
            goods_flag_icon: [
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
              "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
            ],
            cat_id3: 6504,
            cat_id1: 6398,
            mall_id: 979869480,
            place_id: "BYBT_SEARCH",
            activity_price_word_before_tag: {
              text: "只剩3小时",
              type: "pre_price_coupon_tag",
              tag_ext: {
                icon: "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fcoupons\u002F6beb65cb-5587-4de4-9926-5a64d3ecb5d1.png.slim.png",
              },
            },
            sub_activity_type: 9,
            purchasable_quantity: 2751,
            subsidy_wording: "官方补贴16.1元",
            brand_name: "渔大叔",
            activity_quantity: 2751,
            theme_group_id: 0,
            detail_id: 22958454845,
            brand_id: 57641,
            lt_icon:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2026-03-03\u002F449aa334-7e0c-4ea4-aa3b-41cfdc92a0cc.png",
            origin_price_str: "优惠前46元",
            sales_wording: "已补贴7680件",
            normalPrice: 4600,
            flag_set: [0, 16, 3, 6],
            origin_price: 4600,
            track_info: {
              enlarge_goods_img: 1,
              ad_risk_result: 2,
              gimgsrc: 3,
              use_ad_pic: 0,
            },
            goodsId: 720368523036,
            trax_data: {
              44: { type: "origin_price_word_tag" },
              112: {
                type: "surprise_box_coupon_tag",
                url: "https:\u002F\u002Fcommimg.pddpic.com\u002Foms_img_ng\u002F2025-11-05\u002Fe4785a35-707e-4f97-b166-36dc72129746.png",
              },
              221: [
                {
                  text: "品牌",
                  type: "area221_black",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png",
                },
                {
                  text: "百亿补贴",
                  type: "area221_bybt",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png",
                },
                {
                  text: "买贵赔双倍",
                  type: "area221_compensate",
                  url: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png",
                },
              ],
            },
            tag_track_list: ["1&35", "1&9", "1&36", "1&15", "1&24"],
            listType: 0,
            origin_activity_price: 2990,
            activity_type: 1,
            subsidy_amount: 1610,
            cat_id: 6504,
            activity_price: 2392,
            on_sale: true,
            fresh_trans: {},
            hd_thumb_url_original:
              "https:\u002F\u002Fimg.pddpic.com\u002Fgaudit-image\u002F2025-03-28\u002Fdff3d748a17f36ba0625dee129408b98.jpeg",
            white_thumb_url:
              "https:\u002F\u002Fcommimg.pddpic.com\u002Fresized-background-pic\u002F2025-04-21\u002F90762587af1e809dd5f3c1242bb58b5f.jpeg",
            origin_price_word: "优惠前",
            price_str: "23.92元",
            use_ad_pic: 0,
            corner_wording: "共省22.08元",
            tag_info_list: [
              { tag_id: 9, text: "坏了包赔", type: 15, tag_series: 1 },
              { tag_id: 35, text: "降价补差", type: 0, tag_series: 1 },
              { tag_id: 36, text: "正品险", type: 0, tag_series: 1 },
            ],
            extra_tag_map: {
              help_decision: {
                text: "6年老店",
                type: "mall_sell_points_tag",
                tag_ext: {
                  icon: "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdfb1d797-9607-4ed6-b66a-14c3ea44f2f5.png.slim.png",
                },
              },
              img_ai: true,
            },
            icon_track_list: ["10014", "20001"],
            disable_query_sku: false,
          },
          specialText: null,
        },
      ],
      waistRecData: [],
      expansionList: [],
      correctWordInfo: {
        showCorrect: false,
        correctShowType: 0,
        correctWord: "",
        qcLevel: 0,
        qOpt: 0,
        qcTwo: "",
      },
      specialQuery: {},
      lastPage: false,
      queryMode: 0,
      hideSortBar: false,
      entryMainSearchScene: { enabled: false, tips: "" },
      firstFilter: "",
      rn: "ff826b3f62c42163bac9714b6ca549ef",
      total: 300,
    },
    searchTagsInfo: {
      searchTags: [{ k: "减脂期蔬菜", t: "w" }],
      searchQuery: "减脂期蔬菜",
      showTagsArr: [{ k: "减脂期蔬菜", t: "w" }],
      showTagsQueryArr: ["减脂期蔬菜"],
    },
    searchKey: "减脂期蔬菜",
    flip: "0;0;0;0;36feef66-ebca-41a2-b983-1d985ebf1c4d;\u002F20;0;0;ff826b3f62c42163bac9714b6ca549ef",
    isSearchMall: false,
    loadSearchResultTracking: {
      op: "event",
      sub_op: "search",
      p_search:
        '{"refresh_type":0,"list_id":"pkpKTkEBSN","org":2,"dpt":1,"search_met":"hot","RStyle":1,"risk_event_id":"7db5f170189711f1951f09df90926530","real_no_result":false,"stage":"1","style":1,"is_qc":false,"page":1,"rn":"ff826b3f62c42163bac9714b6ca549ef","request_id":"ff826b3f62c42163bac9714b6ca549ef","group":"baidu","ts":1772717435334,"s2":"s2_ab","remoteRegionType":0}',
      req_params:
        '{"source":10001,"search_met":"hot","track_data":"refer_page_id,10015_1772717237020_j49i1kv9ln;refer_search_met_pos,6","list_id":"pkpKTkEBSN","sort":"default","filter":"","q":"减脂期蔬菜","page":1,"support_enhance_type":1,"size":50}',
      query: "减脂期蔬菜",
      sort: "default",
      is_sort: 0,
      page_index: 1,
      page_size: 50,
    },
    nodeServerTime: 1772717435860,
    top: 0,
    webpEnabled: true,
  },
  memberSearchEntry: {},
  goodsInfoMap: {},
  hasSearchGoods: true,
  searchStore: {
    enable: true,
    style: 1,
    queryWords: [],
    queryGuideWord: "",
    backNum: 0,
    searchWordIndex: 0,
    hasClickedSearch: false,
    tenBillionScene: "",
    isValidIntervalVersion: true,
  },
  updateIndex: 0,
  clearGoodsImageGray: "C",
  isNativePlatform: false,
  isAndroidPlatform: false,
  isLiteNativePlatform: false,
  currentVersion: null,
  userID: 2531067566785,
  webpEnable: true,
  goodsStyle: {
    isEnableSubsidyBubble: true,
    goodsPriceType: 1,
    goodsPriceData: {
      brand_color: "rgb(216,163,141)",
      act_price_color: "#F33A50",
      ori_price_color: "#F33A50",
    },
    isShowGoodsTag: true,
    indexStyle: {
      style: 0,
      special_style: 2,
      head_bg_color: "#f2f2f6",
      module_bg_color: "",
      tab_line_color: "#F33A50",
    },
    userFlags: { longPromotionExp: 1, refreshEntranceExp: 1 },
    ext: { promotionTagStyleUser: 2 },
  },
  popWidget: {},
  floatWidget: {},
  isShowPopup: false,
  showSpringAtomsphere: false,
  isShowWidgets: false,
  userFlags: { longPromotionExp: 1, refreshEntranceExp: 1 },
  indexExtInfo: { promotionTagStyleUser: 2 },
  goToHomeSearchExperiment: 0,
  isIOSSystem: true,
  hasFoundExpandListInFirstScreen: false,
  tagAggregationLightGray: false,
  bAActiveIndex: 0,
  rankListData: {},
  sharePanelData: {},
  atomsphereBannerData: {},
  hasShowSpringAtmosphere: false,
  serverTime: 1772717435,
  couponPriceIconGray: false,
  helpDecisionShoeSizeColorGray: true,
  minorsModeStore: { isMinors: false, isInitedOnClient: false },
  tagAggregationGray: true,
  groupShareMiniProgramGray: true,
  optimizedListIconGray: true,
  page: 1,
  similarGoodsMaskStore: {
    isInited: false,
    scene: "",
    clickedGoodsList: [],
  },
  abCountdownSuffixGrayObj: { result: 1, vid: 1248583 },
  isAndroidBoldGray: false,
  abShowSkeletonGray: true,
  changeBrandManfanGray: true,
  titleFontStyle: "D",
  longPromotionExp: true,
  spuGoldColorGray: true,
  abForbiddenIosBouncesV2: false,
  aggregation: null,
  showDoubleRow: false,
  collectionInfoList: [],
  autoExpand: false,
  aggregationInfo: {},
  headBannerWidget: {},
  stopDeliveryInfo: {},
  rankActiveIndex: 0,
  getYHGoodsItemCouponLock: false,
  queryUgCouponPopApiLock: false,
  $serverPmmPerfLogger: { apiAxiosPlugin: {} },
  $service: { reportMap: { serviceName: "BuiSearchResult" } },
  $refreshGoodsService: {
    reportMap: { serviceName: "RefreshGoodsService" },
  },
  requestContext: {
    cookies: {
      pdd_user_uin: "PFJCNIHNAUPGH65P66Z2CGI3OQ_GEXDA",
      api_uid: "Ci9E+2mpfTRylQCSMUJSAg==",
      jrpl: "YAYh2tHgNMz1wICqrDuR52S7KMQBzY76",
      dilx: "b5dEx~O_Kjtdss29me~zz",
      pdd_user_id: "2531067566785",
      _nano_fp: "Xpm8X5manpXanqXbXC_AGOIlAUay29AOPDvtXByh",
      pdd_vds: "gaULRyFtHnWPAtWiJIUiUNjQHnKQXokLSOHQkPkoKOWiAajnjQRGXojygaRE",
      njrpl: "YAYh2tHgNMz1wICqrDuR52S7KMQBzY76",
      webp: "1",
      cui_glyph_baseFontSize: "100",
    },
    userAgent:
      "Mozilla\u002F5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit\u002F605.1.15 (KHTML, like Gecko) Version\u002F18.5 Mobile\u002F15E148 Safari\u002F604.1",
  },
  hostname: "mobile.yangkeduo.com",
  isAndroid5: false,
  canCancelWebpOnIOS: true,
  currentPlatform: "unknown",
  isNativeAndroidPlatform: false,
  isIOSPlatform: false,
  isNativeIOSPlatform: false,
  isTinyNativePlatform: false,
  isHarmonyNativePlatform: false,
  isWeChatMiniProgram: false,
  isAndroidWeChatPlatform: false,
  isPureWeChatPlatform: false,
  appVersion: "",
  isWeChatPlatform: false,
  pathname: "\u002Fbrand_activity_search_result.html",
  tenBillionScene: "",
  abHotAreaGray: true,
  abImageProgressType: 2,
  goodsRefreshInfo: { maxRefreshCnt: 100, perRefreshCnt: 50 },
  enlargeIconMap: {
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F3bd1cabd-3590-437e-887d-02a49d73829e.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002F59256e15-e075-4db4-9590-d27c2a04eb81.png.slim.png",
    "https:\u002F\u002Ft12img.yangkeduo.com\u002Fsocial\u002Fpincard\u002F1\u002Fshare.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002F59256e15-e075-4db4-9590-d27c2a04eb81.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002Fe3425ec1-fe7a-4ff0-9837-5b1ab34bd48f.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002F4ae38f43-bab2-4f12-97c0-42468cb5ded9.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002F05b5dda3-e343-4698-9838-9052cbfeb4e1.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002F2785a478-fc81-4d56-9d4d-1d5cf02a63c4.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyi\u002F7bc55a4c-bb1f-42e1-8809-a7efc0b588c9.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002F48d393b1-fb6b-42c6-a4a6-820687550f24.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002F1a284da5-6002-43f4-9825-061627895222.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002Fb4e3b579-9d1d-4927-8add-ff5249e27def.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002F36416be7-8fd8-4f90-aa97-f2ef863ec165.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002Fb4e3b579-9d1d-4927-8add-ff5249e27def.png.slim.png",
    "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fbrand\u002Fc6e8ea30-2e9d-4c38-8e4f-fcad8409084b.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002Fc6f3439c-aeed-418c-b2c4-272e04e3889d.png.slim.png",
    "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fbrand\u002Ffc92645f-af80-46e8-8e49-62d833020fa8.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002Fac56c46d-3c27-4b79-8f06-1bb9a57c644e.png.slim.png",
    "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fbrand\u002Fba5cb96f-6b3a-438b-beeb-e10d7bec1bef.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002Fd6788007-2053-411b-a776-f97947533d38.png.slim.png",
    "https:\u002F\u002Ffunimg.pddpic.com\u002Fcommon\u002Fbrand\u002Fe69e044f-0527-47c1-96ca-47f4e0720ec9.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002F61ce932f-e2e0-4dda-ac30-ec1df6aae4ee.png.slim.png",
    "https:\u002F\u002Fcommimg.pddpic.com\u002Fmms_static\u002F2019-12-04\u002F7cd72b60-b17f-4862-b50e-76b0fbe81895.gif":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002Ff37f9612-d88b-4fe5-9a1b-f9971381d357.gif.slim.gif",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002F51cde608-27dc-4fa5-a163-b4b2d9e788de.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbybt\u002Fffb9ebf0-d60d-4ccf-967b-736c9618d609.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002Fcafb6d4f-c78c-4f47-b054-43989a2a1d42.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002Fd36532b8-8439-497b-afd0-7ed7cb85cffb.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002Fc9c79a17-b77a-4459-87dc-d1471862c638.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbaiyibutie\u002Fe5f617e8-43c0-4f6e-af38-6072289c72a6.png.slim.png",
    "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002Fdd2c0602-769c-414c-b4ec-556cbd55476a.png.slim.png":
      "https:\u002F\u002Fpromotion.pddpic.com\u002Fpromo\u002Fbrand\u002F0b7360c8-c8c6-49d0-b023-4110752ee94f.png.slim.png",
  },
  abSlideRateAndroid: 1,
  promotionBlank: false,
  goodsPriceData: {
    brand_color: "rgb(216,163,141)",
    act_price_color: "#F33A50",
    ori_price_color: "#F33A50",
  },
};
