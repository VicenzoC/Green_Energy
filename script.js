class Carousel {

    _page = 0;

    _nextPage() {
        this._page = this._page === 4 ? 0 : this._page + 1;

        this._setPage();
        this._changeSlide();
    }

    _prevPage() {
        this._page = this._page === 0 ? 4 : this._page - 1;

        this._setPage();
        this._changeSlide();
    }

    _setPage() {
        const pages = document.getElementsByClassName('page');

        this._removeAllActivesClasses(pages);

        pages[this._page].classList.add('active');
    }

    _removeAllActivesClasses(elements) {
        for (let el of elements) {
            el.classList.remove('active');
        }
    }

    _goToPage(index) {
        this._page = index;

        this._setPage();
        this._changeSlide();
    }

    _changeSlide() {
        const items = document.getElementsByClassName('carousel-img');

        for (let item of items) {
            item.style.transform = `translateX(-${this._page}00%)`;
        }
    }
}

const carousel = new Carousel();

function nextPage() {
    carousel._nextPage();
}

function prevPage() {
    carousel._prevPage();
}

function goToPage(index) {
    carousel._goToPage(index);
}

function register() {
    document.getElementById("formulario").addEventListener("submit", function (event) {
        const emailField = document.getElementById("email");
        if (emailField.value === "") {
            alert("Por favor, preencha o campo de e-mail.");
        } else {
            alert("Obrigado por se inscrever!");
        }
    })
}

document.addEventListener("DOMContentLoaded", register);
