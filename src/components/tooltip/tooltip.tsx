import "./tooltip.css";

export const Tooltip = (props: { children?: JSX.Element; label: string }) => {
  return (
    <ul className="wrapper">
      <li className="icon">
        <span className="tooltip">{props.label}</span>
        {props.children}
      </li>
    </ul>
  );
};
