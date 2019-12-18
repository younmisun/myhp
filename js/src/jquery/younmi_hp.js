// younmi_hp

(function($){

  const gnb = $('.gnb');
  const gnbBtn = gnb.find('button');
  const closeBtn = $('.btn_close');
  const popUp = $('#popUp');
  const menuCon = popUp.find('section');

  const homi = $('.younmis');

  //ABOUT ME
  const aboutMe = $('#aboutMe');
  const aA = aboutMe.find('a');
  const shiny = $('.shiny');

  setInterval(function(){
    shiny.toggle();
  },200)

  //ABOUT PORTFOLIO
  const portfolio = $('#portfolio');
  const pfMenu = portfolio.children('.pf_menu');
  const pfMenuBtn = pfMenu.find('button');

  const pfArtCon = portfolio.find('article');
  const pfConMenu = pfArtCon.find('ul');
  const pfConBtn = pfConMenu.find('button');
  const pfCon = pfArtCon.children('div');

  //ABOUT GALLERY
  const gallery = $('#gallery');

  const gallWrap = gallery.children('.gall_wrap');
  const gallPrev = gallWrap.children('.gall_preview');
  const gallBtn = gallPrev.find('button');
  const gallImgWrap = gallWrap.children('.gall_img');
  const gallImg = gallImgWrap.find('div');

  //GNB
  gnbBtn.on('click',function(e){
    e.preventDefault();
    let i = $(this).parent('li').index();
    popUp.show();
    menuCon.eq(i).show();
    menuCon.eq(i).siblings('section').hide();
  })

  closeBtn.on('click',function(e){
    e.preventDefault();
    popUp.hide();
  })

  let jump = 0;
  homi.on('mouseenter',function(){
    jump = parseInt(Math.random()*100 + 100);
    $(this).css({transform:`translate(${jump}px, ${-jump/2}px)`});
  })
  
  //ABOUT ME ZONE
  
  //PORTFOLIO ZONE
  pfMenuBtn.on('click',function(){
    let i = $(this).parents('li').index();
    pfArtCon.eq(i).siblings('article').hide();
    pfArtCon.eq(i).show();
  })
  
  pfConBtn.on('click',function(e){
    e.preventDefault();
    let i = $(this).parents('li').index();
    let pfWrap =  $(this).parents('ul').next('.pf_wrap');
    let pfDiv = pfWrap.children('div');
    pfDiv.hide();
    pfDiv.eq(i).show();
  });

  //GALLERY ZONE
  gallBtn.on('click',function(e){
    e.preventDefault();
    let i = $(this).parents('li').index();
    gallImg.eq(i).show();
    gallImg.eq(i).siblings('div').hide();

  })


  
  })(jQuery);
