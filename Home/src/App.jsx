


function App(){
  const greet = () => {
    return "Hello Suryaprakash"}; // Since javascript is used in the printing of the string, we need to use the return statement to return the string from the function. Otherwise, it will not work and will throw an error.
  return(
    <div>
      <h1>{greet()}</h1>
    </div>
  );
}
// dont forget to add the div tag to wrap the h1 and p tags, otherwise it will throw an error because a component can only return one element.
export default App;


