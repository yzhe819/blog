"use client";

import { ButtonHTMLAttributes } from "react";
import { ChevronRightIcon } from "lucide-react";

export function ReturnButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="flex items-center gap-1 text-neutral-500 py-1 space-x-2 rounded transition font-mono text-sm"
      {...props}
    >
      <ChevronRightIcon size={16} strokeWidth={2} className="inline-block" />
      <span>cd ..</span>
    </button>
  );
}
