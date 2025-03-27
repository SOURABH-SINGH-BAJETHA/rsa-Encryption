

# 🔐 RSA Encryption/Decryption Tool

A web-based tool that demonstrates **RSA encryption and decryption** in the browser. This project includes key generation, message encryption, and decryption functionality with a clean, responsive interface featuring light/dark mode.

> ⚠️ **For Educational Purposes Only**  
> This tool uses very small prime numbers (50-100 bit range) to make the process fast and understandable. It is **not secure** for real-world use.

---

## 🚀 Features

- ✅ **RSA Key Generation** — Generates public/private key pairs
- ✅ **Message Encryption** — Encrypts plaintext using the RSA public key
- ✅ **Message Decryption** — Decrypts ciphertext using the RSA private key
- ✅ **Dark/Light Mode** — Toggleable UI theme with local storage persistence
- ✅ **Responsive Design** — Works smoothly on desktop & mobile devices

---

## 🧩 Technical Implementation

### Core Algorithms
- **Prime number generation** *(simple method for demo; Miller-Rabin recommended for production)*
- **Modular exponentiation**
- **Extended Euclidean Algorithm** for modular inverse
- **ASCII-based text conversion**

### Security Note
This implementation is **not suitable for real cryptographic use.**  
Real-world RSA requires:
- **2048+ bit keys**
- Proper padding (OAEP, PKCS#1 v1.5, etc.)
- Well-tested libraries like **WebCrypto API** or **OpenSSL**

---

## 📂 Project Structure

```
/ 
├── index.html        # Main application interface
├── script.js         # RSA logic & UI interactions
├── style.css         # Styling and dark mode
└── README.md         # Project information
```

---

## ✨ How to Use

1. **Generate Keys**
   - Click **Generate Keys** to create a new RSA key pair.
   - Public `(e, n)` and Private `(d, n)` keys will be displayed.

2. **Encrypt a Message**
   - Enter plaintext in the **Encrypt a Message** field.
   - Click **Encrypt** to generate the ciphertext.

3. **Decrypt a Message**
   - Paste the ciphertext (space-separated numbers) in the **Decrypt** field.
   - Click **Decrypt** to reveal the original message.

4. **Toggle Theme**
   - Use the ☀️/🌙 button to switch between light and dark modes.

---

## 🛠️ Development

**Prerequisites**
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No server required — Runs entirely **client-side**

---

## 🌱 Potential Enhancements
- Implement RSA padding (**OAEP**)  
- Add **file encryption/decryption**
- Include **key import/export functionality**
- Upgrade to **WebCrypto API** for real-world security

---

## 📜 License

**MIT License** — Free for personal and educational use.

**Note:**  
For actual cryptographic applications, always use vetted libraries and follow best security practices. This demo is simplified for learning purposes only.

---

**Project Screenshot**  
*Add actual screenshot here after uploading.*

---

If you'd like, I can also help you package this into a **ready-to-upload GitHub repo with proper badges & styling**.  
Shall I?