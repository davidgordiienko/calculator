# Calculator #
## What is this? ##
This is a simple practice project I made to practice my React Native skills and apply my newfound knowledge. It's a simple, basic calculator app with basic memory management.
## How it works ##
### Input chaining ###
The calculator is able to automatically solve and chain multiple inputs together. For example, if you type 1 + 1 + 2, the calculator solves 1 + 1 first, then returns 2 + 2. If you type 2 + 2 + 3, the calculator again solves 2 + 2 first, then returns 4 + 3, since 2 + 2 = 4. After you press =, you get the final result.
### Memory Management ###
The calculator has very *basic* memory management, and it is only meant to display a value, not use it as a variable in an equation. (So typing 1 + M won't work, because M only displays the value stored in memory
The M button displays the value currently stored in memory (M: E if memory is empty), M+ adds the current output to the memory, and MC clears the memory
## Important Note ##
This app is optimized for Android and has not been tested for iOS. It likely won't look as good as it does on Android because iOS buttons lack colored rectangles and only show colored text.

## Final Statement ##
This app is definitely not the best it can be, and there is room for improvement (for example splitting the button rows into their own reusable React components, same with the buttons, and probably some improvements to the logic) However, I didn't want this to be a long-term project. Just a quick app I can build to practice and move on to learning new things. I might come back here and improve some things if I get bored or want to practice more. But for now, this app won't be replacing your phone calculator any time soon.

## Download ##
You can download an APK [here](https://github.com/davidgordiienko/calculator/releases/download/v1.0.0/calculator.apk). This APK was built using Expo Application Services (EAS) using the production profile. Android might give you a security or Play Protect warning when you open it, but this is only because the app isn't signed with a Google Play key, and it's nothing to worry about. Just your phone being cautious because you're installing an unsigned APK from outside the Play Store. But all the code is here, and if you really wanted to, you could rebuild the whole thing yourself to make sure the APK is untampered with.
