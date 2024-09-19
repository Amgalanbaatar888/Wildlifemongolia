"use client";

import { useCallback, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";

const PhoneCopy: React.FC = () => {
  const email = "(+976)-99074355";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }, [email]);

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
      <span className="text-base cursor-pointer" onClick={copyToClipboard}>
        {email}
      </span>
      {copied ? (
        <span>
          <FaCheck />
        </span>
      ) : (
        <span className="cursor-pointer" onClick={copyToClipboard}>
          <IoCopyOutline />
        </span>
      )}
    </div>
  );
};

export default PhoneCopy;
