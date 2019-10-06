﻿(function (cibertec) {
    window.cibertec.getLocation = function () {
        console.log("verificando Geolocation||");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        }
        else {
            console.log("No se admite Geolocation||");
        }
    }

    function showPosition(position) {
        var location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }

        var map = new google.maps.Map(document.getElementById("googleMap"), {
            zoom: 15,
            center: location
        });
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Cibertec'
        });
    }
})(window.cibertec = window.cibertec || {});