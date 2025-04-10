const controller = new ScrollMagic.Controller();
const sections = document.querySelectorAll(".about, .skills, .Profile, .Project");

sections.forEach((section) => {
    TweenLite.set(section, { opacity: 0, y: 100 });

    const sectionTween = TweenMax.to(section, 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
    });

    new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.5,
        reverse: true,
    })
        .setTween(sectionTween)
        .addTo(controller);
});

//햄버튼
document.addEventListener("DOMContentLoaded", () => {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");
    const overlay = document.createElement("div");
    const mainContent = document.querySelector(".manb_wrap");
    const menuItems = document.querySelectorAll(".mgnb li");
    const closeHamBtn = document.querySelector(".close_ham");

    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const closeMenu = () => {
        ham.classList.remove("active");
        mgnb.classList.remove("active");
        overlay.classList.remove("active");
        mainContent.classList.remove("dimmed");

        menuItems.forEach((item) => {
            item.style.animationDelay = "0s";
        });
    };

    ham.addEventListener("click", (e) => {
        const isActive = ham.classList.toggle("active");
        mgnb.classList.toggle("active", isActive);
        overlay.classList.toggle("active", isActive);
        mainContent.classList.toggle("dimmed", isActive);
    });

    overlay.addEventListener("click", closeMenu);


    document.addEventListener("click", (e) => {
        const isClickInsideHam = ham.contains(e.target);
        const isClickInsideMenu = mgnb.contains(e.target);
        const isClickOnOverlay = overlay.contains(e.target);

        if (!isClickInsideHam && !isClickInsideMenu && !isClickOnOverlay && ham.classList.contains("active")) {
            closeMenu();
        }
    });
    if (closeHamBtn) {
        closeHamBtn.addEventListener("click", (e) => {
            e.preventDefault();
            closeMenu();
        });
    }
});


// 필터
const filterMenuInit = () => {
    const filters = document.querySelectorAll('[data-filter-id]');

    filters.forEach(filter => {
        const filterBtns = [...filter.querySelectorAll('[data-filter]')].filter(el => el.nodeName === 'BUTTON');
        const filterLists = [...filter.querySelectorAll('[data-filter]')].filter(el => el.nodeName === 'LI');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterType = btn.getAttribute('data-filter');

                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');

                filterLists.forEach(list => {
                    if (filterType === 'all') {
                        list.style.display = 'list-item';
                        return;
                    }

                    list.style.display = list.getAttribute('data-filter') === filterType ? 'list-item' : 'none';
                })
            });
        })
    })
};

filterMenuInit();

//모달......한개로 여러개 뜨는 방법 질문
$(".click1").click(function () {
    $(".popup1").fadeIn();
});

$(".popup_close").click(function () {
    $(".popup1").fadeOut();
});


//1단-2
$(".click2").click(function () {
    $(".popup2").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup2").fadeOut();
});


//1단-3
$(".click3").click(function () {
    $(".popup3").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup3").fadeOut();
});

//2단-1
$(".click2_1").click(function () {
    $(".popup4").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup4").fadeOut();
});

//2단-2
$(".click2_2").click(function () {
    $(".popup5").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup5").fadeOut();
});

//2단-3
$(".click2_3").click(function () {
    $(".popup6").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup6").fadeOut();
});


//3단-1
$(".click3_1").click(function () {
    $(".popup7").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup7").fadeOut();
});

//3단-2
$(".click3_2").click(function () {
    $(".popup8").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup8").fadeOut();
});


//3단-3
$(".click3_3").click(function () {
    $(".popup9").fadeIn();
});
$(".popup_close").click(function () {
    $(".popup9").fadeOut();
});
