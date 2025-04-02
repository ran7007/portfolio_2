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