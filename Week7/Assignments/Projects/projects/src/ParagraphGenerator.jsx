import React, { useState } from 'react';

function ParagraphGenerator() {
    const [wordCount, setWordCount] = useState(0);
    const [paragraph, setParagraph] = useState('');

    // Array of words to use in the paragraph
    const wordsArray = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed",
        "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna",
        "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation",
        "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat"
    ];

    // Function to generate the paragraph
    const generateParagraph = (count) => {
        let paragraph = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * wordsArray.length);
            paragraph.push(wordsArray[randomIndex]);
        }
        return paragraph.join(" ") + ".";
    };

    // Handle click event to generate and set the paragraph
    const handleGenerate = () => {
        const generatedParagraph = generateParagraph(wordCount);
        setParagraph(generatedParagraph);
    };

    return (
        <div>
            <h2>Paragraph Generator</h2>
            <div>
                <label>
                    Number of words:
                    <input
                        type="number"

                        onChange={(e) => setWordCount(e.target.value)}
                    />
                </label>
                <button onClick={handleGenerate}>Generate Paragraph</button>
            </div>
            <div>
                <p>{paragraph}</p>
            </div>
        </div>
    );
}

export default ParagraphGenerator;
