<script lang="tsx">
import { useExpose, useParent } from '@/packages/compsables';
import { FORM_KEY } from '@/packages/utils/constant';
import { defineComponent, ref } from '@vue/runtime-core';

export default defineComponent({
  name: 'vdes-input',
  setup() {
    const { parent: form } = useParent(FORM_KEY);
    console.log(parent)

    const formValue = ref('ffffff')
    useExpose({
        formValue
    })

    return () => {
      return <input type="text" value="ffff" />;
    };
  }
});
</script>
