/* Reset default margin/padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

/* Fix: Remove full viewport height so content can scroll naturally */
body {
  background: #f4f6f9;
  padding: 40px 10px;
}

/* Fixed width and center alignment */
.container {
  max-width: 500px;
  margin: 0 auto; /* Horizontal center */
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

/* Heading */
h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Form labels and inputs */
label {
  display: block;
  margin-top: 15px;
  font-weight: 500;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

textarea {
  resize: vertical;
}

/* Checkbox label */
.terms-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

/* Button */
button {
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

/* Message */
#message {
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  color: red;
}
