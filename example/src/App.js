import React from 'react'
import { useIpCoords } from 'use-ipcoords'


const App = () => {
    const {
        latitudeIp,
        longitudeIp
    } = useIpCoords();

    return (
        <div>
            latitudeIp : {latitudeIp}<br />
            longitudeIp : {longitudeIp}<br />
        </div>
    );

};

export default App;