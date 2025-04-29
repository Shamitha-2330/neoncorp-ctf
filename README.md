
  
  


🌌 NeonCorp CTF 🌃

A cyberpunk-themed Capture The Flag challenge for college students


📜 Short Description
Dive into the neon-lit underworld of NeonCorp CTF! 🕶️ Designed for college students, this Capture The Flag (CTF) challenges you to infiltrate NeonCorp’s servers and expose their unethical AI experiments across three levels of web enumeration. With a terminal-style interface glowing in neon pink, green, and cyan, powered by Typed.js typing effects, the CTF culminates in a dazzling victory page. No glitch animations or background images—just pure cyberpunk vibes. 🚀

🔍 What is DIRB?
DIRB (Domain Internet Relay Buster) is a web content scanner that brute-forces directories and files on a web server using wordlists. It’s your go-to tool for uncovering hidden or unprotected resources in the digital shadows.

🔎 What is dirsearch?
dirsearch is a Python-based powerhouse for brute-forcing web directories and files. More advanced than DIRB, it offers recursive scanning, extension filtering, and delay options, perfect for cracking complex or rate-limited servers.

🛠️ Why It Is Used



Tool
Purpose



DIRB
- Web Enumeration: Finds hidden directories/files (e.g., backups).



- CTF Challenges: Locates flags or endpoints in web challenges.



- Penetration Testing: Spots misconfigured server content.


dirsearch
- Advanced Enumeration: Navigates nested resources with precision.



- Rate-Limit Evasion: Bypasses restrictions with delays.



- CTF/Security Testing: Uncovers APIs, files, or flags in tough webs.



📥 How to Install

DIRB

On Ubuntu or Kali Linux:
sudo apt update
sudo apt install dirb -y

Verify:
dirb




dirsearch

On Ubuntu or Kali Linux:
sudo apt update
sudo apt install python3-pip -y
pip3 install dirsearch

Verify:
python3 /usr/local/bin/dirsearch.py --version

Note: If dirsearch isn’t in your PATH, use /usr/local/bin/dirsearch.py.



⚙️ Common Commands

DIRB Commands


Basic Scan: dirb http://target.com /usr/share/dirb/wordlists/common.txtScans target.com with a common wordlist.
Extension Scan: dirb http://target.com -X .txt,.phpTargets .txt or .php files.
Faster Scan: dirb http://target.com -tUses multiple threads (use cautiously).


dirsearch Commands


Basic Scan: python3 dirsearch.py -u http://target.comScans with default settings.
Recursive Scan: python3 dirsearch.py -u http://target.com -rExplores nested directories.
Extension Filter: python3 dirsearch.py -u http://target.com -e txt,phpTargets specific file types.
Rate-Limit Delay: python3 dirsearch.py -u http://target.com --delay=1Adds a 1-second delay.


🎮 Levels Overview with Hint
Crack three levels of NeonCorp’s defenses, each hiding a flag to decode and submit. 🌌



Level
Task
Hint



Level 1: The Outer Firewall
Locate a forgotten storage area where NeonCorp stashes old data.
Shadows of routine operations linger in the neon haze, unseen by the careless.


Level 2: The Admin Portal
Find a deeply buried control hub for NeonCorp’s operations.
The path twists through layers of digital bureaucracy, versioned like a fading hologram.


Level 3: The AI Vault
Breach a fortified vault protecting NeonCorp’s core secrets.
Patience unlocks the gate; a unique imprint hides in the static of the void.



🕹️ How to Play or Instructions to Solve the Lab
Prerequisites

Docker & Docker Compose:sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER


Log out and back in, verify: docker --version.
Install Docker Compose:sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version




DIRB & dirsearch: Install as above.
Git:sudo apt install git -y
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"



Setup

Clone the repo:cd ~
git clone https://github.com/Shamitha-2330/neoncorp-ctf.git
cd neoncorp-ctf

Replace your-username with your GitHub username.
Run the CTF:docker-compose up --build

Access: http://localhost:8080.
Stop:docker-compose down



Playing the CTF

Start: Visit http://localhost:8080 for the welcome page.
Navigate Levels:
Use web enumeration tools to find hidden flag files.
Decode flags (explore common CTF encoding methods).
Submit decoded flags at /level1/, /level2/, /level3/.
Level 3 completion redirects to /victory/ for a neon victory screen.




📂 Project Structure
🌌 NeonCorp CTF
├── 📄 Dockerfile
├── 📄 docker-compose.yml
├── 📁 html
│   ├── 📄 .htaccess
│   ├── 📁 assets
│   │   ├── 📁 images
│   │   ├── 📄 script.js
│   │   └── 📄 styles.css
│   ├── 📄 index.html
│   ├── 📁 level1
│   │   ├── 📁 backup
│   │   │   └── 📄 flag.txt
│   │   └── 📄 index.html
│   ├── 📁 level2
│   │   ├── 📄 index.html
│   │   └── 📁 portal
│   │       └── 📁 v2
│   │           └── 📁 admin
│   │               └── 📄 flag.txt
│   ├── 📁 level3
│   │   ├── 📄 .htaccess
│   │   ├── 📄 index.html
│   │   └── 📁 vault
│   │       └── 📁 key_98765
│   │           └── 📄 flag.key
│   └── 📄 victory.html
├── 📄 LICENSE
└── 📄 README.md


💻 Tech Stack

Frontend: HTML, Tailwind CSS, Typed.js (neon typing effects), custom CSS (cyberpunk glow).
Backend: Apache (httpd:2.4 Docker image) with mod_rewrite, mod_ratelimit.
Deployment: Docker, Docker Compose.
Tools: DIRB, dirsearch (enumeration), Base64 (flag encoding).


🎯 Goal
Expose NeonCorp’s AI secrets by conquering three levels of web enumeration. Find and decode hidden flags to reach the /victory/ page and become a legend in the cyberpunk underworld. 🏆

📏 Rules

🔒 Use only DIRB or dirsearch for enumeration.
🚫 No brute-forcing flag submission forms.
📝 Share write-ups to inspire the community.


📚 Learning Outcomes
By hacking through NeonCorp CTF, you’ll master:

🌐 Web Enumeration: Use DIRB/dirsearch to uncover hidden server content.
🏁 CTF Skills: Decode flags and tackle web challenges.
🔐 Cybersecurity: Learn about brute-forcing, rate-limiting, and misconfigurations.
🐳 Docker: Deploy apps with Docker and Docker Compose.
🧩 Problem-Solving: Navigate cryptic hints in a neon-soaked world.



 
