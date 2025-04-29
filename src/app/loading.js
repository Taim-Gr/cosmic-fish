export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center  relative">
      <video src="/videos/earthmoving.webm" autoPlay muted loop />
      <h2 className="text-white text-4xl font-bold text-center">
        Make Sure To Fish While Fetching !
      </h2>
    </div>
  );
}
