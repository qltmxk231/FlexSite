// 스무스 스크롤
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html,body').animate (
            {
                scrollTop: $(hash).offset().top -100
            },
            800 //속도
        );
    }
})

//메뉴창 투명하게
window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity=0.7;
    } else{
        document.querySelector('#navbar').style.opacity=1;
    }
});