import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string | string[];
  highlight?: string;
  href: string;
  ctaLabel?: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  imageSize?: number;
};

const mergeClasses = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

const ServiceCard = ({
  title,
  highlight = "",
  href,
  ctaLabel = "Vai",
  imageSrc,
  imageAlt,
  className,
  imageSize = 120,
}: ServiceCardProps) => {
  const titleLines = Array.isArray(title)
    ? title
    : title
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

  return (
    <div
      className={mergeClasses(
        "relative flex w-full flex-col items-center gap-6 bg-white px-6 sm:px-8 pb-8 sm:pb-10 pt-16 text-center shadow-xl",
        className,
      )}
    >
      <div
        className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full shadow-md"
        style={{ width: imageSize, height: imageSize }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? titleLines.join(" ")}
          width={imageSize}
          height={imageSize}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-1 text-sky-900">
        {titleLines.map((line, index) => (
          <p className="text-lg font-light" key={`${line}-${index}`}>
            {line}
          </p>
        ))}
        {highlight && (
          <p className="text-lg font-semibold uppercase tracking-wide">
            {highlight}
          </p>
        )}
      </div>

      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-full border border-sky-500 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-sky-600 transition-colors hover:bg-sky-500 hover:text-white"
      >
        {ctaLabel}
      </Link>
    </div>
  );
};

export default ServiceCard;
