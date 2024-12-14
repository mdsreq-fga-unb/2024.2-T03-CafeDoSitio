import React, { createContext, useContext, useState } from "react";

export const Context = createContext();

export default function Provider({children}) {

  const [idVisita, setIdVisita] = useState('');
  const [dateVisita, setDateVisita] = useState('');
  const [startTimeVisita, setStartTimeVisita] = useState('');
  const [endTimeVisita, setEndTimeVisita] = useState('');
  const [status, setStatus] = useState('');
  const [nameVisitor, setNameVisitor] = useState('');
  const [emailVisitor, setEmailVisitor] = useState('');
  const [phoneVisitor, setPhoneVisitor] = useState('');
  const [timeRequested, setTimeRequested] = useState('');
  const [institution, setInstitution] = useState('');

  return(
    <Context.Provider
      value = {{
        idVisita, setIdVisita,
        dateVisita, setDateVisita,
        startTimeVisita, setStartTimeVisita,
        endTimeVisita, setEndTimeVisita,
        status, setStatus,
        nameVisitor, setNameVisitor,
        emailVisitor, setEmailVisitor,
        phoneVisitor, setPhoneVisitor,
        timeRequested, setTimeRequested,
        institution, setInstitution
      }}
    >
      {children}
    </Context.Provider>
  );
};