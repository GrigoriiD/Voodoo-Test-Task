function initMap() {
    const position = {
        lat:50.38564672979771,
        lng: 30.471423661369197,
    }
    const options = {
        center: position,
        zoom:15, 
        //del interface
        disableDefaultUI: true,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false
    };
    // added new marker
    const map = new google.maps.Map(document.getElementById("map"),options); 
    const marker = new google.maps.Marker({
        position: position,
        map: map,
        icon: './img/iconLocation.svg' ,
      });
    // added icon info
      const info = new google.maps.InfoWindow({
        content: '<div class="map-info"><span class="map-info__title">Voodoo</span><p class="map-info__description">Mykhailo Lomonosov Street, 73z, Kyiv, Ukraine</p><span class="map-info__tel">1-800-480-9597</span><span class="map-info__email">info@voodoo.com</span></div>'
      });
      const openInfo = ()=>{
        info.open(map,marker)
      };
      openInfo();
} 