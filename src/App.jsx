import { useRoutes } from "react-router-dom";
import { ConfigProvider } from "antd";
import routes from "./router";
// 使用mini文件防止报错
import "antd/dist/antd.min.css";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zh_cn from "antd/es/locale/zh_CN";
import "./App.css";

export default function App() {
  return (
    <ConfigProvider locale={zh_cn}>
      <div id="app">{useRoutes(routes)}</div>
    </ConfigProvider>
  );
}
