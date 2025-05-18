import { forwardRef } from "react";
import cn from "../../../Lib/ClassName";

/**
 * Reusable Card component with forwardRef.
 * Inherits all props from a native <div />.
 */
const Card = forwardRef(
  ({ children, className, as: As = "div", ...props }, ref) => {
    return (
      <As ref={ref} className={cn("card", className)} {...props}>
        {children}
      </As>
    );
  }
);

export default Card;
