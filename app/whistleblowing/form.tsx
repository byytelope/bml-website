"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Toggle from "@/components/Toggle";
import { useState } from "react";

export default function Form() {
  const [isAnonymous, setIsAnonymous] = useState(true);

  return (
    <div className="rounded-xl shadow-xl bg-white w-full mt-24 p-8">
      <h3 className="font-bold text-3xl pb-8">Give us all the details</h3>
      <form className="flex flex-col justify-start gap-4">
        <div className="flex space-x-4">
          <span>Anonymous</span>
          <Toggle
            label="Make submission anonymous"
            checked={isAnonymous}
            onChange={setIsAnonymous}
          />
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
