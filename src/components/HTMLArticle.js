import React from "react";
import styles from '@/styles/Home.module.css';
import ImageComponent from '@/components/ImageComponent';
import HTML from '@/assets/html_source.png';
import Code from '@/assets/HTML Code.png';
import Output from '@/assets/HTML Code Output.png';
import { useState } from 'react';


function HTMLArticle() {
    const [imageToDisplay, setImageToDisplay] = useState(true);
    return (
        <div>
            <div className={styles.article}>
                <h2>
                    What is HTML?
                </h2>
                <br />
                <br />

                <ImageComponent srcImage = {HTML} />

                <br />
                <br />
                <span>Hypertext Markup Language &#40;HTML&#41; is the standard language for documents that determine the structure of a web page. 
                HTML is a very important language in web development. Your code is either in HTML originally or compiles to it so browsers can read it. 
                <br />
                <br />
                In simple terms, HTML is the language used to describe the structure and layout of a webpage. It consists of a series of tags enclosed 
                in angle brackets &#40;&#60; &#62;&#41; that indicate how elements should be displayed on a web page. HTML tags are used to define headings, paragraphs, 
                images, links, lists, tables, forms, and many other elements that make up a web page.
                <br />
                <br />
                Here is an example syntax of an HTML:</span>
            </div>

            <br />
            <br />
            
            <div className={styles.card}>
                <p>&#60;!DOCTYPE html&#62;<br />
                &#60;html&#62;<br />
                &#60;head&#62;<br />
                &emsp;&#60;title&#62;Simple HTML Example&#60;/title&#62;<br />
                &#60;/head&#62;<br />
                &#60;body&#62;<br />
                &emsp;&#60;h1&#62;Welcome to My Web Page&#60;/h1&#62;<br />
                &emsp;&#60;p&#62;This is a paragraph of text.&#60;/p&#62;<br />
                &emsp;&#60;img src="image.jpg" alt="Description of the image"&#62;<br />
                &emsp;&#60;a href="https://www.example.com"&#62;Visit Example.com&#60;/a&#62;<br />
                &#60;/body&#62;<br />
                &#60;/html&#62;</p>
            </div>
            <br />
            <br />
            <div className={styles.article}>
                <h3>Here is a sample of a complete HTML Code and its output</h3>
            </div>
            <br />
            <br />
            {imageToDisplay ? (
                <button className={styles.btn} onClick={() => setImageToDisplay(false)}>Show Output</button>
            ) : (
                <button className={styles.btn} onClick={() => setImageToDisplay(true)}>Show Code</button>
            )}
            {imageToDisplay ? (
                <ImageComponent srcImage = {Code} />
            ) : (
                <ImageComponent srcImage = {Output} />
            )}
        </div>
    );
};

export default HTMLArticle;