import React from "react";
import { Truck, Headset, RefreshCcw } from "lucide-react";

const Policy = () => {
  return (
    <div className="grid grid-cols-3 gap-4 my-15">
      <div className="flex flex-col items-center">
        <Truck size={40} />
        <span className="font-semibold mt-2">
          Les delais peuvent varier selon la destination
        </span>
        <p className="text-gray-500 text-sm sm:text-base my-2">
          nous livrons par tout dans le monde
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Headset size={40} />
        <span className="font-semibold mt-2">Service client disponible</span>
        <p className="text-gray-500 text-sm sm:text-base my-2">
          Besoin d’aide ? On est là 7j/7 pour répondre à vos questions.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <RefreshCcw size={40} />
        <span className="font-semibold mt-2">Retours faciles</span>
        <p className="text-gray-500 text-sm sm:text-base my-2">
          14 jours pour changer d’avis. On s’occupe de tout.
        </p>
      </div>
    </div>
  );
};

export default Policy;
