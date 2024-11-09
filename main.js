function titleClose(button){
    // const $constainer = button.parentElement;
    const $constainer = button.closest('.container');
    const $titleClose = $constainer.querySelector('.title');
    if($titleClose.textContent === 'hello 1'){
        $titleClose.style.visibility = 'hidden';
    } else if($titleClose.textContent === 'hello 2'){
        $titleClose.style.display = 'none';  
    }
}

function titleShow(button) {
    // const $constainer = button.parentElement;
    const $constainer = button.closest('.container');
    const $titleShow = $constainer.querySelector('.title');

    if($titleShow.textContent === 'hello 1'){
        $titleShow.style.visibility = 'visible';
    } else if ($titleShow.textContent === 'hello 2'){
        $titleShow.style.display = 'flex';
    }
    
}

function closeTitle(){
    const  btnClose = document.querySelectorAll('.btn-close');
    const btnShow = document.querySelectorAll('.btn-show');

    btnClose.forEach(btn => {
        btn.addEventListener('click', function() {
            titleClose(btn)
        });
    });
    btnShow.forEach(function (btn) {
        btn.addEventListener('click', function() {
            titleShow(btn)
        });
    });
}

closeTitle();