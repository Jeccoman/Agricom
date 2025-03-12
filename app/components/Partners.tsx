export default function Partners() {
    const partners = [
      {
        name: "Swaraj",
        logo: "https://ipf-website.s3.amazonaws.com/c5274f6ffbf9717c85b015fb9c68adb9-(1)-2025-03-10T13-19-10-983.png"
      },
       ];
  
    return (
      <section className="bg-white space-y-16 py-12 px-4 lg:p-24">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="font-bold text-xl lg:text-2xl text-black">
            Manufacturing Partners
          </h1>
          
          <div className="grid sm:grid-cols-5 gap-6 lg:gap-16 w-full">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="border border-shade rounded-lg px-4 w-full py-2 h-[68px] flex items-center justify-center"
              >
                <img 
                  src={partner.logo || "/placeholder.svg"} 
                  alt={partner.name} 
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }