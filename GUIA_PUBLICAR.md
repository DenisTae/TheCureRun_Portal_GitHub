# Cómo publicar The Cure Run en GitHub Pages

## 1. Exportar el juego desde Unity
1. Copia la carpeta `CureRun` de la plantilla a `Assets/WebGLTemplates/` de tu proyecto.
2. Edit > Project Settings > Player > icono Web:
   - Resolution and Presentation > WebGL Template > **CureRun**
   - Publishing Settings > Compression Format **Gzip** y marca **Decompression Fallback**
   - Other Settings > deja solo **WebGL 2**
3. File > Build Profiles > Web > **Build** y elige una carpeta NUEVA y vacía llamada `juego`.
4. Dentro de `juego` deben quedar: `index.html`, `Build` y `TemplateData`.
   Borra la carpeta `..._BurstDebugInformation_DoNotShip` si aparece.
5. Revisa que ningún archivo de `Build` pese más de 100 MB.

## 2. Armar el repositorio
```
index.html        (portal)
css/  js/  img/  fonts/
juego/            (lo que exportó Unity)
```
Reemplaza la carpeta `juego` por la nueva.

## 3. Subir con GitHub Desktop (la web de GitHub no acepta archivos de más de 25 MB)
1. File > Clone repository > DenisTae1812/OliviaRodrigo.
2. Copia el contenido del portal dentro de la carpeta clonada (reemplaza todo).
3. Commit to main > Push origin.
4. Settings > Pages del repositorio: Branch `main`, carpeta `/ (root)`.

## 4. Probar
- Portal: https://denistae1812.github.io/OliviaRodrigo/
- Juego directo: https://denistae1812.github.io/OliviaRodrigo/juego/index.html
- Ctrl + F5 para saltarte la caché. Si falla, F12 > Network y busca errores 404.
