const prev = $("#prev"),
    next = $("#next"),
    slide = $(".slide"),
    box = $(".slides")
    

let index = 0;
next.click(function () {
    if(index < slide.length - 1) {
        index++;
    }   else {
        index = 0
    }
    box[0].style.transform = `translateX(-${index * 1300}px)`;
})

prev.click(function() {
    if( index === 0 ) {
        index = slide.length - 1;
    }   else {
        index--;
    }
    box[0].style.transform = `translateX(-${index * 1300}px)`;
})

setInterval(function () {
    next.click();
}, 10000);


  