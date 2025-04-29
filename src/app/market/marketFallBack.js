"use client";

import { useEffect, useState } from "react";
import PlayerCard from "@/components/leaderboard/playerCard";
import MarketCard from "./marketCard";

export default function ClientFallback() {
  const [market, setMarket] = useState([]);

  useEffect(() => {
    const cachedMarket = localStorage.getItem("market");
    if (cachedMarket) {
      setMarket(JSON.parse(cachedMarket));
    }
  }, []);

  if (market.length === 0) {
    return <p className="text-white text-center">No data available offline.</p>;
  }

  let delay = 0;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 relative">
      {market.map((item) => {
        delay += 1;
        return <MarketCard key={item.id} {...item} delay={delay.toString()} />;
      })}
    </div>
  );
}
