function Link() {
  function handleClick(e){
    e.preventDefault();
    alert('Danylo Gera');
  }
  return (<a href = "http:\\google.com" onClick = {handleClick}> Click (ReactJS)</a>);
}
ReactDOM.render(<Link />, document.getElementById('root'))
