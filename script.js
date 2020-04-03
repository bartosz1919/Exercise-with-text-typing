const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";


const div = document.createElement('div');

const body = document.querySelector('body').appendChild(div);
const time = 40;
let i = 0;


const addLetter = () => {

    const span = document.createElement('span');
    span.textContent = text[i];

    if (i % 2 === 0) {
        span.style.color = "black";

    } else {
        span.style.color = "red";

    }
    div.appendChild(span);


    console.log(i);

    i++;
    console.log(i);

    if (i === text.length) {

        clearInterval(textTyping);
    }


}





const textTyping = setInterval(addLetter, time);