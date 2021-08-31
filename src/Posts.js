import { useEffect, useReducer, useState } from "react";
import './Posts.css';
import Post from './Post.js';
import { fetchUserPosts } from "./service/userService";

export default function Posts (props) {

    const { userId } = props;
    const [data, updateData] = useState({posts: [], loading: true, hasError: false});
    const [showLoader, toggleLoader] = useReducer(state => !state, false);

    useEffect(() => {
        fetchUserPosts(userId)
            .then(data => updateData({posts: data, loading: false}))
            .catch(err => {
                updateData({
                    loading: false,
                    hasError: true
                })
            });
    }, [userId]);

    function deletePost(postId) {
        const postIndex = data.posts.findIndex((post) => post.id === postId);
        data.posts.splice(postIndex, 1);
        updateData({posts: data.posts});
    }

    function updatePost(postId, title, body) {
        const postIndex = data.posts.findIndex((post) => post.id === postId);
        data.posts[postIndex].title = title;
        data.posts[postIndex].body = body;
        updateData({posts: data.posts});
    }

    if (data.loading) {
        return <h1>Loading Posts ...</h1>;
    } else {
        if (data.hasError) {
            return <p>Error while loading Posts. Please try again in sometime.</p>
        } else {
            let postCards = <h3>No Post available</h3>
            if (data.posts && data.posts.length > 0) {
                postCards = <div className="post-cards">
                                { 
                                    data.posts.map((post) => (
                                        <Post key={post.id} post={post} deletePostFromList={deletePost} toggleLoading={toggleLoader} updatePost={updatePost}/>
                                    )) 
                                }
                            </div>
            }
            return (
                <>
                    { postCards }
                    { showLoader ? (
                        <div className="loader-holder">
                            <div className="loader"></div>
                        </div>
                    ) : ''}
                </>
            );
        }
    }
}