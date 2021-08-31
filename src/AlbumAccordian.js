import { useState } from "react";
import './AlbumAccordian.css';
import Photos from './Photos.js';

export default function AlbumAccordian ({album, isEven}) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={"accordion-item " + (isEven ? "even" : "odd")}>
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <h3>{album.title}</h3>
                <h3>{isActive ? '-' : '+'}</h3>
            </div>
            {isActive && <Photos albumId={album.id}/> }
        </div>
    );
}