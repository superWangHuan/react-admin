import { createFromIconfontCN } from "@ant-design/icons";

const MyIcon = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_2972252_9bgm4ly8g0g.js", // 在 iconfont.cn 上生成
})

export default function Icon({ type, ...itemProps }) {
    if (!type) return null;
    return <MyIcon type={type} {...itemProps} />;
}
