"use client";

import { useEffect } from "react";

export default function SaveMarketStorage({ data }) {
  useEffect(() => {
    if (data && data.length > 0) {
      localStorage.setItem("market", JSON.stringify(data));
    }
  }, [data]);
  return null;
}
