import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";

const InfoModal = ({ visible, onCancel }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.infoTextContainer}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text style={styles.infoTextHeading}>
              Welcome to Calculator v0.1.0
            </Text>
            <Text style={styles.infoTextSubHeading}>Important Note:</Text>
            <Text style={styles.infoText}>
              This app is optimized for Android. The buttons and styling may be
              weird or hard to see/use on iOS.
            </Text>
            <Text style={styles.infoTextSubHeading}>A note on memory:</Text>
            <Text style={styles.infoText}>
              The memory function is meant to simply store and display values
              for the user to manually reference. It is not meant to be used as
              a variable in equations. If you try to press 1 + M, it won't do
              anything. It simply displays the memory value on the screen.
            </Text>
            <Text style={styles.infoTextSubHeading}>
              Error and status messages:
            </Text>
            <Text style={styles.errorInfoText}>M: E - Memory Empty</Text>
            <Text style={styles.errorInfoText}>
              M+: [Value] - [Value] added to memory
            </Text>
            <Text style={styles.errorInfoText}>MC - Memory Cleared</Text>
            <Text style={styles.errorInfoText}>
              ERR: DIV BY 0 - Cannot divide by 0
            </Text>
            <Text style={styles.errorInfoText}>
              ENTER NUM - Enter a number first before using an operator and/or
              using the equal sign
            </Text>
            <Text style={styles.infoTextSubHeading}>Credits:</Text>
            <Text style={styles.infoText}>
              This calculator was created as a practice project by David
              Gordiienko, a self-taught software developer learning React
              Native.
            </Text>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Close" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  infoTextContainer: {
    borderColor: "black",
    borderWidth: 1,
    height: "80%",
    width: "90%",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  infoTextHeading: {
    fontSize: 22,
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  infoTextSubHeading: {
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
  errorInfoText: {
    fontSize: 16,
    marginTop: 2,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 18,
    width: "90%",
  },
});

export default InfoModal;
