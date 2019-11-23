new Vue({
    el: '#vapp',
    data:{ 
        photos: [],
        limit: 20
    },
    methods: {
        getPhotos() {
            axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(res => {
                const append = res.data.slice(this.photos.length, this.photos.length + this.limit )         
                this.photos = this.photos.concat(append)
            })
        }
    },
    mounted() {

        const options = {
            threshold: 1
        }

        const infiniteScroll  = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setTimeout(() => {
                        this.getPhotos()
                    }, 500)            
                }
            })
        }

        const observer = new IntersectionObserver(infiniteScroll, options)
    
        const container = document.querySelector(".load-more-container")
    
        observer.observe(container)

    }
})