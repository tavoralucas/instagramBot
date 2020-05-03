const next =  document.querySelector('a.coreSpriteRightPaginationArrow');
var counter = 0;


function doLike(){
	const like_btn =  document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
	if(like_btn){
		like_btn.click();
		counter++;
		console.log('Curtisse ' +counter+ ' posts! ');
	}
	const next =  document.querySelector('a.coreSpriteRightPaginationArrow');
next.click();
}




(function loop() {
	setTimeout(() => {
		doLike();
		loop();
	}, 5000)
}())
