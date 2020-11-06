(() => {

    const $words = document.getElementById("words_length");

    $words.textContent = 0;

    const section1 = document.getElementsByClassName('section1');
    const section2 = document.getElementsByClassName('section2');

    const radio = document.getElementsByClassName('radio');
    
    const $txt = document.getElementById("txt");
    

    $txt.addEventListener('input', () => {
        document.getElementById("words_length").textContent = $txt.value.length;
    });

    document.getElementById('goto2').addEventListener('click', () => {
        if ($txt.value.length !== 0) {
            [].forEach.call(section1,item => {
                item.style.display = 'none';
            });
            [].forEach.call(section2,item => {
                item.style.display = 'block';
            });
        } else {
            alert("必須項目です。何か入力してください。");
        }
    });
    
    document.getElementById('goto1').addEventListener('click', () => {
        [].forEach.call(section1,item => {
            item.style.display = 'block';
        });
        [].forEach.call(section2,item => {
            item.style.display = 'none';
        });
        
    });
    
    document.customForm.addEventListener('submit', event => {
        let flag = [].find.call(radio, item => item.checked);
        if (!flag) {
            event.preventDefault();
            alert("必須項目です。何か入力してください。");
        }
        
    });

})();