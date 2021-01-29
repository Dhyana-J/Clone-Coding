(function(window, document){
    'use strict';

    // html의 .toggles와 같은 요소들을 담는 변수인 경우 $를 붙여준다.
    const $toggles = document.querySelectorAll('.toggle'); //NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click',function(){
        toggleElements();
    });

    window.addEventListener('resize',function(){
        if(window.innerWidth>1024){
            offElements();
        }
    })

    function toggleElements(){
        //NodeList는 유사배열이므로, 반복 불가하다. 그래서 반복할 수 있게끔 만들어줘야한다.
        [].forEach.call($toggles,function(toggle){
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles,function(toggle){
            toggle.classList.remove('on');
        });
    }


})(window,document)