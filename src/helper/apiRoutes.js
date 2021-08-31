const baseURL = 'https://jsonplaceholder.typicode.com/';

export const API_ROUTES = {
    fetchUsers: `${baseURL}users`,
    fetchUserPosts: `${baseURL}users/{userId}/posts`,
    fetchUserAlbums: `${baseURL}users/{userId}/albums`,
    fetchPhotosInAlbums: `${baseURL}albums/{albumId}/photos`,
    post: `${baseURL}posts/{postId}`
};