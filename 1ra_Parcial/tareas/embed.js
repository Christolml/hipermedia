const embedImage = url => {
    loadImage(url).then(function(result) {
        const img = new Image();
        var imageURL = window.URL.createObjectURL(result);
        img.src = imageURL;
        document.querySelector('body').appendChild(img);
      },
      function(err) {
        console.log(err);
      });
  }