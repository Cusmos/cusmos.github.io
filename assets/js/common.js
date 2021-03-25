$(document).ready(function () {
    //pc nav
    var _pcGnb = $('#pcGnb > ul');
    _pcGnb.children().find('div').hide();
    _pcGnb.on('mouseenter focusin', function () {
        $(this).parent().addClass('on');
        $(this).find('div').show().parent().siblings().find('div').show();
        _pcGnb.on('mouseleave focusout', function () {
            $(this).parent().removeClass('on');
            $(this).find('div').hide();    
        });
    });
    _pcGnb.find('div').on('mouseenter focusin', function () {
        $(this).parent().addClass('active');
        $(this).on('mouseleave focusout', function () {
            $(this).parent().removeClass('active');
        });
    });
    //m nav
    var _mGnb = $('#mHeader .mgnb_wrap');
    _mGnb.find('.dep2').hide();
    $('#mHeader .on_top .btn_menu').on('click', function () {
        if ($(this).hasClass('open')) {
            _mGnb.stop().animate({
                right: '-100%'
            }, 800, function () {
                $(this).css({
                        display: 'none'
                    })
                    .find('li.on').removeClass('on').children('ul').stop().slideup();
            });
            $(this).removeClass('open').find('blind-b').text('메뉴 열기');
        } else {
            $(this).addClass('open').find('blind-b').text('메뉴 닫기');
            _mGnb.css({
                display: 'block'
            }).stop().animate({
                right: 0
            }, 800, function () {
                $first.focus(); 
            });
        }
        var $first = _mGnb.find('[data-link="first"]');
        var $last = _mGnb.find('[data-link="last"]');
        $first.on('keydown', function (e) {
            console.log(e.keyCode); //tab을 클릭하면 9를 반환
            if (e.shiftKey && e.keyCode == 9) {
                e.preventDefault(); 
                $last.focus();
            }
        });
        $last.on('keydown', function (e) {
            if (!e.shiftKey && e.keyCode == 9) {
                e.preventDefault();
                $('.btn_menu').focus();
            }
        });

        _mGnb.children('.m_menu').find('ul>li>a').on('click', function () {
            if ($(this).next().length === 0) {
                location.href = $(this).attr("href");
            } else {
                $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp("slow");
                $(this).next().stop().slideToggle("slow").parent().toggleClass('on');
            }
            return false;
        });
    });
    //m nav bg추가
    var timer = 0;
    $(window).on('scroll', function () {
        var scrollT = $(this).scrollTop();
        clearTimeout(timer);
        timer = setTimeout(function () {
          scrollT = $(this).scrollTop();
        if (scrollT > 300){
            $('#mHeader').addClass('bg_change');
        }else{
            $('#mHeader').removeClass('bg_change');
        }
        }, 50);
    });
});

