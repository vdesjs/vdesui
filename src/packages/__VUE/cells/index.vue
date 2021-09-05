<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vdes-cells',

  props: {
    extClass: {
      type: String
    },
    title: {
      type: String
    },
    footer: {
      type: String
    }
  },

  setup(props, { slots }) {
    return () => {
      const { title, footer } = props;
      return (
        <div class="weui-cells__group weui-cells__group_form">
          {title ? <div class="weui-cells__title">{title}</div> : ''}
          <div class="weui-cells">{slots.default?.()}</div>
          {footer ? <div class="weui-cells__tips">{footer}</div> : ''}
        </div>
      );
    };
  }
});
</script>

<style lang="scss">
.weui-cells {
  margin-top: $weuiCellsMarginTop;
  background-color: $weuiCellBg;
  line-height: $weuiCellLineHeight;
  font-size: $weuiCellFontSize; //cell中间有效高度23px，跟客户端默认图标尺寸一致
  overflow: hidden; //因为每个cell的border使用before元素left搞的，ie下伪元素的containing block估计跟标准不同，在cell上用oh不生效

  // onepx
  position: relative;
  &:before {
    @include setTopLine($weuiCellBorderColor);

    z-index: 2;
  }
  &:after {
    @include setBottomLine($weuiCellBorderColor);

    z-index: 2;
  }
}

.weui-cells__group_form {
  &:first-child {
    .weui-cells__title {
      margin-top: 0;
    }
  }

  .weui-cells__title {
    margin-top: 24px;
    margin-bottom: 8px;
    padding: 0 32px;
  }

  .weui-cells,
  .weui-cell {
    &:before {
      left: 32px;
      right: 32px;
    }
  }
  .weui-cells_checkbox {
    .weui-check__label {
      &:before {
        left: 72px;
      }
    }
  }
  .weui-cells {
    &:after {
      left: 32px;
      right: 32px;
    }
  }
  .weui-cell {
    padding: 16px 32px;
    &:not(.weui-cell_link) {
      color: $weuiTextColorTitle;
    }
  }
  .weui-cell__hd {
    padding-right: 16px;
  }
  .weui-cell__ft {
    padding-left: 16px;
  }
  .weui-cell_warn {
    input {
      color: $weuiColorWarn;
    }
  }

  .weui-label {
    max-width: 5em;
    margin-right: 8px;
  }

  .weui-cells__tips {
    margin-top: 8px;
    padding: 0 32px;
    color: var(--weui-FG-2);
    a {
      font-weight: 700;
    }
  }
  .weui-cells__tips_warn {
    color: var(--weui-RED);
  }

  .weui-cell_vcode {
    padding: 12px 32px;
  }
  .weui-vcode-btn {
    font-size: 16px;
    padding: 0 12px;
    margin-left: 0;
    height: auto;
    width: auto;
    line-height: 2em;
    color: $weuiBtnDefaultFontColor;
    background-color: $weuiBtnDefaultBg;
    &:before {
      display: none;
    }
  }

  .weui-cell_select {
    padding: 0;
    .weui-select {
      padding: 0 32px;
    }
    .weui-cell__bd:after {
      right: 32px;
    }
  }
  .weui-cell_select-before {
    .weui-label {
      margin-right: 24px;
    }
    .weui-select {
      padding-right: 24px;
      box-sizing: initial;
    }
  }
  .weui-cell_select-after {
    padding-left: 32px;
    .weui-select {
      padding-left: 0;
    }
  }

  .weui-cell_switch {
    padding: 12px 32px;
  }
}
</style>
