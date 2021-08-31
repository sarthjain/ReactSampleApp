import { useState, useEffect } from 'react';
import './Photos.css';
import { fetchPhotosInAlbum } from './service/photoService';

export default function Photos ({albumId}) {
    const [data, updateData] = useState({photos: [], loading: true, hasError: false});

    useEffect(() => {
        fetchPhotosInAlbum(albumId)
            .then(data => updateData({photos: data, loading: false, hasError: false}))
            .catch(err => {
                updateData({loading: false, hasError: true});
            });
    }, [albumId]);

    if (data.loading) {
        return <h1>Loading Photos ...</h1>;
    } else {
        if (data.hasError) {
            return <p>Error while loading Photos. Please try again in sometime.</p>
        } else {
            let photosAvailable = <h3>No photos found</h3>
            if (data.photos && data.photos.length > 0) {
                photosAvailable = (
                    <div className="photos">
                        {
                            data.photos.map((photo, index) => {
                                return (
                                    <div className="photo-card" key={photo.id}>
                                        <img className="photo-image" src={photo.url} alt={photo.id}/>
                                        <div className="photo-title">{photo.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                );
            }
            return (
                <>{photosAvailable}</>
            );
        }
    }
}