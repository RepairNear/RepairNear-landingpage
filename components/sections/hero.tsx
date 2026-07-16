import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-4 md:pt-8 pb-10">
      <div
        className="absolute inset-0 stripes-bg opacity-55 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-0 bottom-0 left-[8%] right-[8%] bg-[color:var(--color-bg)] pointer-events-none"
        aria-hidden
      />

      <div className="container-page relative z-10 text-center">
        <h1 className="mx-auto max-w-[1000px] text-[40px] sm:text-[54px] md:text-[69px] font-bold tracking-[-0.035em] leading-[1.02]">
          Find trusted repair <br /> technicians{" "}
          <span className="font-extrabold text-accent [-webkit-text-stroke:1.5px_currentColor]">
            Near You.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[520px] text-[17px] text-[color:var(--color-ink-soft)] leading-relaxed">
          Compare verified repair shops across Ghana, book a repair, and
          track your device from drop-off to pickup.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5">
          <a
            href="https://apps.apple.com/app/id6788511622"
            className="inline-flex w-full max-w-60 justify-center items-center gap-2.5 bg-[color:var(--color-ink)] text-white px-6 py-3.5 rounded-[11px] text-[14px] font-semibold sm:w-auto sm:max-w-none"
          >
            Get from Apple
            <svg
              width={16}
              height={16}
              viewBox="0 0 384 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </a>

          <span className="text-[13px] font-medium text-[color:var(--color-ink-soft)]">
            Or
          </span>

          <a
            href="https://play.google.com/store/apps/details?id=com.DAGElectronics.repairnear"
            className="inline-flex w-full max-w-60 justify-center items-center gap-2.5 bg-[color:var(--color-accent)] text-white hover:bg-accent-deep px-6 py-3.5 rounded-[11px] text-[14px] font-semibold sm:w-auto sm:max-w-none"
          >
            Play Store
            <svg
              width={16}
              height={16}
              viewBox="0 0 512 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
          </a>
        </div>

        

        <div className="mt-10 md:mt-6 relative">
          {/* <div className="mx-auto max-w-4xl aspect-[16/9] rounded-3xl border-2 border-dashed border-[color:var(--color-line)] bg-white/40 flex items-center justify-center text-[color:var(--color-ink-muted)] text-sm text-center px-6">
            Your three-phone composition drops in here &rarr;{" "}
            public/hero-phones.png (transparent PNG, 2x or 3x)
          </div> */}
          {/* When public/hero-phones.png exists, replace the placeholder div above with this: */}
          <Image
            src="/hero2.png"
            alt="RepairNear app on three phones"
            width={1200}
            height={900}
            priority
            className="mx-auto max-w-4xl w-full h-auto"
          />
        </div>
        <p className="mt-5 text-[13px] font-medium text-[color:var(--color-ink-soft)]">
          <span className="font-bold text-[color:var(--color-accent-deep)]">
            4.9&#9733;
          </span>{" "}
          average rating &middot; 500+ verified technicians across Ghana
        </p>
      </div>
    </section>
  );
}
