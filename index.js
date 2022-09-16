var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting) { delta /= 2; }
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
    setTimeout(function() {
    that.tick();
    }, delta);
};
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};







// NavBar Script
var images = [
    "./H.M,Images/sahr-i-bahlol/Takht-i-Bahi1.jpg",
    "./H.M,Images/rushmore/rushmore2.jpg",
    "./H.M,Images/jerusalem/Temple-Mount-in-Jerusalem.jpg",
    "./H.M,Images/machupichu/peak-of-machu-picchu-lit.jpg", 
    "./H.M,Images/stonehenge/Stonehenge-England.jpg",   
    "./H.M,Images/mohenjodaro/mohenjodaro1.jpg",
  ]
  
  var imageHead = document.getElementById("body");
  var i = 0;
  
  setInterval(function() {
        imageHead.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
            i =  0;
        }
  }, 3000);



// Image Change Historical Monuments
function onpaki()
{
    document.getElementById("moen").src="./H.M,Images/mohenjodaro/mohenjodaro1.jpg"
    document.getElementById("paksub").style.display="block"
    document.getElementById("northsub").style.display="none"
    document.getElementById("southsub").style.display="none"
    document.getElementById("eastsub").style.display="none"
    document.getElementById("westsub").style.display="none"
    document.getElementById("ang2").style.color="transparent"
    document.getElementById("ang3").style.color="transparent"
    document.getElementById("ang4").style.color="transparent"
    document.getElementById("ang5").style.color="transparent"
    document.getElementById("Pakistan").style.fontWeight="600"
    document.getElementById("North").style.fontWeight=""
    document.getElementById("East").style.fontWeight=""
    document.getElementById("West").style.fontWeight=""
    document.getElementById("South").style.fontWeight=""

}
function onpa1()
{
    document.getElementById("moen").src="./H.M,Images/mohenjodaro/mohenjodaro1.jpg"
}
function onpa2()
{
    document.getElementById("moen").src="./H.M,Images/sahr-i-bahlol/Takht-i-BahiGesamt.jpg"
}
function onpa3()
{
    document.getElementById("moen").src="./H.M,Images/Taxila/taxila2.jpg"
}
function onpa4()
{
    document.getElementById("moen").src="./H.M,Images/shalimar/Shalamar_Garden_July_14_2005-Sideview_of_marble_enclosure_on_the_second_level.jpg"
}
function onpa5()
{
    document.getElementById("moen").src="./H.M,Images/makli/Canopy_tomb_of_Daya_Khan_Rahu.jpg"
}
function onpa6()
{
    document.getElementById("moen").src="./H.M,Images/rohtasfort/1-Aerial-View-of-Rohtas-Fort.jpg"
}

function onnh1()
{
    document.getElementById("moen").src="./H.M,Images/news/QuiriguaStela1.jpg"
}
function onnh2()
{
    document.getElementById("moen").src="./H.M,Images/news/ES_Joya_Ceren_05_2012_Estructura_9_Area_2_Tamazcal_wide_angle_1479.jpeg"
}
function onnh3()
{
    document.getElementById("moen").src="./H.M,Images/news/Göbeklitepe_Şanlıurfa.jpg"
}

function oneh1()
{
    document.getElementById("moen").src="./H.M,Images/news/icefjord.jpg"
}
function oneh2()
{
    document.getElementById("moen").src="./H.M,Images/news/sarazm1.jpg"
}

function onwh1()
{
    document.getElementById("moen").src="./H.M,Images/news/Baía_de_Antonina_vista_da_Serra_do_Mar2.jpeg"
}
function onwh2()
{
    document.getElementById("moen").src="./H.M,Images/news/Moai_Rano_raraku.jpg"
}

function onsh1()
{
    document.getElementById("moen").src="./H.M,Images/news/Wassu_Stone_Cirles_shaunamullally_01.jpg"
}
function onsh2()
{
    document.getElementById("moen").src="./H.M,Images/news/SantaCruz-CerroTorre-FitzRoyP2140126b-closeup.jpg"
}

function onpak()
{
    document.getElementById("ang1").style.color="#666"
    document.getElementById("paksub").style.display="block"
    document.getElementById("northsub").style.display="none"
    document.getElementById("southsub").style.display="none"
    document.getElementById("eastsub").style.display="none"
    document.getElementById("westsub").style.display="none"
    document.getElementById("ang2").style.color="transparent"
    document.getElementById("ang3").style.color="transparent"
    document.getElementById("ang4").style.color="transparent"
    document.getElementById("ang5").style.color="transparent"
    document.getElementById("Pakistan").style.fontWeight="600"
    document.getElementById("North").style.fontWeight=""
    document.getElementById("East").style.fontWeight=""
    document.getElementById("West").style.fontWeight=""
    document.getElementById("South").style.fontWeight=""
    document.getElementById("moen").src="./H.M,Images/mohenjodaro/mohenjodaro1.jpg"
}
function onnorth()
{
    document.getElementById("ang2").style.color="#666"
    document.getElementById("northsub").style.display="block"
    document.getElementById("southsub").style.display="none"
    document.getElementById("eastsub").style.display="none"
    document.getElementById("westsub").style.display="none"
    document.getElementById("paksub").style.display="none"
    document.getElementById("ang1").style.color="transparent"
    document.getElementById("ang3").style.color="transparent"
    document.getElementById("ang4").style.color="transparent"
    document.getElementById("ang5").style.color="transparent"
    document.getElementById("Pakistan").style.fontWeight="normal"
    document.getElementById("North").style.fontWeight="600"
    document.getElementById("East").style.fontWeight=""
    document.getElementById("West").style.fontWeight=""
    document.getElementById("South").style.fontWeight=""
    document.getElementById("moen").src="./H.M,Images/news/QuiriguaStela1.jpg"
}
function outnorth()
{
    document.getElementById("ang2").style.color="transparent"
    document.getElementById("northsub").style.display="none"
    document.getElementById("ang1").style.color="#666"
    document.getElementById("paksub").style.display="block"
    document.getElementById("North").style.fontWeight=""
    document.getElementById("Pakistan").style.fontWeight="600"
}
function oneast()
{
    document.getElementById("ang3").style.color="#666"
    document.getElementById("eastsub").style.display="block"
    document.getElementById("ang1").style.color="transparent"
    document.getElementById("paksub").style.display="none"
    document.getElementById("northsub").style.display="none"
    document.getElementById("southsub").style.display="none"
    document.getElementById("westsub").style.display="none"
    document.getElementById("ang1").style.color="transparent"
    document.getElementById("ang2").style.color="transparent"
    document.getElementById("ang4").style.color="transparent"
    document.getElementById("ang5").style.color="transparent"
    document.getElementById("Pakistan").style.fontWeight="normal"
    document.getElementById("North").style.fontWeight=""
    document.getElementById("East").style.fontWeight="600"
    document.getElementById("West").style.fontWeight=""
    document.getElementById("South").style.fontWeight=""
    document.getElementById("moen").src="./H.M,Images/news/icefjord.jpg"
}
function outeast()
{
    document.getElementById("ang3").style.color="transparent"
    document.getElementById("eastsub").style.display="none"
    document.getElementById("ang1").style.color="#666"
    document.getElementById("paksub").style.display="block"
    document.getElementById("East").style.fontWeight=""
    document.getElementById("Pakistan").style.fontWeight="600"
}
function onwest()
{
    document.getElementById("ang4").style.color="#666"
    document.getElementById("westsub").style.display="block"
    document.getElementById("ang1").style.color="transparent"
    document.getElementById("paksub").style.display="none"
    document.getElementById("northsub").style.display="none"
    document.getElementById("eastsub").style.display="none"
    document.getElementById("southsub").style.display="none"
    document.getElementById("ang1").style.color="transparent"
    document.getElementById("ang3").style.color="transparent"
    document.getElementById("ang2").style.color="transparent"
    document.getElementById("ang5").style.color="transparent"
    document.getElementById("Pakistan").style.fontWeight="normal"
    document.getElementById("North").style.fontWeight=""
    document.getElementById("East").style.fontWeight=""
    document.getElementById("West").style.fontWeight="600"
    document.getElementById("South").style.fontWeight=""
    document.getElementById("moen").src="./H.M,Images/news/Baía_de_Antonina_vista_da_Serra_do_Mar2.jpeg"
}
function outwest()
{
    document.getElementById("ang4").style.color="transparent"
    document.getElementById("westsub").style.display="none"
    document.getElementById("ang1").style.color="#666"
    document.getElementById("paksub").style.display="block"
    document.getElementById("West").style.fontWeight=""
    document.getElementById("Pakistan").style.fontWeight="600"
}
function onsouth()
{
    document.getElementById("ang5").style.color="#666"
    document.getElementById("southsub").style.display="block"
    document.getElementById("ang1").style.color="transparent"
    document.getElementById("paksub").style.display="none"
    document.getElementById("northsub").style.display="none"
    document.getElementById("eastsub").style.display="none"
    document.getElementById("westsub").style.display="none"
    document.getElementById("ang1").style.color="transparent"
    document.getElementById("ang3").style.color="transparent"
    document.getElementById("ang4").style.color="transparent"
    document.getElementById("ang2").style.color="transparent"
    document.getElementById("Pakistan").style.fontWeight="normal"
    document.getElementById("North").style.fontWeight=""
    document.getElementById("East").style.fontWeight=""
    document.getElementById("West").style.fontWeight=""
    document.getElementById("South").style.fontWeight="600"
    document.getElementById("moen").src="./H.M,Images/news/Wassu_Stone_Cirles_shaunamullally_01.jpg"
}
function outsouth()
{
    document.getElementById("ang5").style.color="transparent"
    document.getElementById("southsub").style.display="none"
    document.getElementById("ang1").style.color="#666"
    document.getElementById("paksub").style.display="block"
    document.getElementById("South").style.fontWeight=""
    document.getElementById("Pakistan").style.fontWeight="600"
}
// Image Change seven wonders
function onsw1()
{
    document.getElementById("sw-img").src="./H.M,Images/wallofchina/The-Great-Wall-of-China-in-clouds.jpg"
}
function onsw2()
{
    document.getElementById("sw-img").src="./H.M,Images/gizapyramids/General-view-of-pyramids-from-the-Giza-Plateau.jpg"
}
function onsw3()
{
    document.getElementById("sw-img").src="./H.M,Images/machupichu/Machu-Picchu-the-ancient-Inca-city-in-the-Andes-Peru.jpg"
}
function onsw4()
{
    document.getElementById("sw-img").src="./H.M,Images/petra/Petra-from-above.jpg"
}
function onsw5()
{
    document.getElementById("sw-img").src="./H.M,Images/chichenitza/The-stairs-of-Chichen-Itza-Mexico.jpg"
}
function onsw6()
{
    document.getElementById("sw-img").src="./H.M,Images/tajmahal/Taj-Mahal-in-sunrise-light-Agra-India.jpg"
}
function onsw7()
{
    document.getElementById("sw-img").src="./H.M,Images/colosseum/Scenic-view-of-Colosseum-Rome.jpg"
}


// Contact US DropDown

function displayfeedback()
{
    document.getElementById("feedback").style.display="block"
}
function onfeedback()
{
    document.getElementById("feedback").style.display="block"
    document.getElementById("question").style.display="none"
    document.getElementById("social").style.display="none"
}
function onquestion()
{
    document.getElementById("feedback").style.display="none"
    document.getElementById("question").style.display="block"
    document.getElementById("social").style.display="none"
}
function onsocial()
{
    document.getElementById("feedback").style.display="none"
    document.getElementById("question").style.display="none"
    document.getElementById("social").style.display="block"
}




$(document).ready(function(){
  $(".drpdwn").click(function(){
    $("#nav-dropdown").slideDown(700)
    $("#nav-dropdown1").hide()
    $("#nav-dropdown2").hide()
  });
  $("#close").click(function(){
    $("#nav-dropdown").slideUp(700)
  });        
  $(".drpdwn1").click(function(){
    $("#nav-dropdown1").slideDown(700)
    $("#nav-dropdown").hide()
    $("#nav-dropdown2").hide()
  });
  $("#close1").click(function(){
    $("#nav-dropdown1").slideUp(700)
  });       
  $(".drpdwn2").click(function(){
    $("#nav-dropdown2").slideDown(700)
    $("#nav-dropdown1").hide()
    $("#nav-dropdown").hide()
  });
  $("#close2").click(function(){
    $("#nav-dropdown2").slideUp(700)
  });
});

jQuery('#frm').validate({
	rules:{
		name1:{
            required:true,
            minlength:3,
        },
		email1:{
			required:true,
			email:true,
		},
		textarea1:{
            required:true,
            minlength:15,
        },
	},
    messages:{
		name1:{
            required:"Please enter your name",
            minlength: "The name is not valid",
        },
		email1:{
			required:"Please enter email",
			email:"Please enter a valid email",
		},
		textarea1:{
            required:"Please write something here...",
            minlength: "minimum 15 characters required...",
        },
    },
	submitHandler:function(form){
		form.submit();
	}
});


jQuery('#frm1').validate({
	rules:{
		name2:{
            required:true,
            minlength:3,
        },
		email2:{
			required:true,
			email:true,
		},
		textarea2:{
            required:true,
            minlength:15,
        },
	},
    messages:{
		name2:{
            required:"Please enter your name",
            minlength: "The name is not valid",
        },
		email2:{
			required:"Please enter email",
			email:"Please enter a valid email",
		},
		textarea2:{
            required:"Please write something here...",
            minlength: "minimum 15 characters required...",
        },
    },
	submitHandler:function(form){
		form.submit();
	}
});



function name111()
{
    alert("Thanks for your Valuable Feedback 🙂")
}
