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
  
  // Function to convert a string to an array of ASCII values
  function stringToAsciiArray(str) {
    return str.split("").map(char => char.charCodeAt(0));
  }
  
  // Function to convert an ASCII array back to a string
  function asciiArrayToString(arr) {
    return arr.map(num => String.fromCharCode(num)).join("");
  }
  
  // Encrypt message (string to encrypted numbers)
  function encryptMessage() {
    let message = document.getElementById('message').value;
  
    // Check if the message is empty
    if (!message.trim()) {
      alert("Please enter a valid message.");
      return;
    }
  
    let asciiValues = stringToAsciiArray(message);
  
    // Encrypt each character (convert each number to encrypted value)
    let encryptedValues = asciiValues.map(num => modExp(num, publicKey, n));
  
    // Display the encrypted message
    document.getElementById('encryptedMessage').textContent = encryptedValues.join(" ");
  }
  
  // Decrypt message (encrypted numbers back to string)
  function decryptMessage() {
    let cipherText = document.getElementById('cipherText').value;
  
    // Check if the cipher text is empty
    if (!cipherText.trim()) {
      alert("Please enter a valid encrypted message.");
      return;
    }
  
    let encryptedNumbers = cipherText.split(" ").map(Number);
  
    // Decrypt each encrypted number to get the ASCII values
    let decryptedAsciiValues = encryptedNumbers.map(num => modExp(num, privateKey, n));
  
    // Convert ASCII values back to a string
    let decryptedMessage = asciiArrayToString(decryptedAsciiValues);
  
    // Display the decrypted message
    document.getElementById('decryptedMessage').textContent = decryptedMessage;
  }
  