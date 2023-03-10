import { Component } from "react";

import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRise,
    increase,
    rise,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }
  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleRise}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;

// Переделал под классовый компонент

// class EmployeesListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       increase: false,
//       rise: false,
//     };
//   }

//   onIncrease = () => {
//     this.setState(({ increase }) => ({
//       increase: !increase,
//     }));
//   };

//   onRise = () => {
//     this.setState(({ rise }) => ({
//       rise: !rise,
//     }));
//   };

//   render() {
//     const { name, salary, onDelete, onToggleIncrease, onToggleRise } =
//       this.props;
//     const { increase, rise } = this.state;

// Это функциональный компонент

// const EmployeesListItem = ({ name, salary, increase }) => {
//   let className = "list-group-item d-flex justify-content-between";
//   if (increase) {
//     className += " increase";
//   }
//   return (
//     <li className={className}>
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="text"
//         className="list-group-item-input"
//         defaultValue={salary + "$"}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm ">
//           <i className="fas fa-cookie"></i>
//         </button>

//         <button type="button" className="btn-trash btn-sm ">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };
