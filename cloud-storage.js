// GitHub-based Cloud Storage System
// This allows data to be shared across all devices

const GITHUB_CONFIG = {
    owner: 'vijendrapratapyadav564-bit',
    repo: 'QUE-ANS',
    branch: 'main',
    questionsFile: 'data/questions.json',
    resultsFile: 'data/results.json'
};

class CloudStorage {
    constructor() {
        this.baseUrl = `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}`;
        this.fallbackToLocal = true;
    }

    // Load questions from GitHub
    async loadQuestions() {
        try {
            const response = await fetch(`${this.baseUrl}/${GITHUB_CONFIG.questionsFile}?t=${Date.now()}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Questions loaded from cloud:', data.length);
                // Also save to localStorage as backup
                localStorage.setItem('testQuestions', JSON.stringify(data));
                return data;
            }
        } catch (error) {
            console.log('Cloud load failed, using localStorage:', error);
        }
        
        // Fallback to localStorage
        const local = localStorage.getItem('testQuestions');
        return local ? JSON.parse(local) : [];
    }

    // Load results from GitHub
    async loadResults() {
        try {
            const response = await fetch(`${this.baseUrl}/${GITHUB_CONFIG.resultsFile}?t=${Date.now()}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Results loaded from cloud:', data.length);
                // Also save to localStorage as backup
                localStorage.setItem('testResults', JSON.stringify(data));
                return data;
            }
        } catch (error) {
            console.log('Cloud load failed, using localStorage:', error);
        }
        
        // Fallback to localStorage
        const local = localStorage.getItem('testResults');
        return local ? JSON.parse(local) : [];
    }

    // Save to localStorage (GitHub update will be manual via export)
    saveQuestions(questions) {
        localStorage.setItem('testQuestions', JSON.stringify(questions));
        console.log('Questions saved to localStorage');
        return true;
    }

    saveResults(results) {
        localStorage.setItem('testResults', JSON.stringify(results));
        console.log('Results saved to localStorage');
        return true;
    }

    // Export data for manual GitHub update
    exportForGitHub(data, filename) {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Global instance
const cloudStorage = new CloudStorage();
