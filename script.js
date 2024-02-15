document.getElementById('calculate').addEventListener('click', () => {

    const favorableCases = document.getElementById('favorableCases').value
    const cases = document.getElementById('cases').value
    const resultHtml = document.getElementById('result')

    let result
    
    if (!isNaN(favorableCases) && !isNaN(cases)){
        if (
            favorableCases > cases ||
            isNaN(favorableCases) && isNaN(cases) ||
            isNaN(favorableCases) && !isNaN(cases) ||
            !isNaN(favorableCases) && isNaN(cases)
        ){
            resultHtml.innerHTML = 'Unmet execution requirements.'
        }
        else {
            result = ((favorableCases / cases) * 100)
            result = result.toFixed(1)
            resultHtml.innerHTML = result
        }
    }
})