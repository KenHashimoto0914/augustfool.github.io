// $(function() {
// 	$('.slider').slick({
// 		autoplay: true,
// 		autoplayspeed:3000,
//  		arrows: false,
//  		centerMode: true,
//  		variableWidth: true,
// 		mobileFirst:true,
// 	});
// });

$('.slider').slick({
    centerMode: true,
    centerPadding: '100px',
    dots:true,
    focusOnSelect:true,
		variableWidth: true,
		mobileFirst:true,
});

// $('.slider').slick({
//     arrows:false,
// 		centerMode: true,
//     asNavFor:'.slider-item',
// });
// $('.slider-item').slick({
//     asNavFor:'.slider',
//     focusOnSelect: true,
//     slidesToShow:4,
//     slidesToScroll:1
// });

// スマホ用ハンバーガー

$('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('main').removeClass('open');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('main').addClass('open');
      $('nav').addClass('open');
      $('.overlay').addClass('open');
    }
  });
  $('.overlay').on('click',function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('main').removeClass('open');
      $('nav').removeClass('open');
    }
  });
