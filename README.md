
# AppInput React Component

`AppInput` is a highly customizable and reusable input component for React applications. It supports various input types, including text, password, search, date, email, and number. This component also offers integrated validation messages and an option to include icons, making it a versatile choice for any React project.

## Features

- **Customizable Input Types**: Supports text, password, search, date, email, and number.
- **Validation Messages**: Easily display error messages.
- **Icon Support**: Option to include icons within the input field.
- **Flexible Styling**: Utilizes `styled-components` for easy customization.

## Installation

To use `AppInput` in your project, you will need to install the component and its peer dependencies if you haven't already.

```bash
npm install app-input-react
npm install react styled-components --save
```

## Usage

Here's a quick guide to get you started with using `AppInput` in your React application.

First, import the `AppInput` component:

```jsx
import AppInput from 'app-input-react';
```

Then, you can use it in your React component:

```jsx
import React, { useState } from 'react';
import AppInput from 'app-input-react';

function MyComponent() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <AppInput
        text="Enter your name"
        value={inputValue}
        setValue={setInputValue}
        errorMessage="This field is required"
        icon={<YourIconComponent />} // Optional: Include your icon component
      />
    </div>
  );
}

export default MyComponent;
```

## Props

| Prop           | Type     | Default      | Description                                           |
| -------------- | -------- | ------------ | ----------------------------------------------------- |
| `text`         | string   |              | Placeholder text for the input field.                 |
| `inputType`    | string   | `"text"`     | Type of the input (e.g., text, password, email, etc.).|
| `value`        | string   |              | The current value of the input field.                 |
| `setValue`     | function |              | Function to update the value of the input field.      |
| `className`    | string   | `""`         | CSS class for additional styling.                     |
| `icon`         | element  | `null`       | Icon to display inside the input component.           |
| `width`        | string   | `"200"`      | Width of the input component, in pixels.              |
| `errorMessage` | string   | `""`         | Error message to display below the input field.       |

