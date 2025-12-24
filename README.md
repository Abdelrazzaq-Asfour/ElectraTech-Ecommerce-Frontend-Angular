<img width="1897" height="881" alt="image" src="https://github.com/user-attachments/assets/8415ba19-c854-4f61-87c3-43d49bf39442" />

# ⚡ ElectraTech-Ecommerce-Frontend-Angular

**ElectraTech**  is a high-performance, modern E-commerce frontend application built with Angular 18. It serves as the user interface and dashboard for an electronics retail store, featuring a sleek design and seamless integration with a .NET Core and PostgreSQL backend.

<img width="1900" height="882" alt="image" src="https://github.com/user-attachments/assets/1aeede30-9606-44a0-ad0e-65e033a2eb0d" />

## 🚀 Key Features

* **Complete Authentication Flow**: Secure Login and Account Creation pages with input validation.
* **User Profile Management**: Logged-in users can update their personal information (Name, Email, Password) directly through a dedicated update mode.
* **Smart Navigation Bar**: A dynamic Navbar that displays a "User Pill" containing the user's name and a quick-access "Update Profile" button.
* **Cart Functionality**: Real-time cart item counting and navigation to the checkout area.
* **Modern UI/UX**: Styled using advanced SCSS for a dark-themed, premium electronics store feel.

## 🛠 Tech Stack

* **Framework**: Angular 18 (using Standalone Components).
* **Logic**: TypeScript.
* **Styling**: SCSS / CSS3 with Flexbox and Grid.
* **Networking**: Angular HttpClient for API requests.
* **Database Sync**: LocalStorage with Custom Event Dispatching for real-time Navbar updates.

## ⚙️ Installation & Setup

### Prerequisites

* **Node.js** (v18+)
* **Angular CLI** (`npm install -g @angular/cli`)

### Steps to Run Locally

1. **Clone the Repository**:
```bash
git clone https://github.com/your-username/ElectraTech-Ecommerce-Frontend-Angular.git
cd ElectraTech-Ecommerce-Frontend-Angular

```


2. **Install Dependencies**:
```bash
npm install

```


3. **Start the Development Server**:
```bash
ng serve

```


Open your browser to `http://localhost:4200/`.

## 🔗 Backend Connectivity

This frontend is configured to communicate with the **ElectraTech Backend API**.

* **API Port**: `http://localhost:5000`.
* **Endpoints Used**: `/api/Auth/login`, `/api/Auth/register`, and `/api/Auth/update/{id}`.

## This image shows an e-commerce product page for a store called "ElectraTech," featuring a grid of electronic devices with their prices in JOD. It is a user-friendly interface that allows customers to browse items like laptops and smartphones and add them to a shopping cart.

<img width="1881" height="917" alt="image" src="https://github.com/user-attachments/assets/574c0322-a96d-43d1-a5b3-7117046579b8" />

## This image shows a shopping cart interface displaying a laptop and a tablet with their respective prices and "Remove" buttons. It calculates a total of $1,100.00 and provides options to either "Clear Cart" or proceed to "Checkout."

<img width="830" height="397" alt="image" src="https://github.com/user-attachments/assets/d614db8b-c5a2-4973-b2dd-0679e678a7c0" />

## This image shows a web-based profile update form where a user named John can edit his personal details, such as his name, email address, and password. The interface features a clean, centered card design with "Save Changes" and "Cancel" buttons to manage the account updates.

<img width="532" height="546" alt="image" src="https://github.com/user-attachments/assets/d748a15b-7d46-4086-9e58-e7853cce38c6" />

## The admin can view, add, edit, and delete items using the "Add New Product" button and the action buttons on each card. The dashboard also allows the admin to update their profile and manage product details like price and images.

<img width="1882" height="720" alt="image" src="https://github.com/user-attachments/assets/00502001-5fd8-4403-956c-b540522c1655" />

## The admin uses this form to add products by entering the name, description, price, and image URL. After filling in the details, the admin can either click "Save" to submit the product or "Cancel" to discard the changes.

<img width="421" height="360" alt="image" src="https://github.com/user-attachments/assets/937734ca-ee2f-42c2-accb-5e2b58921829" />



## Market Intelligence Dashboard This admin dashboard provides a real-time overview of business performance, featuring key metrics like user growth, product inventory, and monthly profit trends. It utilizes AI-driven forecasting to help administrators visualize future profit scenarios based on sales growth and market stability.

<img width="1888" height="911" alt="image" src="https://github.com/user-attachments/assets/d70549af-f6e9-4d86-9b3a-46f9ab790533" />





# ElectraTech

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
