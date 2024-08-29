import Link from "next/link";
import Image from "next/image";
import Pizza from "../../public/pizza.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-red-500 to-yellow-400">
      <div className="text-center">
        <Image
          src={Pizza}
          height={400}
          width={400}
          alt="Delicious pizza"
          className="animate-spin-slow mb-8"
        />
        <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
          Slice of Heaven
        </h1>
        <p className="text-2xl text-white mb-8 italic">
          Where every bite is a divine experience!
        </p>
        <Link
          href="/menu"
          className="bg-white text-red-500 font-bold text-xl py-3 px-8 rounded-full hover:bg-red-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  );
}
