
// Animation

$('#animatedElement').click(function() {
	$(this).addClass("slideUp");
});

$('#animatedElement').click(function() {
	$(this).addClass("slideDown");
});

$('#animatedElement').click(function() {
	$(this).addClass("slideLeft");
});

$('#animatedElement').click(function() {
	$(this).addClass("slideRight");
});

$('#animatedElement').click(function() {
	$(this).addClass("pullUp");
});

$('#animatedElement').click(function() {
	$(this).addClass("slideExpandUp");
});

// alert
function addaipic(seq){
	Swal.fire({
	  title: '๐บAI ํค์ด์บฃ์ด ์๋ก์ด ํค์ด์คํ์ผ์ ๋ง๋ค์ด ๋๋ฆฝ๋๋ค!',
	  text: "์ฑ๋ด์ ํตํด ๋ค์ํ ํค์ด์คํ์ผ์ ๋ง๋๋ณด์ธ์!",
	  showCancelButton: true,
	  confirmButtonColor: '#3caaffc4',
	  cancelButtonColor: '#ffb6c1',
	  confirmButtonText: '์ฌ์ง ๋ฑ๋กํ๊ธฐ',
	  cancelButtonText: '์ทจ์'
	}).then((result) => {
	  if (result.value) {
    location.href="home.do";
		  }
		})
};

    function logout(seq){
		Swal.fire({
		  title: '์ ๋ง๋ก ๋ก๊ทธ์์ ํ์๊ฒ ์ต๋๊น?',
	  showCancelButton: true,
	  confirmButtonColor: '#3caaffc4',
	  cancelButtonColor: '#ffb6c1',
	  confirmButtonText: '๋ก๊ทธ์์ ํ๊ธฐ',
	  cancelButtonText: '์ทจ์'
	}).then((result) => {
	  if (result.value) {
    location.href="logout.do";
		  }
		})
};

function addmypic(seq){
		Swal.fire({
		  title: '๐MY GALLERY์ ๋ฑ๋ก๋ ์ฌ์ง์ด ์์ต๋๋ค',
	  text: "AI ์ฑ๋ด ํค์ด์บฃ๐บ์ ํตํด ๋ด ๊ฐค๋ฌ๋ฆฌ์ ์ฌ์ง์ ๋ฑ๋กํด๋ณด์ธ์!",
      icon : 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3caaffc4',
	  cancelButtonColor: '#ffb6c1',
	  confirmButtonText: '์ฌ์ง ๋ฑ๋กํ๊ธฐ',
	  cancelButtonText: '์ทจ์'
	}).then((result) => {
	  if (result.value) {
    location.href="home.do";
		  }
		})
};

// autoslide

$(function(){
$('#sc').slick({
slide: 'div',       
infinite : true,    
slidesToShow : 2,        
slidesToScroll : 1,        
speed : 100,     
arrows : true,        
dots : true,        
autoplay : true,           
autoplaySpeed : 1200,         
pauseOnHover : true,        
vertical : false,      
prevArrow : "<button type='button' class='slick-prev'>Previous</button>",    
nextArrow : "<button type='button' class='slick-next'>Next</button>",      
dotsClass : "slick-dots",     
draggable : true,    
});
})
$(function(){
$('#sc2').slick({
slide: 'div',       
infinite : true,    
slidesToShow : 2,        
slidesToScroll : 1,        
speed : 100,     
arrows : true,        
dots : true,        
autoplay : true,           
autoplaySpeed : 1200,         
pauseOnHover : true,        
vertical : false,      
prevArrow : "<button type='button' class='slick-prev'>Previous</button>",    
nextArrow : "<button type='button' class='slick-next'>Next</button>",      
dotsClass : "slick-dots",     
draggable : true,    
});
})