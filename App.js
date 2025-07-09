import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [num2, setnum2] = useState("");
  const [num1, setnum1] = useState("");
  const [output, setOutput] = useState("");
  const [operator, setOperator] = useState("");

  /* The calculator stores the current number in num2.
  When an operator is pressed, the number entered before
  the operator gets transferred to num1, and num2 is
  cleared to let the user enter the 2nd number to the
  right of the operator. Then, when the user presses
  the equal sign button, the calculation is solved
  and output to the user. */

  function handleNumberPress(number) {
    if (operator === "") {
      const newnum2 = (num2 || "") + number;
      setnum2(newnum2);
      setOutput(newnum2);
    } else {
      const newnum2 = (num2 || "") + number;
      setnum2(newnum2);
      setOutput(num1 + " " + operator + " " + newnum2);
    }
  }

  function handleOperatorPress(op) {
    if (num2 !== "") {
      setOperator(op);
      setOutput(num2 + " " + op);
      setnum1(num2);
      setnum2("");
    } else {
      setOutput("ENTER A NUMBER FIRST");
    }
  }

  function handleEqualPress() {
    if (num1 !== "" && num2 !== "") {
      switch (operator) {
        case "+":
          setOutput((parseFloat(num1) + parseFloat(num2)).toString());
          break;
        case "-":
          setOutput((parseFloat(num1) - parseFloat(num2)).toString());
          break;
        case "x":
          setOutput((parseFloat(num1) * parseFloat(num2)).toString());
          break;
        case "/":
          if (parseFloat(num2) !== 0) {
            setOutput((parseFloat(num1) / parseFloat(num2)).toString());
          } else {
            setOutput("CANNOT DIVIDE BY ZERO");
          }
          break;
      }
    }
  }

  function Clear() {
    setnum2("");
    setnum1("");
    setOutput("");
    setOperator("");
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.calculatorContainer}>
        <View style={styles.outputContainer}>
          <Text style={styles.outputText}>{output}</Text>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={styles.button}>
            <Button title="M" />
          </View>
          <View style={styles.button}>
            <Button title="M+" />
          </View>
          <View style={styles.button}>
            <Button title="MC" />
          </View>
          <View style={styles.button}>
            <Button title="/" onPress={() => handleOperatorPress("/")} />
          </View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={styles.button}>
            <Button title="7" onPress={() => handleNumberPress("7")} />
          </View>
          <View style={styles.button}>
            <Button title="8" onPress={() => handleNumberPress("8")} />
          </View>
          <View style={styles.button}>
            <Button title="9" onPress={() => handleNumberPress("9")} />
          </View>
          <View style={styles.button}>
            <Button title="x" onPress={() => handleOperatorPress("x")} />
          </View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={styles.button}>
            <Button title="4" onPress={() => handleNumberPress("4")} />
          </View>
          <View style={styles.button}>
            <Button title="5" onPress={() => handleNumberPress("5")} />
          </View>
          <View style={styles.button}>
            <Button title="6" onPress={() => handleNumberPress("6")} />
          </View>
          <View style={styles.button}>
            <Button title="-" onPress={() => handleOperatorPress("-")} />
          </View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={styles.button}>
            <Button title="1" onPress={() => handleNumberPress("1")} />
          </View>
          <View style={styles.button}>
            <Button title="2" onPress={() => handleNumberPress("2")} />
          </View>
          <View style={styles.button}>
            <Button title="3" onPress={() => handleNumberPress("3")} />
          </View>
          <View style={styles.button}>
            <Button title="+" onPress={() => handleOperatorPress("+")} />
          </View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={styles.button}>
            <Button title="0" onPress={() => handleNumberPress("0")} />
          </View>
          <View style={styles.button}>
            <Button title="." />
          </View>
          <View style={styles.button}>
            <Button title="(-)" />
          </View>
          <View style={styles.button}>
            <Button title="=" onPress={() => handleEqualPress()} />
          </View>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={styles.button}>
            <Button title="Clear" onPress={Clear} />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  calculatorContainer: {
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#f5f5f5",
    height: "90%",
  },
  buttonRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    height: 60,
    width: "100%",
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  outputContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: "98%",
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  outputText: {
    marginRight: 10,
    fontSize: 20,
  },
});
