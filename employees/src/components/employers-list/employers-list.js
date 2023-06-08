import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({ data, onDelete, onToggleProps }) => {

    const element = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))} />

        );
    });

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
};

export default EmployersList;


// <EmployersListItem name={item.name} salary={item.salary} increase={item.increase} />
// <EmployersListItem {...item} /> // second variant of using 