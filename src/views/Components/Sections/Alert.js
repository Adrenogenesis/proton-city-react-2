import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Storm()  {
    const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="rose">
        <Alert.Heading>NFT et crypto-monnaie</Alert.Heading>
        <p><strong>Adrenogenesis</strong></p>
        <p> NFT : Tokens non fongible. Une nouvelle dimension artistique sur la Blockchain.</p>
        <p><a href="#section-p4">Exploration - Investissement.</a></p>
        <a href="https://adrenogenesis.com"><img src="https://far.adrenogenesis.com/images/kirsten_p3a.jpg" width="768px" height="auto" alt="adrenogenesis"></img></a>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
           Fermer
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>ADRENOGENESIS</Button>}
    </>
  );
}
  
export default Storm;