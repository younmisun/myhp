// younmi_hp

(function($){

  const gnb = $('.gnb');
  const gnbBtn = gnb.find('button');
  const closeBtn = $('.btn_close');
  const popUp = $('#popUp');
  const menuCon = popUp.find('section');

  const homi = $('.younmis');

  //portfolioZone

  const portfolio = $('#portfolio');
  const pfMenu = portfolio.children('.pf_menu');
  const pfMenuBtn = pfMenu.find('button');

  const pfArtCon = portfolio.find('article');
  const pfConMenu = pfArtCon.find('ul');
  const pfConBtn = pfConMenu.find('button');
  const pfCon = pfArtCon.children('div');
  
  pfMenuBtn.on('click',function(){
    let i = $(this).parents('li').index();
    // let i = pfArtCon.index();
    console.log(i);
    pfArtCon.eq(i).siblings('article').hide();
    pfArtCon.eq(i).show();
  })
  
  pfConBtn.on('click',function(e){
    e.preventDefault();
    let i = $(this).parents('li').index();
    //console.log(i);
    // pfCon.eq(i).show();    
    // pfCon.eq(i).siblings('div').hide();
    let pfWrap =  $(this).parents('ul').next('.pf_wrap');
    let pfDiv = pfWrap.children('div');
    pfDiv.hide();
    pfDiv.eq(i).show();

  })
  // PRODUCT


  
  
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

  
  })(jQuery);
