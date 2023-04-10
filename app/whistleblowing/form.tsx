"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Form() {
  const [isAnonymous, setIsAnonymous] = useState(true);

  return (
    <div className="rounded-xl shadow-xl bg-white w-full mt-24 p-8">
      <h3 className="font-bold text-3xl pb-8">Give us all the details</h3>
      <form className="flex flex-col justify-start gap-4">
        <div className="flex space-x-4">
          <span>Anonymous</span>
          <Switch
            checked={isAnonymous}
            onChange={setIsAnonymous}
            className="ui-checked:bg-bml-red bg-gray-200 relative inline-flex h-6 w-10 items-center rounded-full transition-all group"
          >
            <span className="sr-only">Make submission anonymous</span>
            <span className="absolute transition h-5 w-5 m-0.5 rounded-full bg-white shadow ui-checked:translate-x-4" />
          </Switch>
        </div>
        <Input type="text" placeholder="Case subject" required />
        <TextArea placeholder="Your message" required />
        <Button type="submit" onClick={(e) => e.preventDefault()}>
          Submit
        </Button>
      </form>
    </div>
  );
}
