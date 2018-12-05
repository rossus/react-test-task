import React from 'react';
import PropTypes from "prop-types";
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';

import {SortableHeader, SortableBody} from '../components';

class SortableTable extends React.Component {
    static propTypes = {
        data: PropTypes.object,
    };

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            content: [],
            columns: [],
            empty: false,
            ready: false,
        }
    }

    componentWillMount() {
        const { data } = this.props;
        this.setState({ data })
    }

    componentWillReceiveProps(nextProps) {
        const { data } = nextProps;
        this.setState({ data })
    }

    sortTableFunc = (id, sortMethod) => {
        if (!this.state.empty) {
            const {columns, content} = this.state;


            let currentSortMethod = 'default';

            switch (sortMethod) {
                case 'default':
                    currentSortMethod = 'asc';
                    break;
                case 'asc':
                    currentSortMethod = 'desc';
                    break;
                case 'desc':
                    currentSortMethod = 'asc';
                    break;
                default:
                    currentSortMethod = 'asc';
            }

            const changeColumn = columns.map((e, i) =>
                ({...e, sort: i === id ? currentSortMethod : 'default'})
            );

            const sortData = sortMultidimensionalArrayFunc(content, id, currentSortMethod);

            this.setState({
                content: sortData,
                columns: changeColumn,
            });
        } else {
            this.setState({
                content: [],
                columns: [],
            });
        }
    };

    makeArrays = (data) => {
        let columns = [];
        let content = [];

        data.fa.fa_data.axis.r.map((element, index) => {
            columns.push({label: element.sAxisName, sort: 'default'});
            return null;
        });
        columns.push({label: 'Валюта', sort: 'default'});
        columns.push({});
        columns.push({label: 'Отклонение от плана, п.п.', sort: 'default'});

        data.fa.fa_data.r.map((element, index) => {
            let contentItem = [];
            element.axis.r.map((item, i) => {
                contentItem.push(item.sName_RU);
                return null;
            });
            contentItem.push(element.sMeasDelta_RU);
            contentItem.push('');
            contentItem.push(element.fDeltaPlan);
            content.push(contentItem);
            return null;
        });

        if (columns == null && content == null) {
            this.setState({
                empty: true,
                ready: true,
            });
        } else {
            this.setState({
                content: content,
                columns: columns,
                ready: true,
            });
        }
    };

    render() {
        const {data, ready} = this.state;
        if (!ready) {
            this.makeArrays(data);
        }

        return (
            <table className="tabs">
                <SortableHeader columns={this.state.columns} onClick={this.sortTableFunc} />
                <SortableBody content={this.state.content} />
            </table>
        );
    }
}

export default SortableTable;