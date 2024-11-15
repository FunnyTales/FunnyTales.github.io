var BowserAPI = {

    detectBrowser: function detectBrowser() {
        if (bowser !== undefined) {
            return `${bowser.name} ${bowser.version}`;
        }
        else {
            return "error: bowser not available";
        }
    }

}
