import { combineReducers } from "redux"
import GetImagesReducer from "./Images/GetImages/GetImagesReducer"
import ShowImageAsGalleryReducer from "./Images/GetImages/Step2/ShowImageAsGalleryReducer";

export const RootReducer = combineReducers({
    GetImagesReducer,
    ShowImageAsGalleryReducer
});