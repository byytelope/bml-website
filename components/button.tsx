interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  wide?: boolean;
}

export default function Button({ wide = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${
        wide ? "w-full" : "w-fit"
      } bg-bml-red text-white uppercase font-medium text-sm tracking-wider rounded-full px-8 py-3 hover:shadow-lg hover:shadow-bml-red/50 hover:scale-105 transition-all duration-300`}
    />
  );
}
