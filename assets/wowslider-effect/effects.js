// stack_vertical
// options.revers - change the direction of transition
// options.fadeOut - fade out old image
function ws_stack_vertical(a,n,g){var d=jQuery,q=d(this),r=d("li",g),p=d("<div>").addClass("ws_effect ws_stack_vertical").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(g);this.go=function(e,l,b){var f=(a.revers?1:-1)*g.height();r.each(function(a){b&&a!=l&&(this.style.zIndex=Math.max(0,this.style.zIndex-1))});var c=d(".ws_list",g),h=d("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(d(n.get(b?
e:l)).clone()),k=d("<div>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",zIndex:4}).append(d(n.get(b?l:e)).clone());3>a.responsive&&(h.find("img").css("width","100%"),k.find("img").css("width","100%"));b?(k.appendTo(p),h.appendTo(p)):(h.insertAfter(c),k.insertAfter(c));b?a.fadeOut&&c.fadeOut(a.duration):(c.stop(!0,!0).hide().css({left:-e+"00%"}),a.fadeOut?c.fadeIn(a.duration):c.show());e={top:b?f:0};var c={top:b?0:.5*-f},f={top:b?0:f},m={top:(b?1:0)*g.height()*
.5};a.support.transform&&(e={translate:[0,e.top,0]},c={translate:[0,c.top,0]},f={translate:[0,f.top,0]},m={translate:[0,m.top,0]});wowAnimate(h,e,f,a.duration,a.duration*(b?0:.1),"easeInOutExpo",function(){q.trigger("effectEnd");h.remove();k.remove()});wowAnimate(k,c,m,a.duration,a.duration*(b?.1:0),"easeInOutExpo")}};
// parallax
// options.parallax = [0, 1] - offset width*parallax
function ws_parallax(h,e,c){var d=jQuery,t=d(this),u=c.find(".ws_list"),q=h.parallax||.25,l=d("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_parallax").appendTo(c),k=d("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)"}).appendTo(l),m=k.clone().appendTo(l);this.go=function(v,r,f){var a=d(e.get(r)),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),
marginLeft:a.css("marginLeft")};f=f?1:-1;var n=d(e.get(r)).clone().css(a).appendTo(k),p=d(e.get(v)).clone().css(a).appendTo(m),g=c.width()||h.width;c.height();u.hide();wowAnimate(function(b){b=d.easing.swing(b);var a=Math.round(f*b*g*1E3)/1E3,c=Math.round(f*(-g+b*g)*1E3)/1E3,e=Math.round(-f*g*q*b*1E3)/1E3;b=Math.round(f*g*q*(1-b)*1E3)/1E3;h.support.transform?(k.css("transform","translate3d("+a+"px,0,0)"),n.css("transform","translate3d("+e+"px,0,0)"),m.css("transform","translate3d("+c+"px,0,0)"),p.css("transform",
"translate3d("+b+"px,0,0)")):(k.css("left",a),n.css("margin-left",e),m.css("left",c),p.css("margin-left",b))},0,1,h.duration,function(){l.hide();n.remove();p.remove();t.trigger("effectEnd")})}};
