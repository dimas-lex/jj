Utils = {
    generateUID: function() {
        return ("000000" + (Math.random() * Math.pow(36, 46 << 0)).toString(36)).slice(-6);
    }
};