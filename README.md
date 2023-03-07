# December Labs - Nightwatch QA Automation suite - Get in Touch

This repository contains the solution for the fourth part of the December Labs technical challenge:
The task was to create an automation suite for the "Get in Touch" form located on the December Labs homepage, the tests were performed in the staging environment (https://inhouse.decemberlabs.com/).

The e2e automation flow includes the following tests:

- Verify the correct opening of the "Get in Touch" form.
- Check for the existence of validations for required inputs
- Verify that validations in the inputs disappear when the fields are completed.

Framework : [Nightwatch.js](https://nightwatchjs.org/)

---

## Test execution steps

1. Clone the repository on your local machine

```bash
  git clone https://github.com/AgustinCarthery/december-labs-nightwatch
```

2. Go to the project directory

```bash
  cd december-labs-nightwatch
```

3. Install dependencies using npm

```bash
  npm install
```

4. Run tests locally

```bash
  npm run test
```

---

## Recommended improvements

- I would add regex to the fields: "Your name", "Company" and "Message" as these fields do not have validation of types and number of characters to enter, this can lead to a potential customer who wants to contact the company does not send correct contact information.
- I would check the behavior of the form when repeatedly entering the send button without entering data as this action generates a scroll down in the background, this was reported in [DL001](https://docs.google.com/document/d/1rLmIx-JlTnnjPmRAqtAgW8RJL2SbpWmPg0_lB8Bnj6s/edit#bookmark=id.ve338jfukfop).
- I would add some margin bottom to the "receive regular updates" checkbox when it enters the 500px breakpoint in the responsive design since it has no separation from the text and they are very close to each other.

---

## Author

- [@AgustinCarthery](https://github.com/AgustinCarthery)
