import {Tab} from './Tab'

(()=>{
	const init = () => {
		// 🔥🔥🔥切换不同的页面展示形式！(通过工具函数找打对应的 DOM 并添加上传入的 class！)
		// -->   实例化 Tab （传入要找到 DOM 的【类名 或 id】 以及要添加的 【class】!）
		const tab: Tab = new Tab({
			ele: '.tabContainer',
			type: 'fade',
		})

		// 初始化
		tab.create()
	}

	init()
})()