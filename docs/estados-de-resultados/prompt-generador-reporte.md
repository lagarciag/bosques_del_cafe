# 📋 Prompt para Generar Reportes de Estados de Resultados

## 🎯 Descripción
Este prompt permite generar reportes financieros automatizados a partir de archivos PDF de estados de resultados, manteniendo un formato consistente con visualizaciones avanzadas.

## 📁 Estructura de Archivos Esperada

```
docs/estados-de-resultados/
├── [mes].pdf                      # Archivo PDF del estado de resultados
├── resumen-[mes]-[año].md         # Reporte mensual (salida)
├── analisis-historico-[año].md    # Análisis histórico acumulado (se actualiza cada mes)
└── prompt-generador-reporte.md    # Este archivo
```

### 📊 Separación de Contenidos

**Resumen Mensual** (`resumen-[mes]-[año].md`):
- Análisis específico del mes
- Visualizaciones del período actual
- Referencias al análisis histórico

**Análisis Histórico** (`analisis-historico-[año].md`):
- Tendencias y evolución completa hasta el mes actual
- Gráficos históricos Chart.js interactivos
- Comparaciones anuales y análisis profundo
- **Se actualiza cada mes** con nuevos datos

## 🚀 Prompt de Ejecución

### Comando Base
```bash
# Analiza el PDF llamado [nombre-archivo].pdf del estado de resultados. 
# Analiza la tabla de estados de resultados. 
# Genera un resumen en formato markdown. 
# Agrega diagramas de tipo pie chart utilizando mermaid que muestre el total de gastos 
# y como slices del pie cada uno de los gastos principales.
# Los diagrama de pie deben ser dos: uno para gastos del mes y otro para gastos acumulados.  
# Utiliza funciones avanzadas de mkdocs + material.
# Agrega diagramas de tipo treemap con todos los gastos.  
# Un diagrama treemap para gastos del mes y otro para gastos acumulados.
# Los pie charts ponlos juntos horizontalmente usando grid cards de Material.
```

### Prompt Completo Parametrizable

```markdown
Analiza el archivo PDF llamado "{nombre_archivo}.pdf" del estado de resultados del {mes} {año}. 

**TAREAS A REALIZAR:**

1. **📊 Análisis de Datos:**
   - Extraer datos de la tabla de estados de resultados
   - Identificar ingresos, gastos principales y resultado del período
   - **CRÍTICO: Extraer datos REALES de "Documentos Pendientes - Cuentas por Cobrar" del PDF**
   - **NUNCA inventar montos - usar únicamente los datos del PDF original**
   - Identificar top 5 deudores por monto adeudado
   - Calcular porcentajes y tendencias

2. **📝 Generar Archivos:**
   
   **A. Resumen Mensual** ("resumen-{mes}-{año}.md"):
   - Resumen ejecutivo del mes con cifras clave
   - Análisis de ingresos y gastos principales del período
   - Visualizaciones específicas del mes (pie charts, comparaciones)
   - **Estado de cuentas por cobrar** - Top 5 deudores principales extraídos del PDF sin nombres reales (Propietario #1, #2, etc.)
   - **IMPORTANTE**: NO incluir referencias a "meses pendientes" ni períodos temporales específicos en la sección de morosidad
   - **Link al análisis histórico** en lugar de incluir tendencias
   - Recomendaciones específicas del mes
   
   **B. Actualizar Análisis Histórico** ("analisis-historico-{año}.md"):
   - **ACTUALIZAR** el archivo existente agregando datos del nuevo mes
   - Gráficos Chart.js con evolución completa hasta el mes actual
   - Análisis de tendencias anuales y estacionales
   - Comparaciones históricas profundas
   - Proyecciones y análisis predictivo

3. **📈 Visualizaciones por Archivo:**

   **RESUMEN MENSUAL - Visualizaciones Simples:**
   
   **A. Pie Charts Chart.js (2) - Solo del mes:**
   - Gastos principales del mes actual - usar `<canvas id="gastos[Mes]Pie">`
   - Gastos acumulados del período - usar `<canvas id="gastosAcumulados[Mes]Pie">`
   - Mostrar lado a lado usando `<div class="grid cards" markdown>`
   
   **B. Treemaps (2) - Solo del mes:**
   - Mapa jerárquico de gastos del mes (usar `treemap-beta`)
   - Mapa jerárquico de gastos acumulados del mes (usar `treemap-beta`)

   **ANÁLISIS HISTÓRICO - Visualizaciones Completas:**
   
   **C. Dashboard Financiero Principal (4 gráficos):**
   - **Mantenimiento Jardines**: `<canvas id="gardensChart">`
   - **Servicios Públicos Totales**: `<canvas id="utilitiesChart">`
   - **Gastos Extraordinarios**: `<canvas id="extraordinaryChart">`
   - **Gastos Acumulados vs Promedio**: `<canvas id="accumulatedChart">`
   
   **D. Dashboard de Servicios Públicos (4 gráficos):**
   - **Servicio Eléctrico Individual**: `<canvas id="electricChart">`
   - **Servicio de Agua Individual**: `<canvas id="waterChart">`
   - **Servicio Telefónico Individual**: `<canvas id="phoneChart">`
   - **Comparación de Servicios**: `<canvas id="utilitiesCompareChart">`
   
   **E. Dashboard de Activos (4 gráficos):**
   - **Caja**: `<canvas id="cajaChart">`
   - **Cuentas por Cobrar**: `<canvas id="cuentasPorCobrarChart">`
   - **Pagos Anticipados**: `<canvas id="pagosAnticipadosChart">`
   - **Total Activo Circulante**: `<canvas id="totalActivoCirculanteChart">`
   
   **F. Dashboard de Pasivos y Patrimonio (5 gráficos):**
   - **Pasivo Circulante**: `<canvas id="pasivoCirculanteChart">`
   - **Patrimonio**: `<canvas id="patrimonioChart">`
   - **Balance Pasivos vs Patrimonio**: `<canvas id="pasivosPatrimonioChart">`
   - **Estructura Financiera**: `<canvas id="estructuraFinancieraChart">`
   - **Cuentas por Pagar**: `<canvas id="cuentasPorPagarChart">`
   
   **G. Gráficos adicionales por categoría:**
   - Cada tab de categoría puede incluir gráficos específicos embebidos
   - Usar elementos HTML: `<div class="chart-container">` y `<canvas id="nombreChart">`
   - Organizar en `<div class="chart-grid">` para layout responsivo
   - Los datos se configuran automáticamente en `charts.js`

4. **🎨 Formato y Estilo:**
   
   **Material for MkDocs Features:**
   - Tabs content (`=== "Título"`)
   - Admonitions (`!!! info`, `!!! warning`, `!!! tip`, `!!! success`)
   - Grid layouts (`<div class="grid" markdown>`)
   - Cards (`<div class="grid cards" markdown>`)
   - Task lists interactivas (`- [ ]`)
   - Emojis apropiados para cada sección

5. **📋 Estructuras de los Reportes:**

**RESUMEN MENSUAL:**
```markdown
# Estado de Resultados - {Mes} {Año}
## Condominio Residencial Horizontal y Vertical Bosques del Café

!!! warning "🤖 Documento Generado por Inteligencia Artificial"
    **ADVERTENCIA IMPORTANTE:** Este documento ha sido generado completamente utilizando inteligencia artificial (IA) a partir del análisis de documentos PDF oficiales del condominio.
    
    **Limitaciones y Responsabilidades:**
    
    - La IA puede cometer errores en la interpretación de datos, cálculos o análisis
    - Este reporte debe ser **revisado y validado** por profesionales en contabilidad antes de tomar decisiones financieras
    - Las recomendaciones proporcionadas son sugerencias automatizadas y requieren evaluación humana especializada
    - Los usuarios deben verificar independientemente todos los datos y cálculos presentados
    - Este documento **NO sustituye** el criterio profesional ni la asesoría financiera especializada
    
    **Uso Recomendado:** Utilizar como herramienta de apoyo para análisis preliminar, siempre complementado con revisión profesional.

### 💰 Resumen Financiero del Mes
[Cifras principales, déficit/superávit del período]

### 🏠 Análisis de Ingresos
[Desglose de ingresos del mes]

### 💸 Análisis de Gastos Principales
[Categorización de gastos del mes]

### 📋 Visualización de Gastos del Mes
=== "📊 Gastos del Período"
    [Pie charts del mes]

=== "🗺️ Mapas de Gastos"
    [Treemaps del mes]

### ⚠️ Análisis Financiero
[Causas del déficit/superávit, situación actual]

### 💡 Recomendaciones del Mes
[Acciones específicas para el período]

### 💰 Estado de Cuentas por Cobrar
[Top 5 deudores principales extraídos del PDF "Documentos Pendientes - Cuentas por Cobrar" sin revelar nombres reales]

**FORMATO REQUERIDO:**
```markdown
### 🔍 Top 5 Deudores Principales

!!! warning "Documentos Pendientes al 31 de {Mes} {Año}"
    Basado en la tabla "Documentos Pendientes - Cuentas por Cobrar" del estado financiero:

| Posición | Propietario | Monto Adeudado | Estado |
|----------|-------------|----------------|---------|
| 1 | Propietario #1 | ₡{monto1} | 🔴 Crítico |
| 2 | Propietario #2 | ₡{monto2} | 🔴 Crítico |
| 3 | Propietario #3 | ₡{monto3} | 🟡 Moderado |
| 4 | Propietario #4 | ₡{monto4} | 🟡 Moderado |
| 5 | Propietario #5 | ₡{monto5} | 🟠 Alto |

### 📊 Resumen de Morosidad
**Total Top 5 Deudores:** ₡{total} 
**Distribución por Estado:**
- 🔴 **Crítico**: {cantidad} propietarios - ₡{monto_critico}
- 🟠 **Alto**: {cantidad} propietarios - ₡{monto_alto} 
- 🟡 **Moderado**: {cantidad} propietarios - ₡{monto_moderado}

**IMPORTANTE**: NO incluir referencias a "meses pendientes", "18+ meses", "antigüedad", ni períodos temporales.
Enfocarse únicamente en montos, impacto financiero y acciones de recuperación.
```

### 📊 [Ver Análisis Histórico Completo](analisis-historico-{año}.md)
```

**ANÁLISIS HISTÓRICO:**
```markdown
# Análisis Histórico - {Año}
## Evolución Financiera del Condominio Bosques del Café

!!! warning "🤖 Documento Generado por Inteligencia Artificial"
    **ADVERTENCIA IMPORTANTE:** Este análisis histórico ha sido generado completamente utilizando inteligencia artificial (IA) a partir del procesamiento de múltiples documentos PDF oficiales del condominio.
    
    **Limitaciones y Responsabilidades:**
    
    - La IA puede cometer errores en la interpretación de tendencias, proyecciones o análisis comparativo
    - Este análisis debe ser **revisado y validado** por profesionales en contabilidad y finanzas antes de tomar decisiones estratégicas
    - Las proyecciones y recomendaciones son estimaciones automatizadas que requieren evaluación humana especializada
    - Los patrones identificados pueden no reflejar completamente la realidad operativa del condominio
    - Este documento **NO sustituye** la asesoría financiera profesional ni el análisis experto
    
    **Uso Recomendado:** Herramienta de apoyo para identificar tendencias preliminares, siempre complementado con análisis profesional.

### 📈 Dashboard Financiero Principal
[4 gráficos Chart.js: jardines, servicios totales, extraordinarios, acumulados]

### ⚡ Dashboard de Servicios Públicos  
[4 gráficos Chart.js: eléctrico, agua, teléfono, comparación]

### 💰 Dashboard de Activos
[4 gráficos Chart.js: caja, cuentas por cobrar, pagos anticipados, total activo circulante]

### 🏛️ Dashboard de Pasivos y Patrimonio
[5 gráficos Chart.js: pasivo circulante, patrimonio, balance, estructura financiera, cuentas por pagar]

### 📊 Análisis por Categorías
=== "🌿 Mantenimiento Jardines"
    [Análisis detallado + datos históricos]
=== "💡 Servicio Eléctrico"
    [Gráfico individual + análisis de consumo + kWh estimado]
=== "💧 Servicio de Agua"
    [Gráfico individual + análisis per cápita + m³ estimado]
=== "📞 Servicio Telefónico"
    [Gráfico individual + análisis de estabilidad]
=== "🔄 Comparación de Servicios"
    [Gráfico comparativo + resumen de porcentajes]
=== "🚨 Gastos Extraordinarios"
    [Análisis de patrones excepcionales]
=== "👮 Vigilancia y Seguridad"
    [Análisis de gasto fijo]
=== "💵 Caja"
    [Análisis de liquidez + gráfico de flujo de caja]
=== "📋 Cuentas por Cobrar"
    [Análisis de morosidad + gráfico evolución deudas]
=== "💳 Pagos Anticipados"
    [Análisis de prepagos + gestión de amortización]
=== "📈 Activo Circulante Total"
    [Composición y balance del activo circulante]
=== "📊 Pasivo Circulante"
    [Análisis de obligaciones a corto plazo]
=== "💳 Cuentas por Pagar"
    [Análisis de proveedores + gráfico evolución obligaciones]
=== "🏦 Patrimonio"
    [Evolución patrimonial y fortaleza financiera]

### 📅 Análisis Estacional
[Patrones por épocas del año con servicios públicos detallados]

### 🔮 Proyecciones y Predicciones
[Análisis predictivo basado en tendencias de todos los servicios]
```

**ESPECIFICACIONES TÉCNICAS:**

**Chart Syntax:**
- **Pie Charts (Chart.js)**: `<canvas id="nombrePie">` dentro de `chart-container` 
- **Treemap (Mermaid)**: `treemap-beta` con jerarquía correcta  
- **Line Charts (Chart.js)**: `<canvas id="nombreChart">` dentro de `chart-container`
- **Formato valores**: números sin formatear para datos, Chart.js formatea automáticamente
- **Chart.js** proporciona leyendas automáticas, tooltips con moneda, interactividad
- **Gestión de instancias**: charts.js maneja automáticamente la creación/destrucción de gráficos
- **Navegación instantánea**: Compatible con MkDocs Material instant navigation

**Material Syntax:**
- Tabs: `=== "Título"`
- Cards: `<div class="grid cards" markdown>`
- Admonitions: `!!! tipo "Título"`
- Grids: `<div class="grid" markdown>`

**Naming Convention:**
- Archivo salida: `resumen-{mes}-{año}.md`
- Variables: {nombre_archivo}, {mes}, {año}

Mantén el formato exacto y las funciones avanzadas como en el ejemplo de "resumen-julio-2025.md".
```

## 🔧 Variables de Configuración

### Parámetros Personalizables
```yaml
# Variables del prompt
nombre_archivo: "julio"          # Nombre del PDF sin extensión
mes: "julio"                     # Mes del reporte
año: "2025"                      # Año del reporte
moneda: "₡"                      # Símbolo de moneda
entidad: "Condominio Residencial Horizontal y Vertical Bosques del Café"
```

### Categorías de Gastos Esperadas
```yaml
gastos_principales:
  - "Vigilancia y Seguridad"
  - "Mantenimiento de Jardines"
  - "Cuota de Administración"
  - "Servicios Públicos"
  - "Gastos Extraordinarios"
  - "Mantenimiento y Reparación"
  - "Seguros"
  - "Mantenimiento Piscina"
```

## 📋 Ejemplos de Uso

### Ejemplo 1: Reporte Agosto 2025
```bash
Analiza el archivo PDF llamado "agosto.pdf" del estado de resultados del agosto 2025.
[Aplicar prompt completo con las variables:
- nombre_archivo: "agosto"
- mes: "agosto" 
- año: "2025"]
```

### Ejemplo 2: Reporte Anual
```bash
Analiza el archivo PDF llamado "anual-2024.pdf" del estado de resultados del año 2024.
[Aplicar prompt completo con las variables:
- nombre_archivo: "anual-2024"
- mes: "anual"
- año: "2024"]
```

## 🔧 Actualizaciones y Correcciones Recientes

### 📊 Corrección Diagrama Cuentas por Pagar (Julio 2025)

**IMPORTANTE:** Los datos del diagrama de cuentas por pagar han sido corregidos con información oficial del Balance de Situación:

**Datos Anteriores (Incorrectos):**
```javascript
data: [3.2, 2.8, 3.5, 4.1, 3.7, 3.9, 3.4] // Millones de colones
```

**Datos Actuales (Corregidos del PDF oficial):**
```javascript
data: [10.20, 6.46, 1.60, 1.37, 9.00, 14.66, 14.78] // Millones de colones
```

**Fuente de Corrección:**

- Documento: "Resumen Histórico del Balance de Situación"
- Página 1: Tabla con datos mensuales 2025 (enero-julio)
- Fila: "Cuentas x Pagar" con valores exactos por mes

**Cambios Implementados:**

1. **Archivo actualizado**: `/docs/javascripts/charts.js` línea 936
2. **Escala ajustada**: Rango de 0-16M para visualizar correctamente la variación
3. **Configuración**: `beginAtZero: true` para mostrar el cero como base
4. **Impacto**: El gráfico ahora refleja la realidad financiera con:
   - Reducción significativa mar-abr (1.6M-1.4M) 
   - Aumento considerable jun-jul (14.7M-14.8M)

**Proceso de Validación:**

- ✅ Datos extraídos directamente del PDF oficial
- ✅ Verificados contra Balance de Situación mensual
- ✅ Escala del gráfico ajustada apropiadamente
- ✅ Tendencia financiera realista mostrada

## ✅ Checklist de Validación

Antes de finalizar el reporte, verificar:

- [ ] PDF analizado correctamente
- [ ] Datos extraídos (ingresos, gastos, resultado)
- [ ] **Tabla "Documentos Pendientes - Cuentas por Cobrar" extraída del PDF correctamente**
- [ ] **Verificar que los montos de deudores coincidan exactamente con el PDF**
- [ ] **Datos de "Cuentas x Pagar" del Balance de Situación verificados contra PDF oficial**
- [ ] **Gráfico cuentasPorPagarChart actualizado con datos reales del período**
- [ ] Archivo markdown creado con nombre correcto
**RESUMEN MENSUAL:**
- [ ] **Disclaimer de IA agregado al inicio del documento**
- [ ] 2 pie charts Chart.js del mes implementados
- [ ] 2 treemaps del mes con sintaxis `treemap-beta` correcta  
- [ ] 2 tabs implementadas (Gastos del Período, Mapas de Gastos)
- [ ] **Top 5 deudores principales extraídos del PDF sin revelar nombres (Propietario #1, #2, etc.)**
- [ ] **Análisis de impacto en flujo de caja por morosidad SIN referencias a meses pendientes**
- [ ] **Acciones recomendadas segmentadas por nivel de riesgo SIN mencionar períodos temporales específicos**
- [ ] **Estados de criticidad basados en montos, no en tiempo de morosidad**
- [ ] **NO incluir columnas de "Meses Pendientes" en las tablas**
- [ ] **NO usar términos como "18+ meses", "antigüedad", "2-3 meses" en descripciones**
- [ ] Link al análisis histórico funcional

**ANÁLISIS HISTÓRICO:**
- [ ] **Disclaimer de IA agregado al inicio del análisis histórico**
- [ ] Archivo analisis-historico-{año}.md actualizado con nuevo mes
- [ ] Dashboard Financiero Principal (4 gráficos Chart.js) implementado
- [ ] Dashboard de Servicios Públicos (4 gráficos Chart.js) implementado  
- [ ] **Dashboard de Activos (4 gráficos Chart.js) implementado** 
- [ ] **Dashboard de Pasivos y Patrimonio (5 gráficos Chart.js) implementado**
- [ ] 14+ tabs por categorías implementadas (jardines, eléctrico, agua, teléfono, comparación, extraordinarios, vigilancia, caja, cuentas por cobrar, pagos anticipados, activo circulante, pasivo circulante, cuentas por pagar, patrimonio)
- [ ] Gráficos individuales embebidos en cada tab de servicio público y financiero
- [ ] Análisis detallado con estimaciones de kWh, m³ y métricas financieras
- [ ] Admonitions con colores apropiados
- [ ] Grid system para layouts
- [ ] Cards para pie charts
- [ ] Emojis consistentes
- [ ] Recomendaciones incluidas
- [ ] Métricas calculadas correctamente

## 🎯 Resultado Esperado

**DOS archivos markdown especializados:**

**RESUMEN MENSUAL:**
1. **Analice** financieramente el período específico
2. **Visualice** datos del mes con 4 gráficos (2 pie Chart.js + 2 treemap Mermaid)
3. **Presente** información concisa usando Material for MkDocs
4. **Extraiga** datos reales de cuentas por cobrar del PDF (tabla "Documentos Pendientes")
5. **Muestre** Top 5 deudores SIN referencias temporales a meses pendientes
6. **Proporcione** recomendaciones específicas del mes
7. **Enlace** al análisis histórico para contexto completo

**TEMPLATE BASE**: Usar `resumen-julio-2025.md` como referencia exacta de formato y estructura.

**ANÁLISIS HISTÓRICO (actualizado):**
1. **Evolucione** con datos del nuevo mes agregados a todas las series
2. **Visualice** con 17 gráficos Chart.js principales + gráficos embebidos por categoría
3. **Presente** 4 dashboards especializados (financiero + servicios públicos + activos + pasivos/patrimonio)  
4. **Analice** cada servicio público individualmente con métricas específicas (kWh, m³)
5. **Analice** componentes financieros (caja, cuentas por cobrar, pagos anticipados, pasivos, cuentas por pagar, patrimonio)
6. **Compare** servicios públicos en gráfico único con múltiples datasets
7. **Proporcione** insights profundos de patrones estacionales y financieros
8. **Ofrezca** interactividad completa: tooltips con moneda, leyendas, navegación
9. **Mantenga** historial completo y proyecciones por categoría de servicio y financiera
10. **Incluya** análisis de liquidez, morosidad, gestión de proveedores, estructura financiera y balance patrimonial

## 📄 Template de Referencia

**Archivo de referencia:** `resumen-julio-2025.md`

**Este archivo debe usarse como template exacto para:**

- Estructura de secciones y subsecciones
- Formato de tablas de cuentas por cobrar (Top 5 sin columna de meses)
- Estilo de admonitions y elementos Material
- Organización de visualizaciones con tabs
- Recomendaciones por segmentos de riesgo
- Integración de charts Chart.js y treemaps Mermaid

**IMPORTANTE:** 

- Siempre extraer datos reales del PDF, nunca inventar números
- **CRÍTICO**: Verificar datos de Balance de Situación contra gráficos existentes en charts.js
- **VALIDACIÓN**: Contrastar "Cuentas x Pagar" del PDF con variable `cuentasPorPagarChart`
- Mantener anonimato usando "Propietario #1, #2, etc."
- NO incluir referencias temporales en sección de morosidad
- Usar montos y criticidad financiera como base de clasificación

### 🚨 Protocolo de Validación de Gráficos

**Antes de generar cada reporte:**

1. **Verificar charts.js**: Comprobar si los datos en `/docs/javascripts/charts.js` coinciden con el PDF
2. **Extraer del Balance**: Usar tabla "Resumen Histórico del Balance de Situación" para:
   - Cuentas por Pagar
   - Cuentas por Cobrar  
   - Pasivo Circulante
   - Activo Circulante
3. **Corregir discrepancias**: Actualizar arrays de datos en charts.js antes de generar reportes
4. **Actualizar escalas**: Ajustar min/max de gráficos según nuevos rangos de datos

---

*Template actualizado para generar reportes automatizados del Condominio Bosques del Café*
*Basado en resumen-julio-2025.md como template de referencia*