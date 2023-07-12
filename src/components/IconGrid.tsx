import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "./tooltip/tooltip";

interface Props {
  icons: Array<{
    label: string;
    value: IconDefinition;
    url: string;
  }>;
}

export const IconGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-4 gap-6 xl:gap-12 ">
      {props.icons.map((icon) => (
        <Tooltip label={icon.label}>
          <a href={icon.url} target="_blank" rel="noreferrer">
            <div className="text-center">
              <div className="bg-secondary rounded-full h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] flex justify-center items-center">
                <FontAwesomeIcon
                  icon={icon.value}
                  className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
                />
              </div>
            </div>
          </a>
        </Tooltip>
      ))}
    </div>
  );
};
