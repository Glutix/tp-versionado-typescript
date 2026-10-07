interface Tarea {
  id: number;
  descripcion: string;
}

const tareas: Tarea[] = [
  { id: 1, descripcion: "Estudiar para el parcial" },
  { id: 2, descripcion: "Entregar TP4" },
  { id: 3, descripcion: "Practicar TypeScript" }
];

console.log("=== GESTOR DE TAREAS ===");

for (const tarea of tareas) {
  console.log(`${tarea.id}. ${tarea.descripcion}`);
}