import { useEffect, useState } from 'react';
import AlbumAccordian from './AlbumAccordian';
import './Albums.css';
import { fetchUserAlbums } from './service/userService';

export default function Albums (props) {

    const { userId } = props;
    const [ data, updateAlbums ] = useState({albums: [], loading: true, hasError: false});

    useEffect(() => {
        fetchUserAlbums(userId)
            .then(res => updateAlbums({albums: res, loading: false}))
            .catch(err => {
                updateAlbums({albums: [], loading: false, hasError: true})
            });
    }, [userId]);

    if (data.loading) {
        return <h1>Loading Albums ...</h1>;
    } else {
        if (data.hasError) {
            return <p>Error while loading Albums. Please try again in sometime.</p>
        } else {
            let albumsAvailable = <h3>No Albums available</h3>
            if (data.albums && data.albums.length > 0) {
                albumsAvailable = (
                    <div className="albums">
                        {
                            data.albums.map((album, index) => {
                                return <AlbumAccordian key={album.id} album={album} isEven={index % 2 === 0}/>;
                            })
                        }
                    </div>
                );
            }
            return (
                <>{albumsAvailable}</>
            );
        }
    }
}