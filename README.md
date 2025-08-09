# Community Event Registration Form

A simple registration form that validates user input for a community event signup using **HTML**, **CSS**, and **JavaScript**.

## Requirement Analysis

The registration form includes the following fields and validation rules:

- **Name** – Required, must contain only letters and spaces.
- **Email** – Required, must follow standard email format (e.g., `name@example.com`).
- **Phone Number** – Required, must be a valid 10-digit number.
- **Age** – Required, must be a number and at least 18.

Invalid inputs trigger visual feedback and error messages in real-time.

---

## Design

The form is designed with a clean, user-friendly interface:

- Real-time validation feedback.
- Red outlines and inline error messages for invalid inputs.
- Responsive layout for desktop and mobile users.

---

## Implementation

- **HTML** – Defines the form structure and input fields.
- **CSS** – Styles the form for clarity and responsiveness.
- **JavaScript** – Handles validation logic, error messages, and dynamic feedback.

---

## Testing

The form is tested for:

- Missing required fields.
- Invalid email or phone number formats.
- Boundary age values (e.g., 17 rejected, 18 accepted).
- Real-time error handling and corrections.

