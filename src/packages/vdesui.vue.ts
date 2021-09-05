import { App } from 'vue';
import events from './__VUE/events/index';
import Button from './__VUE/button/index.vue';
import Form from './__VUE/form/index.vue';
import Input from './__VUE/input/index.vue';
import Switch from './__VUE/switch/index.vue';
import Cell from './__VUE/cell/index.vue';
import Cells from './__VUE/cells/index.vue';
import view from './__VUE/view/index.vue';
import Dialog from './__VUE/dialog/index.vue';
import Image from './__VUE/image/index.vue';

function install(app: App) {
    const packages = [events,Button,Form,Input,Switch,Cell,Cells,view,Dialog,Image];
    packages.forEach((item:any) => {
      if (item.install) {
        app.use(item);
      } else if (item.name) {
        app.component(item.name, item);
      }
    });
  }
export { install, events,Button,Form,Input,Switch,Cell,Cells,view,Dialog,Image  };
export default { install, version:'1.0.0'};