(function(){

	// Highlight current nav item
	var hasCurrent = false;

	function absolute(href) {
	    var link = document.createElement("a");
	    link.href = href;
	    return (link.protocol+"//"+link.host+link.pathname+link.search+link.hash);
	}

	$('#main-nav > li').each(function(){
		$(this).removeClass('current-menu-item current_page_item');
	});
	var links = $('#main-nav > li > a');
	var urls = window.location.href;

	for (var i = links.length; i >= 0; i--) {
		if(urls.indexOf(absolute(links[i])) != -1){
			$(links[i]).parent().addClass('current-menu-item current_page_item');
			//为什么还要设置hasCurrent？因为不排除首页是
			//https://xxxx/index.html格式的
			hasCurrent = true;
			break;
		}		
	}


	if (!hasCurrent) {
		$('#main-nav > li:first').addClass('current-menu-item current_page_item');
	}
})();



// article toc
var toc = document.getElementById('toc')

if (toc != null) {
	window.addEventListener("scroll", scrollcatelogHandler);
	var tocPosition = 194+25;

	function scrollcatelogHandler(e) {
		 var event = e || window.event,
		     target = event.target || event.srcElement;
		 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		 if (scrollTop > tocPosition) {
		     toc.classList.add("toc-fixed");
		 } else {
		     toc.classList.remove("toc-fixed");
		 }
	}
}


$('#main-navigation').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    } else {
      $('#main-navigation').addClass('main-navigation-open');
    }
  });

$('#content').on('click', function(){
    if ($('#main-navigation').hasClass('main-navigation-open')){
      $('#main-navigation').removeClass('main-navigation-open');
    }
  });