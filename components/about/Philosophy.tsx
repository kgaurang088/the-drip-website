"use client";

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-16 lg:py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96A]/10 blur-[180px]" />

      </div>

      <div className="container-custom">

        <div className="mx-auto max-w-5xl rounded-[24px] lg:rounded-[40px] border border-[#C8A96A]/20 bg-[#151515] p-6 sm:p-8 lg:p-20 text-center">

          <p className="section-tag">

            OUR PHILOSOPHY

          </p>

          <h2 className="mt-6 lg:mt-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">

            We Don&apos;t Just Serve
            <br />

            <span className="text-[#C8A96A]">
              Food & Drinks.
            </span>

          </h2>

          <p className="mt-8 lg:mt-10 text-lg sm:text-2xl lg:text-3xl leading-relaxed text-white font-light italic">

            &quot;We create moments that people remember,
            conversations that last for hours,
            and flavours that bring them back.&quot;

          </p>

          <div className="mx-auto mt-10 lg:mt-14 h-px w-20 lg:w-28 bg-[#C8A96A]/40" />

          <p className="mx-auto mt-10 lg:mt-14 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-gray-400">

            Every coffee we brew, every kulfi we craft,
            every sandwich we grill and every boba we shake
            reflects our promise of exceptional quality,
            genuine hospitality and unforgettable experiences.

          </p>

        </div>

      </div>

    </section>
  );
}