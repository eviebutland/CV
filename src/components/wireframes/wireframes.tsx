import { ReactChild } from 'react';

interface imageArrayProps {
  image: string;
  alt: string;
}
interface WireframeProps {
  title: string;
  imageArray: imageArrayProps[];
  children?: ReactChild;
}

export const Wireframes = (props: WireframeProps) => {
  const { title, imageArray, children } = props;
  return (
    <section className="text-center">
      <h2>{title}</h2>
      <div className="block md:flex md:justify-center md:items-center md:max-w-[700px] md:flex-wrap md:my-0 md:mx-auto xl:max-w-[1100px]">
        {imageArray.map((image, key) => (
          <div key={key} className="p-1">
            <img
              className="max-w-[170px] block xl:max-w-[200px]"
              src={image.image}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      {children}
    </section>
  );
};
