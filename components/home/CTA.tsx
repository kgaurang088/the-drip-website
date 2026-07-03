import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#0A0A0A] py-28 border-t border-neutral-800 border-b border-neutral-800">

      <div className="max-w-5xl mx-auto px-8 text-center">

        <p className="uppercase tracking-[8px] text-amber-400 font-semibold">
          Visit The Drip
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
          Every Great Conversation
          <br />
          Begins With A Great Cup.
        </h2>

        <p className="text-gray-400 mt-8 text-lg leading-8 max-w-3xl mx-auto">
          Whether you're starting your day, catching up with friends,
          celebrating special moments or simply taking a break,
          The Drip welcomes you with handcrafted beverages,
          exceptional flavours and an atmosphere you'll always
          want to return to.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <Link
            href="/menu"
            className="bg-amber-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-300 transition"
          >
            Explore Our Menu
          </Link>

          <Link
            href="/contact"
            className="border border-neutral-700 text-white px-8 py-4 rounded-full hover:border-amber-400 transition"
          >
            Visit Us
          </Link>

        </div>

      </div>

    </section>
  );
}