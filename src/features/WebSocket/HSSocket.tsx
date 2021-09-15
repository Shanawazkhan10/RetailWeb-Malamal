import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { IIndices } from "../../types/MarketData/IIndices";
import { IScriptUpdate } from "../../types/MarketData/IScriptUpdate";
import { DepthUpdate, IndicesUpdate, ScriptUpdate } from "./WebSocketSlice";
import { IMarketDepth } from "./../../types/IMarketDepth";
import {
  DepthUpdatefromSocket,
  ScriptUpdatefromSocket,
} from "../Home/MainContainer/MarketWatch/MarketWatchSlice";
import { onIndiceUpdate } from "../Home/Header/IndicesSlice";
import {
  SearchDepthUpdate,
  SearchScriptUpdate,
} from "../Home/MainContainer/MarketPicture/MarketPictureSlice";

export interface authReq {
  sessionid: string;
  type: string;
}

export interface SubUnsubReq {
  type: string;
  scrips: string;
  channelnum: number;
}
var url = "wss://uathsmkt.hypertrade.in";
export let userWS: any = ""; // new window.HSWebSocket(url);

const HSSocket = () => {
  //var userWS: any = null;
  var type: any = "mw";
  var scriptList: any =
    "nse_fo|48740&nse_fo|49053&nse_fo|51892&nse_cm|11536&nse_cm|1330&nse_cm|22&nse_cm|15083&nse_cm|3456&nse_cm|3499"; //"nse_cm|11536&nse_cm|22&nse_cm|236";
  const dispatch = useAppDispatch();
  //var HSWebSocket: any = null;

  function selectType(ty: string) {
    type = ty;
    let sublistValue = "";
    if (type == "mw") {
      sublistValue =
        "nse_fo|48740&nse_fo|49053&nse_fo|51892&nse_cm|11536&nse_cm|1330&nse_cm|22&nse_cm|15083&nse_cm|3456&nse_cm|3499";
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
    // userWS = new window.HSWebSocket(url);
    if (!userWS || userWS == "") {
      userWS = new window.HSWebSocket(url);
    }

    userWS.onopen = function () {
      displayMessage('[Socket]: Connected to "' + url + '"\n');
      auth();
    };

    userWS.onclose = function () {
      displayMessage("[Socket]: Disconnected !\n");
    };

    userWS.onerror = function () {
      displayMessage("[Socket]: Error !\n");
    };

    userWS.onmessage = function (msg: any) {
      JSON.parse(msg).forEach((element: any) => {
        switch (element.name) {
          case "dp":
            dispatch(DepthUpdatefromSocket(element));
            break;      
          case "if":
            dispatch(onIndiceUpdate(element));
            dispatch(SearchDepthUpdate(element));
            break;
          case "sf":
            dispatch(ScriptUpdatefromSocket(element));
            dispatch(SearchScriptUpdate(element));
            break;      
          default:
            console.log(msg);
            break;
        }
      });
    };
  }

  function disconnect() {
    //Call on logoff
    userWS.close();
    //userWS = null;
  }

  function auth() {
    // let jObj = {};
    // jObj["sessionid"] = "S1";
    // jObj["type"] = "cn";
    const authReq: authReq = {
      sessionid: String(localStorage.getItem("sessionKey")),
      type: "cn",
    };
    sendReq(authReq);
  }

  function subscribe() {
    prepareAndSendSubUnsubReq(type + "s"); // Scrip => "mw" + "s", Depth => "dp" + "s", indices => "if" + "s"
    //prepareAndSendSubUnsubReq(type + "s"); // Scrip => "mw" + "s", Depth => "dp" + "s", indices => "if" + "s"
  }

  function depthSubscribe() {
    prepareAndSendSubUnsubReq("dps"); // Scrip => "mw" + "s", Depth => "dp" + "s", indices => "if" + "s"
    //prepareAndSendSubUnsubReq(type + "s"); // Scrip => "mw" + "s", Depth => "dp" + "s", indices => "if" + "s"
    prepareAndSendSubUnsubReq("mws");
  }

  function unsubscribe() {
    prepareAndSendSubUnsubReq(type + "u"); // Scrip => "mw" + "u", Depth => "dp" + "u", indices => "if" + "u"
  }

  function prepareAndSendSubUnsubReq(ty: any) {
    //let jObj = {};
    // jObj["type"] = ty;
    // jObj["scrips"] = document.getElementById('scripList').value.trim();
    // jObj["channelnum"] = parseInt(document.getElementById('channel_tb').value.split(',')[0], 10);
    // sendReq(jObj);
    const subUnsubReq: SubUnsubReq = {
      type: ty,
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
    //   const script = document.createElement("script");
    //   script.src = "../hslibo.js";
    //   script.async = true;

    //   document.body.appendChild(script);
    //init();
    connect();

    //   return () => {
    //     document.body.removeChild(script);
    //   };
    //   auth();
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
      </button> */}

      {/* <button
        className="btn_mw_overlay_2 btn_buy"
        title="Chart(C )"
        onClick={() => subscribe()}
      >
        Script
      </button> */}
      {/* <button
        className="btn_mw_overlay_2 btn_buy"
        title="Chart(C )"
        onClick={() => depthSubscribe()}
      >
        Depth
      </button> */}
    </div>
  );
};

export default HSSocket;
