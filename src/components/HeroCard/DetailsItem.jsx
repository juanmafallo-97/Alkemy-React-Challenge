import React from "react";

export default function DetailsItem(props) {
  const renderHeroProperty = () => {
    let property = props.hero[props.category][props.property];
    //Para la altura y el peso buscamos mostrar solo las medidas en kg y cm
    if (props.property === "height" || props.property === "weight")
      property = property[1];
    //Si la propiedad es un array, como los aliases, mostramos cada item separado por un '|'
    else if (Array.isArray(property))
      property = property.map((item, i) => {
        if (i === property.length - 1) return ` ${item}`;
        return ` ${item} |`;
      });
    if (property === "" || property === "-") return "Unknown";
    return property;
  };

  return (
    <li className="list-group-item">
      {props.propertyName} : {renderHeroProperty()}
    </li>
  );
}
