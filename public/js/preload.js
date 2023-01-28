function previewImage() {
  var preview = document.getElementById("imagenLoad");
  var input = document.getElementById("btnfile");
  var file = input.files[0];

  if (!file.type.match("image.*")) {
    imageError.innerHTML = "Solo se permiten imágenes.";
    imageError.style.display = "block";
    imagePreview.style.display = "none";
    return;
  }

  if (file.size > input.max) {
    imageError.innerHTML = "El tamaño máximo permitido es 2MB.";
    imageError.style.display = "block";
    imagePreview.style.display = "none";
    return;
  }
  var reader = new FileReader();
  reader.onload = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
