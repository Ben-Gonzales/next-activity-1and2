import React from "react";
import styles from '@/styles/Home.module.css'
import ImageComponent from '@/components/ImageComponent';
import JSX from '@/assets/JSXCoding.jpeg';

function JSXArticle() {
    return (
        <div>
            <div className={styles.article}>
                <h2>
                    What is JSX?
                </h2>
                <br />
                <br />

                <ImageComponent srcImage = {JSX} />

                <br />
                <br />

                <span>JSX, on the other hand, means JavaScript Syntax Extension or JavaScript XML as some like to put it. 
                <br />
                <br />
                It was created as a syntactic sugar for &#34;React.createElement&#40;&#41;&#34;. It is an extension of JavaScript that allows 
                developers to write HTML right within JavaScript. So when you're writing JSX, technically you're writing 
                JavaScript and HTML together.
                <br />
                <br />
                Also, that means JavaScript's reserved keywords must be kept intact. And that is why the “for” attribute in 
                HTML is “HTMLFor” in JSX, since "for" is one of the commonest JavaScript reserved keywords.
                <br />
                <br />
                JSX provides a way to describe the structure and appearance of UI components in a declarative manner. It 
                allows you to combine JavaScript logic and HTML-like syntax in a single file, making it easier to understand 
             and maintain the code.
                <br />
                <br />
                Here is an example of JSX code:</span>
            </div>

            <br />
            <br />

            <div className={styles.card}>
            <p>const element = &#60;h1&#62;Hello, JSX!&#60;/h1&#62;;</p>
            </div>

            <br />
            <br />

            <div className={styles.article}>
                <span>In the above example, the JSX code <strong>&#96;&#60;h1&#62;Hello, JSX!&#60;/h1&#62;&#96;</strong> is written within JavaScript code. It looks similar 
                to HTML but is actually a JavaScript expression. JSX tags closely resemble HTML tags and allow you to include 
                attributes, event handlers, and even dynamic values.
                <br />
                <br />
                JSX is transpiled into regular JavaScript by a tool like Babel before it is executed in the browser. The 
                transpiled code converts JSX syntax into corresponding JavaScript function calls. For example, the JSX code 
                above is transpiled into the following JavaScript code:</span>
            </div>

            <br />
            <br />

            <div className={styles.card}>
                <p>const element = React.createElement&#40;"h1", null, "Hello, JSX!"&#41;;</p>
            </div>

            <br />
            <br />

            <div className={styles.article}>
                <span>React then uses these JavaScript function calls to create and update the virtual DOM, which ultimately leads 
                to the rendering of the UI on the web page. 
                <br />
                <br />
                JSX provides a concise and expressive way to write UI components in React, making it easier to visualize and 
                manage the structure of the user interface within JavaScript code.
                <br />
                <br />
                Here is an example of JSX that uses Javascript function calls to create and update the virtual DOM:</span>
            </div>

            <br />
            <br />

            <div className={styles.card}>
                <p>import React from 'react';
                <br />
                <br />
                function MyComponent&#40;&#41; &#123;<br />
                &emsp;const name = 'John Doe';<br />
                &emsp;const greeting = &#60;h1&#62;Hello, &#123;name&#125;!&#60;/h1&#62;;
                <br />
                <br />
                &emsp;return &#40;<br />
                &emsp;&emsp;&#60;div&#62;<br />
                &emsp;&emsp;&emsp;&#123;greeting&#125;<br />
                &emsp;&emsp;&emsp;&#60;p&#60;Welcome to JSX.&#60;/p&#62;<br />
                &emsp;&emsp;&#60;/div&#62;<br />
                &emsp;&#41;;<br />
                &#125;
                <br />
                <br />
                export default MyComponent;</p>
            </div>
        </div>
    );
};

export default JSXArticle;
