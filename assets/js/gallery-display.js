
$(document).ready(function() {
	
	//lightGallery($(".photoGallery"));
	//lightGallery(document.getElementsByClassName('photoGallery'));
	//$( '.photoGallery' ).lightGallery();
	var lg = document.querySelectorAll( '.photoGallery');
	for ( var i = 0; i < lg.length; i++ ) {
		lightGallery( lg[i]);
	}
});

