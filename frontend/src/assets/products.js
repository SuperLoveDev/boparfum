import la_doree from "../assets/images/la_doree.png";
import edition_intense from "../assets/images/edition_intense.png";
import edition_authentique from "../assets/images/edition_authentique.png";

import yara from "../assets/images/yara.png";
import supreme from "../assets/images/supreme.png";
import sucrenoir from "../assets/images/sucre_noir.png";
import rougemagic from "../assets/images/rouge_magic.png";
import moula from "../assets/images/moula.png";
import cocovanille from "../assets/images/CocoVanille.png";

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
    description: "Eau de Parfum Yara Edition Intense 100ml - Collection Privée",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "2",
    image: cocovanille,
    name: "Coco Vanille Edition Intense",
    description:
      "Eau de Parfum Coco Vanille Edition Intense 100ml - Collection Privée",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "3",
    image: supreme,
    name: "Supreme Edition Intense",
    description:
      "Eau de Parfum Supreme Edition Intense 100ml - Collection Privée",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "4",
    image: moula,
    name: "Moula Edition Intense",
    description: "Moula Edition Intense 100ml - Collection Privée",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "5",
    image: sucrenoir,
    name: "Sucre Noir Edition Intense",
    description:
      "Eau de Parfum Sucre Noir Edition Intense 100ml - Collection Privée",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
  {
    id: "6",
    image: rougemagic,
    name: "Rouge Magic Edition Intense",
    description:
      "Eau de Parfum Rouge Magic Edition Intense 100ml - Collection Privée",
    newPrice: "10.000",
    oldPrice: "12.000",
  },
];

export { collections, products };
