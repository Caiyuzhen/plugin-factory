import { TYPE } from "./Tab";

// ð¥ð¥ð¥æ½è±¡ç±»ï¼ðððæåºå±çå¬å±æ¹æ³, è®©å­ç±»å»ç»§æ¿æ¥è·å¾è¿äºå¬å±æ¹æ³ï¼ï¼ï¼, å®ä¹åæ¢ä¸åç tab é¡µçè½å
export abstract class AbstractBaseToggleFn {
	
	private _curIndex: number = 0
	private _ele: HTMLElement //ä¿å­ä¸ä¸åæ°
	private _tabItems: HTMLCollection
	private _methodArr: any[] = [] //ð¥ð¥ç¨äºæéå­ç±»çæ¹æ³
	private _pageElement: HTMLElement | HTMLCollection


	constructor(ele: HTMLElement, type: TYPE) {
		// console.log(ele, type) //ð¥ç±å­ç±»è¿è¡ super() ä¼ å¥çåæ°
		this._ele = ele
		this._tabItems = this._ele.getElementsByClassName('tab-item') //è·å¾ææ tab-item
		
		// ð¥ð¥æ ¹æ®ç±»åå¤æ­è¦æ¿å°åªä¸ª DOM åç´ ï¼
		switch ( type ) {
			case TYPE.FADE:
				this._pageElement = this._ele.getElementsByClassName('page-item')
				break
			case TYPE.SLIDE:
				this._pageElement = this._ele.getElementsByClassName('inner')[0] as HTMLElement
				break
			default:
				break
		}

		this.init()// ð¥ð¥ä¸ç§æ¯å¨å®ä¾éè¾¹å»æ§è¡ init() , ä¸ç§æ¯å¨ ãæé å½æ°ã åå»æ§è¡ init()
	}

	private init () {
		this.bindEvent ()
	}

	// ç»å®ç¹å» tab ååæ¢é¡µé¢çäºä»¶ï¼
	private bindEvent () {
		this._ele.addEventListener('click', this.setTab.bind(this))//â¡ï¸ è®°å¾bind æåå®ä¾ï¼
	}

	// ç¹å»å, æ ¹æ®ç±»åå»å¤æ­æ¯åªä¸ª tab-item
	private setTab (e: MouseEvent) { 
		const tar = e.target as HTMLElement //å½åç¹çæ¯åªä¸é¡¹ tab
		const className = tar.className
		// console.log(tar)

		if (className === 'tab-item') {
			//ðððå¼å§åæ¢ tab (ä¿®æ¹ DOM çç±»åï¼ï¼)
			this._tabItems[this._curIndex].className = 'tab-item' //ððéç½®å½åç¹å»ç tab ç ç±»å, ä¸ºäºå»æ active!!
			this._curIndex = [].indexOf.call(this._tabItems, tar) //ððç¨æ°ç»ç [].indexOf æ¹æ³æ¥æ¾å°åç´ ãtarãå¨æ°ç»çãç´¢å¼ä½ã, call æ¯ä¸ºäºæ¹å this æå(æåå° _tabItems, å ä¸º _tabItems æ¯ä¸ä¸ªæ°ç»), æåè¿åãç´¢å¼ä½ãå¹¶ä¿å­å°ã_curIndexãè¿ä¸ªåéä¸
			this._tabItems[this._curIndex].className += ' active' //ððç»å½åèç¦å°çè¿ä¸ä¸ª tab å ä¸ active ç±»åï¼ï¼ ãðè¿æ ·å°±ä¼å®ä½å°çä¸tabï¼ã

			// âï¸âï¸âï¸å½ _curIndex æ¹åå, å°±æ§è¡ notify æ¹æ³, éç¥å­ç±»å»æ§è¡å­ç±»èªå·±çæ¹æ³ï¼ï¼
			this.notify()
		}
	}


	// ð¥ð¥ð¥ãè§å¯èæ¨¡å¼ãéç¥å­ç±»
	private notify () {
		this._methodArr.forEach((item: any) => {//ððð item å°±æ¯å­ç±»ç setPage æ¹æ³
			item(this._pageElement, this._curIndex) //ððð ä¼ å¥ ãé¡µé¢æé¡µé¢å®¹å¨ã ä»¥å ãå½åå®ä½å°åªä¸é¡µã
		})
	}

	// ð¥ð¥å­ç±»å¯ä»¥æ§è¡çæ¹æ³, ðè§å¯èæ¨¡å¼, å»éç¥å­ç±»æ¥æ§è¡å­ç±»èªå·±çæ¹æ³ï¼ð¥ð¥ç­å° _curIndex æ¹ååå­ç±»åæ§è¡èªå·±çæ¹æ³ï¼ï¼ï¼
	//ððððãæ½è±¡ç¶ç±»ãæéå­ç±»çæ¹æ³, å ä¸ºå­ç±»ç»§æ¿äºç¶ç±», æä»¥è½è·å¾è¿ä¸ªæ¹æ³ (â¡ï¸â¡ï¸â¡ï¸ç¸å½äº å­ çæ¹æ³ä¼  ç¶ ï¼)
	protected getMethod (method: any) { 
		// ð¥ð¥æéæ¹æ³, å½ _curIndex æ¹åå, å°±ä¼æ§è¡è¿ä¸ªæ¹æ³ï¼éç¥å­ç±»å»æ§è¡å­ç±»èªå·±çæ¹æ³ï¼ï¼
		this._methodArr.push(method)
	}
}