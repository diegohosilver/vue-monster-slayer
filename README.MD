# vue-monster-slayer
### POC de un rpg por acciones
Este repositorio contiene código fuente realizado en [vuejs 2.x](https://vuejs.org/v2/guide/)

#### Descripción del proyecto
**vue-monster-slayer** (**VMS** a partir de ahora para simplificar) es un POC para profundizar mis conocimientos en `vuejs`. Es una prueba piloto para familiarizarme con la tecnología.

#### Personajes
El juego está desarrollado para 1 jugador el cual se enfrentará al monstruo. Ambos comienzan con **100** puntos de vida.

#### Mecánicas
El objetivo del juego es vencer al monstruo en un combate a muerte. Para dicho objetivo contamos con 3 acciones:
1. `Attack`: un ataque *básico* que puede inflingir entre **3** y **10** de daño por ataque.
2. `Special attack`: un ataque *especial* que inflinge el mismo daño que `Attack` pero multiplicado por **2**.
3. `Heal`: Una pequeña curación la cual nos restaura nuestro daño máximo de `Attack` en puntos de vida.

Por cada acción que realicemos (cualquiera de las 3 anteriores), el monstruo nos inflingirá entre **5** y **12** de daño.

#### Comentarios finales
* Todas las estadísticas (`damage`, `health` etc) son configurables desde `data`.
* A medida que vaya avanzando en conocimientos, iré agregando más *features*.
