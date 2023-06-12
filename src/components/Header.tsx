import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("shared/header"), {ssr: false})

export const Header = () => {
  return (
    <HeaderComponent />
  );
};
