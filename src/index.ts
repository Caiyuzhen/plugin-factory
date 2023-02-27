import {Tab} from './Tab'

(()=>{
	const init = () => {
		// 🔥🔥🔥切换不同的页面展示形式！(通过工具函数找打对应的 DOM 并添加上传入的 class！)
		// -->   实例化 Tab （传入要找到 DOM 的【类名 或 id】 以及要添加的 【class】!）
		const tab: Tab = new Tab({
			ele: '.tabContainer',
			type: 'slide', //使用什么类型的 tab 页 【本质上是控制使用 Fade 类 还是 Slide 类】
		})

		// 初始化
		tab.create()
	}

	init()
})()