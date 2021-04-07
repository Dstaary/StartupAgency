function shieldFn() {
    let widthShield = document.getElementById('shieldimg').offsetWidth;
    const shieldBig = document.getElementById('shieldBig');
    const shieldSmall = document.getElementById('shieldSmall');
    
    if(widthShield >= 930) {
        shieldBig.classList.add('show-shield');
        shieldSmall.classList.remove('show-shield');
    } else {
        shieldBig.classList.remove('show-shield');
        shieldSmall.classList.add('show-shield');
    }
}
