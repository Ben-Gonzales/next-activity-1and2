import React from "react";
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

const ImageComponent = (props) => {
    return (
      <div className={styles.image}>
        <Image src={props.srcImage} alt='jsx coding' width={500} />
      </div>
    );
  };
  
  export default ImageComponent;;