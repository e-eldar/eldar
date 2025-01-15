function initMap() {
    var lokacija = { lat: 43.8563, lng: 18.4131 }; // Dodaj google token, kk bo pošiljal tvojo geolokacijo sproti in ti ni treba samodejno spreminjati lokacije
    var mapa = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: lokacija
    });
    var marker = new google.maps.Marker({
        position: lokacija,
        map: mapa
    });
}
