import React from 'react';
import styles from '@/styles/Home.module.css';

const VideoComponent = ({embeddedCode}) => {
    return(
        <div>
            <div className={styles.container}>
                <div dangerouslySetInnerHTML={{ __html: embeddedCode}} />
            </div>
        </div>
    );
};

export default VideoComponent;