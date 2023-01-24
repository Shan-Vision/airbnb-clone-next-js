import { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getCenter } from 'geolib';

const MAPBOX_TOKEN = process.env.mapbox_key;
const MAPBOX_STYLE = `https://api.mapbox.com/styles/v1/shan-vision/cld21xv26001b01o0ck7rlmcd.html?title=view&access_token=${MAPBOX_TOKEN}&zoomwheel=true&fresh=true#11/48.138/11.575`;

function MapGL({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform the search results object into the
  // {latitude:...., longitude:....,} object
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // The latitude and longitude of the center of lovations coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    initialViewState: {
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
    },
    style: { width: '100%', height: '100%' },
  });

  return (
    <Map
      mapStyle="mapbox://styles/shan-vision/cld21xv26001b01o0ck7rlmcd"
      mapboxAccessToken={MAPBOX_TOKEN}
      {...viewport}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-50}
          >
            <p
              className="cursor-pointer  text-2xl"
              onClick={e => setSelectedLocation(result)}
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long && (
            <Popup
              className="flex justify-center items-center"
              longitude={result.long}
              latitude={result.lat}
              onClose={() => setSelectedLocation({})}
              maxWidth="500px"
              style={{ border: '1px solid red' }}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapGL;

/*  

(
            
          ) : (
            false
          )

*/
