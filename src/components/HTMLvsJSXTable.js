import React from "react";
import styles from '@/styles/Home.module.css';

function HTMLvsJSXTable() {
    return (
        <div>
        <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>HTML</th>
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
            </tr>
            <tr>
            <td><br />HTML elements have attributes.<br />
                e.g., maxlength in &#60;input maxlength=”16″ /&#62;<br />
                <br /></td>
            </tr>
            <tr>
            <td><br />It is not necessary to use camelCase for attributes, ids and <br />
              event references. Its totally your call to use camelCase, <br />
              lowercase or hyphens for naming them.<br />
              <br /></td>
            </tr>
            <tr>
            <td><br />The class attribute can be used on any HTML element. The class <br />
              name can be used by CSS and JavaScript to perform certain <br />
              tasks for elements with the specified class name.<br />
              <br /></td>
            </tr>
            <tr>
            <td><br/>In HTML almost all tags have an opening and a closing tag except probably a few like  <br/>
                <br/>  </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
};

export default HTMLvsJSXTable;