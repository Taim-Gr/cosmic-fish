export default function PlanetMoving() {
  return (
    <div className="absolute top-0 left-0  z-20">
      <video
        src="/videos/Animation - 1745576559327.webm"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover planet-moving"
      />
    </div>
  );
}
