Characters = new Meteor.Collection("characters", {
	transform: function(doc) {

		if (doc.coverImage) {
			doc.coverImageUrl = "http://cdn.phanime.com/images/characters/cover/" + doc.coverImage;
		} else {
			doc.coverImageUrl = 'na.gif';
		}

		doc.fullName = doc.firstName + " " + doc.lastName;

		return doc;
	}
});
