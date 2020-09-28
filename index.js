var text = encodeURIComponent("Follow JavaScript Jeep form Amazing JavaScript Tutorial");


var url = "https://codepen.com/@junashrestha/";
var user_id = "junashrestha";
var hash_tags = "JS,JavaScript,100DaysOfCode,Programming";
var params = "menubar=no,toolbar=no,status=no,width=570,height=570";


var facebook = document.querySelector('.facebook');
var twitter = document.querySelector('.twitter');
var instagram = document.querySelector('.instagram');
var github = document.querySelector('.github');


facebook.addEventListener('click', function (ev) {
    console.log("hi");

    let shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(shareUrl, "NewWindow", params);
});
twitter.addEventListener('click', function (ev) {
    let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`;
    window.open(shareUrl, "NewWindow", params);
});
instagram.addEventListener('click', function (ev) {
    let shareUrl = `https://www.instagram.com/?hl=en/sharer?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`
    window.open(shareUrl, "NewWindow", params);
});
github.addEventListener('click', function (ev) {
    let shareUrl = `https://github.com/git?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`;
    window.open(shareUrl, "NewWindow", params);
});



