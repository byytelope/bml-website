interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wide?: boolean;
}

export default function Input({ wide = false, ...props }: InputProps) {
  return (
    <input
      {...props}
      placeholder={
        props.required ? props.placeholder + " *" : props.placeholder
      }
      className={`border-gray-300 focus-visible:ring-gray-500 focus-visible:border-gray-500 transition-colors rounded-md ${
        wide && "w-full"
      }`}
    />
  );
}
