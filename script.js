const button = document.getElementById('disp');
const image = document.getElementById('image');
    fetch('https://dog.ceo/api/breeds/image/random') // APIのURL
    .then(response => {
        return response.json();
    })
    .then(myJson => {
        // imgタグに取得したURL画像を入れる
        image.src = myJson['message'];
        // 取得したURLをスラッシュ記号で分割し、犬種を表した要素を取得する
        const breed = myJson['message'].split('/')[4];
        type.innerText = breed;
    });