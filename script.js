/* style.css */

/* Global styling */
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}

/* Container to center content and add some padding */
.container {
  max-width: 600px;
  margin: 2em auto;
  background-color: #fff;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Heading styling */
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 1em;
}

/* Form styling */
form {
  display: flex;
  flex-direction: column;
}

/* File input styling */
input[type="file"] {
  margin-bottom: 1em;
  padding: 0.5em;
}

/* Button styling */
button {
  padding: 0.8em;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Result display styling */
pre {
  background-color: #e9ecef;
  padding: 1em;
  border-radius: 3px;
  overflow-x: auto;
  margin-top: 1em;
}

