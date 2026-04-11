const { execSync } = require('child_process');

// 💡 שים לב: ודא שזוהי הכתובת הנכונה של המאגר שלך בגיטהאב!
const REPO_URL = 'https://github.com/LiranOG/Fractal-Cosmopsychism-Theory.git';

function runCommand(command) {
    try {
        console.log(`\n⏳ Running: ${command}`);
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`\n❌ Error executing command: ${command}`);
        process.exit(1);
    }
}

console.log("🚀 Starting GitHub update process via Node.js...\n");

// 1. אתחול הגיט במידה ולא קיים
try {
    execSync('git status', { stdio: 'ignore' });
} catch (e) {
    console.log("📦 Initializing new git repository...");
    runCommand('git init');
    runCommand(`git remote add origin ${REPO_URL}`);
}

// 2. הוספת כל הקבצים שעודכנו, כולל המחיקות שעשינו
runCommand('git add -A');

// 3. יצירת שמירה (קוממיט) עם הודעה מסודרת
const commitMessage = "feat: complete removal of Granite engine and references refactor";
runCommand(`git commit -m "${commitMessage}"`);

// 4. דחיפת הקבצים לשרת הגיטהאב (אפשר לשנות מ-main ל-master אם צריך)
runCommand('git push -u origin main --force');

console.log("\n✅ Successfully updated the repository on GitHub!");
