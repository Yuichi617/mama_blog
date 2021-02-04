"use strict"
{
    const nav_item = document.querySelectorAll(".nav_item");
    const content_container = document.querySelectorAll(".type");

    function change() {
        // 最初に全てのコンテナからshowクラスをとる
        content_container.forEach(item => {
            item.classList.remove('show');
        })

        const show_content = document.getElementById(this.dataset.id);
        show_content.classList.add('show');
    }

    nav_item.forEach(function(item){
        item.addEventListener("click", change);
    })
}