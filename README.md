# DM / GAME ARCHIVE

**Dos videojuegos. Un solo portal.** Proyecto de Game Development desarrollado en Unity y publicado mediante GitHub Pages.

**Portal unificado:** https://denistae.github.io/TheCureRun_Portal_GitHub/

## Videojuegos

| Videojuego | Género | Controles principales |
|---|---|---|
| The Cure Run | Endless runner 3D | ↑ saltar, ↓ agacharse, Esc pausa |
| Pretty Dead Girl: Olivia's Nightmare | Laberinto 3D | WASD/flechas mover, Shift correr, C cámara, Esc pausa |

Los juegos se integran **en secciones de la misma página**, sin redirecciones. Cada sección dispone de un botón **START** propio y no crea su reproductor WebGL hasta que se presiona.

## Desarrollo y créditos

- **Denis Medrano Carrasco** — [GitHub](https://github.com/DenisTae)
- **Ariana Patzi Gonzales** — [GitHub](https://github.com/aritozs673-maker) — desarrollo de Pretty Dead Girl.

Tecnologías: **Unity 6, C#, WebGL, HTML, CSS, JavaScript y GitHub Pages**.

## Integración técnica

- `index.html`: portal único, diseño, menú, secciones y botones START.
- `juego/`: compilación WebGL de The Cure Run alojada en este repositorio.
- La sección Pretty Dead Girl utiliza su compilación WebGL publicada en `https://denistae.github.io/PrettyDeadGirl_Portal_GitHub/game/`, embebida en un iframe dentro del portal.
- Los iframes se crean al pulsar el START correspondiente, no al cargar el portal.

**Importante:** el segundo juego aún depende de su repositorio original para servir sus archivos WebGL. No debes eliminar `PrettyDeadGirl_Portal_GitHub` hasta haber trasladado su carpeta `game/` al repositorio unificado, ajustado la ruta y comprobado ambos juegos.

## Evidencias requeridas para Unidad 4

1. Captura del encabezado con el nombre del desarrollador y ambos botones de selección.
2. Captura de la sección Pretty Dead Girl antes de pulsar START.
3. Captura de Pretty Dead Girl ejecutándose dentro del portal después de pulsar START.
4. Captura equivalente de The Cure Run.
5. Enlace público del portal unificado.

La guía solicita actualizar el portal existente, no crear una página independiente para el segundo juego.
