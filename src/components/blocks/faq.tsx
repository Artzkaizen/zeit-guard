import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const content = [
  {
    value: "item-1",
    question: "What is ZeitGuard, and how does it work?",
    answer:
      "ZeitGuard is a productivity platform that helps you manage tasks, track progress, and collaborate with your team. It works by providing intuitive tools for project management, time tracking, and workflow optimization.",
  },
  {
    value: "item-2",
    question: "Is there a free version of ZeitGuard?",
    answer:
      "Yes! Our Free Plan (Demo Version) allows you to explore basic features like task tracking, limited productivity insights, and one connected app integration. It's perfect for getting started and understanding how ZeitGuard can fit into your workflow.",
  },
  {
    value: "item-5",
    question: "Can I track my productivity with ZeitGuard?",
    answer:
      "ZeitGuard provides detailed productivity analytics, time tracking, and progress reports to help you understand your work patterns and improve efficiency.",
  },
  {
    value: "item-4",
    question: "How ZeitGuard Helps You Overcome Procrastination?",
    answer:
      "Provides easy-to-understand information about procrastination, helping students understand its causes, effects, and consequences, empowering them to tackle it head-on.",
  },
];
const Faq = () => {
  return (
    <section id="faqs" className="container mx-auto px-4 py-16 scroll-mt-20">
      <div>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions? We've got answers! Explore our frequently asked
              questions to learn more about how ZeitGuard can boost your
              productivity.
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="space-y-4">
              {content.map(({ value, question, answer }) => (
                <AccordionItem
                  key={value}
                  value={value}
                  className="border rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline  cursor-pointer">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-primary/5 backdrop-blur-2xl">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
