 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

 (function() {
   var teamProfiles = {
     "profile-alexander.html": {
       name: "Okoroafor Alexander",
       role: "Programs Manager & Special Needs Educator",
       image: "images/team-images/Updated Head Shot, Alexander U. Okoroafor (7).png",
       bio: "Okoroafor Alexander designs and executes inclusive educational frameworks that meet the unique needs of Deaf learners and students with disabilities."
     },
     "profile-chidinma.html": {
       name: "Chidinma Ogueri",
       role: "Product Designer & Creative Designer",
       image: "images/team-images/chidinma-ogueri-new.png",
       bio: "Chidinma Ogueri is a technology-driven creative professional whose work spans product design, visual communication, poetry, digital innovation, and TechBDI administration."
     },
     "profile-nnenna.html": {
       name: "Nnenna Ogbonna",
       role: "Founder & Executive Director",
       image: "images/team-images/Updated Headshot Nnenna M. Ogbonna.png",
       bio: "Nnenna Ogbonna leads TechBDI's mission to bridge the digital divide for Deaf girls, the girl child, women in underrepresented communities, and persons with disabilities."
     },
     "profile-akpe.html": {
       name: "Akpe Samuel",
       role: "Frontend Engineer",
       image: "images/team-images/rayflix.png",
       bio: "Akpe Samuel builds accessible, responsive, and user-friendly digital experiences with modern web standards and a strong commitment to social impact."
     },
     "profile-okechukwu.html": {
       name: "Okechukwu Umezurike",
       role: "Creative Technologist & Mentor",
       image: "images/team-images/okechukwu-umezurike.jpe",
       bio: "Okechukwu Umezurike is a graphic designer and frontend practitioner who supports digital skills education and mentors young innovators through the Technovation Girls Challenge."
     },
     "profile-norah.html": {
       name: "Norah Obinna-Ukoha",
       role: "Young Tech Innovator & Mentor",
       image: "images/team-images/norah-obinna-ukoha.png",
       bio: "Norah Obinna-Ukoha is a young tech innovator and Student Ambassador who helps girls explore technology, question ideas, and develop practical app solutions."
     },
     "profile-deborah.html": {
       name: "Deborah Isah",
       role: "Impact Storyteller & Creative Lead",
       image: "images/team-images/deborah-isah.png",
       bio: "Deborah Isah uses storytelling, media, and creativity to amplify voices, inspire action, support girls' empowerment, and turn awareness into meaningful change."
     },
     "profile-innocent.html": {
       name: "Innocent Ubadire Okoro",
       role: "Sign Language Tutor & Mentor",
       image: "images/team-images/innocent-ubadire-okoro.png",
       bio: "Innocent Ubadire Okoro promotes inclusion as a sign language tutor and interpreter and mentors Deaf girls in technology and innovation."
     }
   };

   function createTeamBioModal() {
     var $modal = $('<div class="modal fade team-bio-modal" id="teamBioModal" tabindex="-1" role="dialog" aria-labelledby="teamBioTitle" aria-hidden="true"></div>');
     $modal.html(
       '<div class="modal-dialog modal-dialog-centered" role="document">' +
         '<div class="modal-content">' +
           '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' +
           '<div class="modal-body text-center">' +
             '<img class="team-bio-avatar" src="" alt=""><h3 class="mb-2" id="teamBioTitle"></h3>' +
             '<h6 class="text-primary mb-3" id="teamBioRole"></h6><p id="teamBioText"></p>' +
             '<a class="btn btn-primary px-4 py-2 mt-2" id="teamBioProfileLink" href="#">View full profile</a>' +
           '</div>' +
         '</div>' +
       '</div>'
     );
     $('body').append($modal);
   }

   $(function() {
     if (!$('.staff').length) return;
     createTeamBioModal();

     $('.staff h3 a[href^="profile-"]').each(function(index) {
       var $link = $(this);
       var profile = $link.attr('href');
       var data = teamProfiles[profile];
       if (!data) return;

       var $button = $('<button type="button" class="team-bio-link" data-toggle="modal" data-target="#teamBioModal"></button>');
       $button.text(data.name).attr('aria-label', 'Open bio for ' + data.name);
       $button.on('click', function() {
         $('#teamBioTitle').text(data.name);
         $('#teamBioRole').text(data.role);
         $('#teamBioText').text(data.bio);
         $('.team-bio-avatar').attr('src', data.image).attr('alt', data.name);
         $('#teamBioProfileLink').attr('href', profile);
       });
       $link.replaceWith($button);
     });
   });
 }());

(function($) {

	"use strict";

	$(window).stellar({
    responsive: false,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-cause').owlCarousel({
			autoplay: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding:0,
			nav: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1,
					stagePadding: 0
				},
				600:{
					items: 2,
					stagePadding: 50
				},
				1000:{
					items: 3,
					stagePadding: 100
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('#appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('#appointment_time').timepicker();




})(jQuery);

