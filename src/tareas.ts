interface Tarea {
  id: number;
  descripcion: string;
  completada: boolean;
}

const tareas: Tarea[] = [
  { id: 1, descripcion: "Estudiar para el parcial", completada: false },
  { id: 2, descripcion: "Entregar TP4", completada: false },
  { id: 3, descripcion: "Practicar TypeScript", completada: true }
];

function mostrarTareas(): void {
  console.log("=== GESTOR DE TAREAS ===");

  for (const tarea of tareas) {
    const estado = tarea.completada ? "[X]" : "[ ]";
    console.log(`${tarea.id}. ${estado} ${tarea.descripcion}`);
  }
}

function completarTarea(id: number): void {
  const tarea = tareas.find(t => t.id === id);

  if (tarea) {
    tarea.completada = true;
    console.log(`Tarea ${id} marcada como completada.`);
  }
}

function eliminarTarea(id: number): void {
  const indice = tareas.findIndex(t => t.id === id);

  if (indice !== -1) {
    tareas.splice(indice, 1);
    console.log(`Tarea ${id} eliminada.`);
  }
}

function mostrarPendientes(): void {
  console.log("=== TAREAS PENDIENTES ===");

  for (const tarea of tareas) {
    if (!tarea.completada) {
      console.log(`${tarea.id}. ${tarea.descripcion}`);
    }
  }
}

completarTarea(1);
eliminarTarea(3);

mostrarTareas();
mostrarPendientes();