$(document).ready(function(){
    $(".play-btn").click(function(){
        var video = $("video").get(0);
        video.paused ? video.play() : video.pause();
    })

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
            rewind: true,
            responsive: [
                {
                    breakpoint: 319,
                    settings: {
                        slidesToShow: 'auto',
                        slidesToScroll: 1,
                        itemWidth: 30,
                        duration: 0.25
                    }
                },
                {  
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 'auto',
                      slidesToScroll: 1,
                      itemWidth: 100,
                      duration: 0.25
                    }
                },
                {  
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      itemWidth: 150,
                      duration: 0.25
                    }
                },
                {  
                    breakpoint: 1440,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      itemWidth: 350,
                      duration: 0.25
                    }
                },
            ]
        });
      });
});