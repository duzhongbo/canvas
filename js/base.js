/*
 * 作用：在指定画布中间，绘制指定文案
 * 参数：sTxt：文案；oCanvas：画布
 *
*/
function fillText(sTxt,oCanvas){
	var context = oCanvas.getContext('2d');
	context.font = '38pt Arial';
	context.fillStyle = '#f00';// 填充
	context.fillText(sTxt,oCanvas.width/2-150,oCanvas.height/2 + 15);
}
/*
 * 功能：在指定画布，指定位置,绘制指定边长实心矩形
 * 参数：
 *      nLength:边长；
 *      x:x坐标；
 *      y:y坐标；
 *      oCanvas：画布
 *      alpha：透明度
*/
function fillRect(nLength,x,y,oCanvas,alpha){
	var context = oCanvas.getContext('2d');
    fillStyle('#f00',context,0.5);
	context.fillRect(x,y,nLength,nLength);
}
/*
 * 功能：在指定画布，指定位置,绘制指定边长空心矩形
 * 参数：nLength:边长；x:x坐标；y:y坐标；oCanvas：画布
 *
*/
function strokeRect(nLength,x,y,oCanvas){
	var context = oCanvas.getContext('2d');
	// context.lineJoin = 'round';
	// context.lineWidth = 30;
	context.strokeRect(x,y,nLength,nLength);
}
/*
 * 功能：擦除指定坐标，指定尺寸的矩形区域
 * 参数：x,y坐标，w:宽，h:高，oCanvas：画布
 *
*/
function clearRect(x,y,w,h,oCanvas){
	var context = oCanvas.getContext('2d');
	context.clearRect(0,0,oCanvas.width,oCanvas.height);
}
/*
 * 功能：设置填充的颜色、透明度
 * 参数：
 *      sColor：16进制颜色值
 *      oContext：绘制语境
 *      alpha：透明度,0~之间小数
*/
function fillStyle(sColor,oContext,alpha){
    var color;
    if(alpha){
        var aRgb = sColor.colorRgb();
        color = 'rgba('+aRgb[0]+','+aRgb[1]+','+aRgb[2]+','+alpha+')';
    }else{
        color = sColor;
    }
    oContext.fillStyle=color;
}
/*16进制颜色转为RGB格式*/
String.prototype.colorRgb = function(){
 	// 十六进制颜色值的正则表达式
	var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = this.toLowerCase();
    if(sColor && reg.test(sColor)){
        if(sColor.length === 4){
            var sColorNew = "#";
                for(var i=1; i<4; i+=1){
                    sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));        
                }
                sColor = sColorNew;
        }
        // 处理六位的颜色值
        var sColorChange = [];
        for(var i=1; i<7; i+=2){
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));        
        }
        return sColorChange;
    }else{
        return sColor;        
	}
};