$(document).ready(()=>{
  $.getJSON("dbase/data.json", function(data){
    console.log(data.content);
    $.each(data.content, function(key, val){
      $('#portfolio .container .row').append('<div class="col-md-6 col-lg-4">'+
        '<a class="portfolio-item d-block mx-auto" href="'+'#'+val.uri+'">'+
          '<div class="portfolio-item-caption d-flex position-absolute h-100 w-100">'+
            '<div class="portfolio-item-caption-content my-auto w-100 text-center text-white">'+
              '<i class="fa fa-search-plus fa-3x"></i>'+
            '</div>'+
          '</div>'+
          '<img class="img-fluid" src="'+val.img_src+'" alt="">'+
        '</a>'+
      '</div>');
      $('.LayerCopyright').after('<!-- Portfolio Modal '+(key+1)+' -->'+
      '<div class="portfolio-modal mfp-hide" id="'+val.uri+'">'+
      '<div class="portfolio-modal-dialog bg-white">'+
        '<a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">'+
          '<i class="fa fa-3x fa-times"></i>'+
        '</a>'+
        '<div class="container text-center">'+
          '<div class="row">'+
            '<div class="col-lg-8 mx-auto">'+
              '<h2 class="text-secondary text-uppercase mb-0">'+val.project_name+'</h2>'+
              '<hr class="star-dark mb-5">'+
              '<img class="img-fluid mb-5" src="'+val.img_src+'" alt="">'+
              '<p class="mb-5">'+val.content_text+'</p>'+
              '<a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">'+
                '<i class="fa fa-close"></i>'+
                'Close Project</a>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>')
    });
    
  });
})