import Form from "./form";

export default function Whistleblowing() {
  const whistleExamples = [
    "Unlawful acts, or orders that lead to violation of laws, mismanagement, abuse of authority & resources of the Bank.",
    "Fraudulent activities conducted by the management, employees, third parties or those charged with governance, which involves the use of deception to obtain an unjust or illegal advantage.",
    "Corruption and bribery – offer & acceptance of bribery, attainment of undue advantage or the facilitation of attainment of undue advantage through use of influence from position.",
    "Misconduct – failure to adhere to Bank’s policies, rules, violation of ethics & professional standards of conduct which could have significant adverse effect on the Bank.",
    "Human Rights abuse & violation of international laws on human rights.",
    "Any act that threatens public health and safety.",
    "Any act that damages the environment.",
    "Miscarriage of justice.",
    "Any other activity which undermines the Bank’s operation and mission.",
    "Any action done with the intention of hiding above stated acts.",
  ];

  return (
    <section className="min-h-[calc(100vh-5rem)] w-full flex flex-col items-center">
      <div className="mt-24 mb-48 p-16 max-w-screen-lg text-center space-y-4 rounded-xl">
        <h1 className="font-bold text-7xl">Whistleblowing</h1>
        <p className="text-xl">
          Help us maintain the highest standard of accountability and probity by
          raising your concerns with us directly.
        </p>
      </div>
      <div className="max-w-screen-md w-full">
        <div className="space-y-4">
          <h2 className="font-bold text-5xl">What is a &quot;whistle&quot;?</h2>
          <p className="text-lg">
            Under the Bank&apos;s Whistleblowing Policy, a{" "}
            <span className="underline">Whistle</span> shall mean and include:
          </p>
          <ul className="list-image-[url(/bullet.svg)]">
            {whistleExamples.map((whistle, i) => (
              <li key={"whistle" + i} className="font-light ml-3 pl-3 py-2">
                {whistle}
              </li>
            ))}
          </ul>
        </div>
        <Form />
      </div>
    </section>
  );
}
