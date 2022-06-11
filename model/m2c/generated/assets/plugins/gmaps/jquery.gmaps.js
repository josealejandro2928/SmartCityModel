$(document).ready(function () {
    // Simple map
    map = new GMaps({
        el: '#gmaps-simple',
        lat: 42.34884,
        lng: 13.3994,
        zoom: 12,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });
});
