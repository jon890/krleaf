import NavBar from "./navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col ">
      <div className="bg-[url('/images/background/bg_main1.png')] h-[1000px] bg-no-repeat bg-cover">
        <NavBar />
      </div>
    </main>
  );
}
