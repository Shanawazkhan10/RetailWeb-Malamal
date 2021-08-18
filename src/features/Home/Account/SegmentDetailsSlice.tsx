// const intialState = {
//   enumSegments: [{ Name: "NSE", checked: true }],
// };

// const action = [];

// function getSegmentName(state = [], action) {
//   state = action.payload;
// }

// export { getSegmentName };

function SetSegmentCheck(value: string) {
  switch (value) {
    case "NSE":
      return true;

    case "BSE":
      return true;
    case "NFO":
      return true;
    case "BFO":
      return true;
    case "NCD":
      return true;
    case "BCD":
      return true;

    default:
      return false;
  }
}

export { SetSegmentCheck };
