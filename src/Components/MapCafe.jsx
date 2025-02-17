import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

function MapCafe() {
    return(<div>
        <MapContainer id='map' className='mt-[2rem] opacity-95 rounded-2xl' center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[51.505, -0.09]}>
                    <Popup>Café Royal. <br /> 9.30am-5.45pm, Mon-Fri</Popup>
                </Marker>
        </MapContainer></div>)
}

export default MapCafe;