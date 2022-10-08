import Layout from "./layout";
import Goods from "./pages/Goods";

// 路由映射表
const routes = [
  // 路由重定向
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/goods",
        element: <Goods />,
      },
      // 路由重定向
      {
        path: "*",
        element: "404",
      },
    ],
  },
];

export default routes;
