"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Toggle from "@/components/Toggle";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Form() {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <motion.div
      className="rounded-xl md:shadow-xl bg-white w-full mt-24 md:p-8"
      transition={{ bounce: 0.3 }}
      layout
    >
      <div className="flex flex-col pb-8 gap-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <h3 className="font-bold text-3xl">Give us all the details</h3>
          <h4 className="lg:hidden py-2">
            Whistleblow directly to the director of Bank of Maldives.
          </h4>
          <div className="flex justify-center gap-4 w-fit py-2 rounded-md">
            <span className="font-medium text-sm">Anonymous</span>
            <Toggle
              label="Make submission anonymous"
              checked={isAnonymous}
              onChange={setIsAnonymous}
            />
          </div>
        </div>
        <h4 className="hidden lg:block">
          Whistleblow directly to the director of Bank of Maldives.
        </h4>
      </div>
      <form className="flex flex-col justify-start gap-4">
        <motion.div
          className="flex flex-col gap-4"
          animate={
            isAnonymous
              ? {
                  height: 0,
                  opacity: 0,
                  marginBottom: "-1rem",
                  transitionEnd: { display: "none" },
                }
              : {
                  height: "auto",
                  opacity: 1,
                  display: "flex",
                }
          }
          transition={{ ease: "easeInOut" }}
        >
          <Input type="text" placeholder="Name" name="name" />
          <Input type="email" placeholder="Email" name="email" />
        </motion.div>
        <Input type="text" placeholder="Case subject" name="subject" required />
        <TextArea placeholder="Your message" name="message" required />
        <Button type="submit" onClick={(e) => e.preventDefault()}>
          Submit
        </Button>
      </form>
    </motion.div>
  );
}
