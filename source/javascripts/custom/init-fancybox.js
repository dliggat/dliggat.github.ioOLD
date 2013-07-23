(function() {

  $(document).ready(function() {

    // Based on: http://www.ewal.net/2012/09/08/octopress-customizations/
    $('.entry-content').each(function(i){
      var _i = i;
      $(this).find('img.fancybox').each(function(){
        var img = $(this);
        var title = img.attr("title");
        var classes = img.attr("class");
        img.removeAttr("class");
        img.wrap('<a href="'+this.src+'" class="' + classes + '" rel="gallery'+_i+'" />');
        if (title != "")
        {
          img.parent().attr("title", title);
        }
      });
    });
    $('.fancybox').fancybox();

  });

})();
