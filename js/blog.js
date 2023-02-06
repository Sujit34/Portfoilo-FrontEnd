var blog_html = "";



var image = "img/kinesis.png";
var title = "Cloud Watch Dashboard";
var description = "Cloud Watch DashBoard...";
var link = "CloudWatchDashBoard.pdf";          
var author = "Sujit Kumaar Chanda";
var date = "05 February, 2023";

blog_html = blog_html+'<div class="item"><article class="post-wrap"><div class="post-content"><div class="post-title"><h3 class="f-semi-expanded ultrabold uppercase"><a target="_blank" href="'+link+'">'+title+'</a></h3></div></br><div class="post-excerpt"><p class="t-left">'+description+'<a target="_blank" class="btn-more" href="'+link+'">Read More <i class="fa fa-angle-double-right"></i></a></p></div><div class="post-meta"><span><i class="fa fa-user"></i><a target="_blank" href="'+link+'">'+author+'&nbsp&nbsp&nbsp</a></span><span><i class="fa fa-calendar"></i><a target="_blank" href="'+link+'">'+date+'</a></span></div></div></article></div>';

$('#blog-wrap').html(blog_html);