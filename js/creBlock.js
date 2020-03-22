
function addBlock(container, blockname, title, imgs, path){
	
	//blockname = 'divGH1_1'
	$(container).append('<div id="' + blockname + '" class="portfolio"> </div>');
	

	var con = '	<div class="container"> '
			+ '		<div class="portfolio-top contact-top">'
			+ '			<h3>' + title + '</h3>'
			+ '		</div>'
			+ '		<div  class="portfolio-bottom"></div>'
			+ '	</div>';
	
	$('#' + blockname ).append(con);


	var len = imgs.length;
	var gl = len / 4;
	
	var xb = 0;
	for ( var i =0; i<gl; i++){
		addRow('#' + blockname + ' .portfolio-bottom', i, path, xb, imgs)
		xb += 4;

		// alert('#' + blockname + ' .portfolio-bottom');
	}
	
}
function addRow(pos, rowindex, path, imgindex, imgs){

	var f1 = path + imgs[imgindex];
	var f2 = path + imgs[imgindex +1];
	var f3 = path + imgs[imgindex +2];
	var f4 = path + imgs[imgindex +3];

	
	var rn = "row" + rowindex ;
	 
	$(pos).append('<div class="port-one ' + rn + '"></div>');

	
    
	$(pos + ' .' + rn).append(creimg(f1));
	$(pos + ' .' + rn).append(creimg(f2));
	$(pos + ' .' + rn).append(creimg(f3));
	$(pos + ' .' + rn).append(creimg(f4));	
	$(pos + ' .' + rn).append('<div class="clearfix"></div>'); 
}
function creimg(filename){
	var img = '		<div class="col-md-3 portfolio-left"> '
			+ '			<div class="project-eff"> '
			+ '				<div id="nivo-lightbox-demo">  '
			+ '					<p>  '
			+ '						<a href="' + filename + '" data-lightbox-gallery="gallery1" id="nivo-lightbox-demo">  '
			+ '							<span class="rollover1"> </span> '
			+ '						</a>  '
			+ '					</p> '
			+ '				</div>      '
			+ '				<img class="img-responsive" src="' + filename + '" alt=""> '
			+ '			</div> '
			+ ' </div>'
	return img;
}