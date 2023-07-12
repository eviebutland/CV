import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./tooltip.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Tooltip = (props: { children?: JSX.Element }) => {
  return (
    <ul className="wrapper">
      <li className="icon github">
        {props.children}
        {/* <span className="tooltip">Github</span>
        <span>
          <FontAwesomeIcon icon={faGithub} />
        </span> */}
      </li>
    </ul>
  );
};
