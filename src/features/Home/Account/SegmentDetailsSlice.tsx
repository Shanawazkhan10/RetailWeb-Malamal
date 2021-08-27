import { enumSegments } from "../../../Constants/enumSegments";

var newSegments: Array<string>;

function GetEnumName(SegmentFullname: string) {
  switch (SegmentFullname) {
    case enumSegments.NSE:
      return "NSE";

    case enumSegments.BSE:
      return "BSE";

    case enumSegments.NFO:
      return "NFO";

    case enumSegments.BFO:
      return "BFO";

    case enumSegments.NCD:
      return "NCD";

    case enumSegments.BCD:
      return "BCD";

    default:
      return "";
      break;
  }
}

function GetFullName(SegmentEnum: string) {
  switch (SegmentEnum) {
    case "NSE":
      return enumSegments.NSE;

    case "BSE":
      return enumSegments.BSE;

    case "NFO":
      return enumSegments.NFO;

    case "BFO":
      return enumSegments.BFO;

    case "NCD":
      return enumSegments.NCD;

    case "BCD":
      return enumSegments.BCD;

    default:
      return "";
      break;
  }
}

function SetSegmentDetails(arrSegment: Array<string>) {
  newSegments = arrSegment;
}

function SetSegmentCheck(value: string) {
  //  switch (value) {
  if (newSegments.some((element) => element == value)) {
    return true;
  }

  return false;
}

export { SetSegmentCheck, SetSegmentDetails, GetEnumName, GetFullName };
