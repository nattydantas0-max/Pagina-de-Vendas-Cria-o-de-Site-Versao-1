import {config} from '../config.js';
export const arrow = '<span aria-hidden="true">↗</span>';
export const cta = (label='QUERO MEU SITE', secondary=false) => `<button class="cta ${secondary?'secondary':''}" data-contact>${label}${arrow}</button>`;
export const brand = () => `<a class="brand" href="#" aria-label="Nexo início"><span class="brand-mark">n</span>${config.brand}<span class="brand-dot">.</span></a>`;
export const price = () => `<div class="price"><span>R$</span>${config.price}<span>,00</span></div>`;
export const heading = (eyebrow,title,copy='') => `<div class="section-heading"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${copy?`<p>${copy}</p>`:''}</div>`;
