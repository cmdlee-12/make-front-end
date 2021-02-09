$(document).ready(function(){
    $(".play-btn").click(function(){
        var video = $("video").get(0);
        video.paused ? video.play() : video.pause();
    })

    $(".video-button-wrapper p").lettering();
    window.addEventListener('load',function(){
        document.querySelector('.glider').addEventListener('glider-slide-visible', function(event){
            var glider = Glider(this);
            console.log('Slide Visible %s', event.detail.slide)
        });
        document.querySelector('.glider').addEventListener('glider-slide-hidden', function(event){
            console.log('Slide Hidden %s', event.detail.slide)
        });
        document.querySelector('.glider').addEventListener('glider-refresh', function(event){
            console.log('Refresh')
        });
        document.querySelector('.glider').addEventListener('glider-loaded', function(event){
            console.log('Loaded')
        });

        window._ = new Glider(document.querySelector('.glider'), {
            slidesToShow: 1, //'auto',
            slidesToScroll: 1,
            itemWidth: 150,
            draggable: true,
            scrollLock: false,
            dots: '#dots',
            rewind: true,
            responsive: [
                {
                    
                    breakpoint: 775,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      itemWidth: 50,
                      duration: 0.25
                    }
                },{
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      itemWidth: 150,
                      duration: 0.25
                    }
                },{
                    breakpoint: 1600,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      itemWidth: 150,
                      duration: 0.25
                    }
                }
            ]
        });
      });
});