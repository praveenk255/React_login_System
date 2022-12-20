import React, { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "./toggle";
import Table1 from "./table1";

function Welcome() {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);

  return (
    <div>
      <div>
        <div>
          <button className="btn" onClick={() => setShowText1(!showText1)}>
            <Toggle />
          </button>
          Vikas Dameriya
          {showText1 && (
            <div class="pad">
              <Table1 />
            </div>
          )}
        </div>
      </div>
      <div>
        <div>
          <button className="btn" onClick={() => setShowText2(!showText2)}>
            <Toggle />
          </button>
          Vikas Dameriya
          {showText2 && (
            <div class="pad">
              <Table1 />
            </div>
          )}
        </div>
      </div>
      <div>
        <div>
          <button className="btn" onClick={() => setShowText3(!showText3)}>
            <Toggle />
          </button>
          Vikas Dameriya
          {showText3 && (
            <div class="pad">
              <Table1 />
            </div>
          )}
        </div>
      </div>
      <div>
        <div>
          <button className="btn" onClick={() => setShowText4(!showText4)}>
            <Toggle />
          </button>
          Vikas Dameriya
          {showText4 && (
            <div class="pad">
              <Table1 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
