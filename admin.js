 // Initialize Supabase client
 const supUrl = 'https://qpfmuqdhsoyhremaxjik.supabase.co'
const supKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwZm11cWRoc295aHJlbWF4amlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0Mzc1MDMsImV4cCI6MjA4MDAxMzUwM30.OcHj8FDHUuAwzOkPxWIqCmbmonjZl7TblRryylrKXP0'
 const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



 function adminLogin() {
    const username = document.getElementById("adminUser").value;
    const password = document.getElementById("adminPass").value;
    const email = document.getElementById("adminMail").value;

    // Simple admin authentication
    const ADMIN_USER = "admin";
    const ADMIN_MAIL = "admin@gmail.com";
    const ADMIN_PASS = "123456";  

    if (username === ADMIN_USER && email === ADMIN_MAIL && password === ADMIN_PASS) {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Invalid admin credentials!");
    }
  }


//  // List of allowed admin emails (or check from DB)
//  const ADMIN_EMAILS = ["admin@example.com"]; // Add your admin emails here

//  const loginBtn = document.getElementById("loginBtn");
//  loginBtn.addEventListener("click", async () => {
//    const email = document.getElementById("adminEmail").value.trim();
//    const password = document.getElementById("adminPassword").value;

//    if (!email || !password) {
//      alert("Please enter email and password.");
//      return;
//    }

//    if (!ADMIN_EMAILS.includes(email)) {
//      alert("Access denied: You are not an admin.");
//      return;
//    }

//    // Authenticate with Supabase
//    const { data, error } = await supabase.auth.signInWithPassword({
//      email,
//      password,
//    });

//    if (error) {
//      alert("Login failed: " + error.message);
//      return;
//    }

//    // Save admin session or flag
//    localStorage.setItem("isAdmin", "true");
//    localStorage.setItem("adminEmail", email);

//    // Redirect to admin dashboard
//    window.location.href = "admin-dashboard.html";
//  });