import { useEffect } from "react";

const RecentUpdate = () => {
  useEffect(() => {
    if (!document.getElementById("elfsight-platform")) {
      const s = document.createElement("script");
      s.id = "elfsight-platform";
      s.src = "https://elfsightcdn.com/platform.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="w-full mt-8 md:mt-16">
      <div className="max-w-screen-xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            Recent Updates
          </h2>
          <p className="text-xs lg:text-sm text-gray-600 mt-2">
            Stay informed with the latest opportunities and announcements
          </p>
        </div>

        {/* IMPORTANT: min-w-0 allows children to shrink in flex/grid layouts */}
        <div className="w-full min-w-0">
          <div className="w-full min-w-0 overflow-hidden rounded-2xl">
            <div
              className="elfsight-app-8e59e4fe-0ff0-435e-8502-11d79a7f324c"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentUpdate;
