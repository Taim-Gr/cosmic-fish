import Image from "next/image";
import { Suspense } from "react";
import Link from "next/link";

import "./home.css";
import MobileMenu from "@/components/header/mobileMenu";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="title-glow">
          <span className="star-icon"></span>
          Cosmic Fishing
          <span className="star-icon"></span>
        </h1>
        <p className="subtitle">
          Explore the vast galaxies, catch cosmic fish, and become the greatest
          space angler under the command of Captain{" "}
          <span className="captain">David Barinas</span>
        </p>
      </section>

      <div className="content-grid">
        <section className="section">
          <h2 className="section-title">Galactic Leaderboard</h2>
          <p className="section-desc">
            The universe is vast, but fame travels at light speed! See who ranks
            among the most skilled space anglers. Captain Barinas records every
            catch, every achievement, and your name could be next on this
            prestigious list.
          </p>
          <Link href="/leaderboard">
            <span className="btn">View Leaderboard</span>
          </Link>
        </section>

        <section className="section">
          <h2 className="section-title">Cosmic Market</h2>
          <p className="section-desc">
            Enhance your fishing capabilities with advanced technology from
            across the stars. Trade your hard-earned cosmic gold for powerful
            gear, rare bait, and special equipment that will help you catch the
            most elusive space creatures.
          </p>
          <Link href="/market">
            <span className="btn">Visit Market</span>
          </Link>
        </section>
      </div>

      <section className="section">
        <h2 className="section-title">About The Expedition</h2>
        <p className="section-desc">
          Led by the renowned explorer Captain David Barinas, our cosmic fishing
          expedition ventures into the deepest reaches of space. What began as a
          small research mission has evolved into the galaxys most exciting
          competition.
        </p>
        <p className="section-desc">
          Captain Barinas discovered that the cosmos is teeming with
          extraordinary aquatic-like entities that can be fished using
          specialized equipment. These creatures yield valuable resources and
          bring glory to those skilled enough to catch them.
        </p>
        <p className="section-desc">
          Join our ranks, learn from the best, upgrade your gear, and you might
          just become a legend among the stars!
        </p>
      </section>
    </div>
  );
}
