import { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import styles from './Track.module.scss'
import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import secondsToMMSS from '../../utils/secondsToMMSS';

const Track = (track) => {
    const {id, src, preview, title, artists, duration } = track;

    const {handleToggleAudio} = useContext(AudioContext);

    const formattedDuration = secondsToMMSS(duration);

    return (
        <div className={styles.track}>
          <IconButton onClick={() => handleToggleAudio(track)}>
            <PlayArrow/>
          </IconButton>
          <img className={styles.preview} src={preview} alt=""/>
          <div className={styles.credits}>
            <b>{title}</b>
            <p>{artists}</p>
          </div>
          <p>{formattedDuration}</p>
        </div>
    )
}

export default Track