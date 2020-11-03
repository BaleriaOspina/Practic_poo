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

//Herencia

class Combos extends Pizza {
  constructor(combo, cantidad, tamano, masa, ingredientes, bebida, postre) {
    super(tamano, masa, ingredientes);
    this.combo = combo;
    this.cantidad = cantidad;
    this.bebida = bebida;
    this.postre = postre;
  }

  //Métodos

  elegirCombo() {
    this.preparar();
    this.hornear();
    this.empacar();

    console.log(
      `Pedido: Combo ${this.combo}, ${this.cantidad} Pizza${this.porciones}, ${this.masa}, ${this.ingredientes} + ${this.bebida} + ${this.postre}`
    );
    return this;
  }
}

const Pedido = new Combos(
  "Unapersona",
  1,
  "Mediana",
  "Masa tradicional",
  ["Queso", "peperoni"],
  "Coca-Cola grande",
  "Rollitos de canela y chocolate",
  1
);

console.log(Pedido.elegirCombo());
