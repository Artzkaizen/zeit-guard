import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { ArrowRight, Circle, Instagram, Facebook } from "lucide-react";
import React, { useState } from "react";


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
      value: "item-3",
      question: "Can I use ZeitGuard with my team?",
      answer:
        "Yes, ZeitGuard is designed for both individual and team use. Our team plans offer collaboration features, shared workspaces, and team analytics to boost productivity.",
    },
    {
      value: "item-4",
      question: "What apps can I integrate with ZeitGuard?",
      answer:
        "ZeitGuard integrates with popular productivity tools like Slack, Google Calendar, Trello, Asana, GitHub, and many more. Our API also allows for custom integrations.",
    },
    {
      value: "item-5",
      question: "Can I track my productivity with ZeitGuard?",
      answer:
        "ZeitGuard provides detailed productivity analytics, time tracking, and progress reports to help you understand your work patterns and improve efficiency.",
    },
  ]
const Main = () => {
  return (
    <div>
      {/* FAQ Section */}
      <section >
        <div >

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Frequently Asked <br/> Questions
          </h2>
          <p className="text-gray-400 mb-8">
            Have questions? We've got answers! Explore our frequently asked questions to learn more about how ZeitGuard
            can boost your productivity.
          </p>
            </div>

            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="space-y-4">
                {content.map(({ value, question, answer }) => (
                  <AccordionItem key={value} value={value} className="border border-zinc-800 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-zinc-900 hover:no-underline">{question}</AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-zinc-900">{answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Ready to Take Control of
          <br />
          Your Workflow?
        </h2>
        <p className="text-gray-400 mb-8">Streamline your tasks and boost your productivity today.</p>
        <Button >Get Started</Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <Circle className="h-5 w-5 mr-2 fill-purple-500 text-purple-500" /> */}
              <span className="font-semibold">ZeitGuard</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              8502 Preston Rd. Inglewood,
              <br />
              Maine 98380
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <Circle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy & Cookie Policy</li>
              <li>Security Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Terms of Service</li>
              <li>Right of Withdrawal</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Subscribe for Newsletter</h3>
            <div className="flex">
              <input placeholder="Enter Your Email Here" className="bg-transparent border border-zinc-700 px-4 py-2 w-full rounded-l-md" />
              <Button className="bg-purple-500 hover:bg-purple-600 rounded-r-md">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
