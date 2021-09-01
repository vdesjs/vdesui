<script lang="tsx">
import { extend } from '@/packages/utils/base';
import { defineComponent, reactive } from '@vue/runtime-core';
import { useHover, hoverProps } from '../common/hover';

const props = extend({}, hoverProps);

export default defineComponent({
  name: 'vdes-view',
  props,
  setup(props, { slots }) {
    const { hoverTouchEnd, hoverTouchStart, renderHoverClass } =
      useHover(props);

    return () => {
      return (
        <div
          class={'wx-view ' + renderHoverClass()}
          onTouchstart={hoverTouchStart}
          onTouchend={hoverTouchEnd}
        >
          {slots.default?.()}
        </div>
      );
    };
  }
});
</script>
<style>
.wx-view[hidden] {
  display: none;
}
</style>
