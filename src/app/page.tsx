import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to the Paradise</h1>
      <Link href="/about">
        <button>About Us</button>
      </Link>
      <Link href="/cabins">
        <button>Explore Luxury Cabins</button>
      </Link>
      <Link href="/account">
        <button>Your Account</button>
      </Link>
    </div>
  );
}
