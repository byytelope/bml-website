interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      placeholder={
        props.required ? props.placeholder + " *" : props.placeholder
      }
      className={`border-gray-300 focus-within:ring-gray-500 focus-within:border-gray-500 transition-colors rounded-md h-36 resize-none`}
    />
  );
}
