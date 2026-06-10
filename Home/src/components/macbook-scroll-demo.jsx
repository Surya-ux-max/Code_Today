import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden">
      <MacbookScroll
        title={
          <span>
            Connect With The World
          </span>
        }
        badge={
          <a href="/" aria-label="Home">
            <Badge className="h-10 w-10" />
          </a>
        }
        src={`/icons.svg`}
        showGradient={false}
        content={
          <div className="p-6 text-left">
            <h3 className="text-2xl font-semibold text-white mb-2">Achievements</h3>
            <ul className="list-disc ml-5 space-y-1 text-sm text-white/90">
              <li>1M+ users worldwide</li>
              <li>100k+ communities created</li>
              <li>99.99% uptime</li>
            </ul>
          </div>
        } />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }) => {
  return (
    <div
      className={className + " flex items-center justify-center text-black font-bold"}
      style={{ width: 40, height: 40 }}>
      X
    </div>
  );
};

export default MacbookScrollDemo;
