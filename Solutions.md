# NeonCorp CTF Solutions

> Step-by-step walkthrough for all three levels of the NeonCorp CTF. This guide helps college students and aspiring cybersecurity enthusiasts master web enumeration, decode hidden flags, and experience neon-drenched hacking glory.

---

## 📜 Introduction

This CTF immerses players in a cyberpunk narrative while teaching practical web enumeration skills using tools like **DIRB** and **dirsearch**. You’ll deploy it locally via Docker, solve three levels, and reach a neon-lit `/victory/` page by uncovering Base64-encoded secrets.

---

## 🛠️ Prerequisites

Ensure you have the following tools and environment set up:

### Docker & Docker Compose

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
# Log out and log back in

# Verify installation
docker --version
```

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### DIRB

```bash
sudo apt install dirb -y
dirb
```

### dirsearch

```bash
sudo apt install python3-pip -y
pip3 install dirsearch
python3 /usr/local/bin/dirsearch.py --version
```

### Clone the CTF

```bash
cd ~/ctf-projects
git clone https://github.com/Shamitha-2330/neoncorp-ctf.git
cd neoncorp-ctf
```

### Launch the CTF

```bash
docker-compose up --build
```

> Access the challenge at: `http://localhost:8080`

---

## 🎮 Level 1: The Outer Firewall

### 🎯 Objective

Locate a forgotten storage area to uncover the first flag.

**💡 Hint:** *Shadows of routine operations linger in the neon haze, unseen by the careless.*

---

### 🔍 Enumeration

```bash
# Using DIRB
dirb http://localhost:8080/level1 /usr/share/dirb/wordlists/common.txt

# Or using dirsearch
python3 /usr/local/bin/dirsearch.py -u http://localhost:8080/level1 -e txt
```

**Finds:** `/level1/backup/`

---

### 🏁 Flag Retrieval

```bash
curl http://localhost:8080/level1/backup/flag.txt
```

**Output (Base64):**

```
ZmxhZzE6IGF1dGhvcml6YXRpb25fY29kZToxMjM0
```

**Decode:**

```bash
echo "ZmxhZzE6IGF1dGhvcml6YXRpb25fY29kZToxMjM0" | base64 -d
```

**Result:**

```
flag1: authorization_code:1234
```

---

### ✅ Submit

Visit `http://localhost:8080/level1/`, enter:

```
authorization_code:1234
```

Redirects to: `/level2/`

---

## 🎮 Level 2: The Admin Portal

### 🎯 Objective

Find a deeply buried admin panel to retrieve the second flag.

**💡 Hint:** *The path twists through layers of digital bureaucracy, versioned like a fading hologram.*

---

### 🔍 Enumeration

```bash
# Using dirsearch recursively
python3 /usr/local/bin/dirsearch.py -u http://localhost:8080/level2 -r -e txt

# OR with DIRB (recursive)
dirb http://localhost:8080/level2 /usr/share/dirb/wordlists/common.txt -r
```

**Finds:**

```
/level2/portal/v2/admin/flag.txt
```

---

### 🏁 Flag Retrieval

```bash
curl http://localhost:8080/level2/portal/v2/admin/flag.txt
```

**Output (Base64):**

```
ZmxhZzI6IHByb2plY3RfYWlfZGF0YV9pZDp4eXo=
```

**Decode:**

```bash
echo "ZmxhZzI6IHByb2plY3RfYWlfZGF0YV9pZDp4eXo=" | base64 -d
```

**Result:**

```
flag2: project_ai_data_id:xyz
```

---

### ✅ Submit

Visit `http://localhost:8080/level2/`, enter:

```
project_ai_data_id:xyz
```

Redirects to: `/level3/`

---

## 🎮 Level 3: The AI Vault

### 🎯 Objective

Breach the AI vault and retrieve the final flag.

**💡 Hint:** *Patience unlocks the gate; a unique imprint hides in the static of the void.*

---

### 🔍 Enumeration (with Delay)

```bash
python3 /usr/local/bin/dirsearch.py -u http://localhost:8080/level3 -r -e key --delay=1

# Optional DIRB approach:
dirb http://localhost:8080/level3 /usr/share/dirb/wordlists/common.txt -X .key
```

**Finds:**

```
/level3/vault/key_98765/flag.key
```

---

### 🏁 Flag Retrieval

```bash
curl http://localhost:8080/level3/vault/key_98765/flag.key
```

**Output (Base64):**

```
ZmxhZzM6IG5lb25jb3JwX2F1ZGl0X2xvZ3M6c2VjcmV0
```

**Decode:**

```bash
echo "ZmxhZzM6IG5lb25jb3JwX2F1ZGl0X2xvZ3M6c2VjcmV0" | base64 -d
```

**Result:**

```
flag3: neoncorp_audit_logs:secret
```

---

### ✅ Submit

Visit `http://localhost:8080/level3/`, enter:

```
neoncorp_audit_logs:secret
```

Redirects to: `/victory/` 🎉

---

## ⚠️ Troubleshooting

### Port Conflicts

```bash
sudo netstat -tuln | grep 8080
```

Free or change the port if already in use.

### Docker Volume Mounts

```bash
docker inspect <container_id> | grep -A 5 Mounts
```

Ensure `./html` is correctly mapped to `/usr/local/apache2/htdocs`.

---

## 📚 Tips for CTF Success

* **Wordlists:** Use `/usr/share/dirb/wordlists/common.txt` or customize for deep scanning.
* **Encoding:** All flags are Base64 — decode with `base64 -d`.
* **Rate-Limiting:** Add `--delay=1` in dirsearch to avoid 429 errors.
* **Write-Ups:** Share your solutions to help others and contribute to the community!

---


