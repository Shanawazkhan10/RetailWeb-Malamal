import { toast } from "react-toastify";
export function toastNotification(type: string, sMsg: string) {  
  switch (type) {
    case "info":
      toast.info(sMsg,{ position: toast.POSITION.BOTTOM_RIGHT});
      break;
    case "success":
      toast.success(sMsg,{ position: toast.POSITION.BOTTOM_RIGHT});
      break;
    case "warning":
      toast.warning(sMsg,{ position: toast.POSITION.BOTTOM_RIGHT});
      break;
    case "error":
      toast.error(sMsg,{ position: toast.POSITION.BOTTOM_RIGHT});
      break;
  }
}
