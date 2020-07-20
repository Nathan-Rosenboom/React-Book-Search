export default {
    /** 
     * Get list of books
     * @param {*} title
     */
    async searchBooks(title){
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
        const response = await fetch(url);
        return response.json();
    },

    async saveBook(book){
        const response = await fetch ('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });

        return response.json();
    },

    async deleteBook(book){
        const response = await fetch ('/api/books', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });

        return response.json();
    }
}