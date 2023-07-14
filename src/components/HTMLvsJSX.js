import styles from '@/styles/Home.module.css';
import VideoComponent from '@/components/VideoComponent';
import HTMLvsJSXTable from '@/components/HTMLvsJSXTable';
import HTMLArticle from '@/components/HTMLArticle';
import JSXArticle from '@/components/JSXArticle';
import HTMLvsJSXTable2 from '@/components/HTMLvsJSXTable2';
import { useState } from 'react';

function HtmlVsJsx () {
    const embeddedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9GtB5G2xGTY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    const embeddedCode1 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Rh3tobg7hEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    const [tableToDisplay, setTableToDisplay] = useState(true);
    const [articleToDisplay, setArticleToDisplay] = useState(true);
    const [videoToDisplay, setVideoToDisplay] = useState(true);
    return (
        <div>
            <br />
            <br />
            <hr style={{border: '3px solid white', width: '100%'}}/>
            <br />
            <div className={styles.article}>
                <h2>HTML and JSX</h2>
            </div>
            <br />
            <br />
        {articleToDisplay ? (
          <button className={styles.btn} onClick={() => setArticleToDisplay(false)}>Switch to JSX Article</button>
        ) : (
          <button className={styles.btn} onClick={() => setArticleToDisplay(true)}>Switch to HTML Article</button>
        )}
        {articleToDisplay ? (
            <HTMLArticle />
        ) : (
            <JSXArticle />
        )}
            <br />
            <br />

            <div className={styles.article}>
                <h2>Difference Between HTML and JSX</h2>
            </div>

            <br />
            <br />
        {tableToDisplay ? (
          <button className={styles.btn} onClick={() => setTableToDisplay(false)}>Switch to JSX Table</button>
        ) : (
          <button className={styles.btn} onClick={() => setTableToDisplay(true)}>Switch to HTML Table</button>
        )}
        {tableToDisplay ? (
            <HTMLvsJSXTable />
        ) : (
            <HTMLvsJSXTable2 />
        )}
            <br />
            <br />

            <div className={styles.article}>
                <h3>
                    Here are two videos for a better understanding on JSX
                </h3>
                <br />
                <br />
            </div>
        {videoToDisplay ? (
          <button className={styles.btn} onClick={() => setVideoToDisplay(false)}>Switch to Video 2</button>
        ) : (
          <button className={styles.btn} onClick={() => setVideoToDisplay(true)}>Switch to Video 1</button>
        )}
        {videoToDisplay ? (
            <VideoComponent embeddedCode={embeddedCode} />
        ) : (
            <VideoComponent embeddedCode={embeddedCode1} />
        )}
        </div>
    );
};

export default HtmlVsJsx;