import React from "react";
import styles from '@/styles/Home.module.css'

function HTMLvsJSXTable() {
    return (
        <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>HTML</th>
              <th>JSX</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>In HTML, multiple elements can be returned.
                  For example:<br />
                  &#60;ul&#62;<br />
                  &emsp;&#60;li&#62;unordered list<br />
                  &emsp;&emsp;&#60;ol&#62;<br />
                  &emsp;&emsp;&emsp;&#60;li&#62;ordered list&#60;/li&#62;<br />
                  &emsp;&emsp;&emsp;&#60;li&#62;ordered list&#60;/li&#62;<br />
                  &emsp;&emsp;&emsp;&#60;li&#62;ordered list&#60;/li&#62;<br />
                  &emsp;&emsp;&#60;/ol&#62;<br />
                  &emsp;&#60;/li&#62;<br />
                  &emsp;&#60;li&#62;unordered list&#60;/li&#62;<br />
                  &emsp;&#60;li&#62;unordered list&#60;/li&#62;<br />
                  &#60;/ul&#62;
              </td>
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
            <td><br />HTML elements have attributes.<br />
                e.g., maxlength in &#60;input maxlength=”16″ /&#62;<br />
                <br /></td>
            <td><br />JSX elements have props.<br />
                e.g., maxLength in &#60;input maxLength=”16″ /&#62;<br />
                <br /></td>
            </tr>
            <tr>
            <td><br />It is not necessary to use camelCase for attributes, ids and <br />
              event references. Its totally your call to use camelCase, <br />
              lowercase or hyphens for naming them.<br />
              <br /></td>
            <td><br />All HTML attributes and event references in JSX become <br />
              camelCase, this way, onclick event becomes onClick and <br />
              onchange — onChange.<br />
              <br /></td>
            </tr>
            <tr>
            <td><br />The class attribute can be used on any HTML element. The class <br />
              name can be used by CSS and JavaScript to perform certain <br />
              tasks for elements with the specified class name.<br />
              <br /></td>
            <td>You can&#39;t use the word class to define HTML classes, <br />
              since class is a reserved word in JavaScript, instead, use — className. <br />
              <br /></td>
            </tr>
            <tr>
            <td><br/>In HTML almost all tags have an opening and a closing tag except probably a few like  <br/>
                <br/>  </td>
            <td><br/>In JSX, however, any element can be written as a self-<br/>
                closing tag, for example: &#60;div/&#62;
                Example:
                const string = &#60;img src=&#123;user.avatarUrl&#125;  /&#62;;<br/>
                <br/></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default HTMLvsJSXTable;