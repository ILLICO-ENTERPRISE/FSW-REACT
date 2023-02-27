import './Badge.css';

function Badge(props) {
  if (typeof props === 'string') {
    return (
      <>
        <span
          style={{
            border: '1px solid black',
            borderRadius: '4px',
            padding: '5px 10px',
            marginRight: '4px',
          }}
        >
          {props.item}
        </span>
      </>
    );
  }

  if (Object.is(props)) {
    return (
      <>
        <span
          style={{
            border: '1px solid black',
            borderRadius: '4px',
            padding: '5px 10px',
            marginRight: '4px',
            backgroundColor: props.item.color,
          }}
        >
          {props.item.name}
        </span>
      </>
    );
  }
}

export default Badge;
