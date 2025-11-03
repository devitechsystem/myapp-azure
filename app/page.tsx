import Image from "next/image";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <div>
        <Link
          style={{
            border: "4px solid skyblue",
            borderRadius: "5px",
            margin: "1px",
          }}
          href="/home"
        >
          <span
            style={{
              backgroundColor: "skyblue",
              padding: "5px",
            }}
          >
            Home
          </span>
        </Link>

        <Link
          href="/office"
          style={{
            border: "4px solid skyblue",
            borderRadius: "5px",
            margin: "1px",
          }}
        >
          <span style={{ backgroundColor: "skyblue", padding: "5px" }}>
            Office
          </span>
        </Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ratione
        quia mollitia illum facere natus voluptates aliquam assumenda.
        Laudantium atque incidunt necessitatibus doloribus deserunt maxime
        perferendis pariatur consequuntur? Iste, quam.
      </p>
    </>
  );
}
