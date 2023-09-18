import Image from "next/image";

const Search = () => {
  return (
    <nav className="flex flex-row justify-between items-center pb-[40px] pt-[10px] h-[115px]">
      <div>
        <Image src={"/darkLogo.svg"} alt="Logo" width={116} height={65} />
      </div>
      <div className="flex flex-row gap-[20px] pr-8">
        <div>
          <Image
            src={"/bell.svg"}
            alt="notifications"
            width={30.03}
            height={35}
          />
        </div>

        <div>
          <Image
            src={"/search.svg"}
            alt="notifications"
            width={28}
            height={28}
          />
        </div>
      </div>
    </nav>
  );
};

export default Search;
