# Lab: Building a Dynamic Shopping App with React Hooks

## Introduction

Your company is developing a **new grocery shopping app** to improve the shopping experience for customers. You have been assigned to implement **three key features**:

1. **Dark Mode Toggle** – Users can switch between light and dark mode.
2. **Add to Cart** – Users can add or remove items from the shopping cart.
3. **Category Filtering** – Users can filter products by category.

Your task is to implement these features using **React Hooks (`useState`)** while ensuring the app is functional and visually consistent.

---

## **Challenge**
1. Implement a **dark mode toggle**.
2. Allow users to **add/remove items** from a shopping cart.
3. Implement **category-based filtering** for the shopping list.

## **Bonus Challenge**
4. Display a **cart total** showing the number of items added.

---

## **Instructions**

### **1️⃣ Fork and Clone the Repository**
1. **Fork** the provided GitHub repository.
2. **Clone** the forked repository to your local machine:
   ```sh
   git clone <your-forked-repository-url>
   cd react-hooks-state-lab
   ```
3. Open the project in **VSCode**.
4. Install dependencies:
   ```sh
   npm install
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

### **2️⃣ Implement the Dark Mode Toggle**
- Implement a **button** that toggles between light and dark mode.
- The **background and text color** should change dynamically.
- Use the **useState hook** to manage the current theme.

### **3️⃣ Implement the Add to Cart Feature**
- Each product should have an **"Add to Cart"** button.
- Clicking the button should add the item to the cart.
- If the item is already in the cart, clicking the button should **remove** it.
- The cart should display a **list of added items**.

### **4️⃣ Implement the Category Filter**
- Create a **dropdown menu** to filter products by category.
- When a user selects a category, **only matching products** should be displayed.
- Use **state management (`useState`)** to track the selected category.

---

## **Bonus Challenge: Cart Total**
- Display a **cart total** showing how many items have been added.
- The total should update dynamically when items are added or removed.

---

## **Testing and Debugging**
1. Clone the repository containing **pre-written tests**:
   ```sh
   git clone <testing-repository-url>
   ```
2. Run the test suite:
   ```sh
   npm test
   ```
3. Debug any failing tests:
   - Use **browser developer tools** (`F12 → Console`).
   - Verify that product cards display correctly.
   - Ensure filtering and cart updates work as expected.

---

## **Version Control**
1. Initialize a Git repository:
   ```sh
   git init
   ```
2. Regularly commit your changes:
   ```sh
   git add .
   git commit -m "Initial shopping app setup"
   ```
3. Push to GitHub:
   ```sh
   git remote add origin <your-repository-url>
   git push origin main
   ```

---

## **Submission and Grading Criteria**

### **✅ Submission Format**
- Submit your project as a **GitHub repository link**.
- Include a **README.md** with setup instructions.
- Provide a **screenshot** of the working app.
- Ensure **all tests pass** before submission.

### **✅ Rubric**

| **Criteria**          | **AutoTest Passed**                          | **AutoTest Did Not Pass** |
|----------------------|--------------------------------|--------------------------|
| **Functionality (30 pts)** | Features work correctly, including filtering, cart updates, and dark mode. | Features are missing or do not function correctly. |
| **Project Structure (10 pts)** | Well-organized file structure, follows React best practices. | Poorly structured files, inconsistent naming. |
| **Testing (10 pts)** | Pre-written Jest tests validate dynamic behavior. | Tests do not run or fail. |
| **Documentation (5 pts)** | Clear README and well-commented code. | README missing or unclear. |
| **npm and Dependencies (5 pts)** | Required packages installed and correctly used. | Dependencies missing or unused. |

---

## **Resources**
- [React Docs: useState](https://react.dev/reference/react/useState)
- [Material UI Documentation](https://mui.com)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Jest Testing Framework](https://jestjs.io/)
- [React Testing Library](https://testing-library.com)
- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
