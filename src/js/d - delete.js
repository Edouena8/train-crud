const BASE_URL = 'http://localhost:3000';

function removeBook(bookId) {
    const options = {
        method: 'DELETE',
    }

    return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(resp => resp.json());
}

removeBook(7)
.catch(err => console.log(err ));