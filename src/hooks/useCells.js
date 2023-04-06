import { useState, useEffect } from "react";

const useCells = ({ size, obstacles, entities }) => {
  const [cells, setCells] = useState([]);
  console.log({ obstacles });
  useEffect(() => {
    const cellsArray = Array.from({ length: size }, (_, row) =>
      Array.from({ length: size }, (_, col) => {
        const obstacle = obstacles.find(
          (obstacle) =>
            obstacle.position.row === row && obstacle.position.col === col
        );
        const entity = entities.find(
          (entity) => entity.position.row === row && entity.position.col === col
        );
        const cellType =
          (obstacle?.type && "obstacle") || entity?.type || "empty";
        const tooltip =
          entity && entity.stats
            ? `${entity.name} - Health: ${entity.stats.health}, Armor: ${entity.stats.armor}, Damage: ${entity.stats.damage}, Status: ${entity.status}`
            : "";
        const obstacleTooltip = obstacle && obstacle.type;
        const entityInitial =
          entity && entity.name ? entity.name.charAt(0) : "";

        return {
          key: `cell-${row}-${col}`,
          className: `cell ${cellType}`,
          title: tooltip || obstacleTooltip,
          entityInitial,
        };
      })
    );
    setCells(cellsArray);
  }, [size, obstacles, entities]);

  const cellComponents = cells.map((row) => (
    <div className="row" key={row[0].key}>
      {row.map((cell) => (
        <div className={cell.className} key={cell.key} title={cell.title}>
          {cell.entityInitial}
        </div>
      ))}
    </div>
  ));

  return cellComponents;
};

export default useCells;
