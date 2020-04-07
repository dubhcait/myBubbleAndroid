const getLocation = setGeoLocation => {
  //function that retrieves the position
  const showPosition = position => {
    const location = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };
    setGeoLocation(location);
  };

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    console.log("Geo Location not supported");
  }
};

const distanceFromHome = (home, position) => {
  return calculateDistance(
    home.coords.latitude,
    home.coords.longitude,
    position.coords.latitude,
    position.coords.longitude
  );
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // km
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad();
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1.toRad()) *
      Math.cos(lat2.toRad()) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};
Number.prototype.toRad = function() {
  return (this * Math.PI) / 180;
};
export { distanceFromHome };
export default getLocation;
