var app = angular.module('devflix', []);

app.controller('seriesController', function(){
  this.serie = {
      titulo: "Bates Motel",
      descripcion: "Bates Motel retrata la vida de un joven de aspecto frágil llamado Norman Bates y de su posesiva madre Norma, unos años antes de los acontecimientos narrados en Psicosis.",
      slug: "bates-motel",
      tipo: ["Drama", "Terror"]
    };
});