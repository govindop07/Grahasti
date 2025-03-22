import { toast as notify } from "react-toastify"; // Renaming to avoid conflict

export const showToast = (type, message) => {

  // if (typeof window !== "undefined" && window.innerWidth < 480) {
  //   return; // Do not display the toast on mobile
  // }
  const config = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === "success") {
    notify.success(message, config);
  } else if (type === "error") {
    notify.error(message, config);
  } else if (type === "info") {
    notify.info(message, config);
  } else {
    notify(message, config);
  }
};