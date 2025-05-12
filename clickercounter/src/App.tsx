import './App.css'
import { useState, useEffect } from 'react'

const App : React.FC = () : React.ReactElement => {

// tilamuuttujat tästä alaspäin

const [sms, setSms] = useState<number>(() => {
  const stored = localStorage.getItem("sms");
  return stored ? parseInt(stored) : 0;
});
const [email, setEmail] = useState<number>(() => {
  const stored = localStorage.getItem("email");
  return stored ? parseInt(stored) : 0;
});
const [paperiton, setPaperiton] = useState<number>(() => {
  const stored = localStorage.getItem("paperiton");
  return stored ? parseInt(stored) : 0;
});
const [elasku, setElasku] = useState<number>(() => {
  const stored = localStorage.getItem("elasku");
  return stored ? parseInt(stored) : 0;
});
const [taskuturva, setTaskuturva] = useState<number>(() => {
  const stored = localStorage.getItem("taskuturva");
  return stored ? parseInt(stored) : 0;
});

// nollauspäivämäärien tilamuuttujat tästä alaspäin

const [kaikkiNollausPvm, setKaikkiNollausPvm] = useState<string>(() => {
  return localStorage.getItem("kaikkiNollausPvm") || "";
});

const [smsNollausPvm, setSmsNollausPvm] = useState<string>(() => {
  return localStorage.getItem("smsNollausPvm") || "";
});

const [emailNollausPvm, setEmailNollausPvm] = useState<string>(() => {
  return localStorage.getItem("emailNollausPvm") || "";
});

const [paperitonNollausPvm, setPaperitonNollausPvm] = useState<string>(() => {
  return localStorage.getItem("paperitonNollausPvm") || "";
});

const [elaskuNollausPvm, setElaskuNollausPvm] = useState<string>(() => {
  return localStorage.getItem("elaskuNollausPvm") || "";
});

const [taskuturvaNollausPvm, setTaskuTurvaNollausPvm] = useState<string>(() => {
  return localStorage.getItem("taskuturvaNollausPvm") || "";
});

// paikallistallentamiset tästä alaspäin

useEffect(() => {
  localStorage.setItem("sms", sms.toString());
}, [sms]);

useEffect(() => {
  localStorage.setItem("email", email.toString());
}, [email]);

useEffect(() => {
  localStorage.setItem("paperiton", paperiton.toString());
}, [paperiton]);

useEffect(() => {
  localStorage.setItem("elasku", elasku.toString());
}, [elasku]);

useEffect(() => {
  localStorage.setItem("taskuturva", taskuturva.toString());
}, [taskuturva]);

// nollausmuuttujat tästä alaspäin

useEffect(() => {
  localStorage.setItem("kaikkiNollausPvm", kaikkiNollausPvm);
}, [kaikkiNollausPvm]);

useEffect(() => {
  localStorage.setItem("smsNollausPvm", smsNollausPvm);
}, [smsNollausPvm]);

useEffect(() => {
  localStorage.setItem("emailNollausPvm", emailNollausPvm);
}, [emailNollausPvm]);

useEffect(() => {
  localStorage.setItem("paperitonNollausPvm", paperitonNollausPvm);
}, [paperitonNollausPvm]);

useEffect(() => {
  localStorage.setItem("elaskuNollausPvm", elaskuNollausPvm);
}, [elaskuNollausPvm]);

useEffect(() => {
  localStorage.setItem("taskuturvaNollausPvm", taskuturvaNollausPvm);
}, [taskuturvaNollausPvm]);

// lisäys- ja vähennysfunktiot tästä alaspäin

function lisaaSms(): void{
  setSms(prev => prev + 1);
};

function vahennaSms(): void{
  setSms(prev => Math.max(0, prev - 1));
};

function lisaaEmail(): void {
  setEmail(prev => prev + 1);
};

function vahennaEmail(): void {
  setEmail(prev => Math.max(0, prev - 1));
};

function lisaaPaperiton(): void {
  setPaperiton(prev => prev + 1);
};

function vahennaPaperiton(): void {
  setPaperiton(prev => Math.max(0, prev - 1));
};

function lisaaElasku(): void {
  setElasku(prev => prev + 1);
};

function vahennaElasku(): void {
  setElasku(prev => Math.max(0, prev - 1));
};

function lisaaTaskuturva(): void {
  setTaskuturva(prev => prev + 1);
};

function vahennaTaskuturva(): void {
  setTaskuturva(prev => Math.max(0, prev - 1));
};

// nollausfunktiot tästä alaspäin

function nollaaKaikki(): void {
  const vahvista = window.confirm("Haluatko varmasti nollata kaikki tiedot?");
  if (vahvista) {
    setSms(0);
    setEmail(0);
    setPaperiton(0);
    setElasku(0);
    setTaskuturva(0);
    setKaikkiNollausPvm(new Date().toLocaleString());
    setSmsNollausPvm(new Date().toLocaleString());
    setEmailNollausPvm(new Date().toLocaleString());
    setPaperitonNollausPvm(new Date().toLocaleString());
    setElaskuNollausPvm(new Date().toLocaleString());
    setTaskuTurvaNollausPvm(new Date().toLocaleString());
  };
};

function nollaaSms(): void {
  const vahvista = window.confirm("Haluatko varmasti SMS-luvat?");
  if (vahvista) {
    setSms(0);
    setSmsNollausPvm(new Date().toLocaleString());
  };
};

function nollaaEmail(): void {
  const vahvista = window.confirm("Haluatko varmasti nollata sähköpostiluvat?");
  if (vahvista) {
    setEmail(0);
    setEmailNollausPvm(new Date().toLocaleString());
  };
};

function nollaaPaperiton(): void {
  const vahvista = window.confirm("Haluatko varmasti nollata paperittoman palvelun luvat?");
  if (vahvista) {
    setPaperiton(0);
    setPaperitonNollausPvm(new Date().toLocaleString());
  };
};

function nollaaElasku(): void {
  const vahvista = window.confirm("Haluatko varmasti nollata e-laskuluvat?");
  if (vahvista) {
    setElasku(0);
    setElaskuNollausPvm(new Date().toLocaleString());
  };
};

function nollaaTaskuTurva(): void {
  const vahvista = window.confirm("Haluatko varmasti nollata TaskuTurva-luvat?");
  if (vahvista) {
    setTaskuturva(0);
    setTaskuTurvaNollausPvm(new Date().toLocaleString());
  };
};

  return (
 <div className="container">
      <h1>Digilupaseuranta</h1>

      <div className="boxes">
        <div className="box">
          <div className="box-title">SMS</div>
          <div className="box-value">{sms}</div>
          <div className="box-buttons">
            <button onClick={lisaaSms}>+</button>
            <button onClick={vahennaSms}>-</button>
            <button className="reset-button" onClick={nollaaSms}>Nollaa</button>
          </div>
          <div className="timestamp">Nollattu: {smsNollausPvm}</div>
        </div>

        <div className="box">
          <div className="box-title">Email</div>
          <div className="box-value">{email}</div>
          <div className="box-buttons">
            <button onClick={lisaaEmail}>+</button>
            <button onClick={vahennaEmail}>-</button>
            <button className="reset-button" onClick={nollaaEmail}>Nollaa</button>
          </div>
          <div className="timestamp">Nollattu: {emailNollausPvm}</div>
        </div>

        <div className="box">
          <div className="box-title">Paperiton</div>
          <div className="box-value">{paperiton}</div>
          <div className="box-buttons">
            <button onClick={lisaaPaperiton}>+</button>
            <button onClick={vahennaPaperiton}>-</button>
            <button className="reset-button" onClick={nollaaPaperiton}>Nollaa</button>
          </div>
          <div className="timestamp">Nollattu: {paperitonNollausPvm}</div>
        </div>

        <div className="box">
          <div className="box-title">E-lasku</div>
          <div className="box-value">{elasku}</div>
          <div className="box-buttons">
            <button onClick={lisaaElasku}>+</button>
            <button onClick={vahennaElasku}>-</button>
            <button className="reset-button" onClick={nollaaElasku}>Nollaa</button>
          </div>
          <div className="timestamp">Nollattu: {elaskuNollausPvm}</div>
        </div>

        <div className="box">
          <div className="box-title">TaskuTurva</div>
          <div className="box-value">{taskuturva}</div>
          <div className="box-buttons">
            <button onClick={lisaaTaskuturva}>+</button>
            <button onClick={vahennaTaskuturva}>-</button>
            <button className="reset-button" onClick={nollaaTaskuTurva}>Nollaa</button>
          </div>
          <div className="timestamp">Nollattu: {taskuturvaNollausPvm}</div>
        </div>
      </div>

      <div className="bottom-section">
        <button className="reset-button" onClick={nollaaKaikki}>Nollaa kaikki</button>
        <div className="timestamp">Kaikki nollattu viimeksi: {kaikkiNollausPvm}</div>
      </div>
    </div>
  );
};

export default App
