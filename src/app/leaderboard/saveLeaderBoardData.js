"use client";

import { useEffect } from "react";

export default function SaveLeaderboard({ data }) {
  useEffect(() => {
    if (data && data.length > 0) {
      localStorage.setItem("leaderboard", JSON.stringify(data));
    }
  }, [data]);

  return null;
}
