"use strict"
function addSwitcher()
{
	
	
	var demoPanel='<div class="dlab-demo-panel"> <div class="bg-close"></div><a class="dlab-demo-trigger" data-toggle="tooltip" data-placement="right" data-original-title="Check out more demos" href="javascript:void(0)"><span><i class="las la-tint"></i></span></a> <div class="dlab-demo-inner"> <a href="javascript:void(0);" class="btn btn-primary btn-sm px-2 py-1 mb-3" onclick="deleteAllCookie()">Delete All Cookiesss</a> <div class="dlab-demo-header"> <h4>Select A Demossss</h4> <a class="dlab-demo-close" href="javascript:void(0)"><span><i class="las la-times"></i></span></a> </div><div class="dlab-demo-content"> <div class="dlab-wrapper row"><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx "> <div class="overlay-wrapper"><img src="images/demo/pic1.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="1" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 1</a></div></div><h5 class="text-white mb-3">Demo 1</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx"> <div class="overlay-wrapper"><img src="images/demo/pic2.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="2" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 2</a></div></div><h5 class="text-white mb-3">Demo 2</h5> </div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx"> <div class="overlay-wrapper "><img src="images/demo/pic3.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="3" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 3</a></div></div><h5 class="text-white mb-3">Demo 3</h5> </div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx demo-active"> <div class="overlay-wrapper"><img src="images/demo/pic4.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="4" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 4</a></div></div><h5 class="text-white mb-3">Demo 4</h5> </div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx"> <div class="overlay-wrapper"><img src="images/demo/pic5.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="5" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 5</a></div></div><h5 class="text-white mb-3">Demo 5</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx"> <div class="overlay-wrapper"><img src="images/demo/pic6.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="6" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 6</a></div></div><h5 class="text-white mb-3">Demo 6</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx"> <div class="overlay-wrapper"><img src="images/demo/pic7.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="7" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 7</a></div></div><h5 class="text-white mb-3">Demo 7</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx dlab-demo-bx"> <div class="overlay-wrapper"><img src="images/demo/pic8.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0)" data-theme="8" class="btn dlab_theme_demo btn-secondary btn-sm mr-2">Demo 8</a></div></div><h5 class="text-white mb-3">Demo 8</h5></div></div></div><div class="note-text"><span class="text-danger">*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a href="../doc/index.html" target="_blank" class="text-primary">documentation.</a></div></div></div>';
	
	if($("#dlabSwitcher").length == 0) {
		jQuery('body').append(dlabSwitcher+demoPanel);
		
			
		 //const ps = new PerfectScrollbar('.sidebar-right-inner');
		 //console.log(ps.reach.x);	
			//ps.isRtl = false;
				
		  $('.sidebar-right-trigger,.sidebar-switcher-trigger').on('click', function() {
				$('.sidebar-right').toggleClass('show');
		  });
		  $('.sidebar-close-trigger,.bg-overlay').on('click', function() {
				$('.sidebar-right').removeClass('show');
		  });
	}
    
    // Set default theme to Demo 4
// function setDefaultTheme() {
//     body.attr('data-theme-version', 'light');
//     body.attr('data-layout', 'vertical');
//     body.attr('data-sidebar-style', 'full');
//     body.attr('data-sidebar-position', 'fixed');
//     body.attr('data-header-position', 'fixed');
//     body.attr('data-container', 'wide');
//     body.attr('data-typography', 'roboto');
//     body.attr('data-nav-headerbg', 'color_4');
//     body.attr('data-headerbg', 'color_4');
//     body.attr('data-sibebarbg', 'color_4');
//     body.attr('data-primary', 'color_4');
//     body.attr('data-secondary', 'color_4');
//     body.attr('direction', 'ltr');
// }

// Call the function to set the default theme
// setDefaultTheme();
}

(function($) {
    "use strict"
	addSwitcher();

	
    const body = $('body');
    const html = $('html');

    //get the DOM elements from right sidebar
    const typographySelect = $('#typography');
    const versionSelect = $('#theme_version');
    const layoutSelect = $('#theme_layout');
    const sidebarStyleSelect = $('#sidebar_style');
    const sidebarPositionSelect = $('#sidebar_position');
    const headerPositionSelect = $('#header_position');
    const containerLayoutSelect = $('#container_layout');
    const themeDirectionSelect = $('#theme_direction');

    //change the theme typography controller
    typographySelect.on('change', function() {
        body.attr('data-typography', this.value);
		
		setCookie('typography', this.value);
    });

    //change the theme version controller
    versionSelect.on('change', function() {
		body.attr('data-theme-version', this.value);
		
		/* if(this.value === 'dark'){
			//jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text-white.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text-white.png");
			
			setCookie('logo_src', './images/logo-white.png');
			setCookie('logo_src2', 'images/logo-text-white.png');
		}else{
			jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text.png");
			
			setCookie('logo_src', './images/logo.png');
			setCookie('logo_src2', 'images/logo-text.png');
		} */
		
		setCookie('version', this.value);
    }); 
	
	

    //change the sidebar position controller
    sidebarPositionSelect.on('change', function() {
        this.value === "fixed" && body.attr('data-sidebar-style') === "modern" && body.attr('data-layout') === "vertical" ? 
        alert("Sorry, Modern sidebar layout dosen't support fixed position!") :
        body.attr('data-sidebar-position', this.value);
		setCookie('sidebarPosition', this.value);
    });

    //change the header position controller
    headerPositionSelect.on('change', function() {
        body.attr('data-header-position', this.value);
		setCookie('headerPosition', this.value);
    });

    //change the theme direction (rtl, ltr) controller
    themeDirectionSelect.on('change', function() {
        html.attr('dir', this.value);
        html.attr('class', '');
        html.addClass(this.value);
        body.attr('direction', this.value);
		setCookie('direction', this.value);
    });

    //change the theme layout controller
    layoutSelect.on('change', function() {
        if(body.attr('data-sidebar-style') === 'overlay') {
            body.attr('data-sidebar-style', 'full');
            body.attr('data-layout', this.value);
            return;
        }

        body.attr('data-layout', this.value);
		setCookie('layout', this.value);
    });
    
    //change the container layout controller
    containerLayoutSelect.on('change', function() {
        if(this.value === "boxed") {

            if(body.attr('data-layout') === "vertical" && body.attr('data-sidebar-style') === "full") {
                body.attr('data-sidebar-style', 'overlay');
                body.attr('data-container', this.value);
                
                setTimeout(function(){
                    $(window).trigger('resize');
                },200);
                
                return;
            }
            
            
        }

        body.attr('data-container', this.value);
		setCookie('containerLayout', this.value);
    });

    //change the sidebar style controller
    sidebarStyleSelect.on('change', function() {
        if(body.attr('data-layout') === "horizontal") {
            if(this.value === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if(body.attr('data-layout') === "vertical") {
            if(body.attr('data-container') === "boxed" && this.value === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }

            if(this.value === "modern" && body.attr('data-sidebar-position') === "fixed") {
                alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
                return;
            }
        }
		
		/* if(this.value === "modern") {
			//body.attr('data-sibebarbg') === "color_11"
			body.attr("data-sibebarbg", "color_12");
		} */

        body.attr('data-sidebar-style', this.value);

         if(body.attr('data-sidebar-style') === 'icon-hover') {
            $('.dlabnav').on('hover',function() {
			$('#main-wrapper').addClass('iconhover-toggle'); 
            }, function() {
			$('#main-wrapper').removeClass('iconhover-toggle'); 
            });
        } 
		
		setCookie('sidebarStyle', this.value);
	});

    
	
	/* jQuery("#nav_header_color_1").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
		setCookie('logo_src', './images/logo.png');
		return false;
    }); */
    
	/* jQuery("#sidebar_color_2, #sidebar_color_3, #sidebar_color_4, #sidebar_color_5, #sidebar_color_6, #sidebar_color_7, #sidebar_color_8, #sidebar_color_9, #sidebar_color_10, #sidebar_color_11, #sidebar_color_12, #sidebar_color_13, #sidebar_color_14, #sidebar_color_15").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		jQuery(".nav-header .brand-title").attr("src", "./images/logo-text-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */
   
    /* jQuery("#nav_header_color_3").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */

	
	//change the nav-header background controller
    $('input[name="navigation_header"]').on('click', function() {
		body.attr('data-nav-headerbg', this.value);
		setCookie('navheaderBg', this.value);
    });
	
    //change the header background controller
    $('input[name="header_bg"]').on('click', function() {
        body.attr('data-headerbg', this.value);
		setCookie('headerBg', this.value);
    });

    //change the sidebar background controller
    $('input[name="sidebar_bg"]').on('click', function() {
        body.attr('data-sibebarbg', this.value);
		setCookie('sidebarBg', this.value);
    });
	
	//change the primary color controller
    $('input[name="primary_bg"]').on('click', function() {
        body.attr('data-primary', this.value);
		setCookie('primary', this.value);
    });
	$('input[name="secondary_bg"]').on('click', function() {
        body.attr('data-secondary', this.value);
		setCookie('secondary', this.value);
    });


})(jQuery);
