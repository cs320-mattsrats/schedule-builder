// Function to display limit word in UI, such as Card
export default function showLimitedWords(w: string, n: number): string {
        const word = w.split(' ');
        const limitedWords = word.slice(0, n).join(' ') + "...";
    return limitedWords;
}