
# FLASHCARD GENERATOR

Flashcard Generator is a web application that allows users to create, manage, and share custom flashcards. It provides an intuitive interface and a comprehensive set of features to enhance the learning process. The primary goal of this project is to create a seamless user experience for studying and reinforcing knowledge through interactive digital flashcards.


## Table of content
- [📖 Table of Contents](#📖-table-of-contents)
- [📍 Overview](#📍-overview)
- [📦 Features](#📦-features)
- [📂 repository Structure](#📂-repository-structure)
- [🚀 Getting Started](#🚀-getting-started)
  - [🔧 Installation](#🔧-installation)
  - [🤖 Running flashcard-generator](#🤖-running-flashcard-generator)
  - [🌐 Deployment Link](#🌐-deployment-link)
  - [🧪 Tests](#🧪-tests)
- [🤝 Contributors](#🤝-Contributors)

---

## 📍 Overview
This is A Almabetter Capstone project for a Front-end module. The Primary goal of creating this web app is getting the details from users and creating a card from that information, which can be used to learn concepts for students. This is easy and modular information along with images in the form of cards and can contain multiple terms.


## 📦 Features

- Create Flashcards :- 
    This section allow users to inetract with the page and you can given the name & image to your card. And you can add required number of information in the term section along with images.

- Live previews :-
    Yes, when you select an image it will give a small preview of the selected image, which makes it more user interactive. Also you can click on the cancel button to reselect the image again. 

- Validation :-
    One of the important feature is validation, whatever information user putting in the input it has some character limits.

- Persistent data :-
    The application uses local storage to store user data persistently. This means that users can seamlessly pick up where they left off, and their created flashcards will be as it is even after closing the browser or navigating away from the application.
    
- Share, Print & Download :-
    Last but not the least, in the generation of social media we must need a app which can share, download & print whatever we have created. The good part is this app all these features.

## 📂 Repository Structure

```sh
└── flash-card
      ├── package-lock.json
      ├── package.json
      |
      ├── public
      |      └── index.html
      |
      |
      ├──  src
      |      ├── App.js
      |      ├── __tests__
      |      |    ├── GroupInfo.test.js
      |      |    ├── Header.test.js
      |      |    ├── Modal.test.js
      |      |    ├── RightSideBar.test.js
      |      |
      |      ├── asstes/
      |      |
      |      ├── componenets
      |      |      ├── AllTermInfo.jsx
      |      |      ├── CardDetails.jsx
      |      |      ├── Error.jsx
      |      |      ├── GroupInfo.jsx
      |      |      ├── Header.jsx
      |      |      ├── Modal.jsx
      |      |      ├── RenderCard.jsx
      |      |      ├── RightSidebar.jsx
      |      |      ├── ShowAllFlashCard.jsx
      |      |      ├── ShowCompleteSingleCard.jsx
      |      |      ├── Sidebar.jsx
      |      |      ├── SingleTermInfo.jsx
      |      |      └── UploadImage.jsx
      |      |
      |      ├── pages
      |      |      ├── CreateFlashCard.jsx
      |      |      └── ShowFlashCard.jsx
      |      |
      |      |
      |      ├── Redux
      |      |      ├── flashcardReducers.js
      |      |      └── store.js
      |      |
      |      ├── index.css
      │      ├── index.js
      |      | 
      |      |
      |      ├── reportWebVitals.js
      |      └── setupTests
      |
      └── tailwind.config.js
```

### 🌐 Deployment Link
      You can visit the app live from [click here](https://flashcardgenerator1.netlify.app/)

---

- ### 🔧 Installation
1. Clone the flashcard-generator repository:

```sh
git clone https://github.com/Shaikhmohamm/Capstone_FlashCard.git
```

2. Change to the project directory:

```sh
cd flash-card
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running flash-card

```sh
npm start
```

### 🧪 Tests

```sh
npm run test
```

---

### Contributors
The only contributor of the project is myself, Details as follows
1. Shaikh Mohammed Zaid
[GitHub](https://github.com/Shaikhmohamm) |
[LinkedIn](https://www.linkedin.com/in/zaid-shaikh-37b1b6171/) |
[YouTube]()



## Contact

For any inquiries or support, please contact us at [GitHub](https://github.com/Shaikhmohamm)