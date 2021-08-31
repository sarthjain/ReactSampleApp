import { API_ROUTES } from "../helper/apiRoutes";
import makeNetworkCall from '../helper/networkCalls';

export const updatePostCall = async (postId, title, body) => {
    try {
        const reqBody = {
            title: title,
            body: body
        };
        const options = {
            requestType: 'PATCH',
            body: reqBody
        }
        return await makeNetworkCall(API_ROUTES.post.replace('{postId}', postId), options);
    } catch (err) {
        throw err;
    }
}

export const deletePostCall = async (postId) => {
    try {
        const options = {
            requestType: 'DELETE',
        }
        return await makeNetworkCall(API_ROUTES.post.replace('{postId}', postId), options);
    } catch (err) {
        throw err;
    }
}