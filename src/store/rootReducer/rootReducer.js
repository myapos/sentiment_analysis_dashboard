import LoginReducer from "pages/Login/LoginSlice";
import DashboardReducer from "pages/Dashboard/DashboardSlice";
import BannerSlice from "features/Banner/BannerSlice";
import ModalSlice from "features/Modal/ModalSlice";
import TweetsSlice from "features/Tweets/TweetsSlice";

export const rootReducer = {
  login: LoginReducer,
  dashboard: DashboardReducer,
  bannerStack: BannerSlice,
  modal: ModalSlice,
  tweetsTable: TweetsSlice,
};
