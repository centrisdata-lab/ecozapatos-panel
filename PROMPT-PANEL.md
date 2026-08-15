# Prompt para el día del panel

Instrucciones de uso:

1. Abre VS Code / Claude Code apuntando a esta carpeta: `d:\ecozapatos-panel`
2. Abre un **chat nuevo** (sin historial previo)
3. Pega el siguiente prompt tal cual, y envíalo cuando quieras "lanzar" la generación en vivo (pregunta 4 del panel)

---

## PROMPT A PEGAR

```
/generar-catalogo calzado hecho con materiales reciclados y sostenibles (denim, botellas PET, fibra de piña, corcho)
```

Eso es todo — el `CLAUDE.md` de esta carpeta ya tiene el resto del contexto (marca EcoZapatos, los 4 productos con precios, el WhatsApp real, la línea gráfica de las fotos), así que Claude Code lo va a leer automáticamente sin que tengas que explicar nada más en el chat.

---

## Qué va a pasar

1. Claude va a leer `CLAUDE.md` y la skill `design-system-extraction`
2. Va a escribir `index.html`, `assets/css/styles.css`, `assets/js/main.js` usando las fotos que ya están en `assets/img/`
3. Va a hacer `git add`, `commit`, `push` — esto publica automáticamente en Render (repo ya conectado)
4. Te va a reportar la URL final: **https://ecozapatos-panel.onrender.com**

Tiempo esperado (según los 2 ensayos previos): entre 40 segundos y 2 minutos y medio.

## Qué decir mientras corre (guion sugerido)

- **Pregunta 3**: "...y para que esto no se quede en teoría, en unos minutos les voy a mostrar exactamente esto: voy a construir en vivo el catálogo digital completo de un negocio, con IA, mientras seguimos conversando."
- **Pregunta 4**: al terminar de responder, "De hecho, mientras seguimos hablando, voy a lanzar esto ahora mismo" — pegas y envías el prompt de arriba, luego minimizas/cambias de pantalla y sigues hablando con normalidad.
- **Preguntas 5 y 6**: responden igual que siempre, sin mencionar la demo.
- **Pregunta 7**: "Y miren, mientras hablábamos, esto ya está listo" — compartes pantalla con https://ecozapatos-panel.onrender.com ya cargado (o el QR), navegas el catálogo 10-15 segundos.

## Plan B si algo falla

Si el wifi falla o el proceso no termina a tiempo, usa las capturas de respaldo en:
`d:\CATALOGO EJEMPLO\plan-b-respaldo\`

Esas son del catálogo original ya funcionando en https://ecozapatos.onrender.com — visualmente equivalente a lo que este flujo debería producir.
