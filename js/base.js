/*
 * 作用：绘制指定文案
 * 参数：sTxt：文案；oCanvas：画布
 *
*/
function showTxt(sTxt,oCanvas){
	var context = oCanvas.getContext('2d');
	context.font = '38pt Arial';
	context.fillStyle = '#f00';// 填充
	context.strokeStyle = '#0f0';// 描边
	context.fillText(sTxt,oCanvas.width/2-150,oCanvas.height/2 + 15);
	context.strokeText(sTxt,oCanvas.width/2-150,oCanvas.height/2+15);

}