<script lang="tsx">
import { defineComponent, PropType, ref } from 'vue';

type SwitchType = 'switch' | 'checkbox';

export default defineComponent({
  name: 'vdes-switch',
  props: {
    checked: {
      type: [Boolean],
      default: false
    },
    type: {
      type: String as PropType<SwitchType>,
      default: 'switch'
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: '#04BE02'
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const switchChecked = ref<Boolean>(props.checked);

    const onClick = (event) => {
      if (props.disabled) {
        return;
      }
      switchChecked.value = !switchChecked.value;

      event.detail = {
        value: switchChecked.value
      };
      emit('change', event);
    };
    


    return () => {
      return (
        <div class="vdes-switch" onClick={onClick}>
          <div class="vdes-switch-wrapper">
            <div class="vdes-switch-input"></div>

            <div class="vdes-checkbox-input"></div>
          </div>
        </div>
      );
    };
  }
});
</script>

<style lang="scss">
.vdes-switch {
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  cursor: pointer;

  .vdes-switch-wrapper {
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
    vertical-align: middle;

    .vdes-switch-input {
      -webkit-appearance: none;
      appearance: none;
      position: relative;
      width: 52px;
      height: 32px;
      margin-right: 5px;
      border: 1px solid #dfdfdf;
      outline: 0;
      border-radius: 16px;
      box-sizing: border-box;
      background-color: #dfdfdf;
      transition: background-color 0.1s, border 0.1s;

      &:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 30px;
        border-radius: 15px;
        background-color: #fdfdfd;
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
      }
      &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #ffffff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
      }
    }
  }
}

.vdes-switch[hidden] {
  display: none;
}

.vdes-switch[disabled] {
  cursor: not-allowed;
  .vdes-switch-input {
    opacity: 0.7;
  }
}
</style>
