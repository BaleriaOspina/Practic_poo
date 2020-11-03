class Pizza {
  constructor(masa, tamano, ingredientes) {
    this.masa = masa;
    this.tamano = tamano;
    this.ingredientes = ingredientes;
  }

  //métodos
  preparar() {
    console.log(
      `Preparando pizza ${this.tamano}, ${this.masa}, con los ingredientes: ${this.ingredientes}`
    );
    return this;
  }

  hornear() {
    console.log(`Su pizza esta en el horno`);
  }

  empacar() {
    console.log(`Su pizza esta siendo empacada...`);
    console.log(`Pizza lista para ser enviada!!`);
    return this;
  }
}

const pizzaHawaiana = new Pizza("Masa delgada", "Grande", [
  "Queso",
  "Jamon",
  "Piña"
]);
console.log(pizzaHawaiana.preparar());
console.log(pizzaHawaiana.hornear());
console.log(pizzaHawaiana.empacar());
