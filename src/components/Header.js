import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
        <h1 >{title}</h1>
        <Button color={showAdd ? "Red" : "Green"} text={showAdd ? "Cancel" : "Add New Medication"} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: "Med Tracks",
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS can be used here in js
// const headingStyle = {
//     color: "blue", 
//     backgroundColor: "red"
// }

export default Header