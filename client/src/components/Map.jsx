import React from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import'leaflet/dist/leaflet.css'
import Pin from './Pin';


const Map = ({items}) => {
  return (
    <MapContainer className='h-full' center={[51.505, -0.09]} zoom={7} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {items.map(item => (
    <Pin item={item} key={item.id}/>
  ))}
</MapContainer>
    )
}

export default Map