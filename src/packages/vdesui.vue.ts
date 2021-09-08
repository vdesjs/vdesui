import { App } from 'vue';
import events from './__VUE/events/index';
import button from './__VUE/button/index.vue';
import form from './__VUE/form/index.vue';
import input from './__VUE/input/index.vue';
import Switch from './__VUE/switch/index.vue';
import cell from './__VUE/cell/index.vue';
import cells from './__VUE/cells/index.vue';
import textarea from './__VUE/textarea/index.vue';
import pickerView from './__VUE/picker-view/index.vue';
import pickerViewColumn from './__VUE/picker-view-column/index.vue';
import view from './__VUE/view/index.vue';
import Dialog from './__VUE/dialog/index.vue';
import Image from './__VUE/image/index.vue';

function install(app: App) {
    const packages = [events,button,form,input,Switch,cell,cells,textarea,pickerView,pickerViewColumn,view,Dialog,Image];
    packages.forEach((item:any) => {
      if (item.install) {
        app.use(item);
      } else if (item.name) {
        app.component(item.name, item);
      }
    });
  }
export { install, events,button,form,input,Switch,cell,cells,textarea,pickerView,pickerViewColumn,view,Dialog,Image  };
export default { install, version:'1.0.0'};