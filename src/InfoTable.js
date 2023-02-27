import './InfoTable.css';
import Badge from './components/Badge.js';

// Create a COMPONENT
// We write Function and give it the name
// Each COMPONENT have the PROPERTIES
// PROPERTIES => Attriubuts of TAG ( BALISE )
// Attribut is locate on OPEN TAG
// To display we use INTERPOLLATION/BINDING ( {} )

/**
 * [InfoTable description]
 * @param {Object} props [description]
 */
function InfoTable(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        display: 'inline-block',
        padding: '20px',
        margin: '30px',
        borderRadius: '10px',
      }}
    >
      <p className="p">Your Name: {props.name}</p>
      <p className="p">Your Age: {props.age}</p>
      <p className="p">Your Profession: {props.work}</p>
      <p className="p">Your Salary: {props.salary}</p>
      <p className="p">Your SexType: {props.sexType}</p>
      <p>
        {props.hobbies.map((item, index) => {
          return <Badge key={index} item={item} />;
        })}
      </p>
      <p>
        {props.fruits.map((item, index) => {
          return <Badge key={index} item={item} />;
        })}
      </p>
    </div>
  );
}

export default InfoTable;
