/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		autoHeight: true,
		loop:false,
        center:true,
		    URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
	});
});

jQuery(function (){

        jQuery('.showAdbutt').click(function(){
              jQuery('.targetAdv').hide();
             
              jQuery('#advocacy'+$(this).attr('target')).show();
             for (var x in jQuery.cache){
        delete jQuery.cache[x];
    }
             
        });
});


jQuery(function (){
  $(".container-belief-pic").css("border-radius", "50%");
  var divwidth=$(".container-belief-pic").width();
  
  $(".container-belief-pic").height(divwidth);
});



jQuery(function(){

        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();

              jQuery('#research'+$(this).attr('target')).show();
              
        });
});






function diagnosis(){
  $("#diagnosis").addClass("activelinks");
  $("#ilab").removeClass("activelinks");
  $("#int").removeClass("activelinks");
  $("#publ").removeClass("activelinks");
  $("#foll").removeClass("activelinks");
};
function ilab(){
  $("#diagnosis").removeClass("activelinks");
  $("#ilab").addClass("activelinks");
  $("#int").removeClass("activelinks");
  $("#publ").removeClass("activelinks");
  $("#foll").removeClass("activelinks");
};
function int(){
  $("#diagnosis").removeClass("activelinks");
  $("#ilab").removeClass("activelinks");
  $("#int").addClass("activelinks");
  $("#publ").removeClass("activelinks");
  $("#foll").removeClass("activelinks");
};
function publ(){
  $("#diagnosis").removeClass("activelinks");
  $("#ilab").removeClass("activelinks");
  $("#int").removeClass("activelinks");
  $("#publ").addClass("activelinks");
  $("#foll").removeClass("activelinks");
};
function foll(){
  $("#diagnosis").removeClass("activelinks");
  $("#ilab").removeClass("activelinks");
  $("#int").removeClass("activelinks");
  $("#publ").removeClass("activelinks");
  $("#foll").addClass("activelinks");
};
function impact(){
  $("#impact").addClass("activelinks");
  $("#partners").removeClass("activelinks");
  $("#talk").removeClass("activelinks");
  $("#events").removeClass("activelinks");
};
function partners(){
  $("#partners").addClass("activelinks");
  $("#impact").removeClass("activelinks");
  $("#talk").removeClass("activelinks");
  $("#events").removeClass("activelinks");
};
function talk(){
  $("#talk").addClass("activelinks");
  $("#impact").removeClass("activelinks");
  $("#partners").removeClass("activelinks");
  $("#events").removeClass("activelinks");
};
function events(){
  $("#events").addClass("activelinks");
  $("#impact").removeClass("activelinks");
  $("#partners").removeClass("activelinks");
  $("#talk").removeClass("activelinks");
};


function aboutus(){
  $("#aboutus").addClass("activelinks");
  $("#research").removeClass("activelinks");
  $("#advocacy").removeClass("activelinks");
  $("#news").removeClass("activelinks");
};

function research(){
  $("#research").addClass("activelinks");
  $("#aboutus").removeClass("activelinks");
  $("#advocacy").removeClass("activelinks");
  $("#news").removeClass("activelinks");
};
function advocacy(){
  $("#advocacy").addClass("activelinks");
  $("#research").removeClass("activelinks");
  $("#aboutus").removeClass("activelinks");
  $("#news").removeClass("activelinks");
};
function news(){
  $("#news").addClass("activelinks");
  $("#research").removeClass("activelinks");
  $("#advocacy").removeClass("activelinks");
  $("#aboutus").removeClass("activelinks");
};

jQuery(function(){
  var photoheight=$(".country-left").height();
  $(".container-photo").height(0.8*photoheight);
});

jQuery(function(){
  var africaheight=$("#africaimage").height();
  var africawidth=$("#africaimage").width();
  $(".image-pillar").height(africaheight);
  $(".image-pillar").width(africawidth);
});
jQuery(function(){
  var pmemberheight=$(".pillar-member").height();
  
  $(".pillar-member-img").height(0.7*pmemberheight);
  $(".pillar-member-txt").height(0.3*pmemberheight);
});

$(document).ready(function(){
    $('.modal').modal();
  });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });



