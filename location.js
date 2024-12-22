function initMap() {
    var lokacija = { lat: 43.8563, lng: 18.4131 }; // Primjer koordinata za Sarajevo
    var mapa = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: lokacija
    });
    var marker = new google.maps.Marker({
        position: lokacija,
        map: mapa
    });
}
