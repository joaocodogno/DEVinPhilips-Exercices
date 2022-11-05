import CalculaArea from './CalculaArea.js';

const tri = new CalculaArea('triangulo', 6, 8)
const areaTri = tri.calcular()
console.log(tri)
console.log(areaTri)

const quad = new CalculaArea('quadrado', 4, 4)
const areaQuad = quad.calcular()
console.log(quad)
console.log(areaQuad)

const ret = new CalculaArea('retangulo', 4, 6)
const areaRet = ret.calcular()
console.log(ret)
console.log(areaRet)
