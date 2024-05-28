function calculateResult() {
    let answers = {
        introvert: 0,
        extrovert: 0,
        analytical: 0,
        creative: 0,
        thinking: 0,
        feeling: 0
    };

    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        const selected = question.querySelector('input[type="radio"]:checked');
        if (selected) {
            answers[selected.value]++;
        }
    });

    let personalityType = '';
    if (answers.introvert > answers.extrovert) {
        personalityType += 'Introvert, ';
    } else {
        personalityType += 'Extrovert, ';
    }

    if (answers.analytical > answers.creative) {
        personalityType += 'Analytical, ';
    } else {
        personalityType += 'Creative, ';
    }

    if (answers.thinking > answers.feeling) {
        personalityType += 'Thinking';
    } else {
        personalityType += 'Feeling';
    }

    document.getElementById('result').innerText = 'Your personality type is: ' + personalityType;
    document.getElementById('result').style.animation = 'fadeIn 1s ease-in-out';
}
