// esversion: 6

const wpApi = async function (url){
    let myHeaders = new Headers();
    // myHeaders.append("X-WP-NONCE", jeanData.nonce);
    myHeaders.append("Authorization", "Basic amVhbjpkbXdsV3lqOEwzMlA1MVIydXhqdlJlTm8=");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let result = await fetch(url, requestOptions);
    let response = await result.json();
    return response;
}

function createHTML(data){
    let content ='';
    for (const i of data){
        content += `<p>${i.title.rendered}</p>`;
        console.log(content);
        $s('.async_await').innerHTML=content;
    }
}

/////////// llamada
document.querySelector('.submitBtn').addEventListener('click', (event) => {
    event.preventDefault();
    wpApi("https://www.sombra.cf/wp-json/wp/v2/posts?per_page=5&page=1")
        .then(data => createHTML(data))
        .catch(error => console.log(error));
});



///////////////// usando CLass
/*
class WPquery {
    constructor(){
        this.page= page;
        this.perpage= perpage;
    }
    getData(){

    }
}