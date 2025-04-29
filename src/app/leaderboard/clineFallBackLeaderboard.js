"use client";

import { useEffect, useState } from "react";
import PlayerCard from "@/components/leaderboard/playerCard";

export default function ClientFallback() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    const cachedLeaderboard = localStorage.getItem("leaderboard");
    if (cachedLeaderboard) {
      setLeaderBoard(JSON.parse(cachedLeaderboard));
    }
  }, []);

  if (leaderBoard.length === 0) {
    return <p className="text-white text-center">No data available offline.</p>;
  }

  return (
    <div
      className="flex flex-col gap-y-2 w-full h-full border-2 border-blue-500 rounded-2xl p-2 overflow-y-auto leaderBoradContainer"
      style={{ boxShadow: "rgba(59, 130, 246, 0.22) 0px 0px 30px 10px inset" }}
    >
      <h1>You are Seeing The last Saved Leaderboard data ...</h1>
      {leaderBoard.map((player) => (
        <PlayerCard
          key={player.username}
          userName={player.username}
          rank={player.rank}
          xp={player.xp}
          gold={player.gold}
          level={player.level}
        />
      ))}
    </div>
  );
}
