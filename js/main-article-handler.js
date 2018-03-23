$(function () {

    let articleImg = $("#featured-article-img");
    let articleTitle = $("#featured-article-title");
    let articleSubtitle = $("#featured-article-subtitle");
    let articleHrefs = $(".featured-article-href");

    let sideArticles = $(".other-article-box");



    let i = 1;
    let articlesInterval = setInterval(() => {

        updateArticle(sideArticles.eq(i));
        i++;

        if(i === sideArticles.length) {
            i = 0;
        }


    }, 3000);


    sideArticles.hover(function () {

        $("body").css('cursor', 'pointer');

    }, function () {

        $("body").css('cursor', 'default');
    });

    function updateArticle(element) {

        //remove active class from the first element (Default selection(
        sideArticles.removeClass('active');

        //add the class to this article
        element.addClass('active');

        let imgUrl =element[0].id;


        //change main article img
        articleImg.attr('src', `gfx/pictures/articles/${imgUrl}.jpg`);

        //change article title
        //sidebar h1
        let h1 =element.children()[0];
        let p =element.children()[1];
        articleTitle.html(h1.innerHTML);
        articleSubtitle.html(p.innerHTML);

        //change article href
        if(imgUrl == 'gaming_img0'){ //main story link
            articleHrefs.attr('href','story.html');
        } else {
            articleHrefs.attr('href','#');
        }


        // console.log($(this)[0].innerText);

    }

    sideArticles.click(function (e) {
        clearInterval(articlesInterval);
        updateArticle($(this));
    });


});
