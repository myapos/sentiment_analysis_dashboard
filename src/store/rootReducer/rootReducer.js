import LoginReducer from "pages/Login/LoginSlice";
import DashboardReducer from "pages/Dashboard/DashboardSlice";
import BannerSlice from "pages/ui-components/Banner/BannerSlice";
import ModalSlice from "pages/ui-components/Modal/ModalSlice";
import TweetsSlice from "pages/ui-components/Tweets/TweetsSlice";

export const rootReducer = {
  login: LoginReducer,
  dashboard: DashboardReducer,
  bannerStack: BannerSlice,
  modal: ModalSlice,
  tweetsTable: TweetsSlice,
};
