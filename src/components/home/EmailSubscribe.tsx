import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-[600px] flex-col sm:flex-row">
      <Input
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-[rgba(217,217,217,0.1)] text-white text-xl font-extralight px-6 py-[26px] rounded-[20px] sm:rounded-[20px_0px_0px_20px] border-0 focus-visible:ring-0 mb-3 sm:mb-0"
        required
      />
      <Button
        type="submit"
        className="bg-[#DDFCAD] text-black text-xl px-[34px] py-[26px] rounded-[20px] sm:rounded-[0px_20px_20px_0px] hover:bg-[#c5e48d]"
      >
        Get Started
      </Button>
    </form>
  );
};

export default EmailSubscribe;