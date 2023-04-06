import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import useCells from "../../hooks/useCells";

const Grid = ({ data }) => {
  const cells = useCells(data);

  return <div className="grid">{cells}</div>;
};

Grid.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.number.isRequired,
    obstacles: PropTypes.arrayOf(
      PropTypes.shape({
        position: PropTypes.shape({
          row: PropTypes.number.isRequired,
          col: PropTypes.number.isRequired,
        }).isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
    entities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        position: PropTypes.shape({
          row: PropTypes.number.isRequired,
          col: PropTypes.number.isRequired,
        }).isRequired,
        stats: PropTypes.shape({
          health: PropTypes.number.isRequired,
          armor: PropTypes.number.isRequired,
          damage: PropTypes.number.isRequired,
        }).isRequired,
        status: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Grid;
