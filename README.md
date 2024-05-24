###Project Setup

vercel url : https://county-task.vercel.app/

1- Prerequisites
Node.js
npm or yarn
Next.js
Installation

    Clone the repository:
        git clone https://github.com/mohmedEldeeb/County-task.git
        cd County-task

2- Install dependencies:

    npm install
    # or
    yarn install

- Run project
  npm run dev # or
  yarn run dev

Project Structure

├── **tests**
│ ├── Card.test.tsx
│ ├── Search.test.tsx
│ ├── ShoppingCart.test.tsx
│ └── Wrap.test.tsx
├── components
│ ├── Card.tsx
│ ├── Search.tsx
│ └── ShoppingCart.tsx
├── app
│ ├── index.tsx
│ ├── \_app.tsx
│ └── page.tsx
├── public
│ └── data.json
├── styles
│ └── globals.css
├── jest.config.js
├── next.config.js
├── package.json
└── README.md

Development
Adding Features
Homepage:

Create a Card component to display each item's details.

Search Bar:

Create a Search component with an input field.
Use React state and useEffect to filter items in real-time as the user types.
Responsiveness:

Use CSS and media queries to ensure the application is responsive.
Sorting:

Implement sorting functionality in the Wrap component, allowing users to sort items by name or price.
Filtering:

Add filtering logic to the Wrap component to filter items by price range.
Shopping Cart:

Create a ShoppingCart component to manage the cart items.
Use local storage to persist cart data.

Running Tests:

Run tests using the following command:

    npm test
    # or
    yarn test
