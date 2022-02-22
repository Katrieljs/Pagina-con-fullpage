const proyecto=$(".info-proyecto")
const imgProyectoContainer=$(".contenedor-proyecto_img")
const imgProyecto=$(".img-proyecto")
const logo=$(".logo")
const redesContenedor=$(".redes")
const formContededor=$("#form")
const menuOpciones=$(".nav-option > a")
const innerCursor=$(".inner-cursor")
const outerCursor=$(".outer-cursor")
const links=$("a")
const btnR=$(".btn")
const labels=$("#form label")
const imgCarrousel=$(".carrousel")
const proyecto1=$(".i-p_1 > img")
const proyecto2=$(".i-p_2 > img")
const proyecto3=$(".i-p_3 > img")

proyecto1.click(()=>{
	window.open("Proyecto 1/Proyecto.html#Galeria",'_blank')
})

proyecto2.click(()=>{
	window.open("Proyecto 1/Proyecto.html#Enseñanza",'_blank')
})

proyecto3.click(()=>{
	window.open("Proyecto 1/Proyecto.html#Murales",'_blank')
})

links.on("mouseover",()=>{
	innerCursor.addClass("grow")
})

links.on("mouseleave",()=>{
	innerCursor.removeClass("grow")
})

imgProyecto.on("mouseover",()=>{
	innerCursor.addClass("grow1")
	outerCursor.addClass("grow2")
	innerCursor.html("Ir")
})

imgProyecto.on("mouseleave",()=>{
	innerCursor.removeClass("grow1")
	outerCursor.removeClass("grow2")
	innerCursor.empty()
})

btnR.on("mouseover",()=>{
	innerCursor.addClass("grow")
})

btnR.on("mouseleave",()=>{
	innerCursor.removeClass("grow")
})

labels.on("mouseover",()=>{
	innerCursor.addClass("grow")
})

labels.on("mouseleave",()=>{
	innerCursor.removeClass("grow")
})

imgCarrousel.on("mouseover",()=>{
	innerCursor.addClass("grow15")
	outerCursor.addClass("grow2")
	innerCursor.html("Arrastra")
})

imgCarrousel.on("mousedown",()=>{
	innerCursor.addClass("grow2")
})

imgCarrousel.on("mouseup",()=>{
	innerCursor.removeClass("grow2")
})

imgCarrousel.on("mouseleave",()=>{
	innerCursor.removeClass("grow15")
	outerCursor.removeClass("grow2")
	innerCursor.empty()
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

$(document).on("mousedown", clikCursor)
$(document).on("mouseup", soltarCursor)
$(document).on("mousemove",moverCursor)
$(document).on("mouseenter", entradaCursor)
$(document).on("mouseleave", salidaCursor)



$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		css3:true,
		// navigation: true,
		menu:"#nav-options",
		anchors:["Inicio","Proyectos","Galeria","Contacto"],
		navigationTooltips: ["Inicio","Proyectos","Galeria","Contacto"],
		sectionsColor:["#000","#eeecea","#000","#eeecea"],
		verticalCentered: true,
		controlArrows: false, 
		slidesNavigation: true,
		fitToSection:true,
		afterLoad:function (origin,destination) {
			if (destination.anchor=="Proyectos") {
				proyecto.css({opacity:"1",transform:"translateY(-20px)"})
				imgProyectoContainer.css({opacity:"1",transform:"translateY(-20px)"})
			}if(destination.anchor=="Contacto"){
				logo.css({color:"#eeecea"})
				redesContenedor.css({opacity:"1",transform:"translateY(-30px)"})
				formContededor.css({opacity:"1",transform:"translateY(-30px)"})
			}else if (destination.anchor!=="Contacto") {
				logo.css({color:"#273437"})
			} if(destination.anchor=="Inicio" || destination.anchor=="Galeria"){
				logo.css({color:"#eeecea"})
				menuOpciones.css({color:"#eeecea"})
				$("#nav li.active").css({borderColor:"#eeecea"})
			}else if(destination.anchor!=="Inicio"){
				menuOpciones.css({color:"#273437"})
			}
		}
	});

	fullpage_api.setAllowScrolling(false);
});

$(document).ready(function(){
      $('.carrousel').slick({
      	arrows:true,
      	infinite: true,
		slidesToShow: 3,
		autoplay: true,
  autoplaySpeed: 1500,
		dots:true,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
});


