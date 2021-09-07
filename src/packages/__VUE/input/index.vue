<script lang="tsx">
import { useExpose, useParent } from '@/packages/compsables';
import { extend } from '@/packages/utils/base';
import { FORM_KEY } from '@/packages/utils/constant';
import { defineComponent, PropType, ref } from 'vue';
import { FiledProps } from '../common/field';

type InputType = 'text' | 'number' | 'idcard' | 'digit' | 'safe-password';

type ConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

const props = extend({}, FiledProps, {
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<InputType>,
    default: 'text'
  },
  password: {
    type: [Boolean, String],
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  placeholderStyle: {
    type: String,
    default: ''
  },
  placeholderClass: {
    type: String,
    default: 'input-placeholder'
  },
  disabled: {
    type: [Boolean, String],
    default: false
  },
  maxlength: {
    type: [Number, String],
    default: 140
  },
  confirmType: {
    type: String as PropType<ConfirmType>,
    default: 'done'
  }
});

export default defineComponent({
  name: 'vdes-input',
  props,

  setup(props) {
    const { parent: form } = useParent(FORM_KEY);
    console.log(parent);

    const formValue = ref('ffffff');
    useExpose({
      formValue
    });

    const renderType = () => {
      if (props.password == true) {
        return 'password';
      } else {
        return 'text';
      }
    };

    return () => {
      const { placeholder, value, placeholderClass, placeholderStyle, name} = props;
      return (
        <div class="vdes-input">
          <div class="vdes-input-wrapper">
            <div
              style={placeholderStyle}
              class={`vdes-input-placeholder ${placeholderClass}`}
            >
              <input
                class="vdes-input-input"
                type={renderType()}
                placeholder={placeholder}
                value={value}
                name={name}
              />
            </div>
          </div>
        </div>
      );
    };
  }
});
</script>

<style lang="scss">
.vdes-input {
  display: block;
  font-size: 16px;
  line-height: 1.4em;
  height: 1.4em;
  min-height: 1.4em;
  overflow: hidden;
}
.vdes-input[hidden] {
  display: none;
}

.vdes-input-wrapper,
.vdes-input-placeholder,
.vdes-input-form,
.vdes-input-input {
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: inherit;
}

.vdes-input-wrapper,
.vdes-input-form {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.vdes-input-placeholder,
.vdes-input-input {
  width: 100%;
}

.vdes-input-placeholder {
  position: absolute;
  top: auto !important;
  left: 0;
  color: gray;
  overflow: hidden;
  text-overflow: clip;
  white-space: pre;
  word-break: keep-all;
  // pointer-events: none;
  line-height: inherit;
}

.vdes-input-input {
  position: relative;
  display: block;
  height: 100%;
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

.vdes-input-input[type='search']::-webkit-search-cancel-button {
  display: none;
}

.vdes-input-input::-webkit-outer-spin-button,
.vdes-input-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.vdes-input-input[type='number'] {
  -moz-appearance: textfield;
}

.vdes-input-input:disabled {
  /* 用于重置iOS14以下禁用状态文字颜色 */
  -webkit-text-fill-color: currentcolor;
}
</style>
