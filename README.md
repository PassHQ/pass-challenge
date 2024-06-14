This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Pass HQ Test App

This repository contains a sample React Native application designed to evaluate the skills of a QA engineer. The application includes functionalities such as creating and authorizing passkeys, validating forms, and navigating between screens.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Testing](#testing)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/PassHQ/pass-challenge.git
    cd pass-challenge
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Install pods for iOS**:
    ```sh
    npx pod-install
    ```

4. **Start the development server**:
    ```sh
    npm start
    ```

5. **Run the application**:
    - For iOS:
      ```sh
      npm run ios
      ```
    - For Android:
      ```sh
      npm run android
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

## Testing

The QA candidate should focus on end-to-end testing of the application. The recommended framework for end-to-end testing is [Detox](https://wix.github.io/Detox/).

### Areas to Test

1. **Form Validation**:
    - Ensure the display name is required on the landing screen.
    - Validate the blockchain address and amount on the send token screen.

2. **Passkey Functionality**:
    - Test the creation of a new passkey.
    - Test the authorization of an existing passkey.

3. **Navigation**:
    - Verify navigation between the landing screen, user details screen, and send token screen.

4. **AsyncStorage**:
    - Ensure the registration status is stored and retrieved correctly.

5. **Error Handling**:
    - Check how the app handles errors during passkey creation and authorization.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
