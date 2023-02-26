import { findDomEle, findDomType }  from './utils/findDOM'

interface IOptions {
	ele: string;
	type: TYPE | string //⚡️插件内部可以传入枚举值, 其他人可以传入字符串
}

export enum TYPE {
	FADE = 'fade',
	SLIDE = 'slide'
}


export class Tab {
	private _ele: HTMLElement //找到的那个 HTML DOM
	private _type: TYPE | string

	constructor (options) {
		const { ele, type }: IOptions = options
		// this._type = type
		this._type = findDomType(type)
		this._ele = findDomEle(ele, this._type as TYPE) //🔥🔥从工具函数中去找到对应的 DOM
	}

	public create() {
		console.log(this._type, this._ele);
	}
}