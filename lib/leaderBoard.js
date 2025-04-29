import { revalidatePath } from "next/cache";

export async function getLeaderBoard() {
  try {
    const response = await fetch(
      "https://api-game.bloque.app/game/leaderboard",
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await response.json();
    return data.players;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}
