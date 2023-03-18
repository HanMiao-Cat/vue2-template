import Vue from 'vue';
import { Button, message, notification, Modal } from 'ant-design-vue';

// 引入antd组件
export const useAntdComponents = () => {
  const antdComponents = [Button, Modal];

  for (let i = 0; i < antdComponents.length; i++) {
    const component = antdComponents[i];
    if (component === Modal) {
      Vue.use(component);
    } else {
      Vue.component(component.name, component);
    }
  }

  Vue.prototype.$message = message;
  Vue.prototype.$notify = notification;
  Vue.prototype.$modal = Modal;
};
