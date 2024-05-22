let li = document.getElementsByClassName("zone-li");
let text = document.getElementsByClassName("zone-text");
 
for (i = 0; i < li.length; i++) { 
    let index = i 
    li[i].addEventListener("click", function (e) {
        for (y = 0; y < text.length; y++) {
            text[y].style.display = "none"; 
            li[y].style.border = "unset";
        }
        text[index].style.display = "flex";
        li[index].style.border = "1px solid #2b2b2b8c";


    });
}