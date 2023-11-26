import trackList from '../../assets/trackList'
import styles from './MainPage.module.scss'
import Track from '../../components/Track/Track'
import { Input } from '@mui/material';
import { useState } from 'react';

const searchTracks = (queary) => {
    if(!queary) {
        return trackList
    }

    const toLowerCaseQuery = queary.toLowerCase();

    return trackList.filter((track) => 
    track.title.toLowerCase().includes(toLowerCaseQuery) ||
    track.artists.toLowerCase().includes(toLowerCaseQuery)
    )
}

const MainPage = () => {
    const [tracks, setTracks] = useState(trackList)
    const handleChange = (event) => {
        const foundTrack = searchTracks(event.target.value);
        setTracks(foundTrack)
    }
    return (
        <div className={styles.search}>
            <Input 
            className={styles.input}
            placeholder="Поиск треков"
            onChange={handleChange}
           
            />
            <div className={styles.list}>
                {tracks.map((track) => 
                <Track key={track.id} {...track}/>
                )}
            </div>
        </div>
    )
};

export default MainPage