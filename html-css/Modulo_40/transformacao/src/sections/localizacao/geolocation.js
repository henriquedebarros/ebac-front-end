if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position){
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://www.google.com/maps/d/u/0/embed?t=&z=15&ie=UTF8&iwloc=&mid=1sYb1zcsa-FV9WV6RKypbLasJWZRhttk&ehbc=2E312F&ll=${lat},${long}`;
    window.open(url, 'mapEcoilhas');

}