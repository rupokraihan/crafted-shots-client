# Crafted Shots
- Welcome to the Extra-Curricular Learning Photography School Crafted Shots ! This full-stack project is dedicated to providing an online platform for extra-curricular learning in the field of photography.

## Live Link
Hosted in Firebase -> [Crafted Shots]()

## Project Description
The Extra-Curricular Learning Photography School Website serves as a comprehensive online learning platform for photography enthusiasts of all skill levels. It offers a wide range of courses, tutorials, resources, and community features to enhance the learning experience. The website is designed to provide a user-friendly interface, allowing students to enroll in courses, access learning materials, participate in practical exercises, and interact with instructors and fellow learners.

## Technologies Used
- Front-end: HTML, CSS, Tailwind, DaisyUi, JavaScript, React.js
- Back-end: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Firebase: Used for User Sign Up and Login Authentication
- React Carousel: Used for creating interactive carousels or sliders in the home page
- React Hooks: Used for managing state and side effects in functional components.
- React Hook Form: Used for handling forms and form validation in React.
- React Toastify: Used for displaying informative or notification messages to the user.
- SweetAlert2: Used for displaying attractive and customizable alert modals.
- Tanstack Query: A collection of libraries and tools for building scalable and efficient React applications.
- axios: Used for making HTTP requests.
- Hero Icons: Used for adding icons to the user interface
- react-awesome-reveal: A library for adding stunning animations to components in the home page.
- dotenv: Used for managing environment variables.

## Features


- Homepage:
  - Visually appealing top slider section with learn photography relevant text, information, images, and animations.
  - Popular classes section showcasing the top 6 classes .
  - Popular instructors section displaying the top 6 instructors.
  - In the lower area, there is a review section.This portion was beneficial for students.
  - Additional attractive sections with animation effects.

- Navbar:
  - Navbar with website logo/name, Home, Instructors, Classes, Dashboard, and a conditional user
  - These navbar links provide convenient and quick access to different sections of our photography school website, allowing users to navigate easily and find the information or features they are looking for.

- User Registration and Login System:
  - Users can register with their name, email, password, and photo URL.
  - Users can log in with their email and password or use Google social login options.
  - Password field includes an option to hide/unhide the password.
  - Error handling for registration system validations and empty fields.

- Instructors Page:
  - Displays all the instructors with their image, name, email.
  - If admin approved any instructor then his data also show in this page.

- Classes Page:
  - Shows all approved classes with their image, name, instructor name,instructor title, available seats, and price.
  - Select button to enroll in a class and when selected there is a sweet alert message show and if any student logged in the student can not select any class and navigate to login page.
  - Class card background turns red if there are no available seats.

- Student Dashboard:
  - Private dashboard accessible only to students.
  - "My Selected Classes" section displays the classes booked by the student with relevant information.
  - Which classes are selected there are all class show in this page and there is a pay button for payment.
  - Delete button to remove a selected class from the list.
  - "My Enrolled Classes" section shows all the classes a student has successfully booked.
  - Payment history page for students to view their payment records sorted in descending order.
  - After successful payment, the available seats for the class are reduced by 1.
  

- Instructor Dashboard:
  - Private dashboard accessible only to instructors.
  - "Add a Class" page with a form to create a new class, including class name, image, available seats, and price.
  - "My Classes" section displays the classes added by the instructor with relevant information, including status, total enrolled students, and feedback.
  - Total enrolled students count for each class.
  - Feedback column to display feedback from the admin if a class is denied.

- Admin Dashboard:
  - Private dashboard accessible only to administrators.
  - "Manage Classes" page to view all the classes, including class image, name, instructor details, available seats, price, status, and buttons to approve, deny, and send feedback.
  - "Manage Users" page to view registered users and their relevant information.
  - Make Instructor button to promote a user to the instructor role.
  - Make Admin button to promote a user to the admin role.

- Loading and Error Page:
  - The error page show when user unexpected errors or invalid URLs. It displays a visually appealing image  with a message to guide the user back to the home page.
  - The loading page enhances the user experience by displaying a visually engaging animation and a spinner while the website content is being fetched or processed. It ensures that users are aware that the website is actively loading and prevents confusion or frustration during the loading process.

- Footer:
  - Footer displayed on all pages, including website logo/, contact information, address,useful links, social links and copyright.
 


## Contact

For any inquiries or questions, feel free to contact me at [rupokraihan20@gmail.com](mailto:rupokraihan20@gmail.com).

