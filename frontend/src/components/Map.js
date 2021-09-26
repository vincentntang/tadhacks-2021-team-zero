import React from 'react'
import Card from 'react-bootstrap/Card'
import { Map } from 'react-bootstrap-icons'

export default function MapHolder() {
    return (
        <div>
            <Card 
                onClick={() => console.log('clicked on map')}
                className="rounded shadow m-5 p-5 hover-card"
                style={{height: '500px'}}
            >
                <h1 className="display-4 m-5"><Map className="ml-2 mb-2" size={40}/> Map</h1>
            </Card>
        </div>
    )
}
