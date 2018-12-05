import React from 'react';

const SortableHeader = (props) => {
    const {columns, onClick} = props;

    return(
        <thead>
            <tr>
                {columns.map((element, index) => {
                    if (index === columns.length - 1) {
                        return(
                            <th key={index - 1} onClick={() => onClick(index, element.sort)}>
                                {element.label}
                            </th>
                        )} else if (index === columns.length - 2) {
                        return(
                            <th key={columns.length}></th>
                        )} else {
                        return (
                            <th key={index} onClick={() => onClick(index, element.sort)}>
                                {element.label}
                            </th>
                    )}
                })}
            </tr>
        </thead>
    )
};

export default SortableHeader