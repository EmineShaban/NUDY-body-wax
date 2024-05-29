let li = document.getElementsByClassName("zone-li");
let text = document.getElementsByClassName("zone-text");

for (i = 0; i < li.length; i++) {
    let index = i
    li[i].addEventListener("click", function (e) {
        for (y = 0; y < text.length; y++) {
            text[y].style.display = "none";
            console.log(li[y].children[0].children[0])
            li[y].children[0].children[0].style.border = "unset";
            li[y].children[0].children[1].style.visibility = "hidden";

        }
        text[index].style.display = "flex";
        li[index].children[0].children[0].style.border = "1px solid #2b2b2b8c";
        li[index].children[0].children[1].style.visibility = "visible";


    });
}


let acc = document.getElementsByClassName("q");
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") { 
            panel.style.display = "none";
        } else { 
            panel.style.display = "block";
        }
    });
}

let acc2 = document.getElementsByClassName("phase-text-h3");
for (i = 0; i < acc2.length; i++) {
    acc2[i].addEventListener("click", function () {
        this.classList.toggle("active2"); 
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") { 
            panel.style.display = "none";
        } else { 
            panel.style.display = "block";
        }
    });
}

let acc3 = document.getElementsByClassName("zone-text-img");
for (i = 0; i < acc3.length; i++) {
    acc3[i].addEventListener("click", function () {
        this.classList.toggle("active3"); 

         let panel = this.nextElementSibling;
        if (panel.style.display === "block") { 
            panel.style.display = "none";
        } else { 
            panel.style.display = "block";
        }
    });
}

$(document).ready(function () {

    $(".r-box")
        .slice(0, 3)
        .show();
    $(".r-box:hidden").css("opacity", 0);
    $("#showmorecomments").on("click", function (e) {
        $(".r-box:hidden")
            .slice(0, 3)
            .slideDown("slow")
            .animate({
                opacity: 1
            }, {
                queue: false,
                duration: "slow"
            });
        if ($(".r-box:hidden").length == 0) {
            $("#showmorecomments").hide();
            $("#showlesscomments").show();
        }
        e.preventDefault();
    });

    $("#showlesscomments").on("click", function (e) {
        e.preventDefault();
        $(".r-box").slice(-3).slideUp();
        $('#showmorecomments').show();
        $("#showlesscomments").hide();
    })
})