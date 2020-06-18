//
class APIcall {
    constructor(a,b,c,r){
        this.a=a;
        this.b=b;
        this.c=c;
        this.r=r;
    }
    
    qery(){
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
               let api_response = JSON.parse(this.responseText);
               response= api_response;
                // console.log(this.responseText);
                if (condition) {
                    
                }
            }
        });
        xhr.open("GET", `https://www.orthophedic.com/wp-json/wp/v2/posts?page=${this.a}&status=${this.b}&${this.c}&_envelope`);
        xhr.setRequestHeader("Authorization", "Basic WW8zMDV1eUM2SlpJV0dvUHNjOmc2N3Ryd3ZnMUVHejlpT0JOTExNR0hsOA==");
        xhr.send();
    }
    
    create(){
        console.log('r',this.r);
    }
}
let response=[];
let pagina = 1;
let status = 'trash';
let embed = '_embed';
const wordpress = new APIcall(pagina, status, embed, response);

const btn = document.querySelector('.bton_crear');
btn.addEventListener('click', function(){
    wpQ.call();
});


class WPquery {
    constructor(){
        this.method = 'GET';
        this.headers = { "Authorization": "Basic WW8zMDV1eUM2SlpJV0dvUHNjOmc2N3Ryd3ZnMUVHejlpT0JOTExNR0hsOA==", "Cookie": "__cfduid=d6c6aa321c8c9e42e76b1d886a246825d1556976373" };
        this.redirect = 'follow';
    }

    call(){
        let requestOptions = {
            method: this.method,
            headers: this.headers,
            redirect: this.redirect
        };

        fetch(`https://www.orthophedic.com/wp-json/wp/v2/${this.a}?page=${this.b}&per_page=${this.c}&status=trash&_embed&_envelope`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
} // class

let postType='posts', page=1, perPage=5;
const wpQ = new WPquery(postType, page, perPage);


// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Basic WW8zMDV1eUM2SlpJV0dvUHNjOmc2N3Ryd3ZnMUVHejlpT0JOTExNR0hsOA==");
// myHeaders.append("Cookie", "__cfduid=d6c6aa321c8c9e42e76b1d886a246825d1556976373");

// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
// };

// fetch("https://www.orthophedic.com/wp-json/wp/v2/posts?page=1&status=trash&_embed&_envelope", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));