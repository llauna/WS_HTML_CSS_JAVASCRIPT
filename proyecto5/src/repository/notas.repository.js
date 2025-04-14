// import { NotasInRAMRepository } from "./notas.in.ram.repository";
import { NotasRestRepository } from './notas.rest.repository.js';

// export const repositorioDeNotasEnUso = new NotasInRAMRepository();
export const repositorioDeNotasEnUso = new NotasRestRepository();