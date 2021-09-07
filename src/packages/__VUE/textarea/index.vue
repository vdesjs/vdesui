<script lang="tsx">
import { extend } from '@/packages/utils/base';
import { computed, defineComponent, onMounted } from '@vue/runtime-core';
import { ref, watch } from 'vue';
import { FiledProps } from '../common/field';

const props = extend({}, FiledProps, {
  name: {
    type: String,
    default: ''
  },
  maxlength: {
    type: [Number, String],
    default: 140
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  placeholderClass: {
    type: String,
    default: 'textarea-placeholder'
  },
  placeholderStyle: {
    type: String,
    default: ''
  },
  autoHeight: {
    type: [Boolean, String],
    default: false
  },
  confirmType: {
    type: String,
    default: ''
  }
});

export default defineComponent({
  name: 'vdes-textarea',
  props,

  emits: [
    'focus',
    'blur',
    'linechange',
    'input',
    'confirm',
    'keyboardheightchange'
  ],
  setup(props) {
    let valueSync = ref<string>(props.value);
    let lineNum = 0;
    const valueComute = computed(() => {
      const val = valueSync.value.split('\n');
      lineNum = val.length;
      console.log(lineNum);
      return val;
    });

    watch(
      () => lineNum,
      () => {
        console.log('lineChange', lineNum);
      }
    );

    const onInput = (event) => {
      console.log(event.target);
      valueSync.value = event.target.value;

      console.log(getComputedStyle(rootDom.value as unknown as Element).height);
    };

    const rootDom = ref(null);

    onMounted(() => {
      console.log(getComputedStyle(rootDom.value as unknown as Element).height);
    });

    const computeHeight = () => {
      let lineHeight = getComputedStyle(
        rootDom.value as unknown as Element
      ).lineHeight;
    };

    return () => {
      return (
        <div class="vdes-textarea" ref={rootDom}>
          <div class="vdes-textarea-wrapper">
            <div class="vdes-textarea-placeholder" />
            <div class="vdes-textarea-line" />
            <div class="vdes-textarea-compute">
              {valueComute.value.map((val) => {
                return <div>{val.trim() ? val : '.'} </div>;
              })}
            </div>
            <textarea
              class="vdes-textarea-textarea"
              onInput={onInput}
              value={valueSync.value}
            />
          </div>
        </div>
      );
    };
  }
});
</script>

<style lang="scss">
.vdes-textarea {
  width: 300px;
  height: 150px;
  display: block;
  position: relative;
  font-size: 16px;
  line-height: 1.3;
  white-space: pre-wrap;
  word-break: break-all;
}
.vdes-textarea[hidden] {
  display: none;
}

.vdes-textarea-wrapper,
.vdes-textarea-placeholder,
.vdes-textarea-line,
.vdes-textarea-compute,
.vdes-textarea-textarea {
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: inherit;
}

.vdes-textarea-wrapper {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: inherit;
}
.vdes-textarea-placeholder,
.vdes-textarea-line,
.vdes-textarea-compute,
.vdes-textarea-textarea {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  white-space: inherit;
  word-break: inherit;
}
.vdes-textarea-placeholder {
  color: grey;
  overflow: hidden;
}
.vdes-textarea-line,
.vdes-textarea-compute {
  visibility: hidden;
  height: auto;
}
.vdes-textarea-line {
  width: 1em;
}
.vdes-textarea-textarea {
  resize: none;
  background: none;
  color: inherit;
  opacity: 1;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: inherit;
  text-indent: inherit;
  text-transform: inherit;
  text-shadow: inherit;
}
/* 用于解决 iOS textarea 内部默认边距 */
.vdes-textarea-textarea-fix-margin {
  width: auto;
  right: 0;
  margin: 0 -3px;
}
.vdes-textarea-textarea:disabled {
  /* 用于重置iOS14以下禁用状态文字颜色 */
  -webkit-text-fill-color: currentcolor;
}
</style>
