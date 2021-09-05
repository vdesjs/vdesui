<script lang="tsx">
import vdes from '@/packages/__API';
import { defineComponent, PropType, StyleValue } from 'vue';

type ImageMode =
  | 'scaleToFill'
  | 'aspectFit'
  | 'aspectFill'
  | 'widthFix'
  | 'heightFix'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'topleft'
  | 'topright'
  | 'bottomleft'
  | 'bottomright';

export default defineComponent({
  name: 'vdes-image',
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String as PropType<ImageMode>,
      default: 'scaleToFill'
    },
    webp: {
      type: Boolean,
      default: false
    },
    showMenuByLongpress: {
      type: Boolean,
      default: false
    },

    // TODO 懒加载
    lazyLoad: {
      type: [Boolean, String],
      default: false
    }
  },
  emits: ['error', 'load'],
  setup(props) {
    const styleRender = (): StyleValue => {
      let size = 'auto';
      let position = '';
      const repeat = 'no-repeat';
      switch (props.mode) {
        case 'aspectFit':
          size = 'contain';
          position = 'center center';
          break;
        case 'aspectFill':
          size = 'cover';
          position = 'center center';
          break;
        case 'widthFix':
        case 'heightFix':
          size = '100% 100%';
          break;
        case 'top':
          position = 'center top';
          break;
        case 'bottom':
          position = 'center bottom';
          break;
        case 'center':
          position = 'center center';
          break;
        case 'left':
          position = 'left center';
          break;
        case 'right':
          position = 'right center';
          break;
        case 'topleft':
          position = 'left top';
          break;
        case 'topright':
          position = 'right top';
          break;
        case 'bottomleft':
          position = 'left bottom';
          break;
        case 'bottomright':
          position = 'right bottom';
          break;
        default:
          size = '100% 100%';
          position = '0% 0%';
          break;
      }

      return {
        backgroundImage: `url("${props.src}")`,
        backgroundPosition: position,
        backgroundSize: size,
        backgroundRepeat: repeat
      };
    };

    const longpress = () => {
        console.log("longpress")

        if (props.showMenuByLongpress) {
            vdes.showActionSheet({
                itemList:['发送给朋友', '收藏', '保存图片', '识别图片的小程序码'],
                
            })
        }
    }

    return () => {
      return (
        <div class="vdes-image">
            
          <div style={styleRender()} onLongpress={longpress}></div>
        </div>
      );
    };
  }
});
</script>

<style>
.vdes-image {
  width: 320px;
  height: 240px;
  display: inline-block;
  overflow: hidden;
}
.vdes-image > div {
  width: 100%;
  height: 100%;
}
</style>
