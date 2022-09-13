let burger = document.querySelector(".burger")
let links = document.querySelector(".nav-links")
let textarea = document.querySelector(".text-center")

burger.addEventListener('click',()=> 
{
    links.classList.toggle("nav-show");
    textarea.classList.toggle("textareahide");
})


var navbar = document.querySelector(".nav-bar")
window.onscroll = ()=> {
    this.scrollY > 20 ? navbar.classList.add("sticky"):
    navbar.classList.remove("sticky")
}





const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});