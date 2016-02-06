if (Meteor.isClient) {
  var img_data = [
    {
      img_src:"image1.jpg",
      img_alt:"Sew Hele image I added"
    },
    {
      img_src:"image2.jpg",
      img_alt:"Kala wewa"
    },
    {
      img_src:"image3.jpg",
      img_alt:"Awukana"
    },
  ]
  Template.images.helpers({images:img_data});
}

if (Meteor.isServer) {
  console.log("I am the server");
}
