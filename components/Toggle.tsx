import { Switch, SwitchProps } from "@headlessui/react";

interface ToggleProps extends SwitchProps<typeof Switch> {
  label: String;
}

export default function Toggle({ label, ...props }: ToggleProps) {
  return (
    <Switch
      {...props}
      className="ui-checked:bg-bml-red bg-gray-200 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.03)] relative inline-flex h-6 w-10 items-center rounded-full transition-all group"
    >
      <span className="sr-only">{label}</span>
      <span className="absolute transition h-5 w-5 m-0.5 rounded-full bg-white shadow ui-checked:translate-x-4" />
    </Switch>
  );
}
