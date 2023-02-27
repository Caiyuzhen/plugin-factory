import { AbstractBaseToggleFn } from "./AbstractBaseToggleFn";
import { TYPE } from "./Tab";

export default class Slide extends AbstractBaseToggleFn {
	constructor(ele: HTMLElement) {
		super(ele, TYPE.SLIDE) //🔥记得 super 一下, 把【参数】传给【父类】

		this.getMethod(this.setPage) //🚀🚀🚀🚀让【抽象父类】搜集子类的方法  //传参, 参数是个函数
	}

	// 🌟🌟🌟 slide 的话就每次向左滑动【一个页面的宽度】
	private setPage () {

	}
}