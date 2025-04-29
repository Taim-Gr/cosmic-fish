import "./marketCard.css";

export default function MarketCard({ name, cost, type, description, delay }) {
  return (
    <div
      className={`market-card  col-span-1  border-t-4 border-b-1 border-x-1 border-gray-300 rounded-lg p-4 bg-[rgba(21,32,63,0.6)]`}
      style={{
        boxShadow: "0 0 10px rgb(100,181,246)",
        animationDelay: `${delay}s !important`,
      }}
    >
      <div className="card flex flex-col gap-4 justify-between h-full">
        <header className="flex justify-between items-center">
          <h3
            className="text-2xl font-bold name "
            style={{ textShadow: "0 0 10px rgba(29, 233, 182, 0.5)" }}
          >
            {name.split(" ")[0]}
            <span className="block ">
              {`${name.split(" ")[1] && name.split(" ")[1]} ${
                name.split(" ")[2] && name.split(" ")[2]
              }`}
            </span>
          </h3>
          <div className="flex items-center gap-2 bg-yellow-500 rounded-xl px-2">
            <span
              className="w-[10px] h-[10px] bg-white rounded-full shadow-xl shadow-white "
              style={{ boxShadow: "0px 1px 22px 9px #e7e7e763" }}
            ></span>
            <span className="cost text-2xl font-bold  text-black">{cost}</span>
          </div>
        </header>
        <p
          className="type border-2 border-[rgba(100,181,246,0.3)] rounded-xl px-2 text-[#64b5f6]"
          style={{
            boxShadow: "0 0 10px rgba(100, 181, 246, 0.2)",
            border: "1px solid rgba(100, 181, 246, 0.3)",
          }}
        >
          {type}
        </p>
        <p className="description text-[#b0bec5] ">{description}</p>
        <button
          className="text-white px-4 py-2 rounded-xl taim-btn cursor-pointer"
          style={{
            background: "linear-gradient(135deg,#1de9b6,#00bfa5)",
          }}
        >
          Aquire
        </button>
      </div>
    </div>
  );
}
