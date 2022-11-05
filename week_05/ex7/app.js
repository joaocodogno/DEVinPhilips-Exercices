import Time from './Time.js';
import Partida from './Partida.js';

const gre = new Time ("Gremio", "GRE")
const int = new Time ("Internacional", "INT")

const p1 = new Partida ("GRE", 2, "INT", 1)
const p2 = new Partida ("SAN", 3, "SAO", 0)

gre.computarPartida(p1)
int.computarPartida(p2)

gre.exebirSituacao()
int.exebirSituacao()