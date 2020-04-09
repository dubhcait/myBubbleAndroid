import Geolocation from '@react-native-community/geolocation';

geolocation.requestAuthorization();
Geolocation.getCurrentPosition(info => console.log(info));
Geolocation.watchPosition(success, [error], [options]);

geolocation.clearWatch(watchID);

useEffect(() => {
  async function loadInitialPosition() {
    const {granted} = await navigator.geolocation.requestAuthorization();

    if (granted) {
      navigator.geolocation.getCurrentPosition(info => console.log(info));

      const {latitude, longitude} = coords;

      setHone({
        latitude,
        longitude,
      });
    }
  }

  loadInitialPosition();
}, []);


componentDidMount() {
  Geolocation.getCurrentPosition(
    position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.06,
          longitudeDelta: 0.07,
        },
      });
    },
    error => console.log(error.message),
    {enableHighAccuracy: true, timeout: 20000},
  );
  this.watchID = Geolocation.watchPosition(position => {
    this.setState({
      region: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0462,
        longitudeDelta: 0.0261,
      },
    });
  });
  this.getData();
}



const distanceFromHome = (home, position) => {
  return calculateDistance(
    home.coords.latitude,
    home.coords.longitude,
    position.coords.latitude,
    position.coords.longitude,
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

