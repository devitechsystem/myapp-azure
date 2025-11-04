"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  const moveToOffice = () => {
    route.push("/office");
  };

  new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 4000);
  });

  return (
    <>
      <Link
        style={{
          border: "4px solid skyblue",
          borderRadius: "5px",
          margin: "1px",
        }}
        href="/"
      >
        <span
          style={{
            backgroundColor: "skyblue",
            padding: "5px",
          }}
        >
          Main
        </span>
      </Link>

      <h1 style={{ backgroundColor: "pink", color: "black" }}>Ravikriam</h1>
      <div>
        <button
          style={{
            border: "4px solid skyblue",
            borderRadius: "5px",
            margin: "1px",
            color: "black",
          }}
          onClick={moveToOffice}
        >
          <span
            style={{
              backgroundColor: "skyblue",
              padding: "5px",
            }}
          >
            Go To Office
          </span>
        </button>
      </div>
    </>
  );
}
