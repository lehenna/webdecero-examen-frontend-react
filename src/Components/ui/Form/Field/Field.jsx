import { useFormContext } from "react-hook-form";

const Field = ({ name, render, icon }) => {
  const methods = useFormContext();

  if (!methods) throw new Error("Field must be used inside a FormProvider");

  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="field">
      <label className="field__label">
        {icon && <span className="field__icon">{icon}</span>}
        {render(register(name))}
      </label>
      {errors[name] && (
        <p className="field__message">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Field;
