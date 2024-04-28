import SignInButton from "./components/SignInButton";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="relative h-2/3 w-1/4 flex flex-col justify-center gap-16 items-center">
        <div className="relative">
          <span className="text-6xl font-extrabold bg-gradient-to-r select-none from-pink-500 via-red-500 to-yellow-500 bg-clip-text yp-5 text-transparent">
            BlogSQL &nbsp;
          </span>

          <span className="underline text-red-300 font-bold text-4xl select-none">
            Login
          </span>
        </div>
        <SignInButton />
      </div>
    </div>
  );
}
