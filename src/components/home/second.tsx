import Image from "next/image";
export default function Second() {
  return (
    <div  className=" p-8">
      <div className="parent flex ">
        <div className="div1">
          <Image
            src={"/photo2.jpeg"}
            height={600}
            width={600}
            alt="anoj"
            className="ml-10 rounded-2xl"
          />
        </div>
        <div className="text-[18px] text-[#4a4a46] font-bold mt-10 px-20">
          I approach frontend challenges like puzzles to solve. Whether it's a
          tricky CSS layout, complex state management, or performance
          bottleneck, I enjoy breaking down problems and building elegant,
          efficient solutions.
        </div>
      </div>
      ;
      <div className="parent flex">
        <div className="text-[18px]">
          <Image
            src={"/photo1.jpeg"}
            height={600}
            width={600}
            alt="surendra"
            className="ml-10 rounded-2xl"
          />
        </div>
        <div className="text-[18px] text-[#4a4a46] font-bold mt-10 px-20">
          Senior Frontend Developer with expertise in architecting scalable
          applications and leading development teams. Focused on system design,
          performance optimization, and mentoring junior developers. Strategic
          thinker balancing technical excellence with business goals
        </div>
      </div>
      ;
    </div>
  );
}




