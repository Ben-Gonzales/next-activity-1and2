import React from "react";
import styles from '@/styles/Home.module.css';

function HTMLvsJSXTable2() {
    return (
        <div>
        <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>JSX</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><br />Nested JSX must return one element, which we&#39;ll call a <br />
                  parent element that wraps all other levels of nested <br />
                  elements:<br />
                  &#60;div&#62; <br />
                  &emsp;&#60;p&#62;pink&#60;/p&#62;<br />
                  &emsp;&#60;p&#62;yellow&#60;/p&#62; <br />
                  &emsp;&#60;p&#62;green&#60;/p&#62;<br />
                  &#60;/div&#62;<br />
                  Without the wrapper element, JSX won&#39;t transpile. In <br />
                  React, we can render JSX directly into HTML DOM using <br />
                  React rendering API, aka ReactDOM. The formula for <br />
                  rendering React elements seems like this:<br />
                  ReactDOM.render&#40;componentToRender, targetNode&#41;<br />
                  ReactDOM.render&#40;&#41; must be called after the JSX elements <br />
                  declarations.<br />
                  <br /></td>
            </tr>
            <tr>
            <td><br />JSX elements have props.<br />
                e.g., maxLength in &#60;input maxLength=”16″ /&#62;<br />
                <br /></td>
            </tr>
            <tr>
            <td><br />All HTML attributes and event references in JSX become <br />
              camelCase, this way, onclick event becomes onClick and <br />
              onchange — onChange.<br />
              <br /></td>
            </tr>
            <tr>
            <td>You can&#39;t use the word class to define HTML classes, <br />
              since class is a reserved word in JavaScript, instead, use — className. <br />
              <br /></td>
            </tr>
            <tr>
            <td><br/>In JSX, however, any element can be written as a self-<br/>
                closing tag, for example: &#60;div/&#62;
                Example:
                const string = &#60;img src=&#123;user.avatarUrl&#125;  /&#62;;<br/>
                <br/></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
};

export default HTMLvsJSXTable2;