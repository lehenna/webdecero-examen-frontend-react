/* eslint-disable jsx-a11y/no-redundant-roles */
import { FormProvider, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";

import cn from "../../../Lib/ClassName";

const Form = ({ children, schema, onSubmit, className }) => {
  const methods = useForm({ resolver: valibotResolver(schema) });

  return (
    <FormProvider {...methods}>
      <form
        className={cn("form", className)}
        role="form"
        onSubmit={methods.handleSubmit((values) => {
          onSubmit(values, methods);
        })}
      >
        {methods.formState.errors.root && (
          <span className="form__error">
            {methods.formState.errors.root.message}
          </span>
        )}
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
