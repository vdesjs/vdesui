<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vdes-picker-view',
  props: {
    value: {
      type: Array,
      default() {
        return [];
      },
      validator: function (val) {
        return (
          Array.isArray(val) &&
          val.filter((val) => typeof val === 'number').length === val.length
        );
      }
    },
    indicatorStyle: {
      type: String,
      default: ''
    },
    indicatorClass: {
      type: String,
      default: ''
    },
    maskStyle: {
      type: String,
      default: ''
    },
    maskClass: {
      type: String,
      default: ''
    }
  },

  setup(props, { slots }) {
    return () => {
      return (
        <div class="vdes-picker-view">
          <div class="vdes-picker-view-wrapper">
            {slots.default?.().map((item, index) => {
              item.props = {
                defaultIndex: props.value[index] ? props.value[index] : 0
              };
              return item;
            })}
          </div>
        </div>
      );
    };
  }
});
</script>

<style lang="scss">
.vdes-picker-view {
  display: block;
}

.vdes-picker-view .vdes-picker-view-wrapper {
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.vdes-picker-view[hidden] {
  display: none;
}
</style>
