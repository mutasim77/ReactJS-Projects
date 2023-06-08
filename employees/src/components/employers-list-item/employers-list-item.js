import './employers-list-item.css';

const EmployersListItem = (props) => {
    const { name, salary, onDelete, onToggleProps, increase, rise } = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }
    return (
        <li className={classNames}>
            <span className='list-group-item-label' onClick={onToggleProps} data-toggle="rise">{name}</span>
            <input type="text" className='list-group-item-input' defaultValue={salary + '$'} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleProps}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <div className="fas fa-star"></div>
            </div>
        </li>
    );
};

export default EmployersListItem;