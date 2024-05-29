import "./styles.css";
import { useState, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function App() {
  const [step, setStep] = useState(1);
  const [passPhrase, setPassphrase] = useState();
  const [valid, setValid] = useState(false);

  const date = new Date();

  useEffect(() => {
    if (JSON.stringify(date.getDate()) > 15) {
      setValid(true);
    } else setValid(false);
  }, [date]);

  return (
    <div>
      <div className="App">
        {!valid && <h1>Kindly refresh at midnight</h1>}
        {valid && (
          <div>
            {step === 1 && (
              <div>
                <h3 style={{ margin: "100px 0 20px" }}>
                  Hello cricket kesa hai mera chunnu sa bacha
                </h3>
                <button className="button" onClick={() => setStep(1.5)}>
                  agay dafa ho
                </button>
              </div>
            )}
            {step === 1.5 && (
              <div>
                <div style={{ margin: "100px 0 25px" }}>
                  <p>APNA NAAM LIKH NEECHAY</p>
                </div>

                <input
                  placeholder="Enter answer here"
                  type="password"
                  onChange={(e) => setPassphrase(e.target.value)}
                />
                <button
                  className="button"
                  disabled={passPhrase !== "KHOTU"}
                  onClick={() => setStep(2)}
                  style={{ opacity: passPhrase !== "KHOTU" ? 0.5 : 1 }}
                >
                  Submit
                </button>
                <center
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    color: "#3d3d3d",
                  }}
                >
                  pehli dafa main hi theek to hona chahye na hua to lanat
                </center>
                <center
                  style={{
                    fontSize: "12px",
                    marginTop: "10px",
                    color: "#3d3d3d",
                  }}
                >
                  <b>Hint:</b> Uppercase main likhin
                </center>
              </div>
            )}
            {step === 2 && (
              <div>
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  tweenDuration={5000}
                />
                <div
                  style={{
                    maxWidth: "350px",
                    padding: "20px",
                    margin: "0 auto",
                    border: "2px solid #ff7700",
                    marginTop: "20px",
                    backgroundColor: "#fff",
                  }}
                >
                  <h2 style={{ fontSize: "20px" }}>
                    Happy Birthday, khotuuuuuuu
                  </h2>
                  <span>
                    From the deepest part of my heart, I'm wishing you the best
                    years ahead. I pray Allah keeps coming through for you like
                    you always showup for your family and loved ones. aur sada
                    sukhi rho khush rho awais ko pagal krti rho khair bday teri
                    30 april ko thi tab bhool gya to aj kr rha wish lamba wala
                    wish krta lekin bs uska time gaya khush reh
                  </span>
                  <p class>HAPPII BADDAY AGAIN!</p>
                  <div>
                    <button
                      onClick={() => setStep(1)}
                      style={{ marginTop: "20px" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && <p style={{ color: "#333" }}>MISS YOU!</p>}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}
