var $ = jQuery

$( window ).on( 'elementor/frontend/init', () => {
    const addHandler = ( $element ) => {
        
    var settings = JSON.parse($element.find('.settings').text()),
        liquidImage = $element.find('.liquid-image')

    function init(){

        var myAnimation = new hoverEffect({
          parent: liquidImage[0],
          intensity: settings.intensity,
          image1: settings.first_image,
          image2: settings.second_image,
          displacementImage: settings.plugin_url + '/img/displacement/' + settings.hover_effect,
          imagesRatio: liquidImage.height()/liquidImage.width(),
          angle1: ( settings.angle - 45 ) * (Math.PI/180) * (-1),
          angle2: ( settings.angle - 45 ) * (Math.PI/180) * (-1),
          speedIn: settings.speed,
          speedOut: settings.speed,
      })
    }


    function adjustWidth(){

      if( $(window).width() > 1024 ){ liquidImage.css( 'width', settings.width.size + settings.width.unit ) }
      if( $(window).width() <= 1024 ){ liquidImage.css( 'width', settings.width_tablet.size + settings.width_tablet.unit ) }
      if( $(window).width() <= 767 ){ liquidImage.css( 'width', settings.width_mobile.size + settings.width_mobile.unit ) }
    }

    adjustWidth()
    $(window).on('load resize', adjustWidth)

    // init()
    setTimeout(init, 500)
    
    }

   elementorFrontend.hooks.addAction( 'frontend/element_ready/liquid.default', addHandler );

} );