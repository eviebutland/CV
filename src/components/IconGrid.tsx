import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icons: Array<{
    label: string;
    value: IconDefinition;
  }>;
}

export const IconGrid = (props: Props) => {
  return (
    <div className="flex">
      {props.icons.map((icon) => (
        <div className="text-center">
          <div className="bg-secondary rounded-full h-[100px] w-[100px] flex justify-center items-center">
            <FontAwesomeIcon icon={icon.value} className="w-[70px] h-[70px]" />
          </div>
          <p className="mt-2">{icon.label}</p>
        </div>
      ))}
    </div>
  );
};
