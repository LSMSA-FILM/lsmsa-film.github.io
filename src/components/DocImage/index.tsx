import React from "react";
import { default as IImage, Props } from "@theme/IdealImage";
import clsx from "clsx";
import styles from "./styles.module.css";

function DocImage(props: Props & { caption: boolean | string }) {
  return (
    <div className={clsx(styles.doc_image)}>
      {/* <IImage {...props} /> */}
      <img {...props} />
      {props.caption && props.caption === true ? (
        props.alt && <span>{props.alt}</span>
      ) : (
        <span>{props.caption}</span>
      )}
    </div>
  );
}

export default DocImage;
