import {useState, useEffect} from 'react';
import axios from 'axios';




export const useIpCoords = () => {
  const [latitudeIp, setLatitudeIp] = useState([]);
  const [longitudeIp, setLongitudeIp] = useState([]);

  useEffect(() => {
    axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setLatitudeIp(response.data.latitude));
    axios
      .get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => setLongitudeIp(response.data.longitude));
  }, []);

  return {latitudeIp, longitudeIp};
};