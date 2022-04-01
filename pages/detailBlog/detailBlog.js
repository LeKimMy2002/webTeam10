$(document).ready(function() {
    $(".header-logo img").attr("src", "../../../assets/img/logo.svg")
    $(".footer-logo img").attr("src", "../../../assets/img/logo.svg")
    $(".order-btn a").attr("href", "../../../index.html")
    $(".instruct a").attr("href", "../../product/product.html")
    $(".choose a").attr("href", "../blog.html")

    $(".order-btn a").html("Trang chủ")
    $(".order-btn").removeClass("active")
    $(".instruct a").html("Đặt đồ ăn")
    $(".choose a").html("Công thức bếp")

    $(".option span").click(function() {
        $(".option span").removeClass("ops-active")
        $(this).addClass("ops-active")
    })
})

let NewArray = listpost.sort(function (a, b) {
    return a.view - b.view;
});

const listhot = document.getElementById("host-post")
function hostpost(array) {
    for(var i = 0; i < array.length; i++) {
        if(listhot) {
            const item = document.createElement("DIV")
            item.classList.add("post-item")
            item.innerHTML = `
                <div>
                    <img src="${array[i].image_1}" alt="/">
                </div>
                <div>
                    <a href='../item/item.html' onclick='detailspost(${listpost[i].id})'>${array[i].namepost}</a>
                    <p>${array[i].description}</p>
                    <span><i class="far fa-eye"></i><span>${array[i].view}</span></span>
                </div>
            `;
            listhot.appendChild(item)
        }
        if( i == 3 ) {
            break;
        }
    }
}
hostpost(NewArray.reverse())

var index = localStorage.getItem("linkpost");
details();
function details() {
    const container = document.getElementById("details-post")
    const item = document.createElement("DIV")
    item.innerHTML = `
        <h2>${listpost[index].namepost}</h2>
        <ul class="infor-post">
            <li class="author-post">
                <span>${listpost[index].author}</span>
                <i>|</i>
            </li>
            <li class="time-post">
                <span>${listpost[index].time}</span>
                <i>|</i>
            </li>
            <li class="view-post">
                <span><i class="far fa-eye"></i></span><span>${listpost[index].view}</span>
            </li>
        </ul>
        <p class="description">${listpost[index].description}</p>
        <div class="content-post">
            <div>
                <img src="${listpost[index].image_1}" alt="/">
            </div>
            <p><span>- Nguyên liệu làm món nem chay cho bốn người: </span>${listpost[index].nguyenlieu}</p>
            <div>
                <img src="${listpost[index].image_2}" alt="/">
            </div>
            <p><span>- Các bước tiến hành: </span>${listpost[index].step}</p>
            <div>
                <img src="${listpost[index].image_3}" alt="/">
            </div>
            <p>${listpost[index].end}</p>
            <span>~ Sưu tầm ~</span>
        </div>
    `;
    container.appendChild(item)
}
