import { API_ROUTES } from "../helper/apiRoutes";
import makeNetworkCall from '../helper/networkCalls';

export const fetchPhotosInAlbum = async (albumId) => {
    try {
        return await makeNetworkCall(API_ROUTES.fetchPhotosInAlbums.replace('{albumId}', albumId), {});
    } catch (err) {
        throw err;
    }
};
