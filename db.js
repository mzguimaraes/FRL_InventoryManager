const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// represents a single object tracked by the application
const Item = new Schema({
	name: String,
	label: String, //a physical label that identifies this item
	location: String, //where the item is stored
	available: {type: Boolean, default: true} //is currently unused
});

//represents one request submitted
const Request = new Schema({
	name: {type: String, default: Date.now().toString},
	user: {type: Schema.Types.ObjectId, ref: 'User'}, //ref to requester
	external: Boolean, //is requesting to remove Items from lab
	filed: {type: Date, default: Date.now}, 
	started: Date, //beginning of term
	duedate: Date, //end of term
	items: [{type: Schema.Types.ObjectId, ref: 'Item'}], //all included Items
	approved: Boolean //admin approval
});

const User = new Schema({
	username: String,
	hash: String, 
	fullname: String,
	email: String,
	//all requests this user has submitted
	requests: [{type: Schema.Types.ObjectId, ref: 'Request'}] 
});

mongoose.model("Item", Item);
mongoose.model("Request", Request);
mongoose.model("User", User);

mongoose.connect('mongodb://localhost/FRLEquipment');