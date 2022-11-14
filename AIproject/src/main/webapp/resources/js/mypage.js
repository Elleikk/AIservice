
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
	  title: '😺AI 헤어캣이 새로운 헤어스타일을 만들어 드립니다!',
	  text: "챗봇을 통해 다양한 헤어스타일을 만나보세요!",
	  showCancelButton: true,
	  confirmButtonColor: '#3caaffc4',
	  cancelButtonColor: '#ffb6c1',
	  confirmButtonText: '사진 등록하기',
	  cancelButtonText: '취소'
	}).then((result) => {
	  if (result.value) {
    location.href="home.do";
		  }
		})
};

    function logout(seq){
		Swal.fire({
		  title: '정말로 로그아웃 하시겠습니까?',
	  showCancelButton: true,
	  confirmButtonColor: '#3caaffc4',
	  cancelButtonColor: '#ffb6c1',
	  confirmButtonText: '로그아웃 하기',
	  cancelButtonText: '취소'
	}).then((result) => {
	  if (result.value) {
    location.href="logout.do";
		  }
		})
};

function addmypic(seq){
		Swal.fire({
		  title: '📚MY GALLERY에 등록된 사진이 없습니다',
	  text: "AI 챗봇 헤어캣😺을 통해 내 갤러리에 사진을 등록해보세요!",
      icon : 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3caaffc4',
	  cancelButtonColor: '#ffb6c1',
	  confirmButtonText: '사진 등록하기',
	  cancelButtonText: '취소'
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