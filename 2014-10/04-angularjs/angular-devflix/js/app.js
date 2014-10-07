var app = angular.module('devflix', []);

app.controller('seriesController', function(){
  this.series = seriesLista;
});

var seriesLista = [
    {
      titulo: "Bates Motel",
      tipo: ["Drama", "Terror"],
      descripcion: "Bates Motel retrata la vida de un joven de aspecto frágil llamado Norman Bates y de su posesiva madre Norma, unos años antes de los acontecimientos narrados en Psicosis.",
      slug: "bates-motel",
      enTransmision: true
    },
    {
      titulo: "Gotham",
      descripcion: "Gotham sigue el ascenso de James Gordon a través de una ciudad peligrosamente corrupta balanceándose al borde del mal.",
      tipo: ["Drama", "Acción"],
      slug: "gotham",
      enTransmision: false
    },
    {
      titulo: "Smalville",
      descripcion: "La serie narra las aventuras del joven Clark Kent en el pueblo ficticio de Smallville, Kansas, durante los años previos a que él se convierta en Superman.",
      tipo: ["Drama", "Acción"],
      slug: "smallville",
      enTransmision: true
    },
    {
      titulo: "Breaking Bad",
      descripcion: "Historia de un profesor de química a quien le diagnostican cáncer. Para pagar su tratamiento y asegurar el futuro de su familia comienza a cocinar metanfetamina.",
      tipo: ["Drama", "Acción"],
      slug: "breaking-bad",
      enTransmision: true
    },
    {
      titulo: "Silicon Valley",
      descripcion: "La trama de la serie se ubica en Silicon Valley, California. Richard Hendriks es un programador solitario y tímido que trabaja en una gran empresa de Internet llamada Hooli.",
      tipo: ["Comedia"],
      slug: "silicon-valley",
      enTransmision: true
    },
    {
      titulo: "House of Cards",
      descripcion: "El congresista estadounidense Francis Underwood y su esposa Claire no se detendrán ante nada para lograr sus propósitos.",
      tipo: ["Drama"],
      slug: "house-of-cards",
      enTransmision: true
    },
    {
      titulo: "Skins",
      descripcion: "Conjunto de adolescentes y las complejas relaciones que les unen mientras tratan de hacer frente a las dificultades de los años previos a ser considerados verdaderos adultos.",
      tipo: ["Drama", "Comedia"],
      slug: "skins",
      enTransmision: true
    },
    {
      titulo: "Under The Dome",
      descripcion: "Todo comienza en Chester's Mill, donde una gran barrera invisible cae y todo el pueblo se queda atrapado.",
      tipo: ["Drama", "Scify"],
      slug: "under-the-dome",
      enTransmision: true
    }
  ];