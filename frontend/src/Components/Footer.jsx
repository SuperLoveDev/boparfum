import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 px-6 py-12 mt-10 sm:px-[5vw] lg:px-[7vw] -mx-[calc(50vw-50%)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex col-span-1 flex-col gap-3 mb-8">
            <p className="text-black text-lg font-bold">
              Recevez notre newsletter
            </p>
            <input
              type="text"
              placeholder="Votre e-mail"
              className="w-full border text-sm border-gray-400 py-3 px-2 outline-0"
            />
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Boparfum</h1>
            <ul className="mb-3">
              <li className="text-gray-400 text-sm">Nous contacter</li>
              <li className="text-gray-400 text-sm">parfum</li>
              <li className="text-gray-400 text-sm">Nouveaute</li>
            </ul>
          </div>

          <div className="mb-3">
            <h1 className="text-lg font-semibold mb-4">Nos réseaux</h1>
            <p className="text-gray-400 text-sm">Facebook</p>
            <p className="text-gray-400 text-sm">Instagram</p>
            <p className="text-gray-400 text-sm">TikTok</p>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-4">Légal</h1>
            <p className="text-gray-400 text-sm">Mentions légales</p>
            <p className="text-gray-400 text-sm">
              Politique de confidentialité
            </p>
          </div>
        </div>
      </footer>

      <div className="my-8 flex justify-center items-center text-center text-sm">
        &copy; {new Date().getFullYear()} Boparfum. Tous droits réservés.
      </div>
    </>
  );
};

export default Footer;
