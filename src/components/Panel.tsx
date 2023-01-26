import classNames from "classnames";
import React from "react";
interface PanelProps {
  children?: React.ReactNode;
  className: string;
}
const Panel = ({
  children,
  className,
  ...rest
}: PanelProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};
export default Panel;
