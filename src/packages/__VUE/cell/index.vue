<template>
  <div>
    <div @click="navigateTo" :class="`weui-cell ${link ? 'weui-cell_access' : ''} ${extClass}`">
      <div v-if="hasHeader" :class="`weui-cell__hd ${iconClass}`">
        <template v-if="icon">
          <vdes-image
            :src="icon"
            class="weui-cell__icon"
            mode="aspectFit"
          ></vdes-image>
        </template>
        <template v-else>
          <slot name="icon"></slot>
        </template>
        <template>
          <template v-if="title">
            <div class="weui-label">{{ title }}</div>
          </template>
          <template v-else>
            <slot name="title"></slot>
          </template>
        </template>
      </div>

      <div v-if="hasBody" class="weui-cell__bd">
        <template v-if="value">{{ value }}</template>
        <template v-else><slot></slot></template>
      </div>

      <div
        v-if="hasFooter"
        :class="`weui-cell__ft weui-cell__ft_in-access ${footerClass}`"
      >
        <template v-if="footer">{{ footer }}</template>
        <template v-else>
          <slot name="footer"></slot>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vdes-cell',
  props: {
    extClass: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },
    title: {
      // 和icon二选一，都是放在cell_hd里面
      type: String,
      default: ''
    },
    hover: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },

    showError: {
      type: Boolean,
      default: false
    },

    prop: {
      // 校验的属性，给父元素form使用
      type: String,
      default: ''
    },

    footer: {
      type: String,
      default: ''
    },
    inline: {
      // 左右布局样式还是上下布局
      type: Boolean,
      default: true
    },

    iconClass: {
      type: String,
      default: ''
    },
    bodyClass: {
      type: String,
      default: ''
    },

    url: {
      // 在link为true的时候有效，表示navigator的跳转url
      type: String,
      default: ''
    },
    footerClass: {
      type: String,
      default: ''
    },

    hasHeader: {
      type: Boolean,
      default: true
    },
    hasFooter: {
      type: Boolean,
      default: true
    },
    hasBody: {
      type: Boolean,
      default: true
    },
    extHoverClass: {
      // 提供给需要定制 hover-class 的场景，要求 hover 为 false
      type: String,
      default: ''
    }
  },

  setup(props) {
    const navigateTo = () => {
      console.log('navigateTo');
    };

    const {
      link,
      extClass,
      hasHeader,
      hasFooter,
      hasBody,
      iconClass,
      icon,
      title,
      value,
      footer,
      footerClass
    } = props;

    return {
      link,
      extClass,
      hasHeader,
      hasFooter,
      hasBody,
      iconClass,
      icon,
      title,
      value,
      footer,
      footerClass,
      navigateTo
    };
  }
});
</script>

<style lang="scss">
.weui-cell {
  padding: $weuiCellGapV;
  position: relative; //这个是为了兼容cells容器onepx方案被before挡住而做的
  display: flex;
  align-items: center;
  &:before {
    @include setTopLine($weuiCellBorderColor);

    left: $weuiCellGapH;
    z-index: 2;
  }
  &:first-child {
    &:before {
      display: none;
    }
  }
}
.weui-cell_active {
  &:active {
    background-color: $weuiBgColorActive;
  }
}
.weui-cell_primary {
  align-items: flex-start;
}
.weui-cell__bd {
  flex: 1;
}
.weui-cell__ft {
  text-align: right;
  color: $weuiTextColorDesc;
}

.weui-cell_access {
  @include setTapColor();

  color: inherit;
  &:active {
    background-color: $weuiBgColorActive;
  }
  .weui-cell__ft {
    padding-right: 22px;
    position: relative;
    &:after {
      content: ' ';
      width: 12px;
      height: 24px;
      mask-position: 0 0;
      mask-repeat: no-repeat;
      mask-size: 100%;
      background-color: currentColor;
      color: $weuiTextColorTips;
      mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -12px;
    }
  }
}

.weui-cells__title {
  margin-top: 16px;
  margin-bottom: 3px;
  padding-left: $weuiCellGapH;
  padding-right: $weuiCellGapH;
  color: $weuiTextColorDesc;
  font-size: $weuiCellTipsFontSize;
  line-height: 1.4;

  & + .weui-cells {
    margin-top: 0;
  }
}

.weui-cells__tips {
  margin-top: 8px;
  color: $weuiTextColorDesc;
  padding-left: $weuiCellGapH;
  padding-right: $weuiCellGapH;
  font-size: $weuiCellTipsFontSize;
  line-height: 1.4;
  a,
  navigator {
    color: $weuiLinkColorDefault;
  }
  navigator {
    display: inline;
  }
}
</style>
