import React from "react";
import Button from "./components/Button";
import Row from "./components/Row";
const RowButton = ({ handleClick }) => {
  return (
    <>
      <Row>
        <Button
          text="C"
          theme="secondary"
          onPress={() => handleClick("clear")}
        />
        <Button
          text="+/-"
          theme="secondary"
          onPress={() => handleClick("posneg")}
        />
        <Button
          text="%"
          theme="secondary"
          onPress={() => handleClick("percentage")}
        />
        <Button
          text="/"
          theme="accent"
          onPress={() => handleClick("operator", "/")}
        />
      </Row>
      <Row>
        <Button text="7" onPress={() => handleClick("number", 7)} />
        <Button text="8" onPress={() => handleClick("number", 8)} />
        <Button text="9" onPress={() => handleClick("number", 9)} />
        <Button
          text="x"
          theme="accent"
          onPress={() => handleClick("operator", "*")}
        />
      </Row>
      <Row>
        <Button text="4" onPress={() => handleClick("number", 4)} />
        <Button text="5" onPress={() => handleClick("number", 5)} />
        <Button text="6" onPress={() => handleClick("number", 6)} />
        <Button
          text="-"
          theme="accent"
          onPress={() => handleClick("operator", "-")}
        />
      </Row>
      <Row>
        <Button text="1" onPress={() => handleClick("number", 1)} />
        <Button text="2" onPress={() => handleClick("number", 2)} />
        <Button text="3" onPress={() => handleClick("number", 3)} />
        <Button
          text="+"
          theme="accent"
          onPress={() => handleClick("operator", "+")}
        />
      </Row>
      <Row>
        <Button
          text="0"
          size="double"
          onPress={() => handleClick("number", 0)}
        />
        <Button text="." onPress={() => handleClick("number", ".")} />
        <Button text="=" theme="accent" onPress={() => handleClick("equal")} />
      </Row>
    </>
  );
};

export default RowButton;
