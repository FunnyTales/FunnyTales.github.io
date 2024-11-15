var ImgSaver = {
	_base64header: "data:image/jpg;base64,",
	_extension: ".jpg",
	/**
	 * Asks the user to save a base64 image to file
	 * @access public
	 * @param {string} base64 - img in base64 format, with or without href header
	 * @param {string} fname - img save file name
	 */
    save: function save(base64, fname) {
		if (!base64.startsWith(this._base64header)) {
			base64 = this._base64header + base64;
		}
		if (!fname.endsWith(this._extension)) {
			fname += this._extension;
		}
		download(base64, fname, `image/${this._extension.slice(1)}`);
    }
};
