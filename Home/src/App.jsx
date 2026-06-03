function App(){
  const name = "Suryaprakash S";
  const designation = "AI Engineer";
  return (
    <div>
      <h1>{name}</h1>
    <p>{designation}</p>
    </div>
  );
}
export default App;

// dont forget to add the div tag to wrap the h1 and p tags, otherwise it will throw an error because a component can only return one element.