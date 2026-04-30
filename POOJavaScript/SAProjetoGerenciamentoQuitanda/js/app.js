// Importando as classes (módulos) do nosso sistema
import { QuitandaModel } from "./Model/QuitandaModel.js";
import { QuitandaView } from "./View/QuitandaView.js";
import { QuitandaController } from "./Controller/QuitandaController.js";

// Instanciiando (criando) os objetos baseados nas classes
const model = new QuitandaModel();
const view = new QuitandaView();
const controller = new QuitandaController(model, view);

// Inicia o sistema
controller.iniciar();
