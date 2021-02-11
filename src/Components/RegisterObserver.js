export const registerObserver = (ref,SetAnimate) => {
    const observer = new IntersectionObserver((enteries,observer) => {
        enteries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
            SetAnimate('visible');
            observer.disconnect();
        });
    });
    observer.observe(ref);
}

