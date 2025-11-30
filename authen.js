import supabase from "./config.js"

// ------------------ SIGN UP ------------------
const signupBtn = document.getElementById('signupBtn')
signupBtn?.addEventListener('click', async () => {
  const email = document.getElementById('signupEmail').value
  const password = document.getElementById('signupPassword').value
  const name = document.getElementById('signupName').value
  const phone = document.getElementById('signupPhone').value

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { Name: name, phone: phone }
    }
  })

  if (error) {
    alert("Signup Failed: " + error.message)
  } else {
    alert("Signup Successful!")
    window.location = "index.html"
  }
})

// ------------------ LOGIN ------------------
const loginBtn = document.getElementById('loginBtn')
loginBtn?.addEventListener('click', async () => {
  const email = document.getElementById('loginEmail').value
  const password = document.getElementById('loginPassword').value

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    alert("Login Failed: " + error.message)
  } else {
    alert("Welcome!")
    window.location = "home.html"
  }
})

// ------------------ LOGOUT ------------------
const logoutBtn = document.getElementById('logout')
logoutBtn?.addEventListener('click', async () => {
  const { error } = await supabase.auth.signOut()
  if (!error) {
    alert("Logged out successfully")
    window.location = "index.html"
  }
})
