# Claude AI - Reglas y Configuración para Bosques del Café

## Formato de Listas en Markdown

**REGLA IMPORTANTE**: Siempre dejar una línea en blanco antes de iniciar cualquier lista con guiones (-).

### ❌ Formato Incorrecto
```markdown
Notificar **obligatoriamente** a:
- Apartamento de arriba
- Apartamento de abajo
```

### ✅ Formato Correcto
```markdown
Notificar **obligatoriamente** a:

- Apartamento de arriba
- Apartamento de abajo
```

Esta regla aplica para:
- Texto que termina con dos puntos (:) seguido de lista
- Cualquier párrafo seguido directamente de lista
- Subtítulos seguidos de listas

## Comandos de Construcción

- **Servidor de desarrollo**: `mkdocs serve`
- **Construcción**: `mkdocs build`
- **Limpieza**: `mkdocs build --clean`

## Uso de Emojis

**REGLA IMPORTANTE**: Usar emojis Unicode directos, NO la sintaxis `:emoji:` que no se despliega correctamente.

### ❌ Formato Incorrecto
```markdown
## :phone: Contacto
:green_circle: Nivel bajo
```

### ✅ Formato Correcto
```markdown
## 📞 Contacto
🟢 Nivel bajo
```

### Emojis Comunes a Usar

- 📞 (teléfono) en lugar de `:phone:`
- ⚖️ (balanza) en lugar de `:balance_scale:`
- 🕒 (reloj) en lugar de `:clock3:`
- 📊 (gráfico) en lugar de `:chart_with_upwards_trend:`
- ⚠️ (advertencia) en lugar de `:warning:`
- 🚨 (sirena) en lugar de `:rotating_light:`
- 💰 (dinero) en lugar de `:moneybag:`
- 💡 (bombilla) en lugar de `:bulb:`
- 📅 (calendario) en lugar de `:calendar:`
- 🟢 (verde) en lugar de `:green_circle:`
- 🟡 (amarillo) en lugar de `:yellow_circle:`
- 🟠 (naranja) en lugar de `:orange_circle:`
- 🔴 (rojo) en lugar de `:red_circle:`
- 🟣 (morado) en lugar de `:purple_circle:`
- 🔑 (llave) en lugar de `:key:`
- 🆔 (ID) en lugar de `:id_card:`
- 🚗 (carro) en lugar de `:car:`
- 🚶 (persona caminando) en lugar de `:walking:`
- ⏲️ (cronómetro) en lugar de `:timer:`
- 🚛 (camión) en lugar de `:truck:`
- 🛡️ (escudo) en lugar de `:shield:`
- 🚫 (prohibido) en lugar de `:no_entry:`
- ❗ (exclamación) en lugar de `:exclamation:`
- 🔥 (fuego) en lugar de `:fire:`
- 📝 (nota) en lugar de `:memo:`
- 📋 (portapapeles) en lugar de `:clipboard:`
- 1️⃣ (uno) en lugar de `:one:`
- 2️⃣ (dos) en lugar de `:two:`
- 🚀 (cohete) en lugar de `:rocket:`
- 🌐 (web) en lugar de `:material-web:`
- 📱 (móvil) en lugar de `:material-cellphone:` o `:mobile_phone:`
- ⚙️ (engranaje) en lugar de `:gear:`
- 💻 (computadora) en lugar de `:computer:`
- ❓ (pregunta) en lugar de `:question:`
- 🕒 (reloj 3) en lugar de `:clock3:`

## Estructura del Proyecto

Este es un proyecto de documentación para el Condominio Bosques del Café usando MkDocs con Material theme.