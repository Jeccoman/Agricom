// app/components/FeaturesSection.tsx
const features = [
    {
      title: "Leading in Quality",
      description: "ISO-certified machinery with 5-year warranties",
      icon: "🛠️",
    },
    {
      title: "Dependable Support",
      description: "24/7 technical assistance across Tanzania",
      icon: "📞",
    },
    {
      title: "End-to-End Solutions",
      description: "From soil prep to harvest processing",
      icon: "🌾",
    },
  ];
  
  export function Features() {
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }