import { useReducer, useState } from 'react';
import './Post.css';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { deletePostCall, updatePostCall } from './service/postService';

export default function Post ({post, deletePostFromList, toggleLoading, updatePost}) {

    const [editing, toggleEditing] = useReducer(state => !state, false);
    const [postTitle, updatePostTitle] = useState(post.title);
    const [postBody, updatePostBody] = useState(post.body);

    function resetForm() {
        toggleEditing();
        updatePostTitle(post.title);
        updatePostBody(post.body);
    }

    function deletePost () {
        toggleLoading();
        deletePostCall(post.id)
            .then(res => {
                toggleLoading();
                deletePostFromList(post.id);
                setTimeout(() => alert('Successfully deleted post'), 500);
            }).catch(err => {
            toggleLoading();
            setTimeout(() => alert('Failed to delete post'), 500);
        });
    }

    function editPost(e) {
        toggleLoading();
        updatePostCall(post.id, postTitle, postBody)
            .then(res => {
                toggleEditing();
                toggleLoading();
                updatePost(post.id, postTitle, postBody);
                setTimeout(() => alert('post updated successfully'), 500);
            }).catch(err => {
                toggleLoading();
                setTimeout(() => alert('Failed to update post'), 500);
            });
        e.preventDefault();
    }

    const editablePost = (
        <>        
            <h2>Edit Post</h2>
            <form className="edit-form">
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" value={postTitle} onChange={e => updatePostTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea value={postBody} className="form-control" onChange={e => updatePostBody(e.target.value)}/>
                </div>
                <div className="form-action-buttons">
                    <button className="btn cancel-button" onClick={() => resetForm()}>Cancel</button>
                    <button className="btn submit-button" onClick={(e) => editPost(e)}>Submit</button>
                </div>
            </form>
        </>
    );
    
    const viewPost = (
        <>
            <div className="action-buttons">
                <FaEdit className="action-icon" onClick={() => toggleEditing()}/>
                <AiFillDelete className="action-icon" onClick={() => deletePost()}/>
            </div>
            <h3>{post.title}</h3>
            <h5>{post.body}</h5>
        </>
    );

    return (
        <div className="post-card">
            { editing ? editablePost : viewPost }
        </div>
    );

}