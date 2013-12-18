$(document).ready(function(){

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        }
        ,BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        ,iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        ,Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        ,Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        }
        ,any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    $('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class0

    //***********************
    //**评论的代码也删掉哦***
    window.disqus_shortname = 'androidcoder90'; // required: replace example with your forum shortname
    $('#disqus_container .comment').on('click',function(){
        $(this).html('加载中...');
        var that = this;
        $.getScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){$(that).remove()});
    });
    //**评论的代码也删掉哦***
    //***********************

    $('.entry a').each(function(index,element){
        var href = $(this).attr('href');
        if(href){
            if(href.indexOf('#') == 0){
            }else if ( href.indexOf('/') == 0 || href.toLowerCase().indexOf('androidcoder90.github.io')>-1 ){
            }else if ($(element).has('img').length){
            }else{
                $(this).attr('target','_blank');
                $(this).addClass('external');
            }
        }
    });

    (function(){
        var ie6 = ($.browser.msie && $.browser.version=="6.0") ? true : false;

       function initHeading(){
            var heading = [],
                level = 1
                h1index = h2index = h3index = 0;
            $.each($('.entry h1, .entry h2, .entry h3'),function(i,item){
                var hClass = item.getAttribute('class');
                if(hClass && hClass.indexOf('entry-title') > -1){
                    return true;
                }
                var headInfo = {},
                    id,name = '',
                    headingNode,
                    index;
                //init 
                if(item.tagName.toLowerCase() == 'h1'){
                    h1index++;h2index = 0;                    
                    index = h1index.toString();
                    headingNode = heading;
                }else if(item.tagName.toLowerCase() === 'h2'){
                    h2index++;h3index = 0;
                    index = (h1index) + '.' + h2index;
                    if(!heading[h1index-1]){
                        heading[h1index-1] = {};
                    }
                    if(!heading[h1index-1].list){
                        heading[h1index-1].list = [];
                    }
                    headingNode = heading[h1index-1].list;
                }else if(item.tagName.toLowerCase() === 'h3'){
                    h3index++;
                    index = (h1index) + '.' + (h2index) + '.' +h3index ;
                    if(!heading[h1index-1].list[h2index-1]){
                        heading[h1index-1].list[h2index-1] = {};
                    }
                    if(!heading[h1index-1].list[h2index-1].list){
                        heading[h1index-1].list[h2index-1].list = [];
                    }
                    headingNode = heading[h1index-1].list[h2index-1].list;

                }

                //set data
                headInfo.id = item.id = 'menuIndex'+ (index.replace(/\./g,'-'));
                headInfo.name = (index.split('.').length>2 ? '':index)
					+ ' ' + $(item).text();
                var title = index + ' ' + $(item).text();
                $(item).text(title);
                headingNode.push(headInfo);
            });

            return heading;
        }

        function genTmpl(){
            var tmpl = '<ul>';
            var heading = initHeading();

            (function(heading,level){
                for(var i=0;i<heading.length;i++){
                    tmpl += '<li><a class="h'+ level +'" href="#" data-id="'+heading[i].id+'">'+heading[i].name+'</a></li>';
                    if(heading[i].list){
                        arguments.callee(heading[i].list, level+1);
                    }
                }
            })(heading,1);
            tmpl += '</ul>';

            return tmpl;
        }

        function genIndex(){
            var tmpl = genTmpl();
            var indexCon = '<div id="menuIndex" class="sidenav"></div>';

            $('#content').append(indexCon);

            $('#menuIndex')
                .append($(tmpl))
                .delegate('a','click',function(e){
                    e.preventDefault();

                    var selector = $(this).attr('data-id') ? '#'+$(this).attr('data-id') : 'h1'
                    var scrollNum = $(selector).offset().top;

                    $('body, html').animate({ scrollTop: scrollNum-30 }, 400, 'swing');
                });
        }

        var waitForFinalEvent = (function () {
            var timers = {};
            return function (callback, ms, uniqueId) {
                if (!uniqueId) {
                    uniqueId = "Don't call this twice without a uniqueId";
                }
                if (timers[uniqueId]) {
                    clearTimeout (timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })();

        if($('.entry h1').length > 2 && !isMobile.any() && !ie6){

            genIndex();

            $(window).load(function(){
                var scrollTop = [];
                $.each($('#menuIndex li a'),function(index,item){
                    var selector = $(item).attr('data-id') ? '#'+$(item).attr('data-id') : 'h1'
                    var top = $(selector).offset().top;
                    scrollTop.push(top);
                });

                var menuIndexTop = $('#menuIndex').offset().top;
                var menuIndexLeft = $('#menuIndex').offset().left;

                $(window).scroll(function(){
                    waitForFinalEvent(function(){
                        var nowTop = $(window).scrollTop();
                        var length = scrollTop.length;
                        var index;

                        if(nowTop+20 > menuIndexTop){
                            $('#menuIndex').css({
                                position:'fixed'
                                ,top:'20px'
                                ,left:menuIndexLeft
                            });
                        }else{
                            $('#menuIndex').css({
                                position:'static'
                                ,top:0
                                ,left:0
                            });
                        }

                        if(nowTop+60 > scrollTop[length-1]){
                            index = length;
                        }else{
                            for(var i=0;i<length;i++){
                                if(nowTop+60 <= scrollTop[i]){
                                    index = i;
                                    break;
                                }
                            }
                        }
                        $('#menuIndex li').removeClass('on');
                        $('#menuIndex li').eq(index-1).addClass('on');
                    });
                });

                $(window).resize(function(){
                    $('#menuIndex').css({
                        position:'static'
                        ,top:0
                        ,left:0
                    });

                    menuIndexTop = $('#menuIndex').offset().top;
                    menuIndexLeft = $('#menuIndex').offset().left;

                    $(window).trigger('scroll')
                    $('#menuIndex').css('max-height',$(window).height()-80);
                });
            })

            //用js计算屏幕的高度
            $('#menuIndex').css('max-height',$(window).height()-80);
        }
    })();

    $.getScript('/js/prettify/prettify.js',function(){
        prettyPrint();
    });

    if(/\#comment/.test(location.hash)){
        $('#disqus_container .comment').trigger('click');
    }

    if(/css3-animation/.test(location.href)){
        $("head").append("<link rel='stylesheet' type='text/css' href='/css/css3-ani.css'/>");
        $.getScript('/js/css3-ani.js',function(){});
    }
});
