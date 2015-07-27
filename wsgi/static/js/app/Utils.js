Utils = {
    generateUID: function() {
        return ("00000000" + (Math.random() * Math.random() * Math.pow(36, 46 << 0)).toString(36)).slice(-8);
    }
};