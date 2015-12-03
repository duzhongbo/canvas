function showTxt(sTxt,oDom){
	var context = oDom.getContext('2d');
	context.font = '38pt Arial';
	context.fillStyle = '#f00';// 填充
	context.strokeStyle = '#0f0';// 描边
	context.fillText(sTxt,oDom.width/2-150,oDom.height/2 + 15);
	context.strokeText(sTxt,oDom.width/2-150,oDom.height/2+15);

}