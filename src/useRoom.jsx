import React, { useCallback } from 'react';
const { connect } = require('twilio-video');

export default function useRoom(token) {
    const connectToRoom = useCallback(() => {
        connect(token, { name:'p2p-room' }).then(room => {
            console.log(`Successfully joined a Room: ${room}`);
            room.on('participantConnected', participant => {
                console.log(`A remote Participant connected: ${participant}`);
            });
        }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
        });
    }, []);

    return connectToRoom;
}
