document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let maxNumber = document.getElementById("max-number").value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.round(randomNumber);
        if(randomNumber == 0){
            let i = 1;
            return i++
        }
        document.getElementById('result-value').innerText = randomNumber;
        document.querySelector('.result').style.display = 'block';
    })
});