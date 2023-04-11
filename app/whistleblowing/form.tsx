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
      className="rounded-xl shadow-xl bg-white w-full mt-24 p-8"
      transition={{ bounce: 0.3 }}
      layout
    >
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
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
        </motion.div>
        <Input type="text" placeholder="Case subject" required />
        <TextArea placeholder="Your message" required />
        <Button type="submit" onClick={(e) => e.preventDefault()}>
          Submit
        </Button>
      </form>
    </motion.div>
  );
}
