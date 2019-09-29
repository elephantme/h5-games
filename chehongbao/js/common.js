$(function () {
  FZ(20, 375);
  var hdgg = new HDGG({
    appkey: getUrlParam('appkey'),
    adSpaceKey: getUrlParam('adSpaceKey'),
    times: 8, // 拆红包次数
    timesEle: '#countZa', // 显示剩余次数
    recordEle: '.jiang',
    name: '狂欢红包来袭复用（新插件）',
    type: 456,
    rem: 20 / 375
  });
  
  //超过0点清空记录
  var agoTime = hdgg.storage.get('agoTime') ? hdgg.storage.get('agoTime') : new Date().getTime();
  if (new Date().getTime() > agoTime) {
    hdgg.storage.remove('agoTime');
    hdgg.storage.set('agoTime', new Date(new Date().toLocaleDateString()).getTime() / 1 + 86400000);
  }
	 
  var dian = true;
  var haveTime = true;
  var img_bao = "";

  // 创建一个撕红包的gif图
  var bbb = function () {
    // todo
    img_bao = "https://hdggcdn.bayimob.com/hdggstatic/chehongbao/redbag3.gif?v=" + Date.now();
    var changeImg = new Image();
    changeImg.src = img_bao
  };
  bbb();

  // 拆红包
  $('.starta').on('click', function () {
    if (haveTime) {
      hdgg.storage.set('agoTime', new Date(new Date().toLocaleDateString()).getTime() / 1 + 86400000);
      haveTime = false;
    }
    if (!dian) {
      return;
    }
    // todo
    var startC = hdgg.start();
    if (startC < 0) {
      return;
    }
    dian = false;

    // 隐藏拆红包及手势提示按钮
    $('.starta').hide();
    $('.DB_guide').hide();
    // 将红包背景替换为拆红包gif图
    $('.xiangzi').addClass('add_chai_gif').css('background-image', 'url(' + img_bao + ')');

    setTimeout(function () {
      // todo
      hdgg.win({
        success: function (res) {
          // 显示拆红包结果
          alertCommon(res.ad.imageUrl, res.ad.advIntro);
          // 给关闭按钮绑定单击事件（单击取消会随机增加可提现金额）
          closeBtn(res);
          // 
          closeGo(res);
        }
      });
    }, 800);
  });

  // 规则
  $('.rule').on('click', function () {
    $('.alerty').show();
    $('.zhenotice').show();
  });

  $('body .moresay').on('click', function () {
    $(this).toggleClass('activeadv');
    $('.moresayp').toggle();
  });

  $('.alerty').on('click', '.saclose', function () {
    $('.moresay').removeClass('activeadv');
    $('.moresayp').hide();
    $('.alerty').hide();
    $('.zhenotice').hide();
  });

  // 显示弹窗
  function alertCommon(imageUrl, advIntro) {
    var strs = '<div class="popShowPrize" id="dialog5" style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"><div class="caiguang"></div><div class="m-box"></div><div class="showPrize-dialog modal-body"><div class="dings"><div class="card-bg""><img src="' + imageUrl + '"></div><div class="red-bg"></div><div class="red-bg1"></div><div class="red-bg2"></div><div class="red-txt"></div><div class="detail"><div class="topic">' + advIntro + '</div><div class="goto"></div></div><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span><span class="ribbon"></span></div></div></div>'
    $('body').append(strs);
    setTimeout(function () {
      $('#dialog5').append('<span id="close" class="close-btn closetc iconfont"></span>');
    }, 1500)
  }

	function alertCommon1(imageUrl,advIntro) {
		
		var strs ='<div class="propur"><div class="tcAnimation"><div class="imgBox"></div><div class="imgUrl"><img src="'+ imageUrl +'"/></div><div class="txt">'+ advIntro+'</div><div class="redBox"></div><div class="jinBox"> </div><div class="baoBox"></div><div class="linGo"></div></div></div>' 
		$('body').append(strs);
		// setTimeout(function() {
			// $('.baoBox').addClass('baoxiangGo')
			setTimeout(function() {
				$('.jinBox,.redBox').show()
			},500)
		// },600)
		
		setTimeout(function() {
			$('.propur').append('<span id="closes" class="close-btns closetc iconfont"></span>');
		
		}, 1500)
	}

  function closeBtn(res) {
    $('#dialog5').on('click', '.close-btn', function () {
      res.close();
      window.styleReset();
    })
  }

  function closeBtns(res) {
  	$('.propur').on('click', '.close-btns', function() {
  		res.close();
  		window.styleReset();
  	})
  }

  // 重置一些样式
  window.styleReset = function () {
    $('#dialog5').addClass('hidem');
    $('#dialog5').remove();
    dian = true;
    $('.xiangzi').removeClass('add_chai_gif').css('background-image', 'url(https://hdggcdn.bayimob.com/hdggstatic/chehongbao/redbag1.png)');
    $('.DB_guide').show();
    $('.starta').show();
		// $('.mengceng').hide()
		// $('.propur').remove()
    bbb();
  }

  function closeGo(res) {
    $('.goto').on('click', function () {
      res.click();
    })
    $('.showPrize-dialog .card-bg img').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var imgs = 1;
      res.click(imgs);
    })
  }
  
	function closeGos(res) {
		$('.linGo').on('click', function() {
			res.click();
		})
		$('.propur  img').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			var imgs = 1;
			res.click(imgs);
		})
	}
});

function FZ(a, b) {
  function getFZ() {
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 750) {
      width = 750;
    }
    var fontSize = (a / b) * width;
    return fontSize;
  };
  document.documentElement.style.fontSize = getFZ() + "px";
  window.onresize = function () {
    setTimeout(function () {
      document.documentElement.style.fontSize = getFZ() + "px";
    }, 100);
  };
}

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}


