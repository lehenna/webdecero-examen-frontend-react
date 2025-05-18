import { forwardRef } from "react";
import cn from '../../../Lib/ClassName';

/**
 * Reusable Input component with forwardRef.
 * Inherits all props from a native <input />.
 */
const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input ref={ref} className={cn("input", className)} {...props} />
  );
});

export default Input;
