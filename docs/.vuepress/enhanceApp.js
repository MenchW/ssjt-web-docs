import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { TcTable, TcTableColumn, TcSwitch, TcDialog, TcFileUpload, TcImageUpload, TcInput } from "@hntc/components";

export default ({
  Vue // VuePress 正在使用的 Vue 构造函数
  // options, // 附加到根实例的一些选项
  // router, // 当前应用的路由实例
  // siteData // 站点元数据
}) => {
  Vue.component("TcTable", TcTable);
  Vue.component("TcTableColumn", TcTableColumn);
  Vue.component("TcSwitch", TcSwitch);
  Vue.component("TcDialog", TcDialog);
  Vue.component("TcFileUpload", TcFileUpload);
  Vue.component("TcImageUpload", TcImageUpload);
  Vue.component("TcInput", TcInput);

  Vue.use(ElementUI, {
    size: "medium" // set element-ui default size
  });
};
