/* 
tell me the steps you are going to follow 
1. use destructring methods to reference all vaibles
then find out the typed values
*/

import React, { useState } from "react";

function App() {
  const [FullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  // now lets catch the values typed
  function handlingEvent(event) {
    const newValue = event.target.value;
    const inputValue = event.target.name;
    const email = event.target.email;
    // console.log(newValue, inputValue, email);

    function update(pro) {
      if (inputValue == "fName")
        return {
          fName: newValue,
          lName: pro.lName,
          email: pro.email
        };
      else if (inputValue === "lName")
        return {
          lName: newValue,
          fName: pro.fName,
          email: pro.email
        };
      else inputValue == "email";
      return {
        email: newValue,
        fName: pro.fName,
        lName: pro.lName
      };
    }
    setFullName(update);
  }
  return (
    <div className="container">
      <h1>
        {" "}
        hello World!
        {FullName.fName}
        {FullName.lName}
        {FullName.email}
      </h1>
      <form>
        <input
          onChange={handlingEvent}
          type="text"
          autoComplete="off"
          placeholder="firstName"
          name="fName"
          value={FullName.fName}
        />
        <input
          onChange={handlingEvent}
          type="text"
          autoComplete="off"
          placeholder="lastName"
          name="lName"
          value={FullName.lName}
        />
        <input
          onChange={handlingEvent}
          type="email"
          autoComplete="off"
          placeholder="emailAddress"
          name="email"
          value={FullName.email}
        />
        {/* <input type="text"  placeholder="House#"/> */}
        <button>submit</button>
      </form>
    </div>
  );
}
export default App;

// import React, { useState } from "react";

// function App() {
//   // this is the second  way of solving this problem

//   const [FullName, setFull] = useState({
//     fName: "",
//     lName: ""
//   });
//   function evantHandling(event) {
//     // will  refer to the event
//     const newValue = event.target.value;
//     // also  we need to update the values of fname/ lname
//     // so lets see which one was  creating the event from name property

//     const inputName = event.target.name;

//     function pre(nom) {
//       if (inputName === "fName")
//         return {
//           fName: newValue,
//           lName: nom.lName
//         };
//       else if (inputName === "lName")
//         return {
//           lName: newValue,
//           fName: nom.fName
//         };
//     }
//     setFull(pre);
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {FullName.fName} {FullName.lName}
//       </h1>
//       <form>
//         <input
//           onChange={evantHandling}
//           name="fName"
//           placeholder="First Name"
//           value={FullName.fName}
//         />
//         <input
//           onChange={evantHandling}
//           name="lName"
//           placeholder="Last Name"
//           value={FullName.lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
// function App() {

//   const [fName, setF]= useState("")
//   const [lName, setL]= useState("");

//   function fnam(event){
//     setF(event.target.value);
//   }
//   function lnam(event){
//     setL(event.target.value);
//   }
//   return (
//     <div className="container">
//       <h1>Hello {fName}{lName}</h1>
//       <form>
//         <input  onChange={fnam} name="fName" placeholder="First Name" />
//         <input  onChange={lnam} name="lName" placeholder="Last Name" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// console.log(val, nam);
//****************************************** */
//   if(nam === "fName")
//    setFull({fName : val})
//   else if(nam === "lName")
//   setFull({lName : val})
// }
//********************************** */
