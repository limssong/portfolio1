$(function () {
    //Common slider : class
    commonTouchSlider(".slide_banner .sb_bann");

    //common calling
    commonTab();
    commonShowHideNav();
    commonClick();
    commonBtnAll();
    commonWidth();

    //star point
    starRating(".box_buy_review_star label");
    starRating(".box_buy_review_circle label");

    //쇼핑 디테일
    shopDetail();

    //my13_channel_control
    channelAll();
    //payment
    commonPaymentLayer();

    //progress
    progressAni();

    //프로모션 리스트 위치
    proImgResize();

    //color chip
    colorChip();

    // //common var
    // var $body = $("body"),
    //     $writerWrap = $body.find(".writer_wrap"); // writer follow


    //common window Scroll ===================================================
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        //profile fix menu
        profileFixMenu();
        cartTotal();

        //scroll start
        if (scrollTop == 0) {
            //alert("start");
            // $writerWrap.fadeIn(200);
        };
        //scroll end
        if (scrollTop == $(document).height() - $(window).height()) {
            //alert("end");
        };
        //scroll ing
        if (scrollTop != 0) {
            // $writerWrap.fadeOut(200);
        };

    });


    //common window size =====================================================
    $(window).resize(function () {
        //리사이징 프로모션 리스트 위치
        proImgResize();
    });

    //COMMON Function ========================================================
    //common Width
    function commonWidth() {

        widthUlNum(".ch_menu li",10);
        widthUlNum(".sub_channel_list li",12);
        widthUlNum(".result_filter li",10);
        widthUlNum(".category_2depth li",10);
        widthUlNum(".category_nation li",10);
        widthUlNum(".product_list li",10);
        widthUlNum(".product_list.tp01 li",10);
        widthUlNum(".product_list.tp02 li",10);
        widthUlNum(".product_list.tp03 li",10);
        widthUlNum(".product_list.tp04 li",10);
        widthUlNum(".product_list.tp05 li",10);
        widthUlNum(".product_list_list li",10);
        widthUlNum(".product_detail_color li",10);
        widthUlNum(".my13_recently_list li",10);
        widthUlNum(".product_detail_color_list li",10);
        widthUlNum(".product_detail_size li",10);
        widthUlNum(".campus_all_menu li",20);
        widthUlNum(".myq_pick_list.style li",20);
        widthUlNum(".myq_pick_list.body li",20);
        widthUlNum(".round_tag button",0);

        function widthUlNum(tg,num) {
            var totalWidth = 0;

            $(tg).each(function () {
                totalWidth += Math.ceil($(this).outerWidth(true));
                $(tg).parent().width(parseInt(totalWidth+num));
            });
        };
    };

    //common slider
    function commonTouchSlider(tg) {

        if ($(".slide_banner").length > 0) {
            $(tg).touchSlider({
                initComplete: function (e) {
                    var $tg = this;
                    var $this = $(this);
                    var paging = $this.next(".paging");
                    var len = Math.ceil(this._len / this._view);

                    paging.html("");
                    for (var i = 1; i <= len; i++) {
                        paging.append('<button type="button" class="btn_page">page' + i + '</button>');
                    }
                    ;

                    paging.find(".btn_page").on("click", function (e) {
                        $tg.go_page($(this).index());
                    });
                },
                counter: function (e) {
                    $(this).next(".paging").find(".btn_page").removeClass("on").eq(e.current - 1).addClass("on");
                }
            });
        }

        if ($(".touchSlider3").length > 0) {
            $(".touchSlider3").touchSlider({
                view: 3
            });
        }
        if ($(".swipe_wrap").length > 0) {
            $(".swipe_wrap").touchSlider({
                roll: false,
                view: 1,
                initComplete: function (e) {
                    var $tg = this,
                        $this = $(this),
                        paging = $this.parents("div").siblings("header").children().children('h2'),
                        // paging = $this.parents("div").siblings("header").children().children().children(".paging"),
                        len = Math.ceil(this._len / this._view);
                    paging.text("")
                    paging.append('<span class="th_page"></span><span>/'+ len +'</span>');

                },
                counter: function (e) {
                    var $tg = this,
                        $this = $(this),
                        len = Math.ceil(this._len / this._view);
                    if(len !== e.current){
                        $("#inch13Wrap").removeClass("bgcolor_fff");
                    }
                    else {
                        $("#inch13Wrap").addClass("bgcolor_fff");
                    }

                    $(this).parents("div").siblings("header").children().children('h2').find(".th_page").text(e.current);
                }
            });
        }

    };

    //common tab
    function commonTab() {
        var $tabli = $(".tab li"),
            $tabliA = $tabli.children("a");

        $tabliA.click(function () {
            var $tg = $(this),
                $tabContent = $(".tab_con"),
                $tabContentDivi = $tabContent.find(">div"),
                i = $tg.parent().index();

            onToggleMy($tabliA, $(this));
            $tabContentDivi.not($tabContentDivi.eq(i).show()).hide();
        });

    };

    //click all
    function commonClick() {

        $(".btn_pick").click(function () {
            commonToggle($(this).parents("dd.img"), "pick_on")
        });

        $(".pay a").click(function () {
            onToggleMy($(".pay a"),this);
        });

        $(".brand_search_filter_item button").click(function(){
            onToggleMy($(".brand_search_filter_item button"), this);
        });
        $(".round_tag button").click(function(){
            onToggleMy($(".round_tag button"), this);
        });
        $(".campus_all_menu li a").click(function(){
            onToggleMy($(".campus_all_menu li a"), this);
        });


        clickCommonDefalut(".page_pick");
        clickCommonDefalut(".page_pick_b");
        clickCommonDefalut(".page_share");
        clickCommonDefalut(".page_share_b");
        clickCommonDefalut(".btn_filter_reset")

        $(".btn_fix_black").click(function () {
            commonToggle($(".page_share_b"), "on");
            commonToggle($(".page_share"), "on");
        });

        function clickCommonDefalut(tg) {
            $(tg).click(function () {
                commonToggle($(this), "on");
            });
        }
    }

    //common on toggle
    function onToggleMy(tg1, tg2) {
        //tg2 == $(this)
        tg1.not($(tg2).addClass("on")).removeClass("on");
    };

    function commonToggle(tg1, tg2) {
        tg1.toggleClass(tg2);
    };

    //common hamburger
    function commonShowHideNav() {
        var allCartegory = $(".side_wrap");
        $(".btn_ham_open").click(function () {
            allCartegory.addClass("slidein_left").removeClass("slideout_left").show();
        });

        $(".btn_close_side").click(function () {
            allCartegory.removeClass("slidein_left").addClass("slideout_left");

            setTimeout(function () {
                allCartegory.hide();
            }, 300);
        });
    };

    //profile fix
    function profileFixMenu() {
        //
        if ($(".tab_con").length) {
            var $profileInfo = $(".tab_con").offset(),
                windowScrollTop = $(window).scrollTop();

            var $profileInfoTop = $profileInfo.top

            if (windowScrollTop > $profileInfoTop - 180) {
                // $("#inch13Header").css("background", "#fff").css("height", "50px")
                $(".profile").addClass("on");
            }
            else {
                // $("#inch13Header").css("background", "transparent").css("height", "50px")
                $(".profile").removeClass("on");
            };

            $(".tab li").click(function(){
                $(window).scrollTop($profileInfoTop-110)
            })
        };
    };

    //btn Click Event All
    function commonBtnAll() {
        //btn ===================================================================
        //profile.html
        var $fileterBtn = $(".result_filter span");
        $fileterBtn.click(function () {
            if ($(this).hasClass("add")) {
                textToggle($(this), "delete", "add")
            } else {
                textToggle($(this), "add", "delete")
            }
        });
        //follow.html
        var $followBtn = $(".follow");
        $followBtn.click(function (event) {
            event.stopPropagation();
            if ($(this).hasClass("btn_follow")) {
                textToggle($(this), "btn_following", "btn_follow", "팔로우");
            } else {
                textToggle($(this), "btn_follow", "btn_following", "팔로잉");
            }
            ;
        });

        //main

        var $chMenuA = $(".ch_menu > li > a"),
            $chMenuBtn = $(".ch_menu_more"),
            $sideListA = $(".side_list > li > a");
        // GNB 선택시 on
        $chMenuA.click(function () {
            $chMenuA.parent("li").not($(this).parent().addClass("on")).removeClass("on");
        });

        // 채널 더보기 열기
        $chMenuBtn.click(function () {
            $(this).toggleClass("open");
        });

        // 사이드메뉴 더보기
        $sideListA.click(function () {
            $(this).parent().toggleClass("open");
        });

        //btn text change
        function textToggle(tg, tg1, tg2, txt) {
            tg.addClass(tg1).removeClass(tg2).text(txt);
        };

        // More Channel Menu View
        var $allMenu = $(".gnb_menu_list_all");
        $(".gnb_menu_list_more").click(function () {
            $allMenu.addClass("dp_block");
        });
        $(".btn_layer_cancel").click(function () {
            $allMenu.removeClass("dp_block");
        });

        $(".insert input").click(function () {
			var asdf = $(this).length.val;
			alert(asdf);
			if ( asdf > 0 )
			{
				$(this).parent().addClass("on");
			}
			else {
				$(this).parent().removeClass("on");
			}
        });

        $(".insert_cancel").click(function () {
			$(this).siblings("input").val("");
			$(this).parent(".insert").removeClass("on");
        });

        //상품 Q&A
        // slide toggle & Icon
        var $writeMeAskList = $(".write_me_ask_list > dt");
        $writeMeAskList.click(function () {
            var $tg = $(this);
            $tg.find(".fa-chevron-down").toggleClass("fa-chevron-up");
            $tg.next(".write_me_ask_list > dd").slideToggle();
        });


        //Brand search filter button
        //index_brand_ranking
        var $brandBtn = $(".brand_search_filter_item .btn_white_big_type01");

        $brandBtn.on({
            click: function () {
                $(this).addClass("on");
            },
            mouseout: function () {
                $(this).removeClass("on");
            }
        });

        // 환불계좌 등록/수정 Layer
        var $confirmBtn = $(".refund_account_none .btn_white_big_type01");
        var $confirmOpenLayer = $(".layer_refund_account_write");
        $confirmBtn.click(function () {
            $confirmOpenLayer.addClass("dp_block");

        });

        $confirmOpenLayer.find(".btn_fix_black_freeSize:nth-of-type(1)").click(function () {
            $(this).toggleClass("dp_block");

        });
    };

    //star score
    function starRating(tg) {
        $(tg).each(function () {
            var $tg = $(this);
            var score = $tg.text();
            $tg.click(function () {
                starChangeText($tg)
            });

            $tg.mouseover(function () {
                starChangeText($tg)
            });

            function starChangeText(tg01) {
                tg01.parent(".buy_score_list").siblings("output").children("strong").text(score);
            };
        })
    };

    //shopping detail
    function shopDetail() {
        var num = parseInt($(".detail .sb_bann").find("img").first().height()),
            jbOffset = $(".tabmenu_product_detail").offset();

        $(".sd_info").css("top", num);
        $(".slide_banner.detail").css("min-height", num)

        $(window).resize(function () {
            var num = $(".detail .sb_bann").find("img").height();
            $(".sd_info").css("top", num - 25);
            $(".slide_banner.detail").css("min-height", num);
        })

        $(window).scroll(function () {
            var num = parseInt($(".detail .sb_bann").find("img").first().height());
            if ($(".sd_info").length > 0) {
                if ($(this).scrollTop() > parseInt($(".sd_info").offset().top)) {
                    // $(".page_prev").toggleClass("page_prev_b")
                    $(".page_head").addClass("black").css("background","#fff");
                    //$(".sd_info").css("top", 0);
                } else {
                    $(".page_head").removeClass("black").css("background","transparent");
                    $(".sd_info").css("top", num - 25);
                }
            }
            //상단 고정
            if ($(".tabmenu_product_detail").length > 0) {
                if ($(document).scrollTop()+200 > $(".tab_con").offset().top) {
                // if ($(document).scrollTop()+200 > jbOffset.top) {
                    $(".tabmenu_product_detail").addClass("ps_fix");
                }
                else {
                    $(".tabmenu_product_detail").removeClass("ps_fix");
                }
            }
        })

        if ($("#tabs").length > 0) {
            $(".tabmenu_product_detail_list li").click(function () {
                $(window).scrollTop($("#tabs").offset().top - 50)
            });
        }

        //상품상세: 옵션선택박스 삭제
        $(".product_detail_buy_list> li > a").click(function () {
            $(this).parent(".product_detail_buy_list> li").remove();
        });
        // 상품상세: 프로모션 박스
        $(".arrow_thin_type01.down").click(function () {
            $(this).toggleClass("up");
            $(".promotion_etc_sub").slideToggle();
        });
        // 상품상세: 문의tab
        $(".product_detail_ask_list > dt").click(function () {
            $(this).children().children().next().children().next().toggleClass("fa-chevron-up");
            $(this).next(".product_detail_ask_list > dd").slideToggle();
        });
        // 상품상세: slide
        $(".product_detail_etc_list > dt").click(function () {147

            $(this).children().children().next().children().toggleClass("fa-chevron-up");
            $(this).next(".product_detail_etc_list > dd").slideToggle();
        });

    }

    //channel
    function channelAll() {
        var $channelAllList = $('.channel_all > .channel_all_list > li');
        // Channel control

        $channelAllList.find(".channel_del").click(function () {
            deleteChannel($(this));

            //삭제될 때 '전체 채널' 체크를 해제
        });
        $channelAllList.on('change', function () {
            var $th = $(this);
            if ($th.find('input').is(':checked')) {
                var $liTag = $('<li></li>'),
                    $chName = $('<span class="channel_name">' + $th.find('label .label_top').text() + '<br/>' + $th.find('label .label_bottom').text() + '</span>'),
                    $chDel = $('<span class="channel_del"><a href="#none" title="해당 채널 삭제하기"><img src="../../images/ico_cancel_gray_01.png" width="15" height="15" alt="채널 삭제"></a></span>');

                $chDel.on('click', function () {
                    deleteChannel($(this));
                });

                $liTag.append($chName);
                $liTag.append($chDel);

                $('.channel_plus > .channel_plus_list').append($liTag);
            } else {
                //체크를 없앨 때(전체채널), '내가 추가한 채널'에서 사라지도록
            }
        });

        function deleteChannel(_th) {
            _th.closest('li').remove();
        }

        var $btnsmallType = $(".channel_plus > .order_sorting > .btn_black_small_type02");
        var $channelOrder = $(".channel_control > .channel_order");

        $btnsmallType.click(function () {
            $channelOrder.addClass("dp_block");
            $channelOrder.removeClass("dp_none");
        });
        $(".channel_control > .channel_order > .box_btn_channel_order > button:nth-of-type(1)").click(function () {
            $channelOrder.removeClass("dp_block");
            $channelOrder.addClass("dp_none");
        });
        $btnsmallType.bind("touchstart", function () {
            function touchHandler(event) {
                var touches = event.changedTouches,
                    first = touches[0],
                    type = "";
                switch (event.type) {
                    case "touchstart":
                        type = "mousedown";
                        break;
                    case "touchmove":
                        type = "mousemove";
                        break;
                    case "touchend":
                        type = "mouseup";
                        break;
                    default:
                        return;
                }
                var simulatedEvent = document.createEvent("MouseEvent");
                simulatedEvent.initMouseEvent(type, true, true, window, 1,
                    first.screenX, first.screenY,
                    first.clientX, first.clientY, false,
                    false, false, false, 0/*left*/, null);

                first.target.dispatchEvent(simulatedEvent);
                event.preventDefault();
            }

            function init() {
                var box = document.getElementById("box_order");
                box.addEventListener("touchstart", touchHandler, true);
                box.addEventListener("touchmove", touchHandler, true);
                box.addEventListener("touchend", touchHandler, true);
                box.addEventListener("touchcancel", touchHandler, true);
            }

            init();
        });
    }

    //payment
    function commonPaymentLayer() {
        //주문 상품 슬라이드
        $(".tit_payment_orderproduct > a").click(function () {
            $(".tit_payment_orderproduct > a > i").toggleClass("fa-angle-down");
            $(".payment_orderproduct").slideToggle();
        });
        //개인통관고유번호 발급방법 Layer
        var $ppguide = $(".payment_personalcode_guide");
        $ppguide.find("a").click(function () {
            $ppguide.find(".layer_type01").addClass("dp_block");
        });
        $ppguide.find(".btn_fix_black").click(function () {
            $(".payment_personalcode .payment_personalcode_guide > .layer_type01").removeClass("dp_block");
            $(".payment_personalcode .payment_personalcode_guide > .layer_type01").addClass("dp_hidden");
        });
        //배송지변경 Layer
        $(".payment_destination_info .btn_white_small_type02").click(function () {
            $(".payment_destination_info > .layer_type01").addClass("dp_block");
        });
        $(".payment_destination_info > .layer_type01 .layer_destination_change_button .btn_fix_black_freeSize:nth-of-type(1)").click(function () {
            $(".payment_destination_info > .layer_type01").removeClass("dp_block");
            $(".payment_destination_info > .layer_type01").addClass("dp_hidden");
        });
        //쿠폰변경 Layer
        $(".shopping_payment .payment_discount .payment_discount_list > dd:nth-of-type(3) > .btn_white_small_type02").click(function () {
            $(".shopping_payment .payment_discount > .layer_type01").addClass("dp_block");
        });
        $(".shopping_payment .payment_discount > .layer_type01 .btn_size_50 > .btn_fix_black_freeSize:first-of-type").click(function () {
            $(".shopping_payment .payment_discount > .layer_type01").removeClass("dp_block");
            $(".shopping_payment .payment_discount > .layer_type01").addClass("dp_hidden");
        });

        //쇼핑 디테일 뷰
        // Share하기 레이어팝업
        $(".inch13Wrap_product_detail .page_head .page_function > .page_share").click(function () {
            $(".inch13Wrap_product_detail .page_head .page_function > .layer_share").addClass("dp_block");
            $("body").addClass("of_hidden");
        });
        $(".inch13Wrap_product_detail .page_head .page_function > .layer_share > .btn_fix_black").click(function () {
            $(".inch13Wrap_product_detail .page_head .page_function > .layer_share").removeClass("dp_block");
            $("body").removeClass("of_hidden");
        });
    }

    //slide action icon
    iconChange($(".guide_slide > dt"));
    iconChange($(".my13_point .point_guide > dt"))

    function iconChange(tg) {
        //Slide
        tg.click(function () {
            $(this).children().children().next().children().toggleClass("fa-chevron-up");
            $(this).next("dd").slideToggle();
        });
    }


    //progress
    function progressAni() {
        var num = 0,
            tabLiA = $(".shopping_wrap .tabmenu_type02 li"); // 각 프로그레스

        //임시 데이터
        var data = [30, 90, 80, 70, 60, 50, 40, 30, 20, 50]; // tab01 임시데이터
        var data2 = [99, 80, 70, 60, 20]; // tab02 임시데이터
        var data3 = [50, 40, 30, 20, 10]; // 프리오더 임시데이터
        var data4 = [30, 90, 80, 70, 60, 50, 40, 30, 20, 50]; // 쇼핑상세 임시데이터

        //기본 .t1 recommend.html
        setIntProgress(".progress_in.t1 .progress_wrap", data, num, ".progress_int2 .progress_in")
        setIntProgress(".progress_in.t3 .progress_wrap", data3, num) // 프리오더 t3
        setIntProgress(".progress_in.t4 .progress_wrap", data4, num) // 쇼핑 상세 t4

        //tab click
        tabLiA.unbind().click(function () {
            var tgIndex = $(this).index()
            num = 0;
            $(".progress_wrap").children(".moving_bar").width(0);
            if (tgIndex == 0) {
                setIntProgress(".progress_in.t1 .progress_wrap", data, num, ".progress_in.t2 .progress_wrap");

            } else if (tgIndex == 2) {
                setIntProgress(".progress_in.t2 .progress_wrap", data2, num, ".progress_in.t1 .progress_wrap")
            }
        })

        //프로그레스 animation
        function setIntProgress(tg01, dat, len, tg02) {
            var myProgress = setInterval(function () {
                $(tg01).eq(len).children(".moving_bar").animate({"width": dat[len] + "%"}, 1000);
                $(tg02).eq(len).children(".moving_bar").width(0)

                //숫자로딩 실행
                autoIncrementVal($(tg01).eq(len).children(".progress_wrap_num"), dat[len], 1500);

                len++;

                //종료
                if (len == $(tg01).length) {
                    clearInterval(myProgress);
                }
            }, 100)
        }

        //숫자로딩
        function autoIncrementVal(obj, val, durationVal) {
            $({someValue: 0}).animate({someValue: val}, {
                duration: durationVal,
                easing: 'swing',
                step: function () {
                    obj.text(Math.ceil(this.someValue) + "%");
                }
            });
        }
    }

    // Cart order layer control
    function cartTotal() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop != 0)
            $(".cart_total").slideUp();
        else
            $(".cart_total").slideDown();
    }

    //shopping promotion
    function proImgResize() {
        var start_promotion = $(".hotdeal_promotion_img").height();
        $(".box_hotdeal_promotion").css("top", start_promotion - 20);
        $(".tag").css("top", start_promotion - 38);
    }


    //shopping detail

    function colorChip() {
        //data 임시 값
        var data = ["#ef3f36", "#feb300", "#8f9414", "#0672a3", "#ffffff"],
            data2 = ["빈티지레드", "멜란지 옐로우", "올리브 그린", "코발트 블루", "퓨어화이트"];

        var $userSelectColor = $(".color_chip");

        $userSelectColor.each(function (i) {
            var tg = $(this);
            tg.css('background', data[i]).css('border-color', data[i]);
            tg.next(".txt").text(data2[i])
        })
    }

    ////////////////////////////////////////////////////////////////////////////


    // Quantity control
    // shopping_product_detail.html
    var $countRangeBtn = $(".count_range > input[type=button]");
    $countRangeBtn.click(function (e) {
        e.preventDefault();
        var type = $(this).attr('class'),
            $count = $(this).parent().children('input.count'),
            count_val = $count.val(); // min 1
        if (type == "count_range_minus") {
            if (count_val < 1) {
                return;
            }
            ;
            $count.val(parseInt(count_val) - 1);
        } else if (type == "count_range_plus") {
            $count.val(parseInt(count_val) + 1);
        }
        ;
    });

    //Address control
    //my13_address_list.html
    var $selectAdress = $(".address_list input");
    $selectAdress.each(function () {
        $(this).click(function () {
            if ($(this).prop("checked", true)) {
                $selectAdress.parents("dl").siblings(".address_list_button").not($(this).parents("dl").siblings(".address_list_button").toggleClass("dp_block")).removeClass("dp_block");
            }
        });
    });

    // Cart top menu fixed

    // Cart top menu fixed
    var nav = $(".shopping_cart_option");
    var navoffset = $(".shopping_cart_option").offset();
    $(window).scroll(function () {
        if ($(".shopping_cart_option").length > 0) {
            if ($(this).scrollTop() >= $(".shopping_cart_option").top) {
                nav.addClass("ps_fixed");
            } else {
                nav.removeClass("ps_fixed");
            }
        }
    });

    $(".tit_restock_guide").click(function () {
        $(".arrow").toggleClass("on");
        $(".box_restock_guide").slideToggle();
    })

})

/*
          * Basic Count Down to Date and Time
          * Author: @mrwigster / trulycode.com
          */
$(function (e) {
    e.fn.countdown = function (t, n) {
        function i() {
            eventDate = Date.parse(r.date) / 1e3;
            currentDate = Math.floor(e.now() / 1e3);
            if (eventDate <= currentDate) {
                n.call(this);
                clearInterval(interval)
            }
            seconds = eventDate - currentDate;
            days = Math.floor(seconds / 86400);
            seconds -= days * 60 * 60 * 24;
            hours = Math.floor(seconds / 3600);
            seconds -= hours * 60 * 60;
            minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;
            days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
            hours == 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
            minutes == 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
            seconds == 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
            if (r["format"] == "on") {
                days = String(days).length >= 2 ? days : "0" + days;
                hours = String(hours).length >= 2 ? hours : "0" + hours;
                minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
                seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
            }
            if (!isNaN(eventDate)) {
                thisEl.find(".days").text(days);
                thisEl.find(".hours").text(hours);
                thisEl.find(".minutes").text(minutes);
                thisEl.find(".seconds").text(seconds)
            } else {
                alert("Invalid date. Example: 30 Tuesday 2013 15:50:00");
                clearInterval(interval)
            }
        }

        var thisEl = e(this);
        var r = {
            date: null,
            format: null
        };
        t && e.extend(r, t);
        i();
        interval = setInterval(i, 1e3)
    }
});
$(function () {
    function e() {
        var e = new Date;
        e.setDate(e.getDate() + 60);
        dd = e.getDate();
        mm = e.getMonth() + 1;
        y = e.getFullYear();
        futureFormattedDate = mm + "/" + dd + "/" + y;
        return futureFormattedDate
    }

    $("#countdown").countdown({
        date: "8 September 2020 09:00:00", // Change this to your desired date to countdown to
        format: "on"
    });
});
