$(function () {

    let articleImg = $("#featured-article-img");
    let articleTitle = $("#featured-article-title");
    let articleSubtitle = $("#featured-article-subtitle");

    let sideArticles = $(".other-article-box");


    let i = 1;
    setInterval(() => {

        sideArticles[i].click();

        i++;




    },3000);


    sideArticles.hover(function(){

        $("body").css('cursor','pointer');

    },function(){

        $("body").css('cursor','default');
    });

    sideArticles.click(function (e) {

        //remove active class from the first element (Default selection(
        sideArticles.removeClass('active');

        //add the class to this article
        $(this).addClass('active');

        let imgUrl = $(this)[0].id;


        //change main article img
        articleImg.attr('src',`gfx/pictures/articles/${imgUrl}.jpg`);

        //change article title
        //sidebar h1
        let h1 = $(this).children()[0];
        let p = $(this).children()[1];
        articleTitle.html(h1.innerHTML);
        articleSubtitle.html(p.innerHTML);







        // console.log($(this)[0].innerText);

    });


});
