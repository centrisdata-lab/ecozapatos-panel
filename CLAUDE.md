# EcoZapatos — Catálogo Digital (versión panel en vivo)

Carpeta preparada para generar en vivo, frente a público, el catálogo digital de EcoZapatos durante el panel "IA, universidad y nuevas profesiones". Las fotos de producto y el logo ya están en `assets/img/` — el sitio (`index.html` + `assets/css/styles.css` + `assets/js/main.js`) se genera con el comando `/generar-catalogo`.

## Marca

- **Nombre**: EcoZapatos
- **Rubro**: calzado hecho con materiales reciclados/sostenibles (denim reciclado, botellas PET, fibra de piña, corcho)
- **WhatsApp de contacto**: +57 310 297 1503 (usar este número real en todos los enlaces `wa.me`, no un placeholder)

## Productos (4, ya fotografiados en `assets/img/`)

1. `Tenis Denim Clásicos - 100.000.jpg` — Tenis Denim Clásicos — $100.000
2. `Zapatos Botellas Pet - 80.000.jpg` — Zapatos Botellas PET — $80.000
3. `Zapatos Café Denim - 150.000.jpg` — Zapatos Café Denim — $150.000
4. `Zapatos tipo bota Denim - 160.000.jpg` — Botas Denim — $160.000

Logo: `assets/img/Logo EcoZapatos.png` (verde vibrante sobre negro, ícono de tenis + hoja + símbolo de reciclaje).

## Línea gráfica

Las fotos de producto están ambientadas en luz natural, cálida, con plantas/materiales orgánicos (piedra, madera, corcho, follaje) — no digital/neón. Usar una paleta inclinada a esos tonos cálidos/naturales (verdes suaves, beige, denim azul, madera), con el verde vibrante del logo como acento de conversión (botones, precios), no como fondo dominante.

## Publicación

Este repo ya está conectado a un Static Site de Render con auto-deploy activado. El paso 5 del comando `/generar-catalogo` (`git add -A && git commit && git push`) debe ejecutarse tal cual — el push publica automáticamente en unos 20-60 segundos.

## Notas operativas

- `git push` puede colgarse pidiendo login interactivo de Credential Manager en Windows — si pasa, reintentar o avisar de inmediato.
- Esta carpeta es exclusiva para el momento del panel en vivo — no confundir con `d:\CATALOGO EJEMPLO\` (repo original, ya publicado) ni `d:\CATALOGO-ENSAYO\` (carpeta de práctica).
