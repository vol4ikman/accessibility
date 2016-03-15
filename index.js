jQuery(document).ready(function(){
  jQuery(".title_element").click(function(e){
    e.preventDefault();
    jQuery(this).parents('.acc_item').find('.content_element').slideToggle(200);
  })
});
