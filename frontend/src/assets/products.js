import la_doree from "../assets/images/la_doree.png";
import edition_intense from "../assets/images/edition_intense.png";
import edition_authentique from "../assets/images/edition_authentique.png";

import yara from "../assets/images/yara.png";
import supreme from "../assets/images/supreme.png";
import sucrenoir from "../assets/images/sucre_noir.png";
import rougemagic from "../assets/images/rouge_magic.png";
import moula from "../assets/images/moula.png";
import cocovanille from "../assets/images/CocoVanille.png";

import attrape from "../assets/images/attrape.png";
import aicha from "../assets/images/aicha.png";
import bakara from "../assets/images/bakara.png";
import bois from "../assets/images/bois.png";
import monoi from "../assets/images/monoi.png";

const collections = [
  {
    name: "Edition La Dorée",
    image: la_doree,
  },
  {
    name: "Edition intense",
    image: edition_intense,
  },
  {
    name: "Edition Authentique",
    image: edition_authentique,
  },
];

const products = [
  {
    id: "1",
    image: yara,
    name: "Yara Edition",
    description: "100ml",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "2",
    image: cocovanille,
    name: "Coco Vanille Edition Intense",
    description: "100ml",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "3",
    image: supreme,
    name: "Supreme Edition Intense",
    description: "100ml",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "4",
    image: moula,
    name: "Moula Edition Intense",
    description: "100ml",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "5",
    image: sucrenoir,
    name: "Sucre Noir Edition Intense",
    description: "100ml",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "6",
    image: rougemagic,
    name: "Rouge Magic Edition Intense",
    description: "100ml",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
];

const parfum = [
  {
    id: "1",
    image: attrape,
    name: "Attrape",
    price: "8000",
    category: "Femme",
  },
  {
    id: "2",
    image: yara,
    name: "Yara",
    price: "8500",
    category: "unisexe",
  },
  {
    id: "3",
    image: supreme,
    name: "Supreme",
    price: "8500",
    category: "Homme",
  },

  {
    id: "4",
    image: sucrenoir,
    name: "Sucre Noir",
    price: "8500",
    category: "Homme",
  },
  {
    id: "5",
    image: cocovanille,
    name: "Sucre Noir",
    price: "8500",
    category: "Femme",
  },
  {
    id: "6",
    image: moula,
    name: "Moula",
    price: "8500",
    category: "Homme",
  },
  {
    id: "7",
    image: aicha,
    name: "Aicha",
    price: "8500",
    category: "Unisexe",
  },
  {
    id: "8",
    image: bakara,
    name: "Bakara",
    price: "8500",
    category: "Homme",
  },
  {
    id: "9",
    image: bois,
    name: "Bois",
    price: "8500",
    category: "Homme",
  },
  {
    id: "10",
    image: monoi,
    name: "Monoi",
    price: "8500",
    category: "Homme",
  },
];

export { collections, products, parfum };
