import { AbstractBaseToggleFn } from "./AbstractBaseToggleFn";
import { TYPE } from "./Tab";

// ð¥ç»§æ¿æ½è±¡ç±»
export default class Fade extends AbstractBaseToggleFn{
	constructor(ele: HTMLElement) {
		super(ele, TYPE.FADE) //ð¥è®°å¾ super ä¸ä¸, æãåæ°ãä¼ ç»ãç¶ç±»ã
		this.getMethod(this.setPage) //ððððè®©ãæ½è±¡ç¶ç±»ãæéå­ç±»çæ¹æ³, //ä¼ å, åæ°æ¯ä¸ªå½æ°  ðç¶ç±»ä¼åæ¶æ§è¡ä¸¤ä¸ª setPage æ¹æ³
	}


	// ðððç­ä¸å±æ½è±¡ç±»ç¨ãè§å¯èæ¨¡å¼ãæ¥éç¥ãFade å­ç±»]æ§è¡è¿ä¸ªæ¹æ³ï¼ ä¸å¡ä¸æ¯è¦ç­å tab ååå page
	private setPage (pageItems: HTMLCollection, curIndex: number) { //å ä¸ºç»§æ¿èªç¶ç±», æä»¥å¯ä»¥ç´æ¥ä½¿ç¨ç¶ç±»çå±æ§(ãpageItemsãããcurIndexã)
		[...pageItems].map((item: Element) => { //ð¥ð¥[...pageItems]è½¬ææ°ç»
			item.className = 'page-item' //ðððç»æ¯ä¸ªé¡µé¢é½éç½®ç±»å, ä¸ºäºå»æ active!
		})
		console.log(pageItems, curIndex)

		pageItems[curIndex].className += ' active' //ðððç»å½åæ»å¨å°çé¡µé¢æ·»å ä¸ active ç±»åï¼ï¼ãðè¿æ ·å°±ä¼å®ä½å°è¿ä¸é¡µï¼ã
	}
}