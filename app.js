const Generate = document.getElementById('btn');
const Value = document.getElementById('secret');
const CopyBtn = document.getElementById('copy-btn');

function GetSecretKey(){
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    const secret = Array.from(array, b => b.toString(16).padStart(2, '0')).join('');
    console.log(secret);
    return secret;
}

Generate.addEventListener('click',() => {
    const secretKey = GetSecretKey();
    Value.innerHTML = secretKey;
})

CopyBtn.addEventListener('click', () => {
    const secret = Value.innerText;
    if (secret) {
        navigator.clipboard.writeText(secret).then(() => {
            CopyBtn.textContent = 'Copied!';
            setTimeout(() => {
                CopyBtn.textContent = 'Copy to Clipboard';
            }, 1200);
        });
    }
});

