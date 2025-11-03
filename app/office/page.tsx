import Link from "next/link";
export default function OfficePage() {
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
      <h1 style={{ backgroundColor: "yellow", color: "black" }}>
        Hello Ravikiran
      </h1>
    </>
  );
}
