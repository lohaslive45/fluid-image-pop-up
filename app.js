const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img"); //相簿內 單張小圖 全選
const original = document.querySelector(".large-img"); //彈出後 放大圖
const caption = document.querySelector(".caption");  //彈出後 大圖下 文字

previews.forEach((preview) =>{ //【打開大圖】 點擊單張小圖.img時
    preview.addEventListener("click", () => {
        modal.classList.add("open");    //【打開大圖】
        original.classList.add("open"); //【開啟原始大圖】開啟後 有放大效果
        //下方為 開啟對應大圖
        const originalSrc = preview.getAttribute("data-original");  //取得 點擊時 大圖的名稱
            //console.log(originalSrc); //工程人員模式下 確認【輸出】值是否為預期
        original.src = `./large/${originalSrc}`; // `反引號backtick 位於~位置，不同於'單引號'
        //下方為 開啟對應文字
        const altText = preview.alt
        caption.textContent = altText;
    });
});

modal.addEventListener("click",(e) => { //【關閉大圖】 點擊.modal時(大圖外 黑底)
    if (e.target.classList.contains('modal')) {
        modal.classList.remove("open"); //【關閉大圖】
        original.classList.remove("open");  //【關閉原始大圖】關閉時 有縮小效果
    }
});

