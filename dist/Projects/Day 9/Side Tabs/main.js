import './style.css'
import './comps/style.css'
import './responsive/style.css'


const heading  = document.querySelector('.content__heading')
const para  = document.querySelector('.content__para')
const home  = document.querySelector('.home')
const about  = document.querySelector('.about')
const contact  = document.querySelector('.contact')
const projects = document.querySelector('.projects')  

heading.innerHTML = 'Home';
para.textContent = `This is the home section of this practice project. Isn't it cool how the content changes according to the sidebar.`

home.addEventListener('click', ()=>{

  heading.innerHTML = 'Home';
  para.textContent = `This is the home section of this practice project. Isn't it cool how the content changes according to the sidebar.`

})

about.addEventListener('click', ()=>{


  heading.innerHTML = 'About';
  para.textContent = `This is the about section of this practice project. Isn't it cool how the content changes according to the sidebar.`

})

contact.addEventListener('click', ()=>{


  heading.innerHTML = 'Contact';
  para.textContent = `This is the contact section of this practice project. Isn't it cool how the content changes according to the sidebar.`

})

projects.addEventListener('click', ()=>{

  heading.innerHTML = 'projects';
  para.textContent = `This is the project section of this practice project. Isn't it cool how the content changes according to the sidebar.`

})

home.addEventListener('click', ()=>{})