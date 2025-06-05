import ButtonComp from "./components/button";

const App = () => {
  return (
    <div className='text-3xl font-bold text-grey-500'>
      {"Hello Buddy ! find Ur Buddy <3"}
      <ButtonComp
        text={"Say hi !"}
      />
    </div>
  );
}

export default App;
