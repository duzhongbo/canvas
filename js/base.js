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
 * 参数：nLength:边长；x:x坐标；y:y坐标；oCanvas：画布
 *
*/
function fillRect(nLength,x,y,oCanvas){
	var context = oCanvas.getContext('2d');
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