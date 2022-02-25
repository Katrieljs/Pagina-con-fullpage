const proyecto=$(".info-proyecto")
const logo=$(".logo")
const menuOpciones=$(".nav-option a")
const innerCursor=$(".inner-cursor")
const outerCursor=$(".outer-cursor")
const links=$("a")
const gImagenes=$(".i-galeria")

links.on("mouseover",()=>{
	innerCursor.addClass("grow")
})

links.on("mouseleave",()=>{
	innerCursor.removeClass("grow")
})
const clikCursor=()=>{
	innerCursor.addClass("grow")
}

const soltarCursor=()=>{
	innerCursor.removeClass("grow")
}

const moverCursor=(e)=>{
	let x=e.clientX;
	let y=e.clientY;
	innerCursor.css({left:`${x}px`,top:`${y}px`});
	outerCursor.css({left:`${x}px`,top:`${y}px`});
}

const entradaCursor=()=>{
	innerCursor.removeClass("hide-cursor")
	outerCursor.removeClass("hide-cursor")
}

const salidaCursor=()=>{
	innerCursor.addClass("hide-cursor")
	outerCursor.addClass("hide-cursor")
}

gImagenes.on("mouseover",()=>{
	innerCursor.addClass("grow1")
	outerCursor.addClass("grow2")
	innerCursor.html("Arrastra")
})

gImagenes.on("mousedown",()=>{
	innerCursor.addClass("grow2")
})

gImagenes.on("mouseup",()=>{
	innerCursor.removeClass("grow2")
})

gImagenes.on("mouseleave",()=>{
	innerCursor.removeClass("grow1")
	outerCursor.removeClass("grow2")
	innerCursor.empty()
})

$(document).on("mousedown", clikCursor)
$(document).on("mouseup", soltarCursor)
$(document).on("mousemove",moverCursor)
$(document).on("mouseenter", entradaCursor)
$(document).on("mouseleave", salidaCursor)

$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		css3:true,
		menu:"#nav-options",
		anchors:["Introduccion","Galeria","Enseñanza","Murales"],
		navigationTooltips: ["Introduccion","Galeria","Enseñanza","Murales"],
		sectionsColor:["#000","#eeecea","#000","#eeecea"],
		verticalCentered: true,
		controlArrows: false, 
		afterLoad:function (origin,destination) {
			if(destination.anchor!=="Introduccion"){
				menuOpciones.css({color:"#273437"})
			}if(destination.anchor=="Murales"){
				logo.css({color:"#273437"})
			}if (destination.anchor!=="Murales") {
				logo.css({color:"#273437"})
			}if(destination.anchor=="Introduccion" || destination.anchor=="Enseñanza"){
				logo.css({color:"#eeecea"})
				menuOpciones.css({color:"#eeecea"})
				$("#nav li.active").css({borderColor:"#eeecea"})
			}
		}
	});

	fullpage_api.setAllowScrolling(false);
});


$('.autoplay').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.autoplay-2').slick({
  vertical: true,
  verticalSwiping: true,	
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".autoplay-3").slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});