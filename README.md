

# 🌌 NeonCorp CTF 🌃

Dive into the neon-lit underworld of **NeonCorp CTF** — a Capture The Flag (CTF) challenge that tests your web enumeration and hacking skills across three cryptic levels. Infiltrate NeonCorp’s unethical AI experiments using a terminal-style neon interface powered by **Typed.js**, and reach the dazzling `/victory/` page. No distractions, no fluff — just pure cyberpunk vibes. 🚀

---

## 🔍 What is DIRB?

**DIRB** (Domain Internet Relay Buster) is a web content scanner that brute-forces directories and files on a web server using wordlists. It’s ideal for:

- 🗂️ Web Enumeration: Find hidden directories/files (e.g., backups).
- 🕵️‍♂️ CTF Challenges: Locate flags or secret endpoints.
- 🔐 Pentesting: Reveal exposed server content.

---

## 🔎 What is dirsearch?

**dirsearch** is a Python-based web path scanner, more advanced than DIRB, offering:

- 🔁 Recursive Scanning: Explore nested paths.
- 🎯 Extension Filtering: Target specific file types.
- 🐢 Delay Options: Bypass rate-limiting.

Perfect for tough CTFs or real-world security assessments.

---

## 🛠️ Installation

### DIRB

```bash
sudo apt update
sudo apt install dirb -y
dirb  # To verify
```

### dirsearch

```bash
sudo apt update
sudo apt install python3-pip -y
pip3 install dirsearch

# Verify
python3 /usr/local/bin/dirsearch.py --version
```

> Note: If `dirsearch.py` isn’t in your PATH, use full path like `/usr/local/bin/dirsearch.py`.

---

## ⚙️ Common Commands

### DIRB

```bash
dirb http://target.com /usr/share/dirb/wordlists/common.txt
dirb http://target.com -X .txt,.php
dirb http://target.com -t
```

### dirsearch

```bash
python3 dirsearch.py -u http://target.com
python3 dirsearch.py -u http://target.com -r
python3 dirsearch.py -u http://target.com -e txt,php
python3 dirsearch.py -u http://target.com --delay=1
```

---

## 🎮 Levels Overview & Hints

| Level   | Task                                          | Hint                                                                 |
|---------|-----------------------------------------------|----------------------------------------------------------------------|
| Level 1 | Find a forgotten storage area                 | Shadows of routine operations linger in the neon haze.              |
| Level 2 | Discover a hidden admin control hub           | A path twisted through digital bureaucracy, versioned and veiled.  |
| Level 3 | Breach the AI vault and uncover final secrets | A unique imprint hides in the static. Patience will reveal it.      |

---

## 🕹️ How to Play

### 📋 Prerequisites

#### Docker & Docker Compose

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
# Log out and back in after this

docker --version

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

#### Other Tools

```bash
sudo apt install git -y
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

### 🚀 Setup

```bash
cd ~
git clone https://github.com/Shamitha-2330/neoncorp-ctf.git
cd neoncorp-ctf
docker-compose up --build
```

**Access:** [http://localhost:8080](http://localhost:8080)  
**Stop the CTF:** `docker-compose down`

---

### 🎯 Gameplay

- Start at the homepage: `/`
- Use **DIRB** or **dirsearch** to find hidden files/directories.
- Decode flag files (hint: try Base64 decoding).
- Submit your flag at `/level1/`, `/level2/`, and `/level3/`.
- Upon Level 3 success, get redirected to `/victory/`.

---

## 📂 Project Structure

```
🌌 NeonCorp CTF
├── Dockerfile
├── docker-compose.yml
├── html
│   ├── .htaccess
│   ├── assets/
│   │   ├── images/
│   │   ├── script.js
│   │   └── styles.css
│   ├── index.html
│   ├── level1/
│   │   ├── backup/
│   │   │   └── flag.txt
│   │   └── index.html
│   ├── level2/
│   │   ├── index.html
│   │   └── portal/v2/admin/flag.txt
│   ├── level3/
│   │   ├── .htaccess
│   │   ├── index.html
│   │   └── vault/key_98765/flag.key
│   └── victory.html
├── LICENSE
└── README.md
```

---

## 💻 Tech Stack

- **Frontend:** HTML, Tailwind CSS, Typed.js, neon-themed custom CSS.
- **Backend:** Apache HTTPD (mod_rewrite, mod_ratelimit).
- **Deployment:** Docker & Docker Compose.
- **Tools:** DIRB, dirsearch, Base64.

---

## 🧠 Learning Outcomes

By completing this CTF, you’ll gain hands-on experience in:

- 🔍 Web Enumeration & Reconnaissance.
- 🧠 CTF Techniques: Decoding, hidden file discovery.
- 🛡️ Cybersecurity Fundamentals: Misconfigurations, brute-force protection.
- 🐳 Docker: Building and deploying containerized environments.
- 🔧 Real-world Tools: Mastering DIRB and dirsearch.

---

## 📏 Rules

- 🔒 Use only **DIRB** or **dirsearch** for enumeration.
- 🚫 Don’t brute-force flag submission forms.
- 📝 Share write-ups to help others learn!

---

## 🏆 Goal

Expose NeonCorp’s secrets and uncover their unethical AI practices. Submit all three flags and earn your place among the legends of the cyberpunk underworld.

---
