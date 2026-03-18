import Image from "next/image";

export default function NyzaLogo({ className = "", width = 120, dark = false }: { className?: string; width?: number; dark?: boolean }) {
  return (
    <Image
      src="/uploads/nyza logo.png"
      alt="NYZA Studio"
      width={width}
      height={Math.round(width * 0.4)}
      className={`${dark ? "brightness-0 invert" : ""} ${className}`}
      priority
    />
  );
}
