(() => {
    const $words = document.getElementById('words_length');

    const section1 = document.getElementsByClassName('section1');
    const section2 = document.getElementsByClassName('section2');

    const radio = document.getElementsByClassName('radio');

    const $question1 = document.getElementById('question1');
    const $question2 = document.getElementById('question2');
    
    const $txt = document.getElementById('txt');

    const radioOption = document.getElementsByName('entry.706799207');

    const normalStyle = '0 0 1px rgba(0,0,0,0.4)';
    const errorStyle = '0 0 7px rgba(255,0,0,0.7)';

    function transSection(disappear, appear) {
        [].forEach.call(disappear, item => item.style.display = 'none');
        [].forEach.call(appear, item => item.style.display = 'block');
    }
    

    $txt.addEventListener('input', () => {
        $words.textContent = $txt.value.length;
        if ($txt.value.length) {
            $question1.style.boxShadow = normalStyle;
        } else {
            $question1.style.boxShadow = errorStyle;
        }
    });

    radioOption.forEach(element => {
        element.addEventListener('click', () => {
            $question2.style.boxShadow = normalStyle;
        });        
    });

    document.getElementById('goto2').addEventListener('click', () => {
        if ($txt.value.length !== 0) {
            transSection(section1, section2);
        } else {
            alert('必須項目に未入力の箇所があります。');
            $question1.style.boxShadow = errorStyle;
        }
    });
    
    document.getElementById('goto1').addEventListener('click', () => {
        transSection(section2, section1);
    });
    
    document.customForm.addEventListener('submit', event => {
        let flag = [].find.call(radio, item => item.checked);
        if (!(flag && $txt.value.length)) {
            event.preventDefault();
            alert('必須項目に未入力の箇所があります。');
            if (!$txt.value.length) {
                $question1.style.boxShadow = errorStyle;
            }
            if (!flag) {
                $question2.style.boxShadow = errorStyle;
            }
        } else {
            if (!confirm('本当にこの内容で送信しますか？')) {
                event.preventDefault();
            }
        }
        
    });

})();