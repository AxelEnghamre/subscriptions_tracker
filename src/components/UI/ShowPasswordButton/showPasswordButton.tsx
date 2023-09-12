import Image from "next/image";
import { useState } from "react";

const ShowPasswordButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLImageElement>;
}) => {
  return (
    <Image src={"/eye.svg"} width={22} height={15} alt="" onClick={onClick} />
  );
};
export default ShowPasswordButton;
