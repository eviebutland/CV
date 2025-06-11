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
    // /grid grid-cols-4 gap-6 xl:gap-12
    <div className="flex flex-wrap gap-6 xl:gap-12 justify-center">
      {props.icons.map((icon, index) => (
        <Tooltip label={icon.label} key={`tool-tip-${index}`}>
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
