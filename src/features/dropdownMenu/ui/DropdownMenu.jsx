import PropTypes from "prop-types"
import clsx from "clsx"

import './DropdownMenu.css'

const DropdownMenu = ({dropdownItem: DropdownItem, dropdownData, isActive}) => {
    const components = dropdownData.map(dataItem => <DropdownItem key={dataItem.name} dataItem={dataItem} />)

    return (
        <ul className={clsx('interface-component', 'dropdown', {'active': isActive})}>
            {components}
        </ul>
    )
}

DropdownMenu.propTypes = {
    dropdownItem: PropTypes.func,
    dropdownData: PropTypes.array,
    isActive: PropTypes.bool,
}

export default DropdownMenu