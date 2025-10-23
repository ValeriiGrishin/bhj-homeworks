const book = document.getElementById('book');

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('font-size')) {
        event.preventDefault();
        
        document.querySelectorAll('.font-size').forEach(button => {
            button.classList.remove('font-size_active');
        });
        
        event.target.classList.add('font-size_active');
        
        const size = event.target.dataset.size;
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    }
});

document.addEventListener('click', function(event) {

    if (event.target.classList.contains('color')) {
        event.preventDefault();
        
        const isTextColor = event.target.classList.contains('text_color_black') || 
                           event.target.classList.contains('text_color_gray') || 
                           event.target.classList.contains('text_color_whitesmoke');
        
        const isBgColor = event.target.classList.contains('bg_color_black') || 
                         event.target.classList.contains('bg_color_gray') || 
                         event.target.classList.contains('bg_color_white');
        
        if (isTextColor) {
            document.querySelectorAll('.book__control_color .color').forEach(button => {
                button.classList.remove('color_active');
            });
            
            event.target.classList.add('color_active');
            const color = event.target.dataset.textColor;
            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
            
            if (color) {
                book.classList.add('book_color-' + color);
            }
        }
        
        if (isBgColor) {
            document.querySelectorAll('.book__control_background .color').forEach(button => {
                button.classList.remove('color_active');
            });
            
            event.target.classList.add('color_active');
            const color = event.target.dataset.bgColor;
            book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
            
            if (color) {
                book.classList.add('book_bg-' + color);
            }
        }
    }
});