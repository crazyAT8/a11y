//This is the typical boiler plate for creating a custom element

class RadioButton extends HTMLElements {                    //extending the native HTMLElement
    constructor() {                                             //this is the primitive class that
        super();                                                    //all HTML tags inherit from
    }                                                       //call super to properly set up my parent class

                                                            //every custom element has a set of lifecylce callbacks
                                                                //that you can hook into to run your own code
                                                                    //durring various phases of that element's life
                                                            // For instance connectedCallback
                                                                //gets run every time our element is inserted into the DOM,
                                                                    //either via JS or the parser hits it bc it's already in our markup
                                                                        //and it goes through and it upgrades it
                                                                            //and first thing it's going to do is call this callback
                                                            //so this is a great place to stamp out our templates
                                                                //or query the DOM
                                                                    //bc we know we are in the document now
    connectedCallback() {                                   //these are attribute value pairs 
        this.setAttribute('role', 'radio');                 //that are pre-sets for this particular tag we've created
        this.setAttribute('tableindex', -1);
        this.setAttribute('aria-checked', false);
    }
}

window.customElements.define('radio-button', RadioButton);