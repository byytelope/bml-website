interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ ...props }: TextAreaProps) {
  return (
    <div className="relative w-full">
      <textarea
        {...props}
        className={`border-gray-300 focus-within:ring-gray-500 focus-within:border-gray-500 transition-colors rounded-md h-36 resize-none w-full peer placeholder-transparent`}
      />
      <label className="absolute left-3 -top-3 text-gray-500 text-sm peer-focus-within:text-sm peer-focus-within:-top-3 peer-placeholder-shown:top-[9px] peer-placeholder-shown:text-base transition-all tracking-normal bg-white px-px pointer-events-none">
        {props.required ? props.placeholder + " *" : props.placeholder}
      </label>
    </div>
  );
}
