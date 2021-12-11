window.addEventListener('DOMContentLoaded', function() {
    // slicy-------------------
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('slicy', window.scrollY > 0);
    });

    // slider-HEADER--------------------
    const slides = document.querySelectorAll('.top__slider-item'),
          slidesWrapper = document.querySelector('.top__inner'),
          slidesField = document.querySelector(".top__slider"),
          width = window.getComputedStyle(slidesWrapper).width;
    let offset = 0;
    let slidesIndex = 1;

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    
    slides.forEach(slide => {
        slide.style.width = width;
    });

    let autoPlay = setInterval(() => {
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slidesIndex == slides.length) {
            slidesIndex = 1;
        } else {
            slidesIndex++
        }
    }, 6000);

    // slider---contact------------------

    // let slidesCon = 
    const next = document.querySelector('.left');
    // const prev = document.querySelector('.right');

    const slidesCon = document.querySelectorAll('.contact-slider__link'),
          slidesFieldCon = document.querySelector('.contact-slider'),
          slidesWrapperCon = document.querySelector('.container-fluid'),
          widthCon = window.getComputedStyle(slidesWrapperCon).width;

          slidesFieldCon.style.width = 100 * (slidesCon.length/6) + '%';
          slidesFieldCon.style.display = 'flex';
          slidesFieldCon.style.transition = '0.5s all';
          slidesWrapperCon.style.overflow = 'hidden';

          slidesCon.forEach(slide => {
              slide.style.width = widthCon;
          })

        // let slideNum = 1;
        let slideOffset = 0;

        next.addEventListener('click', () => {
            if (offset == +widthCon.slice(0, widthCon.length - 2) * (slidesCon.length -1)) {
                slideOffset = 0
            } else {
                slideOffset += +widthCon.slice(0, widthCon.length - 2)
            }
            slidesFieldCon.style.transform = `translate(-${slideOffset}px)`;
        });
    
        
    // let product = document.querySelector('.contact-slider__link');
    // let product_page = Math.ceil(product.length/4);
    // let i = 1;
    // let movePer = 25.34;
    // let maxMove = 203;

    // let mobile_view = window.matchMedia('(max-width: 768px)');
    // if (mobile_view.matches) 
    //     {
    //         movePer = 50.36;
    //         maxMove = 504;
    //     }
    //     let right_mover = () => {
    //         l = l + movePer;
    //         if (product == 1) {1 = 0} 
    //         for(const i of product)
    //         {
    //             if (1 > maxMove) {1 = 1 -movePer;}
    //             i.style.left = '-' + 1 + '%';
    //         }
    //     }

    //     let left_mover = () => {
    //         l = 1 - movePer;
    //         if (l <= 0) {l = 0;}
    //         for(const i of product)
    //         {
    //             if (product_page > 1)
    //             i.style.left = '-' + 1 + '%';
    //         }
    //     }

    //     right.onclick = () => {right_mover();}
    //     left.onclick = () => {left_mover();}  

    
    // class-------------gallery

    class galleryClass {
        constructor (src, alt, parentSelector, ...classes) {
            this.src = src;                        
            this.alt = alt;                        
            this.parent  = document.querySelector(parentSelector);
            this.classes = classes;
        }
        render() {
            const elem = document.createElement('a');
            elem.setAttribute('href', '#');
            this.classes.forEach(className => elem.classList.add(className));
            elem.innerHTML = `           
                <img src=${this.src} alt="${this.alt}">         
            `;
            this.parent.append(elem);
        }
    }

    new galleryClass(
        './images/gallery/1.jpg',
        'bed',
        '.gallery__items',
        'gallery__item'
    ).render();
    new galleryClass(
        './images/gallery/2.jpg',
        'bed',
        '.gallery__items',
        'gallery__item'
    ).render();
    new galleryClass(
        './images/gallery/3.jpg',
        'bed',
        '.gallery__items',
        'gallery__item'
    ).render();
    new galleryClass(
        './images/gallery/4.jpg',
        'bed',
        '.gallery__items',
        'gallery__item'
    ).render();
    new galleryClass(
        './images/gallery/5.jpg',
        'bed',
        '.gallery__items',
        'gallery__item'
    ).render();



    // const forms = document.querySelectorAll('form');
    // const message = {
    //     loading: 'загруска',
    //     succes: 'спасибо! Скоро мы с выми свяжемся',
    //     failure: 'чтето не так'        
    // };
    // forms.forEach(item => {
    //     postData(item);
    // })
    // function postData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         // const statusMessage = document.createElement('img');
    //         // statusMessage.src = message.loading;
    //         // statusMessage.style.cssText = `
    //         //     display: block;
    //         //     margin: 0 auto;
    //         // `;
    //         // form.insertAjacentElement('aftered', statusMessage);
    //         const formData = new FormData(form);
    //         const object = {};
    //         formData.forEach(function(value, key){
    //             object[key] = value;
    //         });

    //         fetch('server.php', {
    //             method: "POST",
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(object)
    //         })
    //         .then(data => data.text())
    //         .then(data => {
    //             console.log(data);                              
    //         })
    //         .catch(() => {
    //             showThanksModal(message.failure);
    //         })
    //         .finally(() => {
    //             form.reset();
    //         })

    //     })
    // }

        
    // forms--------------------------

    // forms.forEach(item => {
    //     postData(item);
    // });
    // function postData(form){
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         let statusMessage = document.createElement('div');
    //         statusMessage.classList.add('status');
    //         statusMessage.textContent = message.loading;
    //         form.appendChild(statusMessage);

    //         const request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');

    //         request.setRequestHeader('Content-type', 'application/json');
    //         const formData = new FormData(form);

    //         const obj = {};
    //         formData.forEach(function(value, key) {
    //             obj[key] = value;
    //         });
    //         const json = JSON.stringify(obj);
    //         request.send(json);

    //         request.addEventListener('load', () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.succes;
    //                 form.reset();
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 2000);
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         }); 
    //     });
    // }

});
