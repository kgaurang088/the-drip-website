/*export default function WhyChooseUs() {
  const features = [
    {
      icon: "☕",
      title: "Premium Coffee",
      description:
        "Freshly brewed coffee prepared from premium quality beans.",
    },
    {
      icon: "🧋",
      title: "50+ Menu Items",
      description:
        "Coffee, Boba, Kulfi, Sandwiches, Buns and much more.",
    },
    {
      icon: "🏡",
      title: "Family Friendly",
      description:
        "Comfortable indoor and outdoor seating for everyone.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description:
        "Premium taste without premium prices.",
    },
    {
      icon: "⚡",
      title: "Quick Service",
      description:
        "Fresh food and beverages served with minimal waiting time.",
    },
    {
      icon: "❤️",
      title: "Made With Passion",
      description:
        "Every order is prepared with quality ingredients and care.",
    },
  ];

  return (
    <section className="bg-neutral-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center text-amber-400 uppercase tracking-[6px] font-semibold">
          Why Choose Us
        </p>

        <h2 className="text-center text-5xl font-bold mt-4">
          More Than Just A Café
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mt-6">
          The Drip combines premium beverages, delicious food,
          affordable pricing and a welcoming atmosphere to create
          the perfect place for every occasion.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black rounded-3xl p-8 border border-neutral-800 hover:border-amber-400 transition"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}*/