import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const toastSettings = {
  theme: 'colored',
};

export const toastSuccess = () => {
  return toast.success(
    'Hooray! We found what you were looking for 🤗',
    toastSettings
  );
};
export const toastInfoNothing = () => {
  return toast.info(
    'It looks like you want to find nothing, please check your query 😕',
    toastSettings
  );
};
export const toastInfoDuplication = () => {
  return toast.info(
    'It looks like there are already pictures found for your request, please check if this will be a new search 🤔',
    toastSettings
  );
};
export const toastWarn = () => {
  return toast.warn(
    'Sorry, nothing was found for your request, try something else 🙈',
    toastSettings
  );
};
export const toastError = () => {
  return toast.error(
    'Oops, something went wrong, please try again 🙊',
    toastSettings
  );
};