import { ref, reactive } from 'vue';
import defaultMessages from './lang/zh-CN';
import { deepAssign } from '@/packages/utils/deep-assign';
type Message = Record<string, any>;

type Messages = Record<string, Message>;

const lang = ref('zh-CN');
const messages = reactive<Messages>({
  'zh-CN': defaultMessages
});

const Locale = {
  messages(): Message {
    return messages[lang.value];
  },

  use(newLang: string, newMessages?: Message) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },

  add(newMessages: Message = {}) {

    deepAssign(messages, newMessages);
  },
  getLang() {
    return lang.value;
  }
};

export default Locale;
export { Locale };
