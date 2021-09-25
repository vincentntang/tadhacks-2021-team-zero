import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Map() {
    return (
        <div>
            <Card 
                onClick={() => console.log('clicked on map')}
                className="rounded shadow m-5 p-5 hover-card"
                style={{height: '500px'}}
            >
                Map
            </Card>
        </div>
    )
}
