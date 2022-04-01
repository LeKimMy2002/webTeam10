const footer = document.getElementById("footer")
if(footer) {
    const myfooter = document.createElement("DIV")
    myfooter.classList.add("footer")
    myfooter.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col col-lg-12">
                    <div class="row">
                        <div class="footer-about col col-12 col-md-6 col-xl-4">
                            <ul>
                                <li><h3>Về chúng tôi</h3></li>
                                <li><span><i class="fas fa-map-marker"></i></span>Đại học Thủy Lợi CS1</li>
                                <li><span><i class="fas fa-phone"></i></span>+84 1900 2611</li>
                                <li><span><i class="fas fa-clock"></i></span>00:00 - 23:59</li>
                            </ul>
                            <ul>
                                <li><a href="/"><span><i class="fab fa-facebook"></i></span></a></li>
                                <li><a href="/"><span><i class="fab fa-instagram"></i></span></a></li>
                                <li><a href="/"><span><i class="fab fa-youtube"></i></span></a></li>
                            </ul>
                        </div>
                        <div class="footer-logo col col-12 col-md-12 col-xl-4">
                            <img style="width: 100px;" src="../../assets/img/logo.svg" alt="">
                            <h3>Tiny<span class="food-text">Food</span></h3>
                            <p>Có mặt trong mỗi bữa ăn gia đình</p>
                        </div>
                        <div class="footer-input col col-12 col-md-6 col-xl-4">
                            <ul>
                                <li><h3>Liên hệ quảng cáo</h3></li>
                                <li><input type="text" title="Hãy nhập Email..."/></li>
                                <li><button>Submit</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    footer.appendChild(myfooter)
}