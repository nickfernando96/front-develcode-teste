import { Form as UnformForm } from '@unform/web';
import React, { createContext, forwardRef , useMemo } from "react";

const FormContext = createContext({
  disabled: false,
  submitCount: 0,
  isSubmitting: false 
});
export const FormContextProvider = ({ 
  disabled, 
  submitCount, 
  isSubmitting,
  children 
}) => {
  const value = useMemo(() => ({ disabled, submitCount, isSubmitting }), [disabled, submitCount, isSubmitting]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const Form = forwardRef(({ 
  disabled = false, 
  submitCount = 0, 
  isSubmitting = false,
  noValidate = true,
  children, 
  ...props
}, ref) => {
  return (
    <FormContextProvider disabled={disabled} submitCount={submitCount} isSubmitting={isSubmitting}>
      <UnformForm { ...props} noValidate={noValidate} ref={ref}>
        { children }
      </UnformForm>
    </FormContextProvider>
  );
});
