new Vue({
    el: "#app",

    data: {
        headline: "ICING DONUT BROWNIE",
        headlineArr: [],
        subheadline: "Cake pastry tart with cookie icing. I love tart gummi bear sugar plums.",
        renderedSubheadline: "",
        position: 0,
    },

    created() {
        this.headlineArr = this.headline.split(' ');
        setTimeout(this.typewriter, 1400);
    },

    methods: {
        typewriter() {
            this.renderedSubheadline = this.subheadline.substring(0, this.position) + '<span class="cursor"></span>';
        
            if (this.position++ !== this.subheadline.length) {
                setTimeout(this.typewriter, 25);
            }
        }
    }
});
