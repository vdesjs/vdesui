<script lang="tsx">
import { defineComponent } from '@vue/runtime-core';
import { ExtractPropTypes } from 'vue';
import { FORM_KEY } from '@/packages/utils/constant';
import { useChildren } from '@/packages/compsables';

const props = {
  reportSubmit: Boolean
}

export type FormProps = ExtractPropTypes<typeof props>;
  
export default defineComponent({
  name: 'vdes-form',
  props,
  
  setup(props, {slots}) {
    const { children, linkChildren } = useChildren(FORM_KEY);


    const submit = () => {
      children.forEach(c => {
        console.log(c.formValue.value)
      })
    }
    const onSubmit = (event: Event) => {
      console.log(children)
      event.preventDefault();
      submit()
    };

    const onReset = (event: Event) => {
      event.preventDefault();
      console.log('onReset')
    }
    linkChildren({ props });
    return () => {
      return <form onReset={onReset} onSubmit={onSubmit}>{slots.default?.()}</form>;
    };
  }
});
</script>
