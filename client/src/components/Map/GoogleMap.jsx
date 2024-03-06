import React from 'react'

function GoogleMap() {
    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59418.940513954054!2d47.1069917!3d-21.4416708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21e7bed737f377b5%3A0xb8558e55587dd811!2sEcole%20Nationale%20d%20Informatique!5e0!3m2!1sfr!2smg!4v1709763360795!5m2!1sfr!2smg"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            
        </div>
    )
}

export default GoogleMap
