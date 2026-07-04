import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0A0A0A] py-16 lg:py-28 border-t border-neutral-800 border-b border-neutral-800">

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

        <p className="uppercase tracking-[8px] text-amber-400 font-semibold">
          Visit The Drip
        </p>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Every Great Conversation
          <br />
          Begins With A Great Cup.
        </h2>

        <p className="mt-6 lg:mt-8 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 text-gray-400">
          Whether you&apos;re starting your day, catching up with friends,
          celebrating special moments or simply taking a break,
          The Drip welcomes you with handcrafted beverages,
          exceptional flavours and an atmosphere you&apos;ll always
          want to return to.
        </p>

        <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">

          <Link
            href="/menu"
            className="w-full sm:w-auto bg-amber-400 text-black px-8 py-4 rounded-full font-semibold text-center hover:bg-amber-300 transition"
          >
            Explore Our Menu
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto border border-neutral-700 text-white px-8 py-4 rounded-full text-center hover:border-amber-400 transition"
          >
            Visit Us
          </Link>

        </div>

      </div>

    </section>
  );
}