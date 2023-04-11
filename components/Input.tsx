interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <div className="relative w-full">
      <input
        {...props}
        className={`border-gray-300 focus-visible:ring-gray-500 focus-visible:border-gray-500 transition-colors rounded-md w-full peer placeholder-transparent`}
      />
      <label className="absolute left-3 -top-3 text-gray-500 text-sm peer-focus-within:text-sm peer-focus-within:-top-3 peer-placeholder-shown:top-[9px] peer-placeholder-shown:text-base transition-all tracking-normal bg-white px-px pointer-events-none">
        {props.required ? props.placeholder + " *" : props.placeholder}
      </label>
    </div>
  );
}
