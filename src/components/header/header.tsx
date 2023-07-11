import { Button } from "../button/button";
import styles from "./header.module.scss";
import bitemoji from "../../assets/images/image-of-me.png";
import bitemojiHover from "../../assets/images/image-of-me-two.png";
import { useState } from "react";

export const Header = () => {
  const [image, setImage] = useState(bitemoji);
  return (
    <section className={styles.container}>
      <div>
        <img
          src={image}
          alt="bitemoji of me"
          onMouseOver={() => setImage(bitemojiHover)}
          onMouseLeave={() => setImage(bitemoji)}
        />
      </div>
      <h1>Hello</h1>
      <h2>I am Evie, a Fullstack Software Engineer</h2>
      <div className={styles.button_container}>
        <Button location="#workWithMe" text="Services" design="full" />
        <Button location="#projects" text="Projects" design="full" />
        <Button
          location="https://medium.com/@evie.butland"
          text="Medium"
          design="full"
          target="_blank"
        />
        <Button
          location="https://github.com/eviebutland"
          text="Github"
          design="full"
          target="_blank"
        />
      </div>
    </section>
  );
};
