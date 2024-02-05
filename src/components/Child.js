const Child = (props) => {
  const { array, title, value, onClickhandler, children, objmm } = props;

  console.log(444, objmm);
  const [firstObj, secondObj, thirdObj] = objmm;

  console.log(555, firstObj, secondObj, thirdObj);



  const clickEvent = (name) => {
    onClickhandler(name);
  }

  return (
    <>
      <p>Hi I am a child component</p>
      <ul>
        {array.map((val) => {
          return <li>My name is {val.firstName}</li>;
        })}
      </ul>
      <p>The title of the page is {title}</p>
      <p>The value of the page is {value}</p>
      <p>{title}</p>
      <button onClick={() => clickEvent('Hello')}>Change first name</button>
      {children}
    </>
  );
};

export default Child;
