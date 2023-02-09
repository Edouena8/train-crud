const BASE_URL = 'http://localhost:3000';

const newBook = {
    "title": "Тестовая книга по CSS",
    "author": "Я",
    "genres": [
        "csS"
    ],
    "rating": 9,
}


function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    }

    fetch(`${BASE_URL}/books`, options)
    .then(resp => resp.json());
};

// addBook(newBook)
// .then(renderBook); 

// function renderBook() {
//     console.log(book);
// }