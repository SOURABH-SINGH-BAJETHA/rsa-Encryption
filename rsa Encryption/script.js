document.addEventListener("DOMContentLoaded", function () {
    // Check for dark mode preference in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      document.getElementById("themeToggle").textContent = "☀️ Light Mode";
    }
  
    // Theme toggle button
    document.getElementById("themeToggle").addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
  
      // Save preference in local storage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById("themeToggle").textContent = "☀️ Light Mode";
      } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById("themeToggle").textContent = "🌙 Dark Mode";
      }
    });
  });
  
  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Function to generate a random prime number
  function generatePrime(min, max) {
    let prime;
    do {
      prime = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (!isPrime(prime));
    return prime;
  }
  
  // Function to compute GCD
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  // Function to compute modular inverse
  function modInverse(a, m) {
    let m0 = m, y = 0, x = 1;
    if (m === 1) return 0;
    while (a > 1) {
      let q = Math.floor(a / m);
      let t = m;
      m = a % m;
      a = t;
      t = y;
      y = x - q * y;
      x = t;
    }
    if (x < 0) x += m0;
    return x;
  }
  
  // Modular exponentiation
  function modExp(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  }
  
  // Key generation
  let publicKey, privateKey, n;
  
  function generateKeys() {
    let p = generatePrime(50, 100);
    let q = generatePrime(50, 100);
    n = p * q;
    let phi = (p - 1) * (q - 1);
    publicKey = 3;
    while (gcd(publicKey, phi) !== 1) {
      publicKey++;
    }
    privateKey = modInverse(publicKey, phi);
  
    document.getElementById('e').textContent = `e = ${publicKey}`;
    document.getElementById('n').textContent = `n = ${n}`;
    document.getElementById('d').textContent = `d = ${privateKey}`;
    document.getElementById('nPrivate').textContent = `n = ${n}`;
  }
  