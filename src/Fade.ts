import { AbstractBaseToggleFn } from "./AbstractBaseToggleFn";
import { TYPE } from "./Tab";

// 🔥继承抽象类
export default class Fade extends AbstractBaseToggleFn{
	constructor(ele: HTMLElement) {
		super(ele, TYPE.FADE) //🔥记得 super 一下, 把【参数】传给【父类】
	}
}