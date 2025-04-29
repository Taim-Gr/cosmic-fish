import { revalidatePath } from "next/cache";

export async function getMarket() {
  try {
    const response = await fetch("https://api-game.bloque.app/game/market", {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching Market:", error);
    return [];
  }
}
