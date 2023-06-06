import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Card from "./components/card";

const onepieceList = [
  {
    name: "Luffy",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552335-luffy-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese.",
  },
  {
    name: "Zoro",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552343-zoro-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese",
  },
  {
    name: "Ussop",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552337-ussop-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese",
  },
  {
    name: "Chopper",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552334-chooper-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese",
  },
  {
    name: "Nami",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552339-nami-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese",
  },
  {
    name: "Sanji",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552342-sanji-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese",
  },
  {
    name: "Franky",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552340-frankie-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese",
  },
  {
    name: "Jimbe",
    imageSrc:
      "https://static.vecteezy.com/ti/vecteur-libre/p1/16552341-jimbei-kawai-chibi-mignon-anime-one-piece-conception-de-vecteur-et-art-de-griffonnage-pour-icone-logo-collection-et-autres-gratuit-vectoriel.jpg",
    description:
      "Babybel goat camembert de normandie. Cream cheese mascarpone cheddar danish fontina cauliflower cheese caerphilly mascarpone cheese strings. Ricotta fondue emmental taleggio the big cheese lancashire chalk and cheese stinking bishop. When the cheese comes out everybody's happy say cheese cut the cheese",
  },
];

const App = () => {
  return (
    <>
      <Form />
      <div id="containercard">
        <Card onepieceList={onepieceList[0]} />
        <Card onepieceList={onepieceList[1]} />
        <Card onepieceList={onepieceList[2]} />
        <Card onepieceList={onepieceList[3]} />
        <Card onepieceList={onepieceList[4]} />
        <Card onepieceList={onepieceList[5]} />
        <Card onepieceList={onepieceList[6]} />
        <Card onepieceList={onepieceList[7]} />
      </div>
    </>
  );
};

export default App;
