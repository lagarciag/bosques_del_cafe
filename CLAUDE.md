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

## Estructura del Proyecto

Este es un proyecto de documentación para el Condominio Bosques del Café usando MkDocs con Material theme.