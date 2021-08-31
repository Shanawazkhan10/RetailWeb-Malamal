import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { IIndices } from "../../types/MarketData/IIndices";
import { IScriptUpdate } from "../../types/MarketData/IScriptUpdate";
import { DepthUpdate, IndicesUpdate, ScriptUpdate } from "./WebSocketSlice";
import { IMarketDepth } from "./../../types/IMarketDepth";

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
  const dispatch = useAppDispatch();
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

    userWS.onmessage = function (msg: IMarketDepth | IScriptUpdate | IIndices) {
      if (msg.name && msg.name == "dp") {
        dispatch(DepthUpdate(msg as IMarketDepth));
      } else if (msg.name && msg.name == "sf") {
        dispatch(ScriptUpdate(msg as IScriptUpdate));
      } else if (msg.name && msg.name == "if") {
        dispatch(IndicesUpdate(msg as IIndices));
      } else {
        console.log(displayMessage("[Res]: " + msg + "\n"));
      }
      displayMessage("[Res]: " + msg + "\n");
    };
  }

  function disconnect() {
    //Call on logoff
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
    // init();
    // connect();
    // auth();
  }, []);
  return (
    <div>
      <button
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
      </button>
    </div>
  );
};

export default HSSocket;
