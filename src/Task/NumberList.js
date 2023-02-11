
function NumberList(props) {
  const numbers = props.numbers;


  function listItems() {
    return numbers.map((number) =>{
        return (
            <li key={number.toString()}>
                {number}
            </li>
        )
    })
  }

  return (
    <ul>{listItems()}</ul>
  );
}

export default NumberList;