import { AbstractBaseToggleFn } from "./AbstractBaseToggleFn";
import { TYPE } from "./Tab";

export default class Slide extends AbstractBaseToggleFn {
	constructor(ele: HTMLElement) {
		super(ele, TYPE.SLIDE) //🔥记得 super 一下, 把【参数】传给【父类】
	}
}