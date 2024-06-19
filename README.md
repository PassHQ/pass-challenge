# The Challenge

The Pass App test is a React Native application designed to evaluate the skills of a QA engineer. It includes functionalities such as creating and authorizing passkeys, validating forms, and navigating between screens. 

Your task is to develop a test plan and test cases to comprehensively test end-to-end functionality using the Detox framework (if you are familiar with other framework, please feel free to change the configuration and add test accordingly) to ensure the application's functionality, reliability, and user experience.

## Key Areas to Focus

1. **Form Validation**:
    - Ensure the display name is required on the landing screen.
    - Validate the blockchain address and amount on the send token screen.

2. **Passkey Functionality**:
    - Test the creation of a new passkey.

3. **Navigation**:
    - Verify navigation between the landing screen, user details screen, and send token screen.

4. **AsyncStorage**:
    - Ensure the registration status is stored and retrieved correctly.

5. **Error Handling**:
    - Check how the app handles errors during passkey creation and authorization.

Remember, as a QA engineer, your role is crucial in ensuring the quality and reliability of the application. Your attention to detail, analytical skills, and problem-solving abilities will be invaluable in identifying and resolving any issues or bugs in the Pass App.

I wish you the best of luck with this coding challenge. Should you have any questions or require further assistance, please don't hesitate to reach out.

---

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Testing](#testing)


## Installation

### Environment Setup

This provides the steps to set up the development environment for the Pass App React Native application.

### Prerequisites

1. **Java Development Kit (JDK)**
    - Ensure Java version is OpenJDK 17.0.9:
    ```sh
    java -version
    ```
    - If you don't have OpenJDK 17.0.9 installed, you can download it from the [OpenJDK website](https://jdk.java.net/17/).
    - Alternatively you can install via homebrew using
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    brew install openjdk@17
    ```

2. **Xcode**
    - Make sure you have the latest version of Xcode installed from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).
    - Install Command Line Tools for Xcode:
    ```sh
    xcode-select --install
    ```

3. **Android Studio**
    - Install the latest version of Android Studio from the [official website](https://developer.android.com/studio).
    - Set up the Android SDK and ensure the necessary emulators are installed.

4. **Node.js and npm (using nvm)**
    - Install `nvm` (Node Version Manager) by following the instructions on the [nvm repository](https://github.com/nvm-sh/nvm#installing-and-updating).
    - Install Node.js and npm using `nvm`:
    ```sh
    nvm install v20.10.0
    nvm use v20.10.0
    node -v
    ```

### Setting up the project

1. **Clone the repository**:
    ```sh
    git clone https://github.com/PassHQ/pass-challenge.git
    cd pass-challenge/pass-app
    ```

2. **Install dependencies**:
    ```sh
    yarn
    ```

3. **Install pods for iOS (for windows skip to step 4)**:
    ```sh
    npx pod-install
    ```

4. **Start the development server**:
    ```sh
    yarn start
    ```

5. **Run the application**:
    - For iOS:
      ```sh
      yarn run ios
      ```
    - For Android:
      ```sh
      yarn run android
      ```

## Usage

- **Landing Screen**: Allows users to create a passkey or authorize an existing one.
- **User Details Screen**: Displays user details after a successful login.
- **Send Token Screen**: Allows users to enter a blockchain address and an amount to send tokens. It validates the inputs and calculates transaction fees.

## Features

- **Passkey Support**: Checks if passkey is supported on the device.
- **Form Validation**: Validates display name input on the landing screen and blockchain address and amount on the send token screen.
- **Navigation**: Includes navigation between different screens.
- **AsyncStorage**: Stores the registration status of the user.
- **Mock API**: Includes a mock API to calculate transaction fees.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.


# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

---

## Repository Submissions

Challenge solutions must be submitted as pull requests that will be reviewed by the pass team.

### Creating a Pull Request

Assuming you have a GitHub account, you may submit the pull request by following.

#### Fork

1. Create a fork of the repository to your own account and create a new branch with the naming convention:\
   `$ git checkout -b sol/USERNAME`
2. Use the guideline above to put your solution code in the challenge directory
3. Run the following commands to push the code into you forked branch:

```sh
$ git add -A
$ git commit -m 'challenge solution'
$ git push origin sol/USERNAME
```

4. Share your forked repo which contains the solution. Pass team will review and let you know the next steps.

### Notes
- Passkey creation does not work on the iOS simulator, so these tests should be run on a real android/iOS device and an Android emulator.
- Make sure to have the necessary dependencies and configurations for Detox as specified in the Detox documentation.
- This test plan and set of test cases should provide comprehensive coverage of the key functionalities of the Pass Test App.
