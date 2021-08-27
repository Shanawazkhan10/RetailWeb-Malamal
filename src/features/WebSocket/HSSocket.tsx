import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
//import ScriptTag from "react-script-tag";
//import Safe from "react-safe";
// import  HSLib  =require("../WebSocket/hslibo");
// import * as app1 from "../WebSocket/hslibo";
// import {App} from "../WebSocket/hslibo";

//import app1 from "hslibo.js";
// import  {app1 }from "./hslibo";
//import {function1 } from "../WebSocket/hslibo.js"

export interface authReq {
  sessionid: string;
  type: string;
}

export interface SubUnsubReq {
  type: string;
  scrips: string;
  channelnum: number;
}

const HSSocket = () => {
  // <Safe.script src="../WebSocket/hslibo.js"></Safe.script>;
  // <ScriptTag src="../WebSocket/hslibo.js" />;
  var url = "wss://uathsmkt.hypertrade.in";
  var userWS: any = null;
  var type: any = "mw";
  var scriptList: any = "nse_cm|11536&nse_cm|22&nse_cm|236";
  //var HSWebSocket: any = null;

  function selectType(ty: string) {
    type = ty;
    let sublistValue = "";
    if (type == "mw") {
      sublistValue = "nse_cm|11536&nse_cm|22&nse_cm|236";
    } else if (type == "dp") {
      sublistValue = "nse_cm|11536";
    } else if (type == "if") {
      sublistValue = "bse_cm|SENSEX&nse_cm|Nifty 50";
    }
    //document.getElementById("scripList").value = sublistValue;
  }

  function init() {
    type = "mw";
    //document.getElementById("url_tb").value = url;
    //document.getElementById("scripList").value =
    //("nse_cm|11536&nse_cm|22&nse_cm|236");
  }

  function connect() {
    //let url = ""; //document.getElementById("url_tb").value;
    //const HSWebSocket = require("../WebSocket/hslibo.js");
    userWS = new window.HSWebSocket(url);

    userWS.onopen = function () {
      displayMessage('[Socket]: Connected to "' + url + '"\n');
    };

    userWS.onclose = function () {
      displayMessage("[Socket]: Disconnected !\n");
    };

    userWS.onerror = function () {
      displayMessage("[Socket]: Error !\n");
    };

    userWS.onmessage = function (msg: any) {
      displayMessage("[Res]: " + msg + "\n");
    };
  }

  function disconnect() {
    userWS.close();
    userWS = null;
  }

  function auth() {
    // let jObj = {};
    // jObj["sessionid"] = "S1";
    // jObj["type"] = "cn";
    const authReq: authReq = {
      sessionid: "S101",
      type: "cn",
    };
    sendReq(authReq);
  }

  function subscribe() {
    prepareAndSendSubUnsubReq(type + "s"); // Scrip => "mw" + "s", Depth => "dp" + "s", indices => "if" + "s"
    //prepareAndSendSubUnsubReq(type + "s"); // Scrip => "mw" + "s", Depth => "dp" + "s", indices => "if" + "s"
  }

  function unsubscribe() {
    prepareAndSendSubUnsubReq(type + "u"); // Scrip => "mw" + "u", Depth => "dp" + "u", indices => "if" + "u"
  }

  function prepareAndSendSubUnsubReq(ty: any) {
    let jObj = {};
    // jObj["type"] = ty;
    // jObj["scrips"] = document.getElementById('scripList').value.trim();
    // jObj["channelnum"] = parseInt(document.getElementById('channel_tb').value.split(',')[0], 10);
    // sendReq(jObj);
    const subUnsubReq: SubUnsubReq = {
      type: type,
      scrips: scriptList,
      channelnum: 1,
    };
    sendUnsubReq(subUnsubReq);
  }

  function sendUnsubReq(subUnsubReq: SubUnsubReq) {
    if (userWS) {
      let req = JSON.stringify(subUnsubReq);
      userWS.send(req);
      displayMessage("[Req]: " + req + "\n");
    }
  }

  function sendReq(authReq: authReq) {
    if (userWS) {
      let req = JSON.stringify(authReq);
      userWS.send(req);
      displayMessage("[Req]: " + req + "\n");
    }
  }

  function displayMessage(data: any) {
    //dataArea.value += data;
    //dataArea.scrollTop = dataArea.scrollHeight;
  }
  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = "../WebSocket/hslibo.js";
    // script.async = true;
    // document.body.appendChild(script);

    const script = document.createElement("script");
    script.src = "../hslibo.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      {/* <button
        className="btn_mw_overlay_2 btn_buy"
        title="Chart(C )"
        onClick={() => connect()}
      >
        connect
      </button>
      <button
        className="btn_mw_overlay_2 btn_buy"
        title="Chart(C )"
        onClick={() => auth()}
      >
        auth
      </button>

      <button
        className="btn_mw_overlay_2 btn_buy"
        title="Chart(C )"
        onClick={() => subscribe()}
      >
        subscribe
      </button> */}
    </div>
  );
};

export default HSSocket;
