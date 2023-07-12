import { Button } from "../button/button";

import bitemoji from "../../assets/images/image-of-me.png";

import { useState } from "react";
import me from "../../assets/svg/me.svg";

export const Header = () => {
  const [image, setImage] = useState(bitemoji);
  return (
    <section className="flex my-20 justify-center items-center">
      <div>
        <h1 className="text-large">Hi, I'm Evie</h1>
        <h1 className="max-w-[700px]">Front-End Software Engineer</h1>
      </div>
      <img src={me} alt="bitemoji of me" />
    </section>
  );
};
