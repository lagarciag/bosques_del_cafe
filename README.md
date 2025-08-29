# Bosques del Café

Sitio de documentación sobre el reglamento de condominio del **Condominio Residencial Horizontal y Vertical Bosques de Café**. Una herramienta práctica creada por y para condóminos.

## 🌐 Sitio Web

El sitio está disponible en: **https://lagarciag.github.io/bosques_del_cafe/**

## 🚀 Desarrollo Local

### Prerrequisitos
- Python 3.8+
- pip

### Configuración del entorno

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/lagarciag/bosques_del_cafe.git
   cd bosques_del_cafe
   ```

2. **Crear entorno virtual:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Linux/Mac
   # o en Windows: .venv\Scripts\activate
   ```

3. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

### Ejecutar localmente

```bash
# Activar entorno virtual
source .venv/bin/activate

# Ejecutar servidor de desarrollo
mkdocs serve

# O especificar puerto
mkdocs serve --dev-addr 127.0.0.1:8000
```

El sitio estará disponible en http://localhost:8000

### Construir para producción

```bash
mkdocs build
```

Los archivos generados estarán en el directorio `site/`.

## 📁 Estructura del Proyecto

- `docs/` - Contenido del sitio en formato Markdown
  - `capitulos/` - Capítulos del reglamento organizados individualmente
  - `images/` - Imágenes y logos del sitio
  - `index.md` - Página principal
  - `informacion-finca.md` - Información registral del condominio
- `mkdocs.yml` - Configuración principal de MkDocs
- `.venv/` - Entorno virtual de Python (no versionado)
- `site/` - Sitio generado (no versionado)

## 🛠️ Tecnologías

- **[MkDocs](https://mkdocs.org/)** - Generador de sitios estáticos
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Tema moderno y responsive
- **Python** - Lenguaje base para MkDocs
- **GitHub Pages** - Hosting del sitio
- **GitHub Actions** - Despliegue automatizado con `mkdocs gh-deploy`

## ✨ Características

- 📱 **Responsive** - Optimizado para móviles y desktop
- 🌙 **Modo oscuro/claro** - Cambio automático según preferencia del sistema
- 🔍 **Búsqueda avanzada** - Búsqueda en tiempo real en todo el contenido
- 📄 **Navegación organizada** - Reglamento dividido por capítulos para fácil consulta
- 🤖 **Asistente virtual integrado** - ChatGPT personalizado para preguntas sobre el reglamento
- 📋 **Acceso al documento original** - Enlaces directos al PDF registral oficial

## ⚠️ Disclaimer

Este sitio fue creado utilizando inteligencia artificial como herramienta de apoyo. Sirve como guía práctica pero puede contener errores o interpretaciones inexactas. Para consultas legales exactas, siempre consulte el documento original en PDF disponible en el sitio.