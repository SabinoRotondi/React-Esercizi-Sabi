import { useMemo } from "react";

const FilteredList = (props) => {
    const FilteredList = useMemo(() =>
        props.list.filter(i => i.age > 18).map(i => (
            <div key={i.id}>
                <h3>{i.name}, {i.age}</h3>
            </div>
        )), [props]);
    return <div>
        {FilteredList}
    </div>
}

export default FilteredList;