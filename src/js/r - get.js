const BASE_URL = 'http://localhost:3000';

function fecthBooks() {
    fetch(`${BASE_URL}/books`)
    .then(resp => resp.json());
}

function fecthBookById(bookId) {
    fetch(`${BASE_URL}/books/${bookId}`)
    .then(resp => resp.json());
}

fecthBooks();
fecthBookById(2);