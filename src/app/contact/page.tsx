"use client";

import { Meteors } from "@/components/ui/meteors";
import { useState, FormEvent } from "react";

function page() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted Data", { name, message });
    setName("")
    setMessage("")
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <Meteors number={100} />
      <div>
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          we'are here to help with any question about our courses, programs, or
          events.React out and let us know how we can assist you in your musical
          journey.
        </p>
      </div>
      <form method="POST" onSubmit={handleSubmit} className="space-y-4 m-10">
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
        />
        <label htmlFor="message"></label>
        <textarea
          name="message"
          id="message"
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={8}
          cols={60}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default page;
