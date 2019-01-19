(function(){
    var state = {
        first: 0,
        second: 0
    }

    function updateLabel(labelElement, prefix, count){
        labelElement.innerText = prefix + ' ' + count;
    }

    var labelFirst = document.querySelector('#label-first');
    var firstButton = document.querySelector('#btn-first');

    var labelSecond = document.querySelector('#label-second');
    var secondButton = document.querySelector('#btn-second');

    firstButton.addEventListener('click', function(e){
        state.first = state.first + 1;
        updateLabel(labelFirst, 'First button:', state.first)
    })

    secondButton.addEventListener('click', function(e){
        state.second = state.second + 1;
        updateLabel(labelSecond, 'Second button:', state.second)
    });
})()


(function(){
    var state = {
        firstMinus: first,
        secondMinus: second
    }

    function updateLabel(labelElement, prefix, count){
        labelElement.innerText = prefix + ' ' + count;
    }

    var labelFirstMinus = document.querySelector('#label-firstMinus');
    var firstMinusButton = document.querySelector('#btn-firstMinus');

    var labelSecondMinus = document.querySelector('#label-secondMinus');
    var secondMinusButton = document.querySelector('#btn-secondMinus');

    firstMinusButton.addEventListener('click', function(e){
        state.firstMinus = state.first - 1;
        updateLabel(labelFirstMinus, 'First button:', state.firstMinus)
    })

    secondMinusButton.addEventListener('click', function(e){
        state.secondMinus = state.second - 1;
        updateLabel(labelSecondMinus, 'Second button:', state.secondMinus)
    });
})()