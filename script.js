document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("registrationForm");
  const m = document.getElementById("message");
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    m.textContent = "";
    m.style.color = "red";
    let v = true;
    let eList = [];
    const cf = (i, eT) => {
      const el = document.getElementById(i);
      if (!el.value.trim()) {
        el.style.borderColor = "red";
        eList.push(eT);
        v = false;
      } else {
        el.style.borderColor = "#ccc";
      }
    };
    cf("name", "Name is required.");
    cf("email", "Email is required.");
    cf("phone", "Phone number is required.");
    cf("dob", "Date of Birth is required.");
    cf("gender", "Gender is required.");
    cf("age", "Age is required.");
    cf("country", "Country is required.");
    cf("password", "Password is required.");
    cf("confirmPassword", "Confirm password is required.");
    let em = document.getElementById("email").value.trim();
    let ep = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (em && !ep.test(em)) {
      eList.push("Enter a valid email.");
      document.getElementById("email").style.borderColor = "red";
      v = false;
    }
    let ph = document.getElementById("phone").value.trim();
    let pp = /^[0-9]{10}$/;
    if (ph && !pp.test(ph)) {
      eList.push("Phone must be 10 digits.");
      document.getElementById("phone").style.borderColor = "red";
      v = false;
    }
    let ag = parseInt(document.getElementById("age").value.trim(), 10);
    if (ag && (ag < 10 || ag > 100)) {
      eList.push("Age must be between 10 and 100.");
      document.getElementById("age").style.borderColor = "red";
      v = false;
    }
    let p1 = document.getElementById("password").value.trim();
    let p2 = document.getElementById("confirmPassword").value.trim();
    if (p1 !== p2) {
      eList.push("Passwords do not match.");
      document.getElementById("password").style.borderColor = "red";
      document.getElementById("confirmPassword").style.borderColor = "red";
      v = false;
    }
    let t = document.getElementById("terms").checked;
    if (!t) {
      eList.push("Accept the terms and conditions.");
      v = false;
    }
    if (!v) {
      m.textContent = "❌ Fix these errors:\n" + eList.join("\n");
    } else {
      m.style.color = "green";
      m.textContent = "✅ Registration successful!";
      f.reset();
    }
  });
});
