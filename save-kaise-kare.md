# 💾 Questions Save Kaise Karein - Complete Guide

## ❌ Problem: Questions Save Nahi Ho Rahe?

Agar questions add karne ke baad browser close karne par delete ho jate hain, toh yeh solutions follow karo:

---

## ✅ Solution 1: Backup System Use Karo (BEST)

### Step 1: Questions Add Karo
1. `admin.html` open karo
2. Apne sabhi 50 questions add karo

### Step 2: Backup Lo
1. Admin panel mein **"💾 Backup/Restore"** button click karo
2. **"Download Questions File"** button click karo
3. Ek file download hogi: `test-questions-backup.json`
4. Is file ko safe jagah save karo (Desktop, Google Drive, etc.)

### Step 3: Jab Chahiye Tab Restore Karo
1. `export-import.html` open karo
2. **"Choose File"** click karo
3. Apni saved file select karo
4. Questions automatically load ho jayenge!

---

## ✅ Solution 2: Browser Settings Check Karo

### Chrome:
1. Settings > Privacy and Security
2. Cookies and other site data
3. "Allow all cookies" select karo
4. "Clear cookies and site data when you close Chrome" - **OFF** karo

### Edge:
1. Settings > Cookies and site permissions
2. "Manage and delete cookies and site data"
3. "Delete browsing data on close" - **OFF** karo

### Firefox:
1. Settings > Privacy & Security
2. "Delete cookies and site data when Firefox is closed" - **UNCHECK** karo

---

## ✅ Solution 3: Same Browser Use Karo

**Important:** 
- Agar Chrome mein questions add kiye, toh Chrome mein hi test lo
- Edge mein add kiye, toh Edge mein test lo
- Har browser ka apna localStorage hota hai

---

## ✅ Solution 4: Incognito/Private Mode Use Mat Karo

- Normal browser window mein hi kaam karo
- Incognito mode mein data save nahi hota

---

## 🎯 Best Practice (Recommended):

### Ek Baar Setup:
1. `admin.html` mein 50 questions add karo
2. `export-import.html` se backup file download karo
3. Backup file ko safe jagah save karo

### Har Baar Test Ke Liye:
1. `export-import.html` open karo
2. Backup file import karo
3. Test start karo

---

## 📱 Quick Backup Method:

### Copy-Paste Method:
1. `export-import.html` open karo
2. **"Copy to Clipboard"** click karo
3. Notepad mein paste karo aur save karo
4. Jab chahiye, wapas copy karke **"Import Questions"** mein paste karo

---

## 🔧 Troubleshooting:

### Problem: "Koi questions nahi hain"
**Solution:** 
- Pehle admin.html mein questions add karo
- Phir backup lo

### Problem: "Invalid JSON"
**Solution:**
- Backup file ko edit mat karo
- Original file hi use karo

### Problem: Questions test mein nahi dikh rahe
**Solution:**
- Same browser use karo (Chrome to Chrome, Edge to Edge)
- Backup file se restore karo
- Browser refresh karo (F5)

---

## 💡 Pro Tips:

1. **Har 10 questions ke baad backup lo** - Agar kuch galat ho jaye toh data na khoe

2. **Multiple backups rakho** - Different dates ke saath save karo
   - `questions-backup-09-feb.json`
   - `questions-backup-10-feb.json`

3. **Google Drive/Dropbox mein save karo** - Kabhi bhi access kar sakte ho

4. **Test se pehle ek baar check karo** - Admin panel mein dekho ki sabhi questions hain ya nahi

---

## 📞 Emergency Solution:

Agar test ke time questions nahi dikh rahe:

1. Turant `export-import.html` open karo
2. Backup file import karo
3. 2 minutes mein sab theek ho jayega!

---

## ✅ Final Checklist:

- [ ] Questions add kiye
- [ ] Backup file download ki
- [ ] Backup file safe jagah save ki
- [ ] Test browser mein check kiya
- [ ] Students ko link share kiya

Yeh sab ho gaya? Perfect! Ab tension free test lo! 🎉
