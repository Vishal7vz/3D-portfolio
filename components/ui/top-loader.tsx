"use client";
import * as React from "react";
import { usePathname } from "next/navigation";

export function TopLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(10);
    const t1 = setTimeout(() => setProgress(60), 150);
    const t2 = setTimeout(() => setProgress(85), 400);
    const t3 = setTimeout(() => setProgress(100), 800);
    const t4 = setTimeout(() => setProgress(0), 1200);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className="h-full w-full origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-[transform,opacity] duration-500"
        style={{ transform: `scaleX(${progress / 100})`, opacity: progress ? 1 : 0 }}
      />
    </div>
  );
}
