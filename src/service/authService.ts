import { getLoacalStorage, setLoacalStorage } from "@/utils/local-storage";
import { authKey } from "./authKey";
import { getdecodedData } from "@/utils/jwt";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { instances as axiosInastant } from "@/helpers/axios/axiosInastant";

export const userLoginInfo = ({ accessToken }: { accessToken: string }) => {
  return setLoacalStorage(authKey, accessToken);
};
export const getUserInfo = () => {
  const authToken = getLoacalStorage(authKey);
  if (authToken) {
    const decodedData = getdecodedData(authToken);
    return decodedData;
  } else {
    return "";
  }
};
export const isLoggedIn = () => {
  const authToken = getLoacalStorage(authKey);
  return !!authToken;
};
export const getNewAccessToken = async () => {
  return await axiosInastant({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
