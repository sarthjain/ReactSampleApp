import { useState } from 'react';
import './UserFeed.css';
import { FaAngleLeft } from 'react-icons/fa';
import { BiPhotoAlbum } from 'react-icons/bi';
import { BsFilePost } from 'react-icons/bs';
import Posts from './Posts';
import Albums from './Albums';

export default function UserFeed (props) {
    
    const { userId, backToMainPage } = props;
    const [currentPage, updatePage] = useState({page: 'Posts'});

    return (
        <>
            <div className="feed-header">
                <button className="back-button" onClick={backToMainPage}>
                    <FaAngleLeft className="back-icon"/> Back
                </button>
                <div className="action-buttons">
                    <button className={"action-button " + (currentPage.page === 'Posts' ? "selected" : "not-selected")} onClick={() => updatePage({page: 'Posts'})}>
                        <BsFilePost className="action-icon"/> Posts
                    </button>
                    <button className={"action-button " + (currentPage.page === 'Album' ? "selected" : "not-selected")} onClick={() => updatePage({page: 'Album'})}>
                        <BiPhotoAlbum className="action-icon"/> Album
                    </button>
                </div>
            </div>
            <div className="feed-body">
                { currentPage.page === 'Posts' ? <Posts userId={userId}/> : <Albums userId={userId}/> }
            </div>
        </>
    );
}