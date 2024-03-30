"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animation";

interface Props {
  href: string;
  label: string;
}

const MenuLink = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className="text-xl text-neutral-900 hover:text-neutral-700"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default MenuLink;
