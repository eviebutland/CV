interface ListProps {
  title: string;
  tags: string[];
  useHash: boolean;
}

export const List = (props: ListProps) => {
  const { title, tags, useHash } = props;
  return (
    <section>
      <div>
        <h2 className="text-center">{title}</h2>
      </div>

      <ul className="max-w-[800px] my-0 mx-auto text-center p-0">
        {tags.map((item, key) => (
          <li key={key} className="inline-block list-none py-0 px-2">
            <p className="my-1 mx-0 md:m-2">
              {useHash && <span>#</span>}
              {item}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
