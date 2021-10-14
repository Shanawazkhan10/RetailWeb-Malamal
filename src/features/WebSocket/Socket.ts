import { strict } from "assert";
import React, { useEffect, useRef, useState } from "react";

export function socket1() {
  //const [messages, setMessages] = useState([]);
  //const webSocket = useRef(null);
  let ws = new WebSocket("wss://uathsmkt.hypertrade.in");

  ws.onmessage = (e) => {
    //console.log(JSON.parse(e.data));
  };

  ws.onopen = (e) => {
    //console.log(JSON.parse(e.data));
    const AuthenticationReq = { sessionid: "ses02", type: "cn" };

    // const abc = {
    //   type: "mws",
    //   scrips: "nse_cm|11536",
    //   channelnum: 1,
    // };
    ws.send(JSON.stringify(AuthenticationReq));
  };
  ws.onclose = (e) => {
    //console.log(JSON.parse(e.data));
  };
  ws.onerror = (e) => {
    // console.log(JSON.parse(e.data));
  };

  // function send() {
  //   const abc = {
  //     sessionid: "s1",
  //     type: "cn",
  //   };
  //   // ws.send(abc.string);
  // }
}

//export default Socket;
