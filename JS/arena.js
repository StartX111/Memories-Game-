class Arena{

    constructor(options){
        this.el = options.el;


        this.el.addEventListener('click', this.eventClick.bind(this));
    }

    eventClick(){
        let target = event.target;
        if (target.className === 'control_button'){
            alert('click' +  target.className);
        }
        if (target.getAttribute('data-type') === 'area'){
            let tempBackground = target.style.background;
            target.style.background = '#ffec9d';
            setTimeout(() => target.style.background = tempBackground, 700);
            console.log(target.className);
        }
    }

}