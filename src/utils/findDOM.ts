import { TYPE } from '../Tab'

// ⚡️⚡️⚡️找到对应 DOM 的工具函数
export function findDomEle (ele: string | undefined, type: TYPE): HTMLElement {
	// 如果没有传入 ele, 则抛出错误
	if (!ele) {
		throw new Error ("'ele' must be exist!")
	}

	//🔥🔥判断 ele 的传入是否以 . 或 # 开头（正则表达式来匹配 . 或 # 开头的字符串）
	const isMark: boolean = /^(\.|#)/.test(ele) 

	let _ele: HTMLElement | null

	// 如果以 . 或 # 开头, 则直接查找, 不需要添加 . 或 #
	if (!isMark) {
		// 如果没有以 . 或 # 开头, 则默认以 . 开头
		_ele = document.querySelector(`.${ele}`) || document.querySelector(`#${ele}`)  
	} else {
		_ele = document.querySelector(ele)
	}

	// 如果元素不存在（找不到元素
	if (!_ele)  {
		throw new Error("This element with the class or ID cannot be found")
	}

	// 🌟🌟如果元素存在, 则添加对应的 class （fade 或 slide）
	// _ele.className += ' ' +  type //写法一: 在原有的 class 基础上继续添加
	_ele.className = `tabContainer ${type}`//写法二: 直接覆盖原有的 class

	return _ele
}




// ⚡️⚡️⚡️找到对应 class 的工具函数
export function findDomType (type: TYPE | string | undefined) : TYPE {
	//🔥如果没有传入 type， 则默认为 fade
	if(!type) {
		return TYPE.FADE
	}

	// 🔥判断传入的 type 是不是 TYPE 的枚举值
	for(let k in TYPE) {
		if(TYPE[k] === type) {
			return type as TYPE //因为有可能是 string
		}
	}

	//如果都没有, 则默认为 fade
	return TYPE.FADE
}