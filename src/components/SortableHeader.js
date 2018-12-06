import React from 'react';

const SortableHeader = (props) => {
    const {columns, onClick} = props;

    return(
        <thead>
            <tr>
                {columns.map((element, index) => {
                    if (index === columns.length - 1) {
                        return(
                            <th id="course-head" colSpan="3" key={index}
                                onClick={() => onClick(index, element.sort)}>
                                {element.label}
                            </th>
                        )} else if (index !== columns.length - 2) {
                        return (
                            <th key={index} onClick={() => onClick(index, element.sort)}>
                                {element.label}
                            </th>
                    )} else return null
                })}
            </tr>
        </thead>
    )
};

export default SortableHeader