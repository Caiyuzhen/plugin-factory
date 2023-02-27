import { AbstractBaseToggleFn } from "./AbstractBaseToggleFn";
import { TYPE } from "./Tab";

// 🔥继承抽象类
export default class Fade extends AbstractBaseToggleFn{
	constructor(ele: HTMLElement) {
		super(ele, TYPE.FADE) //🔥记得 super 一下, 把【参数】传给【父类】
		this.getMethod(this.setPage) //🚀🚀🚀🚀让【抽象父类】搜集子类的方法, //传参, 参数是个函数  🎃父类会同时执行两个 setPage 方法
	}


	// 🚀🚀🚀等上层抽象类用【观察者模式】来通知【Fade 子类]执行这个方法！ 业务上是要等切 tab 后再切 page
	private setPage (pageItems: HTMLCollection, curIndex: number) { //因为继承自父类, 所以可以直接使用父类的属性(【pageItems】、【curIndex】)
		[...pageItems].map((item: Element) => { //🔥🔥[...pageItems]转成数组
			item.className = 'page-item' //🚀🚀🚀给每个页面都重置类名, 为了去掉 active!
		})
		console.log(pageItems, curIndex)

		pageItems[curIndex].className += ' active' //🚀🚀🚀给当前滚动到的页面添加上 active 类名！！【🚀这样就会定位到这一页！】
	}
}