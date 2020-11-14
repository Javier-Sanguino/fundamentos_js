const boton = document.getElementById("boton");
const rojo = document.getElementById("rojo");
const azul = document.getElementById("azul");
const amarillo = document.getElementById("amarillo");
const verde = document.getElementById("verde");
const MAX_NIVEL = 2;

class Juego {
  constructor() {
    this.inicializar();
    this.inicioSecuencia();
    setTimeout(() => this.nextNivel(), 1000);
  }

  inicializar() {
    this.elegirColor = this.elegirColor.bind(this);
    this.botonEmpezar();
    this.nivel = 1;
    this.colores = {
      rojo,
      azul,
      amarillo,
      verde,
    };
  }

  botonEmpezar() {
    if (boton.classList.contains("hide")) {
      boton.classList.remove("hide");
    } else {
      boton.classList.add("hide");
    }
  }

  inicioSecuencia() {
    this.secuencia = new Array(MAX_NIVEL)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 4));
  }

  nextNivel() {
    this.subnivel = 0;
    this.iluminar();
    this.addEvento();
  }

  numeroAColor(numero) {
    switch (numero) {
      case 0:
        return "rojo";
      case 1:
        return "azul";
      case 2:
        return "amarillo";
      case 3:
        return "verde";
    }
  }

  colorANumero(color) {
    switch (color) {
      case "rojo":
        return 0;
      case "azul":
        return 1;
      case "amarillo":
        return 2;
      case "verde":
        return 3;
    }
  }

  iluminar() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.numeroAColor(this.secuencia[i]);
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.apagarColor(color), 300);
  }

  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }

  addEvento() {
    this.colores.rojo.addEventListener("click", this.elegirColor);
    this.colores.azul.addEventListener("click", this.elegirColor);
    this.colores.amarillo.addEventListener("click", this.elegirColor);
    this.colores.verde.addEventListener("click", this.elegirColor);
  }

  removeEvento() {
    this.colores.rojo.removeEventListener("click", this.elegirColor);
    this.colores.azul.removeEventListener("click", this.elegirColor);
    this.colores.amarillo.removeEventListener("click", this.elegirColor);
    this.colores.verde.removeEventListener("click", this.elegirColor);
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.colorANumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.removeEvento();
        if (this.nivel === MAX_NIVEL + 1) {
          swal("Felicidades!!!", "Ganaste el juego!", "success").then(
            this.inicializar()
          );
        } else {
          setTimeout(this.nextNivel.bind(this), 1500);
        }
      }
    } else {
      swal("Sorry!!!", "Perdiste, vuelve a intentarlo!", "error")
        .then(this.removeEvento())
        .then(this.inicializar());
    }
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
