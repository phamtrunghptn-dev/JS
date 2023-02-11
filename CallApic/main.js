const btnpost = document.getElementById("btn-post");
const btnphoto = document.getElementById("btn-photo");
const btnalbum = document.getElementById("btn-album");

const btns = document.querySelectorAll(".btn");


const title = document.getElementById("title");
btnpost.addEventListener("click", function () {
    CallApi('posts')
    btnphoto.classList.remove("active");
    btnalbum.classList.remove("active");
    btnpost.classList.add("active");
})
btnalbum.addEventListener("click", function () {
    CallApi('photos')
    btnphoto.classList.remove("active");
    btnalbum.classList.add("active");
    btnpost.classList.remove("active");
})
btnphoto.addEventListener("click", function () {
    CallApi('albums')
    btnphoto.classList.add("active");
    btnalbum.classList.remove("active");
    btnpost.classList.remove("active");
})

async function CallApi(title) {
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/${title}`)
        render(res.data);
    } catch (error) {
        console.log(error);
    }
}
function render(data) {
    const render = data.map(e =>
        `<li>${e.title}</li>`
    )
    title.innerHTML = render.join('');
}



