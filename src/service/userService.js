import { API_ROUTES } from "../helper/apiRoutes";
import makeNetworkCall from '../helper/networkCalls';

export const fetchUsers = async () => {
    try {
        return await makeNetworkCall(API_ROUTES.fetchUsers, {});
    } catch (err) {
        throw err;
    }
};

export const fetchUserPosts = async (userId) => {
    try {
        return await makeNetworkCall(API_ROUTES.fetchUserPosts.replace('{userId}', userId), {});
    } catch (err) {
        throw err;
    }
};

export const fetchUserAlbums = async (userId) => {
    try {
        return await makeNetworkCall(API_ROUTES.fetchUserAlbums.replace('{userId}', userId), {});
    } catch (err) {
        throw err;
    }
}