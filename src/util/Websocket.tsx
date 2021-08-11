import React, { useState, useEffect } from 'react';

const Websocket = () => {
    const io = require('socket.io-client');    
    const socket = io('http://localhost:3011');    
    useEffect(() => {
        // socket.on('receive message', payload => {
            
        // });
      }, []); //only re-run the effect if new message comes in
  return <></>;
};

export default Websocket;
