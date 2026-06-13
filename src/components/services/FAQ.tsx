const faqs = [
  {
    question: "How much does a custom aquarium cost?",
    answer:
      "Pricing depends on size, materials, filtration systems, aquascaping complexity, and livestock requirements.",
  },
  {
    question: "Do you provide maintenance services?",
    answer:
      "Yes. We offer Essential, Premium, and Elite maintenance plans for residential and commercial aquariums.",
  },
  {
    question: "Can you build marine reef aquariums?",
    answer:
      "Absolutely. We design and maintain premium reef systems with corals, marine fish, and advanced filtration.",
  },
  {
    question: "Do you work with businesses?",
    answer:
      "Yes. We serve hotels, offices, restaurants, healthcare facilities, and luxury commercial spaces.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            FAQ
          </p>

          <h2 className="font-serif text-5xl">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="premium-card p-8">
              <h3 className="text-xl font-semibold">{faq.question}</h3>

              <p className="mt-4 leading-7 text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
