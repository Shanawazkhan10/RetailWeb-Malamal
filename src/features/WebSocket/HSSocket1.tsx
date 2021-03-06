import { IIndices } from "../../types/MarketData/IIndices";
import { IScriptUpdate } from "../../types/MarketData/IScriptUpdate";
import {
  DepthUpdatefromSocket,
  ScriptUpdatefromSocket,
  UpdateDepth,
  UpdateFeed,
} from "../Home/MainContainer/MarketWatch/MarketWatchSlice";
import { IMarketDepth } from "../../types/IMarketDepth";
import { DepthUpdate, IndicesUpdate, ScriptUpdate } from "./WebSocketSlice";
import { useAppDispatch } from "../../app/hooks";
import { userWS } from "./HSSocket";

export interface authReq {
  sessionid: string;
  type: string;
}

export interface SubUnsubReq {
  type: string;
  scrips: string;
  channelnum: number;
}
//const dispatch = useAppDispatch();
var url = "wss://uathsmkt.hypertrade.in";
//let userWS: any = new window.HSWebSocket(url);
var type: any = "mw";
// var scriptList: any =
//   "nse_fo|48740&nse_fo|49053&nse_fo|51892&nse_cm|11536&nse_cm|1330&nse_cm|22&nse_cm|15083&nse_cm|3456&nse_cm|3499"; //"nse_cm|11536&nse_cm|22&nse_cm|236";

export function init() {
  type = "mw";
  const script = document.createElement("script");
  script.src = "../hslibo.js";
  script.async = true;

  document.body.appendChild(script);
  // init();
  // connect();
  // auth();
  return () => {
    document.body.removeChild(script);
  };
}

export function connect() {
  //userWS = new window.HSWebSocket(url);
  userWS.onopen = function () {
    displayMessage('[Socket]: Connected to "' + url + '"\n');
    const authReq: authReq = {
      sessionid: "S101",
      type: "cn",
    };
    sendReq(authReq);
  };

  userWS.onclose = function () {
    displayMessage("[Socket]: Disconnected !\n");
  };

  userWS.onerror = function () {
    displayMessage("[Socket]: Error !\n");
  };

  userWS.onmessage = function (msg: any) {
    if (JSON.parse(msg) && JSON.parse(msg)[0].name == "dp") {
      //dispatch(DepthUpdate(msg as IMarketDepth));
      //dispatch(DepthUpdatefromSocket(msg as IMarketDepth));
      //UpdateDepth(msg);
    } else if (JSON.parse(msg) && JSON.parse(msg)[0].name == "sf") {
      //UpdateFeed(msg);
      //dispatch(ScriptUpdate(msg as IScriptUpdate));
      //dispatch(ScriptUpdatefromSocket(msg as IScriptUpdate));
    } else if (JSON.parse(msg) && JSON.parse(msg)[0].name == "if") {
      // dispatch(IndicesUpdate(msg as IIndices));
    } else {
      console.log(displayMessage("[Res]: " + msg + "\n"));
    }
    displayMessage("[Res]: " + msg + "\n");
  };
}

export function disconnect() {
  //Call on logoff
  userWS.close();
  //userWS = "";
}

export function sendUnsubReq(subUnsubReq: SubUnsubReq) {
  if (userWS) {
    let req = JSON.stringify(subUnsubReq);
    waitForSocketConnection(userWS, function () {
      userWS.send(req);
    });

    displayMessage("[Req]: " + req + "\n");
  }
}

export function sendReq(authReq: authReq) {
  if (userWS) {
    let req = JSON.stringify(authReq);
    waitForSocketConnection(userWS, function () {
      userWS.send(req);
    });
    displayMessage("[Req]: " + req + "\n");
  }
}

export function displayMessage(data: any) {
  //dataArea.value += data;
  //dataArea.scrollTop = dataArea.scrollHeight;
}

export function waitForSocketConnection(socket: any, callback: any) {
  setTimeout(function () {
    if (socket != null && socket.readyState === 1) {
      if (callback !== undefined) {
        callback();
      }
      return;
    } else {
      waitForSocketConnection(socket, callback);
    }
  }, 5);
}
