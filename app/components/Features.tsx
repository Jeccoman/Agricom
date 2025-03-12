import { Link } from "@remix-run/react"
import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Agricultural Solutions" },
    { name: "description", content: "Complete solutions for farm mechanization" },
  ]
}

export default function AgriSolutions() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="space-y-16 p-4 lg:px-24 lg:py-16">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-2 text-center px-4">
          <div className="gap-1 rounded-full tracking-wide px-3 py-2 text-sm font-medium inline-flex items-center bg-primary-100 text-primary-600 ring-0 ring-inset ring-primary-600/5 uppercase whitespace-nowrap">
            Our Solutions
          </div>
          <h1 className="text-2xl lg:text-4xl max-w-xl font-bold">Delivering Solution That Increase Yields</h1>
          <p className="text-xl lg:text-2xl font-bold"></p>
          <p className="text-sm lg:text-lg max-w-3xl text-muted">
            We provide complete solutions for farm mechanization from land preparation to post harvesting with quality
            agricultural commodities and products at their doorstep.
          </p>
        </div>

        {/* Agri Machinery Section */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <p className="text-xl lg:text-2xl font-bold">Agri Machinery</p>
          <div className="w-16 h-1 bg-secondary"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Tractors */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100">
              <h1 className="text-2xl font-bold text-primary">Tractors</h1>
              <p className="text-lg">
                Tractors are the backbone of modern agriculture, providing the power and versatility needed for a wide
                range of tasks. Our tractors are designed to improve efficiency and productivity on your farm. With
                powerful engines, advanced transmissions, and a variety of attachments, our tractors can handle
                everything from plowing and tilling to hauling heavy loads and operating implements.
              </p>
            </div>
            <img
              src="/tractor.png"
              alt="Tractor"
              className="h-40 lg:h-80 transition ease-in duration-200 scale-95 group-hover:scale-100 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Tractors</p>
          </Link>

          {/* Combine Harvesters */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100">
              <h1 className="text-2xl font-bold text-primary">Combine Harvesters</h1>
              <p className="text-lg">
                A combine harvester is a versatile machine that efficiently harvests crops like wheat, barley, and
                soybeans. Our combines are equipped with cutting-edge technology to maximize yield and minimize losses.
                With features like automatic header height adjustment, advanced threshing systems, and efficient grain
                cleaning, our combines deliver exceptional performance.
              </p>
            </div>
            <img
              src="/combine-harvester.png"
              alt="Combine Harvester"
              className="h-40 lg:h-80 transition ease-in duration-200 scale-95 group-hover:scale-100 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Combine Harvesters</p>
          </Link>
        </div>

        {/* Agri Farm Implements Section */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <p className="text-xl lg:text-2xl font-bold">Agri Farm Implements</p>
          <div className="w-16 h-1 bg-secondary"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Land Preparation */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100">
              <h1 className="font-bold text-primary text-xl">Land Preparation</h1>
              <p className="text-base">
                Proper land preparation is crucial for optimal crop growth. Our services include plowing, disking,
                harrowing, and leveling to create a well-cultivated field. We use advanced techniques and equipment to
                ensure that your soil is ready to support healthy plant growth.
              </p>
            </div>
            <img
              src="/robust-multi-speed.png"
              alt="Land Preparation"
              className="transition ease-in duration-200 scale-95 group-hover:scale-100 h-20 lg:h-60 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Land Preparation</p>
          </Link>

          {/* Landscaping */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100">
              <h1 className="font-bold text-primary text-xl">Landscaping</h1>
              <p className="text-base">
                Enhance the beauty and functionality of your property with our expert landscaping services. From
                designing and installing stunning gardens to maintaining your outdoor spaces, our team can transform
                your landscape. We offer a range of services, including lawn care, tree and shrub care, and irrigation
                system installation.
              </p>
            </div>
            <img
              src="/ripper.png"
              alt="Landscaping"
              className="transition ease-in duration-200 scale-95 group-hover:scale-100 h-20 lg:h-60 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Landscaping</p>
          </Link>

          {/* Seeding & Planting */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100">
              <h1 className="font-bold text-primary text-xl">Seeding &amp; Planting</h1>
              <p className="text-base">
                Precise seeding and planting are essential for successful crop production. Our services include seed
                selection, precise seeding, and efficient planting techniques. We use advanced equipment and techniques
                to ensure optimal seed placement and germination.
              </p>
            </div>
            <img
              src="/rotary-mulcher.png"
              alt="Seeding & Planting"
              className="transition ease-in duration-200 scale-95 group-hover:scale-100 h-20 lg:h-60 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Seeding &amp; Planting</p>
          </Link>

          {/* Crop Protection */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100">
              <h1 className="font-bold text-primary text-xl">Crop Protection</h1>
              <p className="text-base">
                Protect your crops from pests, diseases, and weeds with our comprehensive crop protection solutions. Our
                experts will assess your specific needs and recommend the most effective treatments. We offer a range of
                products, including insecticides, fungicides, and herbicides, to safeguard your crops and maximize
                yields.
              </p>
            </div>
            <img
              src="/crop-protection.png"
              alt="Crop Protection"
              className="transition ease-in duration-200 scale-95 group-hover:scale-100 h-20 lg:h-60 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Crop Protection</p>
          </Link>

          {/* Harvesting, Threshing & Storage */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100">
              <h1 className="font-bold text-primary text-xl">Harvesting, Threshing &amp; Storage</h1>
              <p className="text-base">
                Efficient harvesting, threshing, and storage are crucial for preserving crop quality and maximizing
                yields. Our services include timely harvesting, efficient threshing, and proper storage techniques. We
                use advanced equipment and techniques to minimize losses and ensure the highest quality produce.
              </p>
            </div>
            <img
              src="/fertilizer-spreader.png"
              alt="Harvesting, Threshing & Storage"
              className="transition ease-in duration-200 scale-95 group-hover:scale-100 h-20 lg:h-60 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Harvesting, Threshing &amp; Storage</p>
          </Link>

          {/* Post Harvesting */}
          <Link
            className="flex flex-col items-center justify-center relative group overflow-hidden p-6 lg:py-12 rounded-xl border-2 border-primary-100 bg-white ring-transparent ring-2 hover:ring-primary-800 transition-all"
            data-discover="true"
            to="/"
          >
            <div className="z-20 p-8 space-y-12 duration-300 absolute top-0 w-full h-full bg-white/50 backdrop-blur-md opacity-0 focus:border-blue-600 group-hover:opacity-100">
              <h1 className="font-bold text-primary text-xl">Post Harvesting</h1>
              <p className="text-base">
                Post-harvesting activities are essential for preserving the quality and value of your crops. Our
                services include cleaning, drying, grading, and packaging to prepare your produce for market. We
                prioritize food safety and quality control to ensure that your products meet the highest standards.
              </p>
            </div>
            <img
              src="/post-harvesting.png"
              alt="Post Harvesting"
              className="transition ease-in duration-200 scale-95 group-hover:scale-100 h-20 lg:h-60 object-contain"
            />
            <p className="font-bold text-center lg:text-xl mt-4">Post Harvesting</p>
          </Link>
        </div>
      </section>
    </div>
  )
}



