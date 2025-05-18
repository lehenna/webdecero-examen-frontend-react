import { forwardRef } from "react";
import cn from '../../../Lib/ClassName';

/**
 * Reusable Button component with forwardRef.
 * Inherits all props from a native <button />.
 */
const Button = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={cn("button", className)} {...props}>
      {children}
    </button>
  );
});

export default Button;
