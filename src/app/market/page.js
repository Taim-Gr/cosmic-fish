import { getMarket } from "../../../lib/market";
import MarketCard from "./marketCard";
import SaveMarketStorage from "./saveMarketStorage";
import ClientFallback from "./marketFallBack";
export default async function Market() {
  const itemsData = await getMarket();
  let delay = 0;
  return (
    <div className="px-[24px] max-w-[1200px] mx-auto pb-[80px]">
      {itemsData.length === 0 ? (
        <ClientFallback />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 relative">
            {itemsData.map((item) => {
              delay += 1;
              return (
                <MarketCard key={item.id} {...item} delay={delay.toString()} />
              );
            })}
          </div>
          <SaveMarketStorage data={itemsData} />
        </>
      )}
    </div>
  );
}
