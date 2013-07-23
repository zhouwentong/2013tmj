$(function(){
	//slider
	$('.m1 .b ul').cycle({
        fx:     'scrollLeft',
        speed:  'fast',
        timeout: 3000
    });
	
	$('.m3 .b ul').cycle({
        fx:     'scrollLeft',
        speed:  'fast',
        timeout: 3000,
        pager:  '.m3 .f'
    });
})
