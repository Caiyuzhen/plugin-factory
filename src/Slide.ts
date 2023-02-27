import { AbstractBaseToggleFn } from "./AbstractBaseToggleFn";
import { TYPE } from "./Tab";

export default class Slide extends AbstractBaseToggleFn {
	constructor(ele: HTMLElement) {
		super(ele, TYPE.SLIDE) //🔥记得 super 一下, 把【参数】传给【父类】

		this.getMethod(this.setPage) //🚀🚀🚀🚀让【抽象父类】搜集子类的方法  //传参, 参数是个函数, 🎃父类会同时执行两个 setPage 方法
	}

	// 🌟🌟🌟 slide 的话就每次向左滑动【一个页面的宽度】
	private setPage (pageInner: HTMLElement, curIndex: number) { //传入整个【滚动容器】, 然后去计算每次滚动多少距离
		console.log('滚动倍数:', curIndex)
		// getBoundingClientRect().width
		pageInner.style.transform = `translate3d(${-(curIndex * 500)}px, 0, 0)` //写死每一页滚动 500px, 逻辑上也可以计算出来
	}
}