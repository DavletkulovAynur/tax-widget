import { useId } from "react";
import type { FC } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { IMaskedInput } from "./IMaskedInput";

interface IProps {
  label?: string;
  htmlFor?: string;
  description?: string;
  error?: string;
  className?: string;
  mask?: string;
}

const toInputValue = (value: unknown) =>
  typeof value === "string" ? value : value != null ? String(value) : undefined;

const InputField: FC<IProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  htmlFor,
  description,
  error,
  className,
  mask,
  ...props
}) => {
  const inputId = htmlFor ?? props.id ?? useId();

  const inputProps = {
    ...props,
    id: inputId,
    className: cn(error && "border-destructive ring-destructive/20", className),
    "aria-invalid": !!error,
    value: toInputValue(props.value),
  };

  return (
    <div className="space-y-1">
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {props.required && <span className="text-[#258AFF]">*</span>}
        </Label>
      )}
      {mask ? (
        <IMaskedInput mask={mask} {...inputProps} />
      ) : (
        <Input {...inputProps} />
      )}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export { InputField };
