"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/textArea";

export default function Form() {
  return (
    <form className="flex flex-col justify-start gap-4">
      <Input type="text" placeholder="Case subject" required />
      <TextArea placeholder="Your message" required />
      <Button type="submit" onClick={(e) => e.preventDefault()}>
        Submit
      </Button>
    </form>
  );
}
