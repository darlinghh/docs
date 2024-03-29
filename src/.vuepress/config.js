import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
export default defineUserConfig({
	base: "/docs/",
	lang: "zh-CN",
	title: "你好， VuePress ！",
	description: "这是我的第一个 VuePress 站点",
	theme: defaultTheme({
		// 默认主题配置
		navbar: [
			{
				text: "首页",
				link: "/",
			},
			{
				text: "home",
				link: "/home/",
			},
		],
	}),
});
