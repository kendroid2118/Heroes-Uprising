! function(e) {
    "use strict";
    e(window).on("load", (function() { e(".preloader").fadeOut() })), e(".preloader").length > 0 && e(".preloaderCls").each((function() { e(this).on("click", (function(s) { s.preventDefault(), e(".preloader").css("display", "none") })) })), e.fn.vsmobilemenu = function(s) {
        var t = e.extend({ menuToggleBtn: ".vs-menu-toggle", bodyToggleClass: "vs-body-visible", subMenuClass: "vs-submenu", subMenuParent: "vs-item-has-children", subMenuParentToggle: "vs-active", meanExpandClass: "vs-mean-expand", subMenuToggleClass: "vs-open", toggleSpeed: 400 }, s);
        return this.each((function() {
            var s = e(this);

            function a() {
                s.toggleClass(t.bodyToggleClass);
                var a = "." + t.subMenuClass;
                e(a).each((function() { e(this).hasClass(t.subMenuToggleClass) && (e(this).removeClass(t.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(t.subMenuParentToggle)) }))
            }
            s.find("li").each((function() {
                var s = e(this).find("ul");
                s.addClass(t.subMenuClass), s.css("display", "none"), s.parent().addClass(t.subMenuParent), s.prev("a").addClass(t.meanExpandClass), s.next("a").addClass(t.meanExpandClass)
            }));
            var n = "." + t.meanExpandClass;
            e(n).each((function() {
                e(this).on("click", (function(s) {
                    var a;
                    s.preventDefault(), e(a = this).next("ul").length > 0 ? (e(a).parent().toggleClass(t.subMenuParentToggle), e(a).next("ul").slideToggle(t.toggleSpeed), e(a).next("ul").toggleClass(t.subMenuToggleClass)) : e(a).prev("ul").length > 0 && (e(a).parent().toggleClass(t.subMenuParentToggle), e(a).prev("ul").slideToggle(t.toggleSpeed), e(a).prev("ul").toggleClass(t.subMenuToggleClass))
                }))
            })), e(t.menuToggleBtn).each((function() { e(this).on("click", (function() { a() })) })), s.on("click", (function(e) { e.stopPropagation(), a() })), s.find("div").on("click", (function(e) { e.stopPropagation() }))
        }))
    }, e(".vs-menu-wrapper").vsmobilemenu();
    var s = "";
    e(window).on("scroll", (function() {
        var t, a, n, i, o;
        t = e(".sticky-active"), a = "active", n = "will-sticky", i = e(window).scrollTop(), o = t.css("height"), t.parent().css("min-height", o), e(window).scrollTop() > 800 ? (t.parent().addClass(n), i > s ? t.removeClass(a) : t.addClass(a)) : (t.parent().css("min-height", "").removeClass(n), t.removeClass(a)), s = i, e(this).scrollTop() > 500 ? e(".scrollToTop").addClass("show") : e(".scrollToTop").removeClass("show")
    })), e(".scrollToTop").each((function() { e(this).on("click", (function(t) { return t.preventDefault(), e("html, body").animate({ scrollTop: 0 }, s / 3), !1 })) })), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var s = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + s + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e(".popup-image").magnificPopup({ type: "image", gallery: { enabled: !0 } }), e(".popup-video").magnificPopup({ type: "iframe" }), e(".filter-active").imagesLoaded((function() {
        if (e(".filter-active").length > 0) {
            var s = e(".filter-active").isotope({ itemSelector: ".filter-item", filter: "*", masonry: { columnWidth: ".filter-item" } });
            e(".filter-menu-active").on("click", "button", (function() {
                var t = e(this).attr("data-filter");
                s.isotope({ filter: t })
            })), e(".filter-menu-active").on("click", "button", (function(s) { s.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active") }))
        }
    }));
    var t, a, n, i = e(".slick-3d-active");
    i.on("init", (function(s, t, a) {
            var n = e(t.$slides[t.currentSlide]),
                i = n.next(),
                o = n.next().next(),
                l = n.prev(),
                r = n.prev().prev();
            l.addClass("slick-3d-prev"), i.addClass("slick-3d-next"), r.addClass("slick-3d-prev2"), o.addClass("slick-3d-next2"), n.removeClass("slick-3d-next").removeClass("slick-3d-prev").removeClass("slick-3d-next2").removeClass("slick-3d-prev2"), t.$prev = l, t.$next = i
        })).on("beforeChange", (function(s, t, a, n) {
            var i = e(t.$slides[n]);
            t.$prev.removeClass("slick-3d-prev"), t.$next.removeClass("slick-3d-next"), t.$prev.prev().removeClass("slick-3d-prev2"), t.$next.next().removeClass("slick-3d-next2");
            var o = i.next(),
                l = i.prev();
            l.addClass("slick-3d-prev"), o.addClass("slick-3d-next"), l.prev().addClass("slick-3d-prev2"), o.next().addClass("slick-3d-next2"), t.$prev = l, t.$next = o, i.removeClass("slick-next").removeClass("slick-3d-prev").removeClass("slick-next2").removeClass("slick-3d-prev2")
        })), i.slick({ speed: 1e3, arrows: !0, dots: !1, focusOnSelect: !0, prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>', nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>', infinite: !0, centerMode: !0, slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, centerPadding: "0", swipe: !0, customPaging: function(e, s) { return "" }, responsive: [{ breakpoint: 1024, settings: { arrows: !1 } }] }), e.fn.vsTab = function(s) {
            var t = e.extend({ sliderTab: !1, tabButton: "button" }, s);
            e(this).each((function() {
                var s = e(this),
                    a = s.find(t.tabButton);
                s.append('<span class="indicator"></span>');
                var n = s.find(".indicator");
                if (a.on("click", (function(s) {
                        s.preventDefault();
                        var a = e(this);
                        a.addClass("active").siblings().removeClass("active"), t.sliderTab ? e(i).slick("slickGoTo", a.data("slide-go-to")) : l()
                    })), t.sliderTab) {
                    var i = s.data("asnavfor"),
                        o = 0;
                    a.each((function() {
                        var a = e(this);
                        a.attr("data-slide-go-to", o), o++, a.hasClass("active") && e(i).slick("slickGoTo", a.data("slide-go-to")), e(i).on("beforeChange", (function(e, a, n, i) { s.find(t.tabButton + '[data-slide-go-to="' + i + '"]').addClass("active").siblings().removeClass("active"), l() }))
                    }))
                }

                function l() {
                    var i = s.find(t.tabButton + ".active"),
                        o = i.css("height"),
                        l = i.css("width"),
                        r = i.position().top + "px",
                        c = i.position().left + "px";
                    n.get(0).style.setProperty("--height-set", o), n.get(0).style.setProperty("--width-set", l), n.get(0).style.setProperty("--pos-y", r), n.get(0).style.setProperty("--pos-x", c), e(a).first().position().left == i.position().left ? n.addClass("start").removeClass("center").removeClass("end") : e(a).last().position().left == i.position().left ? n.addClass("end").removeClass("center").removeClass("start") : n.addClass("center").removeClass("start").removeClass("end")
                }
                l()
            }))
        }, e(".vs-slider-tab").length && e(".vs-slider-tab").vsTab({ sliderTab: !0, tabButton: ".tab-btn" }), e(".recent-post-tab").length && e(".recent-post-tab").vsTab({ sliderTab: !0, tabButton: ".nav-link" }), SmoothScroll({ animationTime: 1e3, stepSize: 100, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !1, arrowScroll: 50, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, touchpadSupport: !1, fixedBackground: !0, excluded: "" }), e.fn.vsCursor = function() {
            var s = e(this);
            let t = { x: 0, y: 0, targetX: 0, targetY: 0 };
            e(document).on("mousemove", e => { t.targetX = e.pageX, t.targetY = e.pageY });
            let a = function() { t.x += .2 * (t.targetX - t.x), t.y += .2 * (t.targetY - t.y), s.css({ transform: "translate(" + Math.floor(t.x - 5) + "px, " + Math.floor(t.y - 5) + "px)" }), requestAnimationFrame(a) };
            a()
        }, e(".vs-cursor").vsCursor(), t = ".sidemenu-wrapper", a = ".sideMenuCls", n = "show", e(".sideMenuToggler").on("click", (function(s) { s.preventDefault(), e(t).addClass(n) })), e(t).on("click", (function(s) { s.stopPropagation(), e(t).removeClass(n) })), e(t + " > div").on("click", (function(s) { s.stopPropagation(), e(t).addClass(n) })), e(a).on("click", (function(s) { s.preventDefault(), s.stopPropagation(), e(t).removeClass(n) })),
        function(s, t, a, n) { e(t).on("click", (function(t) { t.preventDefault(), e(s).addClass(n) })), e(s).on("click", (function(t) { t.stopPropagation(), e(s).removeClass(n) })), e(s).find("form").on("click", (function(t) { t.stopPropagation(), e(s).addClass(n) })), e(a).on("click", (function(t) { t.preventDefault(), t.stopPropagation(), e(s).removeClass(n) })) }(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"), (new universalParallax).init(), e(".parallax").length && e(".parallax").each((function() {
            var s = e(this).data("bg-class");
            e(this).parent().addClass(s)
        })), e("[data-ani-duration]").each((function() {
            var s = e(this).data("ani-duration");
            e(this).css("animation-duration", s)
        })), e("[data-ani-delay]").each((function() {
            var s = e(this).data("ani-delay");
            e(this).css("animation-delay", s)
        })), e("[data-ani]").each((function() {
            var s = e(this).data("ani");
            e(this).addClass(s), e(".slick-current [data-ani]").addClass("vs-animated")
        })), e(".vs-carousel").on("afterChange", (function(s, t, a, n) { e(t.$slides).find("[data-ani]").removeClass("vs-animated"), e(t.$slides[a]).find("[data-ani]").addClass("vs-animated") })), e(".breaking-news-slider").slick({ dots: !1, infinite: !0, speed: 300, slidesToShow: 1, prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>', nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>', vertical: !0, responsive: [{ breakpoint: 1199, settings: { arrows: !1 } }] })
}(jQuery);


