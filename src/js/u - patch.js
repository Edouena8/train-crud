const BASE_URL = 'http://localhost:3000';

const newVlue = {
    "title": "Большоя тестовая книга по CSS",
}


function updateBookByBookId(update, bookId) {
    const options = {
        method: 'PATCH',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    }
    
    return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(resp => resp.json());
}

// updateBookByBookId(newVlue, 7);
// updateBookByBookId({raiting: 3, author: 'Mango'}, 3);

