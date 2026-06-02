"use client";

import { Button } from "@/components/ui/Button";

export function HeroCta() {
  return (
    <div className="mt-10 hidden lg:block">
      <Button
        variant="primary"
        className="!px-8 !py-4"
        onClick={() =>
          document.getElementById("adventure-form")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Get Early Access
      </Button>
      <p className="mt-2 text-xs text-white/60">Limited beta spots available</p>
    </div>
  );
}
