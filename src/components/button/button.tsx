import { ReactChild, ReactEventHandler } from 'react';

export type StyleProps = 'full' | 'outline';

interface ButtonProps {
  text?: string;
  onClick?: ReactEventHandler;
  design?: StyleProps;
  location?: string;
  target?: string;
  priority?: string;
  children?: ReactChild;
}
export const Button = (props: ButtonProps) => {
  const { onClick, text, design, location, target } = props;
  return (
    <a
      href={location}
      onClick={onClick}
      target={target}
      className={`
        p-4 rounded border-transparent min-w-[100px] my-0 mx-2 text-center 
        ${
          design === 'full'
            ? 'border-primary hover:bg-white'
            : 'border-primary bg-transparent hover:bg-primary'
        } 
        ${props.priority === 'primary' ? 'bg-primary' : ''}
        
      `}
    >
      {props.children ? <div>{props.children}</div> : text}
    </a>
  );
};
