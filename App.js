import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";
import InfoModal from "./components/InfoModal";

export default function App() {
  const [num2, setnum2] = useState("");
  const [num1, setnum1] = useState("");
  const [output, setOutput] = useState("");
  const [operator, setOperator] = useState("");
  const [memory, setMemory] = useState("");
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  /* The calculator stores the current number in num2.
  When an operator is pressed, the number entered before
  the operator gets transferred to num1, and num2 is
  cleared to let the user enter the 2nd number to the
  right of the operator. Then, when the user presses
  the equal sign button, the calculation is solved
  and output to the user. */

  function openInfoModal() {
    setIsInfoVisible(true);
  }

  function closeInfoModal() {
    setIsInfoVisible(false);
  }

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

  function handleDecimalPress() {
    if (!num2.includes(".")) {
      const newnum2 = (num2 || "0") + ".";
      setnum2(newnum2);
      if (operator === "") {
        setOutput(newnum2);
      } else {
        setOutput(num1 + " " + operator + " " + newnum2);
      }
    }
  }

  function handleNegativePress() {
    if (num2 === "") {
      const newnum2 = "-";
      setnum2(newnum2);
      if (operator === "") {
        setOutput(newnum2);
      } else {
        setOutput(num1 + " " + operator + " " + newnum2);
      }
    } else if (num2 === "-") {
      setnum2("");
      if (operator === "") {
        setOutput("");
      } else {
        setOutput(num1 + " " + operator);
      }
    } else if (num2.startsWith("-")) {
      const newnum2 = num2.substring(1);
      setnum2(newnum2);
      if (operator === "") {
        setOutput(newnum2);
      } else {
        setOutput(num1 + " " + operator + " " + newnum2);
      }
    } else {
      const newnum2 = "-" + num2;
      setnum2(newnum2);
      if (operator === "") {
        setOutput(newnum2);
      } else {
        setOutput(num1 + " " + operator + " " + newnum2);
      }
    }
  }

  function handleOperatorPress(op) {
    if (num2 !== "" && operator === "") {
      // First operator press
      setOperator(op);
      setOutput(num2 + " " + op);
      setnum1(num2);
      setnum2("");
    } else if (num1 !== "" && operator !== "" && num2 !== "") {
      // Chain operations: calculate current result first
      const result = calculate();
      if (result !== null) {
        setOperator(op);
        setnum1(result);
        setnum2("");
        setOutput(result + " " + op);
      }
    } else if (num1 !== "" && operator !== "" && num2 === "") {
      // Change operator without number
      setOperator(op);
      setOutput(num1 + " " + op);
    } else {
      setOutput("ENTER NUM");
    }
  }

  function calculate() {
    if (num1 === "" || num2 === "" || operator === "") {
      return null;
    }

    let result;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
      case "+":
        result = (n1 + n2).toString();
        break;
      case "-":
        result = (n1 - n2).toString();
        break;
      case "x":
        result = (n1 * n2).toString();
        break;
      case "/":
        if (n2 !== 0) {
          result = (n1 / n2).toString();
        } else {
          setOutput("ERR: DIV BY 0");
          return null;
        }
        break;
      default:
        return null;
    }
    return result;
  }

  function handleEqualPress() {
    if (num1 !== "" && num2 !== "" && operator !== "") {
      const result = calculate();
      if (result !== null) {
        setOutput(result);
        setnum1("");
        setnum2(result);
        setOperator("");
      }
    }
  }

  function memoryRetrieve() {
    if (memory !== "") {
      setOutput("M: " + memory);
      /*setnum2(memory);
      setnum1("");
      setOperator("");*/
    } else {
      setOutput("M: E");
    }
  }

  function memoryStore() {
    if (output !== "") {
      setMemory(output);
      setOutput("M+: " + output);
    }
  }

  function memoryClear() {
    setMemory("");
    setOutput("MC");
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Calculator v0.1.0</Text>
          <View style={styles.infoButton}>
            <Button title="Info" onPress={openInfoModal} />
            <InfoModal visible={isInfoVisible} onCancel={closeInfoModal} />
          </View>
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.outputText}>{output}</Text>
        </View>
        <View style={styles.buttonRowContainer}>
          <View style={styles.button}>
            <Button title="M" onPress={memoryRetrieve} />
          </View>
          <View style={styles.button}>
            <Button title="M+" onPress={memoryStore} />
          </View>
          <View style={styles.button}>
            <Button title="MC" onPress={memoryClear} />
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
            <Button title="." onPress={handleDecimalPress} />
          </View>
          <View style={styles.button}>
            <Button title="(-)" onPress={handleNegativePress} />
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
  titleContainer: {
    borderColor: "black",
    borderWidth: 1,
    width: "98%",
    height: 100,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 22,
    textAlign: "left",
    marginTop: 10,
    marginLeft: 5,
  },
  infoButton: {
    marginLeft: 45,
    marginTop: 15,
    width: 100,
    height: 40,
  },
});
