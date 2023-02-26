import Fade from './Fade';
import Slide from './Slide';
import { findDomEle, findDomType }  from './utils/findDOM'//引入工具函数

interface IOptions {
	ele: string;
	type: TYPE | string //⚡️插件内部可以传入枚举值, 其他人可以传入字符串
}

// ⚡️⚡️⚡️枚举值（不维护字符串, 只维护枚举值）！
export enum TYPE { //两种 tab 页面滚动类型
	FADE = 'fade',
	SLIDE = 'slide'
}


export class Tab {
	// 类里边的属性
	private _ele: HTMLElement //找到的那个 HTML DOM
	private _type: TYPE | string

	constructor (options) {
		const { ele, type }: IOptions = options
		// this._type = type
		this._type = findDomType(type)
		this._ele = findDomEle(ele, this._type as TYPE) //🔥🔥从工具函数中去找到对应的 DOM
	}

	//🏭🏭工厂模式, 实例化不同的类
	public create() {
		console.log(this._type, this._ele)
		switch (this._type) {
			case TYPE.FADE:
				return new Fade(this._ele)
			case TYPE.SLIDE:
				return new Slide(this._ele)
			default:
				break
		}
	}
}