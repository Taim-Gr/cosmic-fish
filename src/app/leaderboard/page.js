import "./leaderboard.css";

import { getLeaderBoard } from "../../../lib/leaderBoard";
import PlayerCard from "@/components/leaderboard/playerCard";
import Image from "next/image";
import ClineFallBackLeaderboard from "./clineFallBackLeaderboard";
import SaveLeaderboard from "./saveLeaderBoardData";
async function LeaderboardContent() {
  let leaderBoard = await getLeaderBoard();
  return (
    <>
      <header>
        <div className="flex justify-center items-center gap-x-1 overflow-hidden">
          <Image
            src="/images/001-01.svg"
            alt="logo"
            width={40}
            height={40}
            className="mb-4 mx-auto animate-pulse"
            style={{
              borderColor: "blue",
            }}
          />

          <h1
            className="text-white mb-4 text-center text-[35px] font-bold"
            style={{ fontFamily: "AirStrike" }}
          >
            GLACTIC OCEAN LEADERBOARD
          </h1>

          <Image
            src="/images/002-01.svg"
            alt="logo"
            width={40}
            height={40}
            className="mb-4 mx-auto animate-pulse"
            style={{
              borderColor: "blue",
            }}
          />
        </div>
        <p
          className="text-white mb-4 text-center text-[15px]"
          style={{ fontFamily: "RetroFont" }}
        >
          The best fishers in the galaxy
        </p>
      </header>
      {leaderBoard.length === 0 ? (
        <ClineFallBackLeaderboard />
      ) : (
        <div
          className="flex flex-col gap-y-2 w-full h-full border-2 border-blue-500 rounded-2xl p-2 overflow-y-auto leaderBoradContainer"
          style={{
            boxShadow: "rgba(59, 130, 246, 0.22) 0px 0px 30px 10px inset",
          }}
        >
          <SaveLeaderboard data={leaderBoard} />
          {leaderBoard.map((player) => {
            return (
              <PlayerCard
                key={player.username}
                userName={player.username}
                rank={player.rank}
                xp={player.xp}
                gold={player.gold}
                level={player.level}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default function Leaderboard() {
  return (
    <div className="px-[24px] max-w-[1200px] mx-auto relative z-10 py-10 ">
      <div className="leaderBoradContainer">
        <LeaderboardContent />
      </div>
    </div>
  );
}
