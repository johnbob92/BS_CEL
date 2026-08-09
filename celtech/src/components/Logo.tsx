import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/images/logo_celtech.png"
        alt={`${site.name} logo`}
        width={512}
        height={288}
        priority={priority}
        className="h-9 w-auto md:h-10"
      />
    </Link>
  );
}
