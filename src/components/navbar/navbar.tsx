import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-[#f6f5f1]">
      <div className=" m-2 p-2">
        <Image src={"logo.svg"} height={300} width={250} alt="logo" />
      </div>
    </div>
  );
}
