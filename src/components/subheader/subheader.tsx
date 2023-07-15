import { ReactChild } from 'react';
import { List } from '../list/list';

interface SubheaderProps {
  title: string;
  children: ReactChild | ReactChild[];
  tags: string[];
}

export const Subheader = (props: SubheaderProps) => {
  const { title, children, tags } = props;
  return (
    <section className="py-0 px-6">
      <h1 className="text-center ">{title}</h1>
      <div className="text-center max-w-[300px] my-0 mx-auto md:max-w-[650px] lg:max-w-[1000px]">
        {children}
      </div>
      <List title="What i've done" tags={tags} useHash={true}></List>
    </section>
  );
};
