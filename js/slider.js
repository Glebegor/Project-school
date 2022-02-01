$(document).ready(function() {
    let position = 0;
    const slides = 1;
    const slidesToScroll = 1;
    const sliderInner = $('.slider_inner');
    const slider = $('.slider');
    const sliderItem = $('.sliderItems');
    const btnPrev = $('.sliderBtnPrev');
    const btnNext = $('.sliderBtnNext'); 
    const itemsCount = sliderItem.length;
    const itemWidth = sliderInner.width() / slides;
    const movePos = slidesToScroll * itemWidth;

    sliderItem.each(function(index, item){
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function(){
        position += movePos;
        setPosition()
        testBtn()
    });
    btnNext.click(function(){
        position -= movePos;
        setPosition()
        testBtn()
    });

    const setPosition = () => {
        slider.css({
            transform: `translateX(${position}px)`
        });
    };

    const testBtn = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slides) * itemWidth
        );
    };
    testBtn();
});