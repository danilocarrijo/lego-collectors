const restful = require('node-restful');
const mongoose = require('mongoose');

const partsSchema = new mongoose.Schema({
	
	set_num:          { type: String, required:true},
	name:          { type: String, required:true},
	year:          { type: Number, required:true},
	theme_id:          { type: Number, required:true},
	num_parts:          { type: Number, required:true},
	set_img_url:          { type: String, required:true},
	set_url:          { type: String, required:true},
	last_modified_dt:          { type: String, required:true}
})

module.exports = mongoose.model('parts',partsSchema)
