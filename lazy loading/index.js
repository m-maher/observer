
const options = {
    rootMargin: "0px 0px -200px 0px"
}

if(!!window.IntersectionObserver) {

    const lazyLoading = (entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log(entry)
                entry.target.src = entry.target.dataset.src
                observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(lazyLoading, options)

    const imgs = document.querySelectorAll('img')
    
    imgs.forEach(img => { 
        observer.observe(img) 
    })

}
