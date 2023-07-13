import React from 'react';

const VideoComponent = ({embeddedCode}) => {
    return(
        <div>
            <div dangerouslySetInnerHTML={{ __html: embeddedCode}} />
        </div>
    );
};

export default VideoComponent;