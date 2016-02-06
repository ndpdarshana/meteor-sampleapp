if (Meteor.isClient) {
  var img_data = {
    img_src:"image1.jpg",
    img_alt:"Sew Hele image I added"
  }
  Template.images.helpers(img_data);
}

if (Meteor.isServer) {
  console.log("I am the server");
}
