import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationMap() {
  const position = [51.505, -0.09]; // Example coordinates (latitude, longitude)

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          This is a marker popup! You can add any content here.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LocationMap;
