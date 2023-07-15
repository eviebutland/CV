interface ColoursProps {
  colours: string[];
}
export const Colours = (props: ColoursProps) => {
  return (
    <section>
      <h2 className="text-center">Project colours</h2>
      <div className="block md:flex justify-center">
        {props.colours.map((colour, key) => (
          <div key={key} className="flex flex-col items-center">
            <div
              className="w-20 h-20 rounded-full m-6 border-transparent shadow-lg"
              style={{ backgroundColor: colour }}
            ></div>
            <p>{colour}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
