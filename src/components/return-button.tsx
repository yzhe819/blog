"use client";

import { ButtonHTMLAttributes } from "react";
import { ChevronRightIcon } from "lucide-react";

export function ReturnButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="flex items-center gap-1 mt-3 text-neutral-500 p-1 space-x-2 rounded transition font-mono text-sm hover:bg-neutral-50/80 dark:hover:bg-neutral-800/80"
      {...props}
    >
      <ChevronRightIcon size={16} strokeWidth={2} className="inline-block" />
      <span>cd ..</span>
    </button>
  );
}
