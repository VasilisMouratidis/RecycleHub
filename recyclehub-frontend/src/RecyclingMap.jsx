import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = { height: '600px', width: '100%' };
const center = { lat: 40.6401, lng: 22.9444 }; // Θεσσαλονίκη κέντρο

function RecyclingMap({ selectedCategory }) {
  const [points, setPoints] = useState([]);
  const [selected, setSelected] = useState(null);

  const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY });

  const fetchData = () => {
    axios.get('http://localhost:5000/api/recycling-points')
      .then(res => setPoints(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPoints = selectedCategory
    ? points.filter(p => p.categories.includes(selectedCategory))
    : points;

  if (!isLoaded) return <div>Φόρτωση χάρτη...</div>;

  return (
    <div>
      <button onClick={fetchData}>🔄 Ανανέωση Δεδομένων</button>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
        {filteredPoints.map((point) => (
          <Marker
            key={point._id}
            position={{
              lat: point.location.coordinates[1],
              lng: point.location.coordinates[0]
            }}
            onClick={() => setSelected(point)}
          />
        ))}
        {selected && (
          <InfoWindow
            position={{
              lat: selected.location.coordinates[1],
              lng: selected.location.coordinates[0]
            }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <strong>{selected.name}</strong><br />
              {selected.address}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default RecyclingMap;
