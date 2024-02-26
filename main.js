// ==UserScript==
// @name         Abrir imágenes de Danbooru
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Abre todas las imágenes en nuevas pestañas
// @author       Overlain
// @match        https://danbooru.donmai.us/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Boton
    let boton = document.createElement('button');
    boton.innerText = 'Abrir todas las imágenes';
    boton.style.position = 'fixed';
    boton.style.top = '900px';
    boton.style.left = '50px';
    boton.onclick = abrirImagenes;

    // Añade el botón al cuerpo de la página
    document.body.appendChild(boton);

    //abrir las imágenes
    function abrirImagenes() {
        const container = document.querySelector("#posts > div > div.posts-container.gap-2");
        const images = container.querySelectorAll("a.post-preview-link");

        for (const image of images) {
            const href = image.getAttribute("href");
            window.open(href, "_blank");
        }
    }
})();
