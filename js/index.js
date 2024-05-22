let li = document.getElementsByClassName("zone-li");
let text = document.getElementsByClassName("zone-text");
 
for (i = 0; i < li.length; i++) { 
    let index = i 
    li[i].addEventListener("click", function (e) {
        for (y = 0; y < text.length; y++) {
            text[y].style.display = "none"; 
            console.log( li[y].children[0].children[0])
            li[y].children[0].children[0].style.border = "unset";
            li[y].children[0].children[1].style.visibility = "hidden";

        }
        text[index].style.display = "flex";
        li[index].children[0].children[0].style.border = "1px solid #2b2b2b8c";
        li[index].children[0].children[1].style.visibility = "visible";


    });
}