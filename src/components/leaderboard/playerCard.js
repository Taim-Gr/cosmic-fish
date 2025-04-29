import Image from "next/image";

import "./playerCard.css";

export default function PlayerCard({ userName, rank, xp, gold, level }) {
  return (
    <div className="relative card-container">
      <Image
        src="/images/002-01.svg"
        alt="logo"
        width={20}
        height={20}
        className="sharkImg opacity-0 absolute top-[50%] translate-y-[-50%] right-[-10px] z-50 animate-bounce transition-all duration-300"
        style={{
          borderColor: "blue",
        }}
      />
      <div
        className={` player-card flex items-center p-4 card-glow rounded-2xl gap-x-4 relative `}
      >
        {rank === 1 && <div className="rank-1-glow"></div>}

        <div
          className={`w-[51px] h-[46px] bg-blue-500  rounded-full flex justify-center items-center text-white text-[20px] font-bold relative ${
            rank === 1 && "rank-1"
          } ${rank === 2 && "rank-2"} ${rank === 3 && "rank-3"} `}
        >
          {rank}
        </div>
        <div className="text-white text-[20px] font-bold flex justify-between w-full items-center">
          <div className="flex flex-col gap-y-1">
            <div className="text-[20px] text-glow flex items-center gap-x-1">
              {rank === 1 && (
                <Image
                  className=""
                  src="/images/crown_6941697.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              )}
              {rank === 2 && (
                <Image
                  src="/images/star-badge_11173836.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              )}
              {rank === 3 && (
                <Image
                  src="/images/anchor.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
              )}
              {userName.length < 7 ? (
                <span>{userName}</span>
              ) : (
                <div className="">
                  <span className="block sm:inline">
                    {userName.slice(0, 7)}
                  </span>
                  <span className="block sm:inline">{userName.slice(7)}</span>
                </div>
              )}
            </div>
            <div className="flex  items-center gap-x-1 ">
              <Image
                src="/images/001-01.svg"
                alt="logo"
                width={15}
                height={15}
                style={{
                  borderColor: "blue",
                }}
              />
              <p className="text-white text-[13px] font-bold">
                Level : {level}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-x-1 text-[18px] gap-y-1 text-right">
            <div className="text-[rgb(29,173,218)]  font-bold flex items-center gap-x-1 ">
              <Image
                src="/images/up-arrow_11019649.svg"
                alt="logo"
                width={20}
                height={20}
                className="animate-bounce arrow-up hidden sm:block"
              />
              <span>{xp} XP</span>
            </div>
            <p className="text-white  font-bold flex items-center gap-x-1 ">
              <span>{gold}</span>
              <Image
                src="/images/coin_11280638.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
