        // Task 1: Create a Constructor Function for the Book Object
        function Book(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
        }

        // Task 2: Implement a Method within the Book Object to Display Book Information
        Book.prototype.displayInfo = function() {
            return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
        };

        // Task 3: Create an Array to Store Book Objects and Implement Functions
        let library = [];

        // Function to Add New Books
        function addBook(title, author, pages) {
            const newBook = new Book(title, author, pages);
            library.push(newBook);
            logToOutput("Added Book: " + newBook.displayInfo());  // Log the added book’s details
        }

        // Function to Search for Books by Title or Author
        function searchBooks(query) {
            return library.filter(book => 
                book.title.toLowerCase().includes(query.toLowerCase()) || 
                book.author.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Function to Display Search Results
        function displaySearchResults(query) {
            const results = searchBooks(query);
            logToOutput(`Search Results for '${query}':`);
            results.forEach(book => logToOutput(book.displayInfo()));
        }

        // Function to Get Books with More Than 100 Pages
        function filterBooksByPages() {
            return library.filter(book => book.pages > 100);
        }

        // Function to Display Books with More Than 100 Pages
        function displayBooksWithMoreThan100Pages() {
            const results = filterBooksByPages();
            logToOutput("Books with more than 100 pages:");
            results.forEach(book => logToOutput(book.displayInfo()));
        }

        // Function to Add Descriptive Text to Titles and Authors
        function mapBookDescriptions() {
            return library.map(book => ({
                title: `Title: ${book.title}`,
                author: `Author: ${book.author}`,
                pages: book.pages
            }));
        }

        // Function to Display Mapped Book Descriptions
        function displayMappedBookDescriptions() {
            const results = mapBookDescriptions();
            logToOutput("Mapped Book Descriptions:");
            results.forEach(book => logToOutput(`${book.title}, ${book.author}, Pages: ${book.pages}`));
        }

        // Function to Log Messages to the <pre> Element
        function logToOutput(message) {
            const outputElement = document.getElementById('output');
            outputElement.textContent += message + '\n';
        }

        // Example Usage
        addBook("Harry Potter and The Sorcerer Stone", "J.K. Rowling", 223);
        addBook("Harry Potter and The Chamber of Secrets", "J.K Rowling", 251);
        addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
        addBook("The Catcher in the Rye", "J.D. Salinger", 214);

        // Display Information About All Books
        logToOutput("All Books:");
        library.forEach(book => logToOutput(book.displayInfo()));

        // Perform Search
        displaySearchResults('George');

        // Display Books with More Than 100 Pages
        displayBooksWithMoreThan100Pages();

        // Display Mapped Book Descriptions
        displayMappedBookDescriptions();