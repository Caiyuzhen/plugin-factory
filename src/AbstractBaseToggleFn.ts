import { TYPE } from "./Tab";

// 🔥🔥🔥抽象类（🚀🚀🚀最底层的公共方法, 让子类去继承来获得这些公共方法！！）, 定义切换不同的 tab 页的能力
export abstract class AbstractBaseToggleFn {
	
	private _curIndex: number = 0
	private _ele: HTMLElement //保存一下参数
	private _tabItems: HTMLCollection
	private _methodArr: any[] = [] //🔥🔥用于搜集方法

	constructor(ele: HTMLElement, type: TYPE) {
		// console.log(ele, type) //🔥由子类进行 super() 传入的参数
		this._ele = ele
		this._tabItems = this._ele.getElementsByClassName('tab-item') //获得所有 tab-item
		this.init()// 🔥🔥一种是在实力里边去执行 init() , 一种是在 【构造函数】 内去执行 init()
	}

	private init () {
		this.bindEvent ()
	}

	// 绑定点击 tab 后切换页面的事件！
	private bindEvent () {
		this._ele.addEventListener('click', this.setTab.bind(this))//⚡️ 记得bind 指向实例！
	}

	// 点击后, 根据类名去判断是哪个 tab-item
	private setTab (e: MouseEvent) { 
		const tar = e.target as HTMLElement
		const className = tar.className

		if (className === 'tab-item') {
			//🚀🚀🚀开始切换 tab (修改 DOM 的类名！！)
			this._tabItems[this._curIndex].className = 'tab-item' //🚀🚀重置当前点击的 tab 的 类名, 为了去掉 active!!
			this._curIndex = [].indexOf.call(this._tabItems, tar) //🚀🚀用数组的 [].indexOf 方法来找到元素【tar】在数组的【索引位】, call 是为了改变 this 指向(指向到 _tabItems, 因为 _tabItems 是一个数组), 最后返回【索引位】并保存到【_curIndex】这个变量上
			this._tabItems[this._curIndex].className += ' active' //🚀🚀给当前聚焦到的这一个 tab 加上 active 类名！！ 【🚀这样就会定位到着一tab！】
		}
	}

	// 🔥子类可以执行的方法, 👀观察者模式, 由父类去通知子类执行这个方法！
	protected getMethod (method: any) { 
		// 🔥🔥搜集方法, 当 _curIndex 改变后, 就会执行这个方法，通知子类去执行子类自己的方法！！
		this._methodArr.push(method)
	}
}