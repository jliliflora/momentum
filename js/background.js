const images = [
    "https://images.unsplash.com/photo-1679673177212-8a011a4f86f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80"
    ,"https://images.unsplash.com/photo-1679351511910-94bc52d96c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
    ,"https://images.unsplash.com/photo-1677432658720-3d84f9d657b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;
console.log(bgImage);
console.log(bgImage.src);

document.body.appendChild(bgImage);