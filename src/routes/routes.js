import loadable from "@loadable/component";
import { Redirect } from "react-router-dom";
import dynamicRoutesMap from "./dynamicRoutes";
const Error = loadable(() => import("@/views/Error/Error"));
const defaultRoutes = [
  {
    path: "/",
    key: "index",
    to: "/home/index",
    components: Redirect,
  },
  {
    path: "/result/404",
    components: Error,
  },
  {
    path: "/result/403",
    status: "403",
    errTitle: "403",
    subTitle: "Sorry, you don't have access to this page.",
    components: Error,
  },
  {
    path: "/result/500",
    status: "500",
    errTitle: "500",
    subTitle: "Sorry, the server is reporting an error.",
    components: Error,
  },
  {
    path: "*",
    title: "页面不存在",
    key: "404",
    keepAlive: true,
    components: Error,
  },
];
const list = dynamicRoutesMap.map((c) => ({ ...c, components: loadable(c.component) }));

list.push(...defaultRoutes );

export default list;